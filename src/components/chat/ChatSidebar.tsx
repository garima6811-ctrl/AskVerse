import { useState } from "react";
import { Plus, MessageSquare, MoreVertical, ChevronRight, ChevronDown, Folder as FolderIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Conversation, Folder } from "@/types/chat";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ChatSidebarProps {
  conversations: Conversation[];
  folders: Folder[];
  activeConversationId: string | null;
  onSelectConversation: (id: string) => void;
  onNewConversation: () => void;
  onDeleteConversation: (id: string) => void;
  onRenameConversation: (id: string, title: string) => void;
  onMoveConversation: (id: string, folderId: string | null) => void;
  onCreateFolder: (name: string) => void;
  onDeleteFolder: (id: string) => void;
  onRenameFolder: (id: string, name: string) => void;
  collapsed: boolean;
  userName?: string;
}

export function ChatSidebar({
  conversations,
  folders,
  activeConversationId,
  onSelectConversation,
  onNewConversation,
  onDeleteConversation,
  onRenameConversation,
  onMoveConversation,
  onCreateFolder,
  onDeleteFolder,
  onRenameFolder,
  collapsed,
  userName = "User",
}: ChatSidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(folders.map(f => f.id)));
  const [renameDialog, setRenameDialog] = useState<{ id: string; title: string } | null>(null);
  const [renameFolderDialog, setRenameFolderDialog] = useState<{ id: string; name: string } | null>(null);
  const [newFolderDialog, setNewFolderDialog] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(folderId)) {
        next.delete(folderId);
      } else {
        next.add(folderId);
      }
      return next;
    });
  };

  const handleRename = () => {
    if (renameDialog) {
      onRenameConversation(renameDialog.id, renameDialog.title);
      setRenameDialog(null);
    }
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      onCreateFolder(newFolderName.trim());
      setNewFolderName("");
      setNewFolderDialog(false);
    }
  };

  const handleRenameFolder = () => {
    if (renameFolderDialog) {
      onRenameFolder(renameFolderDialog.id, renameFolderDialog.name);
      setRenameFolderDialog(null);
    }
  };

  const globalConversations = conversations.filter((c) => !c.folderId);

  const ConversationItem = ({ conversation }: { conversation: Conversation }) => (
    <div
      className={cn(
        "group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors",
        activeConversationId === conversation.id
          ? "bg-accent text-accent-foreground"
          : "hover:bg-accent/50"
      )}
      onClick={() => onSelectConversation(conversation.id)}
    >
      <MessageSquare className="w-4 h-4 flex-shrink-0" />
      {!collapsed && (
        <>
          <span className="flex-1 truncate text-sm">{conversation.title}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setRenameDialog({ id: conversation.id, title: conversation.title })}>
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMoveConversation(conversation.id, null)}>
                Publish
              </DropdownMenuItem>
              {folders.length > 0 && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Move to Folder
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      {folders.map((folder) => (
                        <DropdownMenuItem
                          key={folder.id}
                          onClick={() => onMoveConversation(conversation.id, folder.id)}
                        >
                          {folder.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => onDeleteConversation(conversation.id)}
                className="text-destructive"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </div>
  );

  return (
    <>
      <div
        className={cn(
          "border-r border-border bg-background flex flex-col transition-all duration-300 h-full",
          collapsed ? "w-0 md:w-16" : "w-64 md:w-72"
        )}
      >
        <div className="p-3 sm:p-4 border-b border-border">
          <Button
            onClick={onNewConversation}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size={collapsed ? "icon" : "default"}
          >
            <Plus className="w-4 h-4" />
            {!collapsed && <span>New Ask</span>}
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2 space-y-4">
            {/* Folders Section */}
            {!collapsed && (
              <div>
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-xs font-semibold text-muted-foreground">FOLDERS</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-6 h-6"
                    onClick={() => setNewFolderDialog(true)}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
                <div className="space-y-1">
                  {folders.map((folder) => {
                    const folderConversations = conversations.filter((c) => c.folderId === folder.id);
                    const isExpanded = expandedFolders.has(folder.id);

                    return (
                      <div key={folder.id}>
                        <div
                          className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-accent/50 group"
                          onClick={() => toggleFolder(folder.id)}
                        >
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="w-4 h-4 flex-shrink-0" />
                          )}
                          <FolderIcon className="w-4 h-4 flex-shrink-0" />
                          <span className="flex-1 truncate text-sm font-medium">{folder.name}</span>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-6 h-6 opacity-0 group-hover:opacity-100"
                              >
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => setRenameFolderDialog({ id: folder.id, name: folder.name })}
                              >
                                Rename
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => onDeleteFolder(folder.id)}
                                className="text-destructive"
                              >
                                Delete Folder
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {isExpanded && (
                          <div className="ml-6 space-y-1">
                            {folderConversations.map((conv) => (
                              <ConversationItem key={conv.id} conversation={conv} />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Asks Section */}
            {!collapsed && (
              <div>
                <div className="px-3 py-2">
                  <span className="text-xs font-semibold text-muted-foreground">ASKS</span>
                </div>
                <div className="space-y-1">
                  {globalConversations.map((conv) => (
                    <ConversationItem key={conv.id} conversation={conv} />
                  ))}
                </div>
              </div>
            )}

            {/* Collapsed view - show all conversations */}
            {collapsed && (
              <div className="space-y-1">
                {conversations.map((conv) => (
                  <ConversationItem key={conv.id} conversation={conv} />
                ))}
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t border-border p-3 sm:p-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
            </div>
            {!collapsed && <span className="text-xs sm:text-sm font-medium truncate">{userName}</span>}
          </div>
        </div>
      </div>

      {/* Rename Dialog */}
      <Dialog open={!!renameDialog} onOpenChange={() => setRenameDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Conversation</DialogTitle>
          </DialogHeader>
          <Input
            value={renameDialog?.title || ""}
            onChange={(e) => setRenameDialog(renameDialog ? { ...renameDialog, title: e.target.value } : null)}
            placeholder="Enter new title"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setRenameDialog(null)}>
              Cancel
            </Button>
            <Button onClick={handleRename}>Rename</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New Folder Dialog */}
      <Dialog open={newFolderDialog} onOpenChange={setNewFolderDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Folder</DialogTitle>
          </DialogHeader>
          <Input
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="Folder name"
            onKeyDown={(e) => e.key === "Enter" && handleCreateFolder()}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewFolderDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateFolder}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Rename Folder Dialog */}
      <Dialog open={!!renameFolderDialog} onOpenChange={() => setRenameFolderDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Folder</DialogTitle>
          </DialogHeader>
          <Input
            value={renameFolderDialog?.name || ""}
            onChange={(e) => setRenameFolderDialog(renameFolderDialog ? { ...renameFolderDialog, name: e.target.value } : null)}
            placeholder="Enter new folder name"
            onKeyDown={(e) => e.key === "Enter" && handleRenameFolder()}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setRenameFolderDialog(null)}>
              Cancel
            </Button>
            <Button onClick={handleRenameFolder}>Rename</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
