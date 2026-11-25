export interface NavItem {
  label: string;
  href: string;
}

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#descubri' },
  { label: 'Diferencial', href: '#diferencial' },
  { label: 'Mis servicios', href: '#terapias' },
  { label: 'Experiencias', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export interface ServiceLink {
  id: string;
  name: string;
  href: string;
  external?: boolean;
}

export interface Galaxy {
  id: string;
  name: string;
  description: string;
  image: string;
  services: ServiceLink[];
}

export const GALAXIES: Galaxy[] = [
  {
    id: 'medicina-estelar',
    name: 'Galaxia Free Taz',
    description:
      'Un espacio a tu ritmo, con recursos breves y libres que potencien tu proceso.',
    image: publicAsset('medicina-estelar.jpg'),
    services: [
      {
        id: 'youtube-free-taz',
        name: 'YouTube',
        href: 'https://www.youtube.com/@jess_humana.estelar',
        external: true,
      },
    ],
  },
  {
    id: 'codigo-estelar',
    name: 'Galaxia Start Point',
    description:
      'Espacios concretos, amorosos y sutiles para comenzar tu movimiento o darle un giro a lo que venimos trabajando.',
    image: publicAsset('codigo-estelar.jpg'),
    services: [
      {
        id: 'reconectarte',
        name: 'Programa de Meditaciones Canalizadas ReconectarTe',
        href: 'https://www.youtube.com/@jess_humana.estelar',
        external: true,
      },
      {
        id: 'conexion-con-la-diosa',
        name: 'Conexión con la Diosa',
        href: '?servicio=conexion-con-la-diosa',
      },
      {
        id: 'puente-de-luz',
        name: 'Puente de Luz',
        href: '?servicio=puente-de-luz',
      },
    ],
  },
  {
    id: 'registros-akashicos',
    name: 'Galaxia Silver Eight',
    description:
      'Espacios expansivos, para transformarte de raíz. Si vas a por todas, esta es tu galaxia.',
    image: publicAsset('registros-akashicos.jpg'),
    services: [
      {
        id: 'brujula-akashica',
        name: 'Brújula Akáshica',
        href: '?servicio=brujula-akashica',
      },
      {
        id: 'impulso',
        name: 'ImPulso',
        href: '?servicio=impulso',
      },
      {
        id: 'codigo-estelar',
        name: 'Código Estelar',
        href: '?servicio=codigo-estelar',
      },
    ],
  },
];

export interface Difference {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const DIFFERENCES: Difference[] = [
  {
    id: 'acompanamiento',
    title: 'Plan de vuelo a tu medida.',
    description: 'No hay fórmulas repetidas ni caminos estandarizados. Cada sesión parte de tu presente hacia tu objetivo y es guiada por la canalización.',
    icon: 'heart',
  },
  {
    id: 'integral',
    title: 'Aplicación de los comandos en la diaria.',
    description: 'Está buenísima la data de las estrellas, pero estamos encarnadxs y al final del día dormimos en una cama bajo un techo que hay que sostener. Por eso, trabajamos desde la energía y con la “magia” que atraviesa la multidimensionalidad pero con un enfoque práctico, que puedas llevar a tu cotidiano.',
    icon: 'compass',
  },
  {
    id: 'confianza',
    title: 'Con soltura pero atravesando el campo de asteroides.',
    description: 'Con todo el amor y a tu ritmo, pero la incomodidad se atraviesa. Evitar sentir, nos deja en el mismo (in)cómodo lugar que habitamos…solo a través de la experiencia podemos transformarnos…te prometo que no es tan terrible, lo volvemos una danza amena y libre.',
    icon: 'shield',
  },
  {
    id: 'consciente',
    title: 'Sos comandante de tu nave.',
    description: 'Es tu proceso, sos quien está contigo mismx el 100% de tu día, por tanto, quien tiene la última decisión, quien pone los límites o elige la expansión. Mi misión es acompañarte a aprender a manejarla de forma plena.',
    icon: 'leaf',
  },
  {
    id: 'incomodidad',
    title: 'Protocolos de seguridad siempre activados.',
    description: 'Ante todo existe una responsabilidad con tu nave…ética, moral y energética. Los espacios son cuidados por la tecnología de luz y por el código de ética que mi profesión me brindó. Primum non nocere y el secreto profesional siempre como estandarte.',
    icon: 'heart',
  },
];

export const CONTACTS = {
  whatsapp: 'WhatsApp',
  whatsappLink: 'https://wa.link/m4wz8u',
  email: 'dra.jessicaferradaz@gmail.com',
  instagram: '@jess_humana.estelar',
  instagramLink: 'https://www.instagram.com/jess_humana.estelar',
  youtubeLink: 'https://www.youtube.com/@jess_humana.estelar',
};

export const BRAND = {
  name: 'Jess',
  tagline: 'Jess ★ Humana Estelar',
  shortDescription: 'Un espacio de escucha y exploración personal desde una mirada somática y espiritual.',
};
