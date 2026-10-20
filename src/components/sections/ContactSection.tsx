import { MessageCircle, Mail, Instagram } from 'lucide-react';
import { CONTACTS } from '../../content';
import CTAButton from '../CTAButton';
import Reveal from '../Reveal';
import DecorativeShape from '../DecorativeShape';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative py-24 sm:py-32 bg-mint text-white overflow-hidden"
    >
      <DecorativeShape
        variant="wave"
        className="absolute top-0 inset-x-0 w-full h-16 text-white/20"
      />
      <DecorativeShape
        variant="leaf"
        className="absolute top-20 right-16 w-28 h-28 text-white/15 hidden sm:block"
      />

      <div className="mx-auto max-w-content px-5 sm:px-8 relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-bright mb-5">
            Contacto
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold leading-[1.1] text-balance">
            Empezá tu camino{' '}
            <span className="font-accent text-5xl sm:text-6xl text-mint-bright font-normal">
              multidimensional
            </span>
          </h2>
          <p className="mt-3 text-lg text-white/80 leading-relaxed">
            Si resonás con esta mirada, no lo guardes solo como teoría: escribime y charlemos.
          </p>
          <p className="mt-3 text-lg text-white/80 leading-relaxed">
            Te sorprenderá cómo una simple conversación puede activar el movimiento que estabas esperando.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 flex justify-center">
          <CTAButton
            href={CONTACTS.whatsappLink}
            variant="secondary"
            className="!border-white/40 !text-white hover:!bg-white/10"
          >
            <MessageCircle size={18} />
            Escribir por WhatsApp
          </CTAButton>
        </Reveal>

        <Reveal delay={250} className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a
              href={`mailto:${CONTACTS.email}`}
              className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors"
            >
              <Mail size={16} />
              {CONTACTS.email}
            </a>
            <span className="hidden sm:block w-px h-5 bg-white/20" />
            <a
              href={CONTACTS.instagramLink}
              className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors"
            >
              <Instagram size={16} />
              {CONTACTS.instagram}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
