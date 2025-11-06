import { useState, useEffect } from "react";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatArea } from "@/components/chat/ChatArea";
import { ChatInput } from "@/components/chat/ChatInput";
import { TagSelector } from "@/components/chat/TagSelector";
import { useChat } from "@/hooks/useChat";
import { useAuth } from "@/contexts/AuthContext";

const AVAILABLE_TAGS = [
  "Legal",
  "Processing",
  "Hosting",
  "Development",
  "Deployment",
  "Security",
  "Compliance",
  "Analytics",
  "Review",
  "DOC",
  "ICE",
  "Sightline",
  "ServiceNow",
];

export default function Chat() {
  const { user } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved ? JSON.parse(saved) : false;
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const {
    conversations,
    folders,
    activeConversation,
    activeConversationId,
    suggestions,
    setActiveConversationId,
    sendMessage,
    isLoading,
    createConversation,
    deleteConversation,
    renameConversation,
    moveConversation,
    createFolder,
    deleteFolder,
    renameFolder,
  } = useChat(selectedTags);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSuggestionClick = (text: string) => {
    if (!activeConversationId) {
      createConversation();
    }
    sendMessage({ content: text, tags: selectedTags });
  };

  const handleSendMessage = (content: string, tags: string[]) => {
    if (!activeConversationId) {
      createConversation();
    }
    sendMessage({ content, tags: [...selectedTags, ...tags] });
  };

  return (
    <div className="h-screen w-full flex flex-col bg-background">
      <ChatHeader
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        userName={user?.name || "User"}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <ChatSidebar
          conversations={conversations}
          folders={folders}
          activeConversationId={activeConversationId}
          onSelectConversation={setActiveConversationId}
          onNewConversation={createConversation}
          onDeleteConversation={deleteConversation}
          onRenameConversation={renameConversation}
          onMoveConversation={moveConversation}
          onCreateFolder={createFolder}
          onDeleteFolder={deleteFolder}
          onRenameFolder={renameFolder}
          collapsed={sidebarCollapsed}
          userName={user?.name || "User"}
        />
        
        <div className="flex-1 flex flex-col">
          {(!activeConversation || activeConversation.messages.length === 0) ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
              <div className="w-full max-w-4xl space-y-8">
                <div className="text-center space-y-2 mb-12">
                  <h1 className="text-5xl font-display font-medium text-foreground tracking-tight leading-tight">
                    Hi, {user?.name?.split(' ')[0] || "User"}! How can we help?
                  </h1>
                </div>
                
                <ChatInput
                  onSendMessage={handleSendMessage}
                  suggestions={[]}
                  disabled={isLoading}
                />

                <TagSelector
                  availableTags={AVAILABLE_TAGS}
                  selectedTags={selectedTags}
                  onTagToggle={handleTagToggle}
                  suggestions={suggestions}
                  onSuggestionClick={handleSuggestionClick}
                />
              </div>
            </div>
          ) : (
            <>
              <ChatArea
                messages={activeConversation.messages}
                isLoading={isLoading}
              />
              
              <ChatInput
                onSendMessage={handleSendMessage}
                suggestions={[]}
                disabled={isLoading}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
