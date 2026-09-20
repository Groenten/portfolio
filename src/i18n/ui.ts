export const ui = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto'
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact'
  }
} as const

export type Lang = keyof typeof ui

export function getLang(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)['es']) => ui[lang][key]
}

export function switchLangPath(pathname: string, lang: Lang): string {
  if (lang === 'es') return '/en' + (pathname === '/' ? '' : pathname)
  return pathname.replace(/^\/en/, '') || '/'
}
