import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function useQuestions(url) {
  const res = await API.get(url, {})

  return res.data
}

export async function usePost(url, body) {
  const res = await API.post(url, body)

  return res
}
