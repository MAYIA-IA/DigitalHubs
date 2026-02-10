// Servicio del Chatbot
import apiService from './api.js';
import CONFIG from '../config/constants.js';

class ChatService {
  constructor() {
    this.messages = [
      { 
        type: 'bot', 
        text: CONFIG.CHATBOT_CONFIG?.welcomeMessage || '¡Hola!  ¿En qué puedo ayudarte?' 
      }
    ];
    this.isLoading = false;
  }

  // Obtener todos los mensajes
  getMessages() {
    return this.messages;
  }

  // Agregar un mensaje del usuario
  addUserMessage(text) {
    const message = { type: 'user', text };
    this.messages.push(message);
    return message;
  }

  // Agregar un mensaje del bot
  addBotMessage(text) {
    const message = { type: 'bot', text };
    this.messages.push(message);
    return message;
  }

  // Enviar mensaje y obtener respuesta
  async sendMessage(userMessage, departamento = null) {
    try {
      this.isLoading = true;
      
      // Agregar mensaje del usuario
      this.addUserMessage(userMessage);
      
      // Hacer petición al backend
      const response = await apiService.sendChatMessage(userMessage, departamento);
      
      // Agregar respuesta del bot
      const botResponse = response.response || response.respuesta || 'Lo siento, no recibí una respuesta.';
      this.addBotMessage(botResponse);
      
      this.isLoading = false;
      return botResponse;
      
    } catch (error) {
      console.error('Error enviando mensaje:', error);
      this.isLoading = false;
      
      const errorMessage = CONFIG.CHATBOT_CONFIG?.errorMessage || 
        'Lo siento, hubo un error al procesar tu mensaje.';
      this.addBotMessage(errorMessage);
      
      throw error;
    }
  }

  // Limpiar historial de mensajes
  clearMessages() {
    this.messages = [
      { 
        type: 'bot', 
        text: CONFIG.CHATBOT_CONFIG?.welcomeMessage || '¡Hola!  ¿En qué puedo ayudarte?' 
      }
    ];
  }

  // Estado de carga
  getLoadingState() {
    return this.isLoading;
  }
}

// Exportar instancia única (Singleton)
const chatService = new ChatService();
export default chatService;