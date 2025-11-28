import { useEffect, useState } from "react";
import { getUser } from "../api/user";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.error);
  }, []);

  if (!user) return <div>Loading...</div>;

  return <div>Welcome, {user.name}</div>;
}
