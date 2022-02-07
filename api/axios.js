import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/';

class ServerAPI {
  constructor() {
    this.client = axios.create({
      baseURL
    });
    this.Key = '5d1b6b9deab390416a61a29633203a86';
  }
}

const api = new ServerAPI();
export default api;
