import axios from 'axios'
import useSWRV from 'swrv'

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
})

const fetcher = async (url) => {
  const res = await API.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return res.data
}

export function useResult(url) {
  return useSWRV(url, fetcher)
}
