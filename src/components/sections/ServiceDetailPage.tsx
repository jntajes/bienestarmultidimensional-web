import { ArrowLeft, Check, MessageCircle, Sparkles } from 'lucide-react';
import { CONTACTS } from '../../content';

type ContentSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type Program = {
  title: string;
  subtitle: string;
  image: string;
  introduction: ContentSection;
  sections: ContentSection[];
  testimonials?: { title: string; items: string[] };
  cta: string;
};

const asset = (file: string) => `${import.meta.env.BASE_URL}assets/programas/portadas/${file}`;

const PROGRAMS: Record<string, Program> = {
  'conexion-con-la-diosa': {
    title: 'Conexión con la Diosa',
    subtitle: 'Despertar la fuerza y la luz que pulsan en tu interior.',
    image: asset('conexion-con-la-diosa.jpeg'),
    introduction: {
      title: 'El objetivo de esta activación:',
      paragraphs: [
        'Más que un rito o limpieza de útero es una integración de tu fuerza vital. Un encuentro amoroso para reconocer y potenciar la energía femenina real que te habita.',
      ],
    },
    sections: [
      {
        title: 'Estás llamada a conectar si...',
        items: [
          'Has dejado de sentir y apreciar el placer, la sensualidad, la belleza.',
          'Tus ciclos son una pesadilla, pensas que no menstruar sería lo mejor.',
          'La maternidad está siendo un conflicto (estás gestando o pensando en hacerlo) y necesitas un espacio sin juicio de reconexión con tu poder más autentico.',
          'Tenés síntomas en la esfera sexual/reproductiva que necesitan una vuelta de tuerca.',
        ],
      },
      {
        title: '¿Cómo es la conexión?',
        paragraphs: [
          'A través de una meditación canalizada bajamos el ruido mental y llevamos la atención al cuerpo y al aparato reproductor.',
          'A través de la guía y la canalización vamos abriendo registro de lo que ahí habita, soltando tensiones o mandatos que ya no te corresponden y reactivando una conexión más pura con tu propia energía.',
          'Cuando hay una gestación en proceso, se realiza una conexión con el alma de tu bebé, potenciando la sinergia entre ambxs.',
        ],
      },
      {
        title: 'Formato de la conexión:',
        paragraphs: ['Modalidad: Online por zoom | Presencial en Marindia', 'Duración: 70 minutos.', 'Incluye: Grabación del encuentro.'],
      },
      {
        title: 'La Diosa activa y potenciada:',
        items: [
          'Está más conectada con su útero, su cuerpo físico en general y sus ritmos naturales.',
          'Siente menos ruido mental.',
          'Permite emerge una nueva visión de su “ser mujer” y su maternar más fiel a sí misma.',
          'Encuentra estabilidad en sus ciclos y un impulso para transformar hábitos y acciones provenientes de su propio poder.',
        ],
      },
      {
        title: 'Para quien NO es esta conexión:',
        paragraphs: [
          'Mujeres que no están dispuestas a dejar de operar en la energía masculina conocida, ni quieren dejar de lado las ideas preconcebidas de lo que “es femenino”. La energía femenina no necesita definirse, necesita habitarse.',
        ],
      },
    ],
    testimonials: {
      title: 'Qué dicen las diosas que se activaron en conexión:',
      items: [
        'E: “pude conectar conmigo misma y con mi bebé, y atender temas que no estaba viendo y necesitaban atención antes del nacimiento”',
        'S: “estoy como re contenta jaja estuve practicando tomarme un ratito para meditar y todo fluyó”',
        'C: “llegó mi período y lo que me pasa emocionalmente no se explicarlo aún, pero hice “click”...siento pesadez, hinchazón pero no lo estoy padeciendo...bajé 25 cambios de la ansiedad que tenía”.',
      ],
    },
    cta: 'Agendá tu conexión acá:',
  },
  'puente-de-luz': {
    title: 'Puente de Luz',
    subtitle: 'Volver a las estrellas puede ser un proceso armónico y liberador',
    image: asset('puente-de-luz.jpeg'),
    introduction: {
      title: '¿De qué se trata?',
      paragraphs: [
        'Es un acompañamiento al final de la vida. Realizamos una conexión con el alma que se encuentra en la transición de dejar su cuerpo físico, para acompañarla a liberar lo que requiera, ordenar sus pendientes y edificar una guía para el momento de desencarnar.',
        'Se realiza a pedido explícito de la persona o un ser querido, siempre y cuando el alma dé el permiso.',
      ],
    },
    sections: [
      {
        title: 'Información importante:',
        items: [
          'Se trabaja con los permisos que habilita el alma de la persona, por tanto no existe una estructura o procedimiento estricto, así como tampoco es posible asegurar que la conexión permitirá algún tipo de resultado.',
          'Esta sesión no acelera ni detiene el proceso, lo hace más simple y armónico.',
          'Al ser solicitada por un tercero, la privacidad en cuanto a la información recabada se mantiene. Solo se comparten los datos que puedan ser relevantes para los terceros (familia, seres queridos) o los mensajes que son necesarios de hacer llegar a la persona en cuestión.',
          'Estas no son sesiones mediumnicas (no se trabaja con personas que ya fallecieron).',
          'No tienen el objetivo de brindar información sobre vínculos, temas no resueltos, o la enfermedad existente.',
          'Se realizan únicamente a distancia.',
        ],
      },
      {
        title: '¿Cómo solicitarlo?',
        paragraphs: [
          'Me escribes en el botón que aparece debajo. Te pediré información para establecer la conexión a distancia y finalizada la sesión, te compartiré la información pertinente.',
          'El intercambio por la sesión es a voluntad.',
        ],
      },
    ],
    cta: 'Escribime para solicitarlo',
  },
  'brujula-akashica': {
    title: 'Brújula Akáshica',
    subtitle: 'Una vida coherente, plena y ordenada requiere de la sabiduría del alma.',
    image: asset('brujula-akashica.jpeg'),
    introduction: {
      title: 'El norte de este viaje:',
      paragraphs: ['Conectar con tu sabiduría, escuchar a tu alma y ser parte del proceso. Acá no se lee el akasha, se experimenta la información del alma.'],
    },
    sections: [
      {
        title: 'Estás necesitando esta brújula si...',
        items: [
          'Tenés un pedo cósmico y no estás pudiendo tomar decisiones en tu vida.',
          'Querés comprender el caos que te habita.',
          'Hay una duda dantesca que nadie más que vos puede responderte.',
        ],
      },
      {
        title: '¿Cómo es la calibración?',
        paragraphs: ['Activamos la conexión con tu registro akáshico y vamos desarmando capas con preguntas, registro corporal y lectura de lo que aparece, para que no te quedes solo en el análisis mental sino que sientas un cambio real.'],
      },
      {
        title: 'Coordenadas del proceso:',
        paragraphs: ['Modalidad: Online por zoom | Presencial en Marindia', 'Duración: 2 horas.', 'Incluye: Grabación del encuentro.'],
      },
      {
        title: 'Con la brújula calibrada y operando:',
        items: [
          'Comprendés cómo funcionan tus cuerpos y aprendes a responder en tu vida desde tu propia conexión.',
          'Obtenés mayor claridad sobre lo que estás viviendo.',
          'Algo se aliviana en vos y una nueva energía se enciende para encarar la vida.',
        ],
      },
      {
        title: 'Lo que NO es esta brújula:',
        paragraphs: ['Una receta mágica que te soluciona la vida sin que tomes acción.', 'La clave de estos encuentros es la experiencia. Durante la sesión la energía se mueve en cada cuerpo y se habilita el cambio, pero vos das los pasos para hacerlo real.'],
      },
    ],
    testimonials: {
      title: 'Quienes ya activaron su brújula andan diciendo:',
      items: [
        'F: “quedé con mucha info, aliviado y como flojo”.',
        'V: “me recontra resonó todo lo que vimos, más claro imposible”',
        'J: “me abrió pila la cabeza en cierta cantidad de cosas, hacia mi mismo, hacia conocerme un poco más”',
        '“llegué a casa, me senté y no pensaba en nada, estaba re tranquilo y sentía pila de sensaciones en el cuerpo que nunca había sentido”.',
      ],
    },
    cta: 'Activá tu brújula acá:',
  },
  impulso: {
    title: 'ImPulso',
    subtitle: 'El empuje que necesitas para caminar desde otra perspectiva',
    image: asset('impulso.jpeg'),
    introduction: {
      title: 'La plataforma de despegue:',
      paragraphs: ['Cuando el ángulo de visión es cerrado, las posibilidades son reducidas. Para ampliar la perspectiva, es necesario contemplarte de forma multidimensional.'],
    },
    sections: [
      {
        title: 'Estás necesitando un empuje si...',
        items: [
          'Haz abordado tu síntoma con diferentes terapias, pero ninguna termina de redondear la causa del problema.',
          'Caminas la vida disociando tus problemas, y ya te está pesando no resolverlos.',
          'Estás necesitando poner los patitos en fila y caminar con fluidez.',
        ],
      },
      {
        title: '¿Cómo es la plataforma de ImPulso?',
        paragraphs: ['Total y completamente adaptada a lo que estás necesitando. Tu alma guía el proceso de obtención de la info y transformación. El cuerpo físico se vuelve protagonista del proceso, porque termina siendo el último en asentar la resolución del conflicto.'],
      },
      {
        title: 'Coordenadas de lanzamiento:',
        paragraphs: ['Modalidad: Online por zoom | Presencial en Marindia', 'Duración: 90 minutos.', 'Incluye: Grabación del encuentro.'],
      },
      {
        title: 'Despegando con Impulso:',
        paragraphs: ['Dependerá del tema a laburar, pero los reportes generales informan:'],
        items: ['Una nueva forma de ver y responder a las situaciones cotidianas.', 'Sensación de liviandad y empoderamiento.'],
      },
      {
        title: 'Dónde NO se puede usar esta plataforma:',
        paragraphs: ['En personas que buscan un gurú que les diga qué hacer y no aceptan la sola idea de que pueden llegar a tener el poder de cambiar su realidad con acciones simples.', 'Personas que creen que el físico es algo separado y distante de sus conflictos emocionales/vinculares/mentales.'],
      },
    ],
    testimonials: {
      title: 'Lxs ImPulsadxs andan diciendo:',
      items: [
        'L: “bien, sin duda mejor! con mucho menos enrosque…”',
        'M: “me di cuenta de que me frenó la cabeza, dejé de darle vuelta a las cosas, me quedé más tranquila…”',
        'C: “la verdad que sentí todo lo que se movió y canalicé un montón…me sentí con la fuera nuevamente, centrada u con objetivos”',
      ],
    },
    cta: 'Activá tu plataforma de Impulso acá:',
  },
  'codigo-estelar': {
    title: 'Código Estelar',
    subtitle: 'Tu síntoma entendido desde la multidimensionalidad.',
    image: asset('codigo-estelar.jpeg'),
    introduction: {
      title: 'El código fuente del síntoma:',
      paragraphs: ['De lo físico a lo intangible hay un ida y vuelta constante. Abordar solo una parte, no permite la resolución completa. Contemplamos cómo ese síntoma/patología se ancla en todos los cuerpos y restauramos los códigos orginales para que puedas transformarlo'],
    },
    sections: [
      {
        title: 'Tu sistema pide reprogramación si...',
        items: [
          'Tenés un síntoma/patología que has abordado de muchas formas y no lográs resolver o no querés tratar de la forma convencional.',
          'Estás transitando un proceso agudo y sabés que no es simple casualidad, pero no entendes el para qué.',
          'Sentís que el tratamiento que estás llevando adelante “se queda corto” y buscas una mirada más amplia de lo que sucede en tu físico.',
        ],
      },
      {
        title: 'La reprogramación en acción:',
        paragraphs: ['Primero hay que saber dónde estamos paradxs. Para eso necesito conocerte a través de las preguntas terrenales (como cualquier consulta) y un escaneo de todos tus cuerpos.', 'Luego, con la información encontrada se realiza la reprogramación, en estado de meditación y con la aplicación de la tecnología de luz, se trabaja sobre todos los cuerpos para restaurar el código fuente original y promover la transformación.'],
      },
      {
        title: 'Formato del proceso:',
        paragraphs: ['Modalidad: Online por zoom | Presencial en Marindia', 'Duración: 90 minutos.', 'Incluye: Grabación del encuentro.'],
      },
      {
        title: 'La nueva versión del código instalada:',
        items: ['Permite transformar el síntoma.', 'Te deja data de cómo funcionan tus cuerpos para aplicarlo después.', 'Eleva la energía vital y aporta certeza'],
      },
      {
        title: 'Excepciones del sistema:',
        paragraphs: ['Si no crees que podes transformarte vos mismx y no estás dispuestx a hacer cambios en tu estilo de vida, este programa no te servirá de nada. La transformación ocurre con la alquimia de la tecnología estelar y tu accionar humano.'],
      },
    ],
    testimonials: {
      title: 'Registros de reprogramación:',
      items: [
        'N: “fue un tremendo empoderamiento, ya que cada encuentro es un entrenamiento del autoconocimiento…todo se integra y comienza a tener sentido”',
        'C: “desde que fui acompañado a que yo quería un cambio, no tomé alcohol”',
        'R: “la sesión me resultó excelente. Todavía sigo procesando toda la información!! Es mucha cosa. Y me he sentido distinta, con más energía.”',
      ],
    },
    cta: 'Ejecutar código estelar:',
  },
};

