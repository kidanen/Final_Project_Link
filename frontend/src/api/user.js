export async function getUser() {
  const API = import.meta.env.VITE_API_URL;

  const res = await fetch(`${API}/api/v1/user/login`, {
  method: "POST",
  credentials: "include",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});


  return res.json();
}
