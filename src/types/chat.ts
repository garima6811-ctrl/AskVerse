export interface Source {
  title: string;
  url: string;
  type: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  tags?: string[];
  sources?: Source[];
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  folderId?: string | null;
}

export interface Folder {
  id: string;
  name: string;
  createdAt: Date;
}

export interface Suggestion {
  id: string;
  text: string;
  icon?: string;
}
