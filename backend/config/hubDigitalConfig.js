// config/hubDigitalConfig.js
// Configuración del HUB Digital Mérida - Yucatán

export const HUB_CONFIG = {
  // Información básica
  nombre: 'HUB Digital Mérida',
  nombreCompleto: 'HUB Digital Mérida - Transformación Digital Yucatán',
  ubicacion: 'Mérida, Yucatán, México',
  eslogan: 'Digitaliza, Protege y Escala',
  descripcion: 'El Hub de Digitalización Acelerada de Yucatán',

  // Propuesta de valor
  propuestaValor: 'Un ecosistema digital para operar los datos críticos del estado en un Centro de Datos, con Ciberseguridad (SOC 360), Nube Soberana e Inteligencia Artificial.',

  // Secciones del sitio
  secciones: {
    1: { id: 'inicio', nombre: 'Inicio', url: '#inicio' },
    2: { id: 'nosotros', nombre: 'Nosotros', url: '#nosotros' },
    3: { id: 'espacios', nombre: 'Espacios/Servicios', url: '#espacios' },
    4: { id: 'marketplace', nombre: 'Marketplace', url: '#marketplace' },
    5: { id: 'eventos', nombre: 'Eventos', url: '#eventos' },
    6: { id: 'contacto', nombre: 'Contacto', url: '#contacto' }
  },

  // Ventajas competitivas
  ventajas: [
    'Centro de Datos Tier III',
    'Infraestructura de Alto Nivel para Yucatán',
    'Espacios Seguros para Servidores',
    'Redundancia N+1',
    'Centro de Ciberseguridad SOC 360°',
    'Ubicado en el Corazón de Yucatán'
  ],

  // SERVICIOS PRINCIPALES
  servicios: {
    edgenet: {
      nombre: 'EdgeNET',
      categoria: 'Centro de Datos',
      descripcion: 'Centro de Datos en Yucatán',
      subservicios: [
        'Colocación de servidores',
        'Conectividad de alta velocidad',
        'Interconexión entre sistemas',
        'Gestión de infraestructura',
        'Soporte técnico 24/7',
        'Infraestructura Tier III'
      ],
      beneficios: [
        'Datos en Yucatán (soberanía local)',
        'Redundancia N+1',
        'Espacios seguros certificados',
        'Tier III: 99.982% disponibilidad'
      ]
    },
    
    flai: {
      nombre: 'FLAI',
      categoria: 'Nube Soberana',
      descripcion: 'Nube Soberana 100% México',
      caracteristicas: [
        'Datos en México (soberanía de datos)',
        'Primera Nube IA Soberana',
        '30 CDN (Centros de Distribución de Contenido)',
        'Centros de Datos en México',
        '100% infraestructura nacional'
      ],
      beneficios: [
        'Cumplimiento normativo mexicano',
        'Latencia ultra-baja',
        '0 fugas de datos al extranjero',
        'Especializada para cargas de IA'
      ]
    },
    
    mayia: {
      nombre: 'MAYIA',
      categoria: 'IA Para Empresas',
      descripcion: 'Fábrica de IA Privada para tu Empresa',
      servicios: [
        'Consultoría IA (Modelo StrategyOps)',
        'Laboratorio IA (Pruebas de Concepto)',
        'Plataformas de IA Personalizadas',
        'Fábrica de IA Privada'
      ],
      beneficios: [
        'IA adaptada a tu industria',
        'Modelos privados (no compartidos)',
        'ROI medible desde día 1',
        'Acompañamiento completo'
      ]
    },
    
    cyberpeace: {
      nombre: 'CyberPeace SOC',
      categoria: 'Ciberseguridad 360°',
      descripcion: 'Centro de Operaciones de Seguridad 24/7',
      certificaciones: {
        'ISO 27001': 'Gestión de Seguridad de la Información',
        'ISO 42001': 'Gestión de Inteligencia Artificial',
        'ISO 27034': 'Seguridad en Aplicaciones',
        'ISO 27017': 'Seguridad en Servicios Cloud',
        'ISO 9001': 'Gestión de Calidad',
        'ISO 37001': 'Sistemas de Gestión Antisoborno',
        'ISO 27018': 'Protección de Datos Personales en la Nube'
      },
      caracteristicas: [
        'FIRST Member (Forum of Incident Response and Security Teams)',
        'Monitoreo 24/7',
        'SOC 360° (cobertura completa)',
        'Respuesta ante incidentes'
      ],
      beneficios: [
        'Cumplimiento normativo garantizado',
        'Protección proactiva de amenazas',
        'Analítica de seguridad con IA',
        'Certificaciones internacionales'
      ]
    }
  },

  // MARKETPLACE - Soluciones adicionales
  marketplace: {
    drp: {
      nombre: 'DRP',
      descripcion: 'Recuperación ante Desastres',
      beneficios: [
        'Continuidad de negocio garantizada',
        'Backup automatizado',
        'Recuperación rápida (RTO/RPO optimizados)',
        'Cumplimiento normativo'
      ]
    },
    
    cloud: {
      nombre: 'Cloud',
      descripcion: 'Servidores Físicos + Virtuales',
      caracteristicas: [
        'Servidores físicos dedicados',
        'Máquinas virtuales escalables',
        'Soporte 24/7',
        'Infraestructura híbrida'
      ]
    },
    
    academia: {
      nombre: 'Academia',
      descripcion: 'Acelera Adopción de IA',
      cursos: [
        '32 cursos totales',
        'IA para Negocios',
        'IA para Equipos Tech',
        'Píldoras IA (contenido corto)'
      ],
      beneficios: [
        'Capacitación empresarial',
        'Certificaciones incluidas',
        'Contenido actualizado',
        'Modalidad online'
      ]
    },
    
    pyme: {
      nombre: 'Soluciones PYME',
      descripcion: 'Suscripción Mensual sin Infraestructura',
      caracteristicas: [
        'Suscripción mensual accesible',
        'No requiere infraestructura propia',
        'Soluciones IA para productividad',
        'Pago por uso'
      ]
    },
    
    lumel: {
      nombre: 'LUMEL',
      descripcion: 'Asistente de Apoyo Emocional',
      metricas: {
        cerebros: 1,
        satisfaccion: 100,
        efectividad: 99
      },
      caracteristicas: [
        'Bienestar laboral',
        'Apoyo emocional 24/7',
        'Capacitación en salud mental',
        'Alertas y predictibilidad de riesgos'
      ],
      beneficios: [
        'Reduce rotación de personal',
        'Mejora clima laboral',
        'Prevención de burnout',
        'IA conversacional empática'
      ]
    },
    
    guardia: {
      nombre: 'SW Guard-IA',
      descripcion: 'IA en tus Mismas Cámaras',
      metricas: {
        eventos: '200+',
        camaras: '1000',
        operadores: '1'
      },
      casos_uso: [
        'Seguridad empresarial',
        'Eficiencia operativa',
        'Reducción de merma',
        'Seguridad en el trabajo',
        'Analítica avanzada',
        'Forensia con IA'
      ],
      beneficios: [
        '1000 cámaras con 1 solo operador',
        'Analítica en tiempo real',
        'Forensia inteligente',
        'No requiere cámaras nuevas'
      ]
    },
    
    senderoSeguro: {
      nombre: 'Sendero Seguro',
      descripcion: 'Inteligencia en Seguridad de Género',
      caracteristicas: [
        'Detección de patrones sospechosos',
        'Analítica inteligente de género',
        'Alerta a autoridades automática',
        'Monitoreo en FLAI (nube soberana)',
        '32+ eventos detectados'
      ],
      casos_uso: [
        'Parques seguros',
        'Alertas de aglomeración',
        'Detección de merodeos',
        'Objetos olvidados',
        'Seguridad para mujeres'
      ]
    },
    
    guardiaInteligente: {
      nombre: 'Guardia Inteligente',
      descripcion: 'Monitoreo en FLAI Nube Soberana',
      caracteristicas: [
        '32+ eventos monitoreados',
        'Analítica inteligente',
        'Alerta a autoridades',
        'Monitoreo en la nube'
      ]
    },
    
    obrasPublicas: {
      nombre: 'Obras Públicas',
      descripcion: 'Monitoreo Inteligente de Infraestructura',
      caracteristicas: [
        '32 eventos monitoreados',
        'Monitoreo en la nube',
        'Análisis de predictibilidad',
        'Hecho en México 100%'
      ],
      beneficios: [
        'Cumplimiento normativo 100%',
        '3 ubicaciones en México',
        '0 fugas de datos'
      ]
    },
    
    retailInteligente: {
      nombre: 'Retail Inteligente',
      descripcion: 'Detección de Intrusos con IA',
      caracteristicas: [
        'Detección en tiempo real',
        'Alerta a autoridades automática',
        'IA activa 24/7',
        'Grabación continua'
      ],
      casos_uso: [
        'Supermercados',
        'Tiendas departamentales',
        'Centros comerciales',
        'Bodegas'
      ]
    }
  },

  // EVENTOS
  eventos: {
    empresarios: {
      nombre: 'Evento para Empresarios',
      descripcion: 'Invitación exclusiva para conocer soluciones de transformación digital'
    },
    gobierno: {
      nombre: 'Evento para Gobierno',
      descripcion: 'Presentación de soluciones para el sector público'
    }
  },

  // CONTACTO
  contacto: {
    newsletter: {
      titulo: 'Newsletter - Suscríbete a Nuestro Newsletter',
      descripcion: 'Entérate de nuestros eventos y mucho más',
      beneficios: [
        'Invitaciones exclusivas a eventos',
        'Novedades de servicios',
        'Casos de éxito',
        'Tendencias en transformación digital'
      ]
    }
  }
};

