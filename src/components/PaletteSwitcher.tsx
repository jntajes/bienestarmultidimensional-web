import { useEffect, useState } from 'react';

const PALETTES = [
  {
    id: 'azul-estelar',
    name: 'Azul estelar',
    description: 'Fiel al azul del logo, claro y sereno.',
    colors: ['#153A79', '#406FB5', '#CBE2F1', '#FCFDFF'],
  },
  {
    id: 'noche-cosmica',
    name: 'Noche cósmica',
    description: 'Más profundo y contemplativo.',
    colors: ['#112D5B', '#4D88D3', '#C7D8F0', '#F9FBFF'],
  },
  {
    id: 'azul-tierra',
    name: 'Azul y tierra',
    description: 'Un acento cálido para una presencia más terrenal.',
    colors: ['#27477A', '#A97052', '#DCDDE8', '#FFFDFA'],
  },
  {
    id: 'noche-mistica',
    name: 'Noche mística',
    description: 'Azul tinta, violeta y luz suave para una atmósfera ritual.',
    colors: ['#0E1023', '#5B4BA0', '#B48EFF', '#F6F3FF'],
  },
] as const;

type PaletteId = (typeof PALETTES)[number]['id'];

export default function PaletteSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<PaletteId>('azul-estelar');

  useEffect(() => {
    document.documentElement.dataset.palette = selected;
  }, [selected]);

  return (
    <aside className="fixed bottom-5 right-5 z-[60] max-w-[calc(100vw-2.5rem)]">
      {open && (
        <div id="palette-options" className="mb-3 w-80 rounded-2xl border border-mint/20 bg-cream p-4 shadow-xl shadow-ink/10">
          <div className="mb-3">
            <p className="text-sm font-semibold text-ink">Paletas para revisar</p>
            <p className="mt-1 text-xs leading-relaxed text-gray-DEFAULT">
              Elegí una opción para previsualizarla en todo el sitio.
            </p>
          </div>
          <div className="space-y-2">
            {PALETTES.map((palette) => (
              <button
                key={palette.id}
                type="button"
                onClick={() => setSelected(palette.id)}
                className={`w-full rounded-xl border p-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint ${
                  selected === palette.id
                    ? 'border-mint bg-mint-lighter/50'
                    : 'border-gray-light hover:border-mint/40'
                }`}
                aria-pressed={selected === palette.id}
              >
                <span className="flex items-center justify-between gap-3">
                  <span>
                    <span className="block text-sm font-semibold text-ink">{palette.name}</span>
                    <span className="mt-0.5 block text-xs text-gray-DEFAULT">{palette.description}</span>
                  </span>
                  <span className="flex shrink-0 overflow-hidden rounded-full border border-ink/10">
                    {palette.colors.map((color) => (
                      <span key={color} className="h-5 w-5" style={{ backgroundColor: color }} />
                    ))}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="palette-trigger ml-auto flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-controls="palette-options"
      >
        <span className="flex gap-1" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#153A79]" />
          <span className="h-3 w-3 rounded-full bg-[#406FB5]" />
          <span className="h-3 w-3 rounded-full bg-[#A97052]" />
        </span>
        Ver paletas
      </button>
    </aside>
  );
}
