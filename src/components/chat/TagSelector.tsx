import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Suggestion } from "@/types/chat";

interface TagSelectorProps {
  availableTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  suggestions: Suggestion[];
  onSuggestionClick: (text: string) => void;
}

export function TagSelector({
  availableTags,
  selectedTags,
  onTagToggle,
  suggestions,
  onSuggestionClick,
}: TagSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4">
      {/* Tag Selection */}
      <div className="mb-4">
        <p className="text-xs sm:text-sm text-muted-foreground mb-3">Select contexts:</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          {availableTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer transition-all hover:scale-105 text-xs sm:text-sm"
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Dynamic Suggestions */}
      {suggestions.length > 0 && (
        <div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3">Suggested asks:</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion.id}
                variant="outline"
                size="sm"
                onClick={() => onSuggestionClick(suggestion.text)}
                className="bg-suggestion hover:bg-suggestion-hover transition-colors text-xs sm:text-sm"
              >
                {suggestion.text}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