// Información ISO en detalle
export const ISO_INFO = {
  'ISO 27001': {
    nombre: 'Gestión de Seguridad de la Información',
    descripcion: 'Estándar internacional para sistemas de gestión de seguridad de la información (SGSI)',
    beneficio: 'Garantiza protección de datos confidenciales'
  },
  'ISO 42001': {
    nombre: 'Gestión de Inteligencia Artificial',
    descripcion: 'Primera norma internacional para sistemas de gestión de IA',
    beneficio: 'Uso responsable y ético de la IA'
  },
  'ISO 27034': {
    nombre: 'Seguridad en Aplicaciones',
    descripcion: 'Guía para integrar seguridad en el ciclo de vida de aplicaciones',
    beneficio: 'Aplicaciones seguras desde el diseño'
  },
  'ISO 27017': {
    nombre: 'Seguridad en Servicios Cloud',
    descripcion: 'Controles de seguridad para servicios en la nube',
    beneficio: 'Nube segura y confiable'
  },
  'ISO 9001': {
    nombre: 'Gestión de Calidad',
    descripcion: 'Sistema de gestión de calidad enfocado en satisfacción del cliente',
    beneficio: 'Calidad garantizada en servicios'
  },
  'ISO 37001': {
    nombre: 'Sistemas de Gestión Antisoborno',
    descripcion: 'Prevención, detección y respuesta ante soborno',
    beneficio: 'Transparencia y ética empresarial'
  },
  'ISO 27018': {
    nombre: 'Protección de Datos Personales en la Nube',
    descripcion: 'Código de prácticas para protección de PII en nube pública',
    beneficio: 'Privacidad de datos garantizada'
  }
};

export function getSeccionInfo(seccionId) {
  return HUB_CONFIG.secciones[seccionId] || null;
}

export function getServicioInfo(servicioNombre) {
  return HUB_CONFIG.servicios[servicioNombre] || HUB_CONFIG.marketplace[servicioNombre] || null;
}

export function getISOInfo(isoCode) {
  return ISO_INFO[isoCode] || null;
}

export default HUB_CONFIG;