import axios from 'axios';

const URL_BASE = 'http://localhost:8100/api/';

class ServerAPI {
  constructor() {
    this.client = axios.create({
      baseURL: URL_BASE,
      withCredentials: true,
    });
  }
}

const api = new ServerAPI();
export default api;