interface Props {
  serviceId: string;
}

function Section({ section, emphasized = false }: { section: ContentSection; emphasized?: boolean }) {
  return (
    <section className={`rounded-3xl border p-7 sm:p-9 ${emphasized ? 'border-mint/35 bg-mint/10' : 'border-mint/15 bg-[#0d0a36]/45'}`}>
      <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">{section.title}</h2>
      {section.paragraphs && <div className="mt-5 space-y-4 text-base leading-relaxed text-white/75">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
      {section.items && <ul className="mt-6 space-y-4">{section.items.map((item) => <li key={item} className="flex gap-3 text-base leading-relaxed text-white/80"><Check size={18} className="mt-1 shrink-0 text-mint-bright" aria-hidden="true" /><span>{item}</span></li>)}</ul>}
    </section>
  );
}

export default function ServiceDetailPage({ serviceId }: Props) {
  const program = PROGRAMS[serviceId];
  if (!program) return null;

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate min-h-[620px] overflow-hidden">
        <img src={program.image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-[#0d0a36]/90 to-[#0d0a36]/35" />
        <div className="mx-auto flex min-h-[620px] max-w-content flex-col px-5 pb-16 pt-7 sm:px-8 sm:pt-10">
          <a href={`${import.meta.env.BASE_URL}#terapias`} className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-mint-bright focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-bright"><ArrowLeft size={17} aria-hidden="true" />Volver a mis servicios</a>
          <div className="mt-auto max-w-2xl pt-20">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-mint-bright"><Sparkles size={16} aria-hidden="true" />Experiencia estelar</span>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">{program.title}</h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/80 sm:text-2xl">{program.subtitle}</p>
          </div>
        </div>
      </section>

      <div className="star-field relative mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Section section={program.introduction} emphasized />
          <div className="mt-5 grid gap-5">{program.sections.map((section) => <Section key={section.title} section={section} />)}</div>
          {program.testimonials && <section className="mt-5 rounded-3xl border border-mint/20 bg-black/50 p-7 sm:p-9"><h2 className="text-2xl font-semibold text-white sm:text-3xl">{program.testimonials.title}</h2><div className="mt-6 grid gap-4">{program.testimonials.items.map((item) => <blockquote key={item} className="border-l-2 border-mint-bright/70 pl-5 text-base italic leading-relaxed text-white/75">{item}</blockquote>)}</div></section>}
          <section className="mt-8 rounded-3xl border border-mint/35 bg-mint/15 p-8 text-center sm:p-10"><p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">{program.cta}</p><a href={CONTACTS.whatsappLink} className="mt-7 inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mint-bright focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-bright"><MessageCircle size={18} aria-hidden="true" />Escribir por WhatsApp</a></section>
        </div>
      </div>
    </main>
  );
}
