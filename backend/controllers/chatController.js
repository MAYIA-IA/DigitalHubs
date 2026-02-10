import { generarRespuestaIA } from '../services/geminiService.js';

export async function enviarMensaje(req, res) {
  try {
    const { message, departamento } = req.body;
    console.log(' BODY RECIBIDO:', req.body);
    
    if (!message) {
      return res.status(400).json({ error: 'El mensaje es requerido' });
    }

    console.log(` Mensaje recibido: "${message}"`);
    console.log(` Departamento: ${departamento || 'general'}`);

    // Generar respuesta con Gemini (sin base de datos)
    const respuesta = await generarRespuestaIA(message, null, departamento);

    res.json({
      success: true,
      response: respuesta,
      timestamp: new Date()
    });

  } catch (error) {
    console.error(' Error en chat:', error);
    res.status(500).json({
      success: false,
      error: 'Error al procesar el mensaje',
      details: error.message
    });
  }
}