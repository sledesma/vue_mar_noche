import axios from 'axios'

export default axios.create({
  headers: {
    Authorization: "hola",
    'Content-type': 'application/json'
  }
})

export const API_STATS = "http://localhost:3001/api/stats"
