export interface Issue {
  id: number;
  name: string;
  description: string;
  assignee: string;
  status: number;
}

export interface User {
  userName: string;
  email: string;
  id: string;
}