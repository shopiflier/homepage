import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        solutions: 'Solutions',
        pricing: 'Pricing',
        about: 'About',
        contact: 'Contact',
        getStarted: 'Get Started'
      },
      hero: {
        title: 'Transform Your E-commerce Experience',
        subtitle: 'Powerful solutions that scale with your business',
        description: 'Shopifly provides cutting-edge e-commerce tools and integrations to help you build, manage, and grow your online business with confidence.',
        cta: 'Start Your Journey',
        demo: 'Watch Demo'
      },
      solutions: {
        title: 'Complete E-commerce Solutions',
        subtitle: 'Everything you need to succeed online',
        themes: {
          title: 'Premium Themes',
          description: 'Beautiful, responsive themes that convert visitors into customers'
        },
        crm: {
          title: 'Smart CRM',
          description: 'Manage customer relationships and boost retention with AI-powered insights'
        },
        omnichannel: {
          title: 'Omni-channel',
          description: 'Seamlessly connect all your sales channels for unified commerce'
        }
      },
      testimonials: {
        title: 'Trusted by Growing Businesses',
        subtitle: 'See what our customers say about us'
      },
      cta: {
        title: 'Ready to Scale Your Business?',
        subtitle: 'Join thousands of successful merchants using Shopifly',
        button: 'Get Started Today'
      },
      footer: {
        company: 'Company',
        product: 'Product',
        resources: 'Resources',
        support: 'Support'
      }
    }
  },
  es: {
    translation: {
      nav: {
        solutions: 'Soluciones',
        pricing: 'Precios',
        about: 'Acerca de',
        contact: 'Contacto',
        getStarted: 'Comenzar'
      },
      hero: {
        title: 'Transforma Tu Experiencia de E-commerce',
        subtitle: 'Soluciones poderosas que escalan con tu negocio',
        description: 'Shopifly proporciona herramientas e integraciones de e-commerce de vanguardia para ayudarte a construir, gestionar y hacer crecer tu negocio en línea con confianza.',
        cta: 'Comienza Tu Viaje',
        demo: 'Ver Demo'
      },
      solutions: {
        title: 'Soluciones Completas de E-commerce',
        subtitle: 'Todo lo que necesitas para tener éxito en línea',
        themes: {
          title: 'Temas Premium',
          description: 'Temas hermosos y responsivos que convierten visitantes en clientes'
        },
        crm: {
          title: 'CRM Inteligente',
          description: 'Gestiona las relaciones con clientes y aumenta la retención con insights impulsados por IA'
        },
        omnichannel: {
          title: 'Omnicanal',
          description: 'Conecta sin problemas todos tus canales de venta para un comercio unificado'
        }
      },
      testimonials: {
        title: 'Confiado por Negocios en Crecimiento',
        subtitle: 'Ve lo que dicen nuestros clientes sobre nosotros'
      },
      cta: {
        title: '¿Listo para Escalar Tu Negocio?',
        subtitle: 'Únete a miles de comerciantes exitosos usando Shopifly',
        button: 'Comenzar Hoy'
      },
      footer: {
        company: 'Empresa',
        product: 'Producto',
        resources: 'Recursos',
        support: 'Soporte'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        solutions: 'Solutions',
        pricing: 'Tarifs',
        about: 'À propos',
        contact: 'Contact',
        getStarted: 'Commencer'
      },
      hero: {
        title: 'Transformez Votre Expérience E-commerce',
        subtitle: 'Des solutions puissantes qui évoluent avec votre entreprise',
        description: 'Shopifly fournit des outils et intégrations e-commerce de pointe pour vous aider à construire, gérer et développer votre entreprise en ligne en toute confiance.',
        cta: 'Commencez Votre Voyage',
        demo: 'Voir la Démo'
      },
      solutions: {
        title: 'Solutions E-commerce Complètes',
        subtitle: 'Tout ce dont vous avez besoin pour réussir en ligne',
        themes: {
          title: 'Thèmes Premium',
          description: 'De beaux thèmes responsifs qui convertissent les visiteurs en clients'
        },
        crm: {
          title: 'CRM Intelligent',
          description: 'Gérez les relations clients et augmentez la rétention avec des insights alimentés par IA'
        },
        omnichannel: {
          title: 'Omnicanal',
          description: 'Connectez facilement tous vos canaux de vente pour un commerce unifié'
        }
      },
      testimonials: {
        title: 'Approuvé par les Entreprises en Croissance',
        subtitle: 'Voyez ce que nos clients disent de nous'
      },
      cta: {
        title: 'Prêt à Faire Évoluer Votre Entreprise?',
        subtitle: 'Rejoignez des milliers de marchands prospères utilisant Shopifly',
        button: 'Commencer Aujourd\'hui'
      },
      footer: {
        company: 'Entreprise',
        product: 'Produit',
        resources: 'Ressources',
        support: 'Support'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;