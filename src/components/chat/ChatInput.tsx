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
    <div className="w-full max-w-4xl mx-auto px-4 pb-6">
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer"
              onClick={() => removeTag(tag)}
            >
              {tag} ×
            </Badge>
          ))}
        </div>
      )}

      <div className="relative bg-background border border-border/60 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 p-4">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your asks…"
          disabled={disabled}
          className="resize-none min-h-[80px] border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-[15px] font-normal leading-relaxed"
          rows={2}
        />
        
        <div className="flex items-center justify-between mt-2 pt-3 border-t border-border">
          <div className="flex items-center gap-1">
            <SearchOptions
              selectedSources={searchSources}
              onSourcesChange={setSearchSources}
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <Cpu className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => addTag("general")}
            >
              <Paperclip className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mic className="w-5 h-5" />
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={disabled || !input.trim()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground ml-1"
              size="icon"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
