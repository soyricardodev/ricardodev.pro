export const LANGUAGES: Record<string, { code: string; name: string }> = {
  en: {
    code: "en",
    name: "English",
  },
  es: {
    code: "es",
    name: "Español",
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.experiencia": "Experiencia",
    "nav.proyectos": "Proyectos",
    "nav.sobre-mi": "Sobre mi",
    "nav.contacto": "Contacto",
    "id.experiencia": "experiencia",
    "id.proyectos": "proyectos",
    "id.sobre-mi": "sobre-mi",
  },
  en: {
    "nav.inicio": "Home",
    "nav.experiencia": "Experience",
    "nav.proyectos": "Projects",
    "nav.sobre-mi": "About me",
    "nav.contacto": "Contact",
    "id.experiencia": "experience",
    "id.proyectos": "projects",
    "id.sobre-mi": "about-me",
  },
} as const;

export const routes = {
  es: {
    experiencia: "#experiencia",
    proyectos: "#proyectos",
    "sobre-mi": "#sobre-mi",
  },
  en: {
    experiencia: "#experience",
    proyectos: "#projects",
    "sobre-mi": "#about-me",
  },
};
