export async function getUser() {
  const API = import.meta.env.VITE_API_URL;

  const res = await fetch(`${API}/api/v1/user/getuser`, {
    method: "GET",
    credentials: "include",
  });

  return res.json();
}
