export interface NavItem {
  label: string;
  href: string;
}

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Programa', href: '#programa' },
  { label: 'Sobre mí', href: '#descubri' },
  { label: 'Mis servicios', href: '#terapias' },
  { label: 'Diferencial', href: '#diferencial' },
  { label: 'Experiencias', href: '#testimonios' },
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
    image: publicAsset('medicina-estelar.jpg'),
    link: 'Quiero conocer este acompañamiento',
  },
  {
    id: 'codigo-estelar',
    name: 'Código Estelar',
    description:
      'Una instancia de Medicina Estelar para observar un síntoma como mensaje y explorar su significado desde una mirada multidimensional.',
    image: publicAsset('codigo-estelar.jpg'),
    link: 'Quiero explorar Código Estelar',
  },
  {
    id: 'registros-akashicos',
    name: 'Registros Akáshicos',
    description:
      'Un espacio para traer tus preguntas, acceder a la sabiduría de tu alma y encontrar claridad y dirección para tu día a día.',
    image: publicAsset('registros-akashicos.jpg'),
    link: 'Quiero consultar por Registros Akáshicos',
  },
  {
    id: 'conexion-con-la-diosa',
    name: 'Conexión con la Diosa',
    description:
      'Meditación guiada canalizada para reconectar con la energía femenina primordial, la ciclicidad y tus dones.',
    image: publicAsset('conexion-diosa.jpg'),
    link: 'Quiero conocer esta meditación',
  },
  {
    id: 'puente-de-luz',
    name: 'Puente de Luz',
    description:
      'Acompañamiento espiritual, a pedido de la persona o de un ser querido, para transitar el final de la vida con presencia y armonía.',
    note: 'Servicio honorario. No busca acelerar ni intervenir en el proceso de final de vida.',
    image: publicAsset('puente-de-luz.jpg'),
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
    title: 'A la medida de tu evolución',
    description: 'No hay fórmulas repetidas ni caminos estandarizados. Cada sesión parte de tu presente y es guiada por la canalización.',
    icon: 'heart',
  },
  {
    id: 'integral',
    title: 'Multidimensionalidad real',
    description: 'Ningún cuerpo queda fuera de la intervención. Trabajamos siempre como el todo que somos, solo así logramos la transformación completa.',
    icon: 'compass',
  },
  {
    id: 'confianza',
    title: 'Soberanía y respeto',
    description: 'Aquí no vienes a encajar en un molde, sino a habitar tu propia verdad. Es un espacio libre de juicios y con un único límite: el que ponés vos.',
    icon: 'shield',
  },
  {
    id: 'consciente',
    title: 'Conciencia aplicada',
    description: 'El enfoque es práctico, de una espiritualidad "bajada a tierra". Al final del día seguimos siendo humanxs atravesados por la humanidad.',
    icon: 'leaf',
  },
  {
    id: 'incomodidad',
    title: 'La incomodidad como aliada',
    description: 'Los procesos son abordados con y desde el amor, lo que no quiere decir que sea todo luces y colores. Para transformar el dolor hay que darle cuerpo y atravesarlo; aquí no esquivamos la incomodidad, la usamos como catalizador.',
    icon: 'heart',
  },
];

export const CONTACTS = {
  whatsapp: 'WhatsApp',
  whatsappLink: 'https://wa.link/m4wz8u',
  email: 'dra.jessicaferradaz@gmail.com',
  instagram: '@jess_humana.estelar',
  instagramLink: 'https://www.instagram.com/jess_humana.estelar',
};

export const BRAND = {
  name: 'Jess',
  tagline: 'Jess ★ Humana Estelar',
  shortDescription: 'Un espacio de escucha y exploración personal desde una mirada somática y espiritual.',
};
