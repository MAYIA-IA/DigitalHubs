// Servicio centralizado para todas las llamadas al backend
import CONFIG from '../config/constants.js';

class ApiService {
  constructor() {
    this.baseURL = CONFIG.API.BASE_URL;
  }

  // Método genérico para hacer peticiones
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Métodos específicos para cada endpoint
  async sendChatMessage(message, departamento = null) {
    return this.request(CONFIG.API.ENDPOINTS.CHAT, {
      method: 'POST',
      body: JSON.stringify({ 
        message, 
        departamento 
      })
    });
  }

  async getDepartamentos() {
    return this.request(CONFIG.API.ENDPOINTS.DEPARTAMENTOS, {
      method: 'GET'
    });
  }

  async getEstadisticas() {
    return this.request(CONFIG.API.ENDPOINTS.STATS, {
      method: 'GET'
    });
  }
}

// Exportar instancia única (Singleton)
const apiService = new ApiService();
export default apiService;