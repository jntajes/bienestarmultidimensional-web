import Reveal from '../Reveal';
import DecorativeShape from '../DecorativeShape';

export default function DiscoverSection() {
  return (
    <section id="descubri" className="relative overflow-hidden py-24 sm:py-32">
      <div className="star-field pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <DecorativeShape
        variant="blob"
        className="absolute top-20 left-0 hidden h-64 w-64 text-mint/20 lg:block"
      />

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="relative rounded-[2rem] border border-mint/15 bg-[#0d0a36]/40 p-7 shadow-2xl shadow-black/10 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-muted mb-5">
              Sobre mí
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.15] text-ink text-balance">
              Una presencia humana para acompañar tu{' '}
              <span className="font-accent text-mint text-4xl sm:text-5xl font-normal">
                proceso
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-DEFAULT leading-relaxed">
              Soy Jess, humana estelar, médica multidimensional, mujer, activadora de potencialidades, canalizadora, y un largo etc.
            </p>
            <p className="mt-3 text-base text-gray-DEFAULT leading-relaxed">
              Mi servicio comenzó con la Medicina Tradicional, pero llegando a la recta final de la carrera comencé a sentir un vacío existencial…ese conocimiento no me terminaba de responder a todas mis interrogantes y sobre todo, no acompañaba a las personas como yo sentía que debía hacerlo.
              <br />
              Así y todo me recibí…y guardé el título en el ropero.
            </p>
            <p className="mt-3 text-base text-gray-DEFAULT leading-relaxed">
              Me inicié en registros akáshicos y comencé a canalizar toneladas de información con gran facilidad…sin dudas, era mi don, pero no lo creía demasiado entonces.
            </p>
            <p className="mt-3 text-base text-gray-DEFAULT leading-relaxed">
              Idas y vueltas entre realidades y dimensiones durante años me hicieron llegar a este punto de integración: ser una humana multidimensional (o estelar).
            </p>
            <p className="mt-3 text-base text-gray-DEFAULT leading-relaxed">
              Ese reconocimiento necesitó de un click enorme: permitirme ser como soy (y creeme que no fue nada fácil).
              <br />
              Los miedos eran intensos y profundos: “dejaré la solemnidad y me creerán poco profesional”…”si sigo estructurada todo se torna pesado y es un plomo escucharme”...
              <br />
              Pero le puse el cuerpo al asunto (literal y figuradamente) y comencé a aplicar en mi esa medicina más auténtica…y voilà!
            </p>
            <p className="mt-3 text-base text-gray-DEFAULT leading-relaxed">
              Acá estoy, hablando de tecnologías de luz, anatomía y crecimiento personal, con muchas analogías y algún que otro meme de por medio…porque hacer de la reprogramación algo simple y liviano es mi objetivo (y es como lo vivo).
            </p>
            <p className="mt-3 text-base text-gray-DEFAULT leading-relaxed">
              Bienvenidx a este universo multidimensional! Pasá que siempre hay lugar para unx más
            </p>
            <p className="mt-3 text-base text-gray-DEFAULT leading-relaxed">
              Con 🤍, Jess ✨
            </p>
            <DecorativeShape
              variant="arc"
              className="absolute -bottom-6 -right-5 h-28 w-28 text-mint/40"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
