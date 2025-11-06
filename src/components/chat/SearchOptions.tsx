import { useState } from "react";
import { Globe, GraduationCap, Share2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";

export type SearchSource = "web" | "academic" | "social" | "finance";

interface SearchOptionsProps {
  selectedSources: SearchSource[];
  onSourcesChange: (sources: SearchSource[]) => void;
}

const searchSources = [
  {
    id: "web" as SearchSource,
    label: "Web",
    description: "Search across the entire Internet",
    icon: Globe,
  },
  {
    id: "academic" as SearchSource,
    label: "Academic",
    description: "Search academic papers",
    icon: GraduationCap,
  },
  {
    id: "social" as SearchSource,
    label: "Social",
    description: "Discussions and opinions",
    icon: Share2,
  },
  {
    id: "finance" as SearchSource,
    label: "Finance",
    description: "Search SEC filings",
    icon: DollarSign,
  },
];

export function SearchOptions({ selectedSources, onSourcesChange }: SearchOptionsProps) {
  const [open, setOpen] = useState(false);

  const toggleSource = (sourceId: SearchSource) => {
    if (selectedSources.includes(sourceId)) {
      onSourcesChange(selectedSources.filter((s) => s !== sourceId));
    } else {
      onSourcesChange([...selectedSources, sourceId]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <Globe className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-popover z-50" align="start">
        <div className="space-y-3">
          {searchSources.map((source) => {
            const Icon = source.icon;
            const isSelected = selectedSources.includes(source.id);
            
            return (
              <div
                key={source.id}
                className="flex items-start gap-3 py-2"
              >
                <Icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-foreground">{source.label}</p>
                  <p className="text-xs text-muted-foreground">{source.description}</p>
                </div>
                <Switch
                  checked={isSelected}
                  onCheckedChange={() => toggleSource(source.id)}
                />
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
