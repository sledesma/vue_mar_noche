import axios from 'axios'

export default axios.create({
  headers: {
    Authorization: "hola"
  }
})

export const API_STATS = "http://localhost:3001/api/stats"
