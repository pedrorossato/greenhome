import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
  user: User | null;
  authenticate: (email: string, password: string) => Promise<boolean>;
  unauthenticate: () => void;
}


const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;