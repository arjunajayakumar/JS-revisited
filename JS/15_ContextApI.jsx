import { createContext, useState } from "react";
const userContext = createContext(null);

export default function userProvider({ children }) {
  const [user, setUser] = useState({ id: 1, user: "Arjun", role: "Admin" });

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}


export default function App() {
    <userProvider>
        <App />
    </userProvider>

}