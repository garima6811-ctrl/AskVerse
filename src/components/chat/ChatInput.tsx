import { useState } from "react";
import { Send, Paperclip, Mic, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Suggestion } from "@/types/chat";
import { SearchOptions, SearchSource } from "./SearchOptions";

interface ChatInputProps {
  onSendMessage: (content: string, tags: string[]) => void;
  suggestions: Suggestion[];
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, suggestions, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [searchSources, setSearchSources] = useState<SearchSource[]>(["web"]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSendMessage(input.trim(), tags);
    setInput("");
    setTags([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 pb-4 sm:pb-6">
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer text-xs"
              onClick={() => removeTag(tag)}
            >
              {tag} ×
            </Badge>
          ))}
        </div>
      )}

      <div className="relative bg-background border border-border/60 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 p-2.5 sm:p-3">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your asks…"
          disabled={disabled}
          className="resize-none min-h-[45px] sm:min-h-[50px] border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-[15px] font-normal leading-relaxed"
          rows={1}
        />
        
        <div className="flex items-center justify-between mt-1 pt-1.5 sm:pt-2 border-t border-border/40">
          <div className="flex items-center gap-0.5 sm:gap-1">
            <SearchOptions
              selectedSources={searchSources}
              onSourcesChange={setSearchSources}
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex"
            >
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-0.5 sm:gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex"
              onClick={() => addTag("general")}
            >
              <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex"
            >
              <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={disabled || !input.trim()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 w-8 sm:h-9 sm:w-9"
              size="icon"
            >
              <Send className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
