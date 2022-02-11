import axios from 'axios';
class ServerAPI {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/'
    });
    this.Key = '5d1b6b9deab390416a61a29633203a86';
  }
}

/**
 * axios client setup with baseURL and OpenWeatherMap API key
 */
const api = new ServerAPI();
export default api;
