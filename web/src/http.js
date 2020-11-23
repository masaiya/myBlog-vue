/* eslint-disable */
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 20 * 1000, // Timeout
})

export default http;