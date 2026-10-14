export interface NavItem {
  label: string;
  href: string;
}

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Descubrí', href: '#descubri' },
  { label: 'Programa', href: '#programa' },
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
  exampleId: string;
  title: string;
  description: string;
  icon: string;
}

export const DIFFERENCES: Difference[] = [
  {
    id: 'acompanamiento',
    exampleId: 'DIF-01',
    title: 'Acompañamiento personalizado',
    description: 'Cada proceso parte de una conversación sobre tu momento, tus preguntas y lo que esperás explorar.',
    icon: 'heart',
  },
  {
    id: 'integral',
    exampleId: 'DIF-02',
    title: 'Mirada integral',
    description: 'Un espacio para poner en diálogo cuerpo, emociones y dimensión espiritual desde tu propia experiencia.',
    icon: 'compass',
  },
  {
    id: 'confianza',
    exampleId: 'DIF-03',
    title: 'Espacio de confianza',
    description: 'La escucha y el respeto por tus tiempos orientan cada encuentro; podés compartir solo lo que quieras.',
    icon: 'shield',
  },
  {
    id: 'consciente',
    exampleId: 'DIF-04',
    title: 'Experiencia consciente',
    description: 'La propuesta invita a observar lo que te pasa y elegir, con autonomía, qué recursos te resultan significativos.',
    icon: 'leaf',
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
  name: 'Profesional a confirmar',
  tagline: 'Reprogramación Somática Estelar',
  shortDescription: 'Un espacio de escucha y exploración personal desde una mirada somática y espiritual.',
};
