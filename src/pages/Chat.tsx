import { useState, useEffect } from "react";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatArea } from "@/components/chat/ChatArea";
import { ChatInput } from "@/components/chat/ChatInput";
import { TagSelector } from "@/components/chat/TagSelector";
import { useChat } from "@/hooks/useChat";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const AVAILABLE_TAGS = [
  "CASE",
  "CASE Billing",
  "Finance",
  "Salesforce",
  "DEFS",
  "Ediscovery",
  "Managed Review",
  "Cyber Review",
  "Datamart Tech",
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
        userName={user?.name?.match(/^[A-Za-z]+/)?.[0] || user?.name || "User"}
      />
      
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Overlay for sidebar */}
        {!sidebarCollapsed && (
          <div 
            className="fixed inset-0 bg-black/50 z-10 md:hidden"
            onClick={() => setSidebarCollapsed(true)}
          />
        )}
        
        <div className={cn(
          "absolute md:relative h-full z-20 transition-transform duration-300",
          sidebarCollapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"
        )}>
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
            userName={user?.name?.match(/^[A-Za-z]+/)?.[0] || user?.name || "User"}
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          {(!activeConversation || activeConversation.messages.length === 0) ? (
            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
              <div className="w-full max-w-4xl space-y-6 sm:space-y-8">
                <div className="text-center space-y-2 mb-8 sm:mb-12">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                    Hi, {user?.name?.match(/^[A-Za-z]+/)?.[0] || user?.name?.split(' ')[0] || "User"}! How can we help?
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
