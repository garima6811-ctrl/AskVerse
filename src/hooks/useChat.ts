import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Message, Conversation, Suggestion, Folder } from "@/types/chat";
import { getDomainSuggestions, searchKnowledgeBase } from "@/data/knowledgeBase";
import { findBestAnswer } from "@/data/trainingData";

// Mock API calls - replace with real API later
const mockConversations: Conversation[] = [
  {
    id: "1",
    title: "Introduction to AI",
    messages: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    folderId: null,
  },
];

const mockFolders: Folder[] = [
  { id: "1", name: "Work", createdAt: new Date() },
  { id: "2", name: "Personal", createdAt: new Date() },
];

export function useChat(selectedTags: string[] = []) {
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [dynamicSuggestions, setDynamicSuggestions] = useState<Suggestion[]>([]);
  const queryClient = useQueryClient();

  useEffect(() => {
    const suggestions = getDomainSuggestions(selectedTags);
    setDynamicSuggestions(
      suggestions.map((text, index) => ({ id: `suggestion-${index}`, text }))
    );
  }, [selectedTags]);

  const { data: conversations = [] } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => mockConversations,
  });

  const { data: folders = [] } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => mockFolders,
  });

  const activeConversation = conversations.find(
    (c) => c.id === activeConversationId
  );

  const sendMessageMutation = useMutation({
    mutationFn: async ({ content, tags }: { content: string; tags: string[] }) => {
      // Simulate API call with realistic delay
      await new Promise((resolve) => setTimeout(resolve, 1200 + Math.random() * 800));
      
      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content,
        tags,
        timestamp: new Date(),
      };

      // Try to find a trained answer first
      const trainedAnswer = findBestAnswer(content, tags);
      
      // Search knowledge base for relevant sources
      const sources = searchKnowledgeBase(content, tags);
      
      let responseContent = "";
      let responseSources = sources.map(s => ({
        title: s.title,
        url: s.url,
        type: s.type,
      }));

      if (trainedAnswer) {
        // Use the trained answer
        responseContent = trainedAnswer.answer;
        
        // Add additional context if we have relevant sources
        if (sources.length > 0 && !trainedAnswer.sourceIds.some(id => sources.find(s => s.id === id))) {
          const additionalSources = sources.filter(s => !trainedAnswer.sourceIds.includes(s.id));
          if (additionalSources.length > 0) {
            responseContent += `\n\nFor more details, you may also refer to: ${additionalSources.map(s => s.title).join(", ")}.`;
            responseSources = [
              ...responseSources,
              ...additionalSources.slice(0, 2).map(s => ({
                title: s.title,
                url: s.url,
                type: s.type,
              }))
            ];
          }
        }
      } else if (sources.length > 0) {
        // Generate answer from knowledge base sources
        const primarySource = sources[0];
        const secondaryContext = sources.slice(1).map(s => s.title).join(", ");
        
        responseContent = `Based on our internal documentation, ${primarySource.content}`;
        
        if (sources.length > 1) {
          responseContent += `\n\nRelated resources that may help: ${secondaryContext}.`;
        }
      } else {
        // No direct match - provide helpful guidance
        const suggestedTags = tags.length === 0 
          ? "Try selecting relevant domain tags (Legal, Processing, Hosting, Development, Deployment, Security, Compliance, or Analytics)"
          : `I searched our ${tags.join(", ")} documentation but couldn't find a specific match`;
        
        responseContent = `I couldn't find specific information for that question in our knowledge base. ${suggestedTags}. You could also try rephrasing your question or asking about related topics.`;
        responseSources = [];
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
        sources: responseSources.length > 0 ? responseSources.slice(0, 3) : undefined,
      };

      return { userMessage, assistantMessage };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["conversations"], (old: Conversation[] = []) => {
        return old.map((conv) => {
          if (conv.id === activeConversationId) {
            return {
              ...conv,
              messages: [...conv.messages, data.userMessage, data.assistantMessage],
              updatedAt: new Date(),
            };
          }
          return conv;
        });
      });
    },
  });

  const createConversation = () => {
    const newConv: Conversation = {
      id: Date.now().toString(),
      title: "New Conversation",
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    queryClient.setQueryData(["conversations"], (old: Conversation[] = []) => [
      ...old,
      newConv,
    ]);
    setActiveConversationId(newConv.id);
  };

  const deleteConversation = (id: string) => {
    queryClient.setQueryData(["conversations"], (old: Conversation[] = []) =>
      old.filter((c) => c.id !== id)
    );
    if (activeConversationId === id) {
      setActiveConversationId(null);
    }
  };

  const renameConversation = (id: string, newTitle: string) => {
    queryClient.setQueryData(["conversations"], (old: Conversation[] = []) =>
      old.map((c) => (c.id === id ? { ...c, title: newTitle } : c))
    );
  };

  const moveConversation = (id: string, folderId: string | null) => {
    queryClient.setQueryData(["conversations"], (old: Conversation[] = []) =>
      old.map((c) => (c.id === id ? { ...c, folderId } : c))
    );
  };

  const createFolder = (name: string) => {
    const newFolder: Folder = {
      id: Date.now().toString(),
      name,
      createdAt: new Date(),
    };
    queryClient.setQueryData(["folders"], (old: Folder[] = []) => [...old, newFolder]);
  };

  const deleteFolder = (id: string) => {
    queryClient.setQueryData(["folders"], (old: Folder[] = []) =>
      old.filter((f) => f.id !== id)
    );
    // Move conversations in deleted folder to global
    queryClient.setQueryData(["conversations"], (old: Conversation[] = []) =>
      old.map((c) => (c.folderId === id ? { ...c, folderId: null } : c))
    );
  };

  const renameFolder = (id: string, newName: string) => {
    queryClient.setQueryData(["folders"], (old: Folder[] = []) =>
      old.map((f) => (f.id === id ? { ...f, name: newName } : f))
    );
  };

  return {
    conversations,
    folders,
    activeConversation,
    activeConversationId,
    suggestions: dynamicSuggestions,
    setActiveConversationId,
    sendMessage: sendMessageMutation.mutate,
    isLoading: sendMessageMutation.isPending,
    createConversation,
    deleteConversation,
    renameConversation,
    moveConversation,
    createFolder,
    deleteFolder,
    renameFolder,
  };
}
