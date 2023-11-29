export interface Todo {
  id: string;
  title: string;
  content: string;
  realized: boolean;
}

export interface TodoRequest {
  title: string;
  content: string;
}
