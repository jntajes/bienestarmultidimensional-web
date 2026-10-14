export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Descubrí', href: '#descubri' },
  { label: 'Terapias', href: '#terapias' },
  { label: 'Diferencial', href: '#diferencial' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export interface Therapy {
  id: string;
  name: string;
  description: string;
  note?: string;
  image: string;
  link: string;
}

export const THERAPIES: Therapy[] = [
  {
    id: 'medicina-estelar',
    name: 'Medicina Estelar',
    description:
      'Un acompañamiento cercano desde una mirada multidimensional, con cámaras de sanación, códigos y lenguaje de luz, frecuencias sonoras y plantas medicinales.',
    image: '/assets/medicina-estelar.jpg',
    link: 'Quiero conocer este acompañamiento',
  },
  {
    id: 'codigo-estelar',
    name: 'Código Estelar',
    description:
      'Una instancia de Medicina Estelar para observar un síntoma como mensaje y explorar su significado desde una mirada multidimensional.',
    image: '/assets/codigo-estelar.jpg',
    link: 'Quiero explorar Código Estelar',
  },
  {
    id: 'registros-akashicos',
    name: 'Registros Akáshicos',
    description:
      'Un espacio para traer tus preguntas, acceder a la sabiduría de tu alma y encontrar claridad y dirección para tu día a día.',
    image: '/assets/registros-akashicos.jpg',
    link: 'Quiero consultar por Registros Akáshicos',
  },
  {
    id: 'conexion-con-la-diosa',
    name: 'Conexión con la Diosa',
    description:
      'Meditación guiada canalizada para reconectar con la energía femenina primordial, la ciclicidad y tus dones.',
    image: '/assets/conexion-diosa.jpg',
    link: 'Quiero conocer esta meditación',
  },
  {
    id: 'puente-de-luz',
    name: 'Puente de Luz',
    description:
      'Acompañamiento espiritual, a pedido de la persona o de un ser querido, para transitar el final de la vida con presencia y armonía.',
    note: 'Servicio honorario. No busca acelerar ni intervenir en el proceso de final de vida.',
    image: '/assets/puente-de-luz.jpg',
    link: 'Quiero consultar por Puente de Luz',
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
    title: 'Acompañamiento personalizado',
    description: 'Texto de presentación pendiente.',
    icon: 'heart',
  },
  {
    id: 'integral',
    title: 'Mirada integral',
    description: 'Texto de presentación pendiente.',
    icon: 'compass',
  },
  {
    id: 'confianza',
    title: 'Espacio de confianza',
    description: 'Texto de presentación pendiente.',
    icon: 'shield',
  },
  {
    id: 'consciente',
    title: 'Experiencia consciente',
    description: 'Texto de presentación pendiente.',
    icon: 'leaf',
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Testimonio pendiente de definir.',
    name: 'Nombre pendiente',
    role: 'Cliente',
  },
  {
    id: 't2',
    quote: 'Testimonio pendiente de definir.',
    name: 'Nombre pendiente',
    role: 'Cliente',
  },
  {
    id: 't3',
    quote: 'Testimonio pendiente de definir.',
    name: 'Nombre pendiente',
    role: 'Cliente',
  },
];

export const CONTACTS = {
  whatsapp: 'WhatsApp',
  whatsappLink: 'https://wa.link/m4wz8u',
  email: 'dra.jessicaferradaz@gmail.com',
  instagram: '@jess_humana.estelar',
  instagramLink: 'https://www.instagram.com/jess_humana.estelar',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
};

export const BRAND = {
  name: 'Nombre del profesional',
  tagline: 'Reprogramación Somática Estelar',
  shortDescription: 'Texto de presentación pendiente.',
};
