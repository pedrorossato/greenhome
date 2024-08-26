export interface User {
  id: number;
  email: string;
  name: string;
  roles: string[];
  token: string;
  image: string;
}

export interface Session {
  user: User;
}
