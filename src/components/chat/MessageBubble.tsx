import { Bot, User, FileText, File, Presentation, Image, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Message } from "@/types/chat";
import { cn } from "@/lib/utils";

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return FileText;
    case 'ppt':
      return Presentation;
    case 'image':
      return Image;
    case 'video':
      return Video;
    default:
      return File;
  }
};

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        "flex gap-4 p-6 transition-colors",
        isUser ? "bg-background flex-row-reverse" : "bg-muted/30"
      )}
    >
      <div className={cn(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
        isUser ? "bg-chat-user text-primary-foreground" : "bg-chat-assistant text-foreground"
      )}>
        {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </div>

      <div className={cn("flex-1 space-y-2", isUser && "flex flex-col items-end")}>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground text-[15px]">
            {isUser ? 'You' : 'AskVerse'}
          </span>
          <span className="text-xs text-muted-foreground font-normal">
            {message.timestamp.toLocaleTimeString()}
          </span>
        </div>

        <div className={cn(
          "text-foreground whitespace-pre-wrap leading-relaxed text-[15px] font-normal",
          isUser && "text-right"
        )}>
          {message.content}
        </div>

        {message.sources && message.sources.length > 0 && (
          <div className="mt-4 p-3 bg-background/50 rounded-lg border border-border w-full">
            <p className="text-xs font-semibold text-muted-foreground mb-2">Sources:</p>
            <div className="space-y-2">
              {message.sources.map((source, index) => {
                const Icon = getFileIcon(source.type);
                return (
                  <div key={index} className="flex items-start gap-2 text-xs">
                    <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <a 
                        href={source.url} 
                        className="text-primary hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.title}
                      </a>
                      <span className="text-muted-foreground ml-2">({source.type.toUpperCase()})</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {message.tags && message.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
