// Configuración centralizada de la aplicación

const CONFIG = {
  // URLs del backend
  API: {
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
    ENDPOINTS: {
      CHAT: '/api/chat/message',
      DEPARTAMENTOS: '/api/departamentos',
      STATS: '/api/departamentos/estadisticas'
    }
  },

  // Configuración de módulos
  MODULES: {
    GUARDIA: {
      id: 'guardia',
      name: 'GuardIA',
      color: '#4CAF50',
      description: 'Seguridad Inteligente con IA'
    },
    LUMEL: {
      id: 'lumel',
      name: 'LUMEL',
      color: '#9C27B0',
      description: 'Agente de Acompañamiento Emocional'
    },
    DATACENTER: {
      id: 'datacenter',
      name: 'Data Center',
      color: '#4881EB',
      description: 'Infraestructura Tecnológica Avanzada'
    },
    SOBERANIA: {
      id: 'soberania',
      name: 'Soberanía Digital',
      color: '#DC2626',
      description: 'Datos Protegidos en México'
    },
    PILDORAS: {
      id: 'pildoras',
      name: 'Píldoras IA',
      color: '#10B981',
      description: 'Soluciones Inteligentes con IA'
    },
    SERVICIOS: {
      id: 'servicios',
      name: 'Servicios',
      color: '#14B8A6',
      description: 'Collect • Store • Compute'
    }
  },

  // Configuración de logos
  LOGOS: {
    HEADER: {
      DEFAULT: '/assets/images/HUB-LOGO-BLANCO.png',
      SCROLLED: '/assets/images/HUB-LOGO.png'
    },
    PARTNERS: [
      {
        src: '/assets/images/edgeNetLogoBlanco.png',
        alt: 'EdgeNet Logo'
      },
      {
        src: '/assets/images/hechoEnMexico.svg',
        alt: 'Hecho En Mexico'
      },
      {
        src: '/assets/images/mayiaLogoBlanco.png',
        alt: 'Mayia Logo'
      },
      {
        src: '/assets/images/LogoMonarchBlanco.png',
        alt: 'Monarch Logo'
      }
    ]
  },

  // Configuración de animaciones GSAP
  ANIMATIONS: {
    HERO: {
      LOGOS: { opacity: 0, y: -20, duration: 1, delay: 0.2 },
      LOGO_CONTAINER: { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.4, stagger: 0.15 },
      TITLE: { opacity: 0, y: 50, duration: 1, delay: 0.8 },
      SUBTITLE: { opacity: 0, y: 30, duration: 1, delay: 1.1 },
      CTA: { opacity: 0, y: 20, duration: 1, delay: 1.4 },
      STATS: { opacity: 0, y: 20, duration: 1, delay: 1.7 }
    },
    SCROLL_TRIGGER: {
      start: 'top 80%'
    }
  }
};

export default CONFIG;