import { useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageBubble } from "./MessageBubble";
import { Message } from "@/types/chat";
import { Loader2 } from "lucide-react";

interface ChatAreaProps {
  messages: Message[];
  isLoading?: boolean;
}

export function ChatArea({ messages, isLoading }: ChatAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ScrollArea className="flex-1 bg-background">
      <div ref={scrollRef} className="h-full">
        <div className="divide-y divide-border">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex gap-4 p-6 bg-muted/30">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chat-assistant flex items-center justify-center">
                <Loader2 className="w-5 h-5 animate-spin" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-foreground">AskVerse</span>
                <div className="mt-2 text-muted-foreground">Thinking...</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
