import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { initGeminiClient } from './config/gemini.js';
import chatRoutes from './routes/chatRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0'; 

// Middleware
app.use(
  cors({
    origin: [
      'http://localhost:5173', 
      'http://localhost:8000', 
      'http://127.0.0.1:8000',
      'http://localhost:5500',
      'http://127.0.0.1:5500',
      'https://digital-hubs.vercel.app',  
      'https://hubdigital.com.mx',       
      'https://www.hubdigital.com.mx'    
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'HubDigital Backend running' });
});

// Iniciar servidor
async function startServer() {
  try {
    console.log(' Iniciando servidor...\n');
    
    // Verificar API Key
    if (!process.env.GEMINI_API_KEY) {
      throw new Error(' GEMINI_API_KEY no está configurada');
    }
    
    console.log(' GEMINI_API_KEY encontrada');
    
    // Inicializar Gemini
    initGeminiClient();
    
    app.listen(PORT, HOST, () => {
      console.log(`\nServidor corriendo en puerto ${PORT}`);
      console.log(`API disponible en /api`);
      console.log(`Health check: /health`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error.message);
    process.exit(1);
  }
}

startServer();