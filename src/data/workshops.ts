import { workshopPhotos, type Photo } from './gallery';

export interface Workshop {
  slug: string;
  title: string;
  category: string;
  color: 'berry' | 'blush' | 'lilac' | 'paper';
  cover?: Photo;
  verifiedStatus: 'referencia' | 'disponible';
  description: string;
  learningOutcomes: string[];
  format: 'Presencial';
  duration?: string;
  nextDate?: { iso: string; label: string };
  price?: string;
  materialsIncluded?: string;
  venue?: string;
  level?: string;
  whatsAppPrefill: string;
  sourceRefs: string[];
  updatedAt: string;
}

export const workshops: Workshop[] = [
  {
    slug: 'tortas-en-chantilly',
    title: 'Tortas en chantilly',
    category: 'Tortas',
    color: 'berry',
    cover: workshopPhotos.chantilly,
    verifiedStatus: 'referencia',
    description: 'Un temario de kekes para tortas en chantilly, con tres sabores y distintas formas de preparar la masa.',
    learningOutcomes: ['Keke de chocolate.', 'Keke de vainilla con frutos secos.', 'Keke de naranja.'],
    format: 'Presencial',
    whatsAppPrefill: 'Hola, ¿habrá una próxima edición del taller de tortas en chantilly? Quisiera información sobre fecha y condiciones.',
    sourceRefs: ['F04'],
    updatedAt: '2026-11-23',
  },
  {
    slug: 'empanadas',
    title: 'Masas y rellenos de empanadas',
    category: 'Masas saladas',
    color: 'blush',
    cover: workshopPhotos.empanadas,
    verifiedStatus: 'referencia',
    description: 'Preparación de la masa y dos rellenos salados para empanadas, a partir del temario de Risco.',
    learningOutcomes: ['Preparación y reposo de la masa.', 'Relleno de pollo.', 'Relleno de carne.'],
    format: 'Presencial',
    whatsAppPrefill: 'Hola, ¿habrá una próxima edición del taller de empanadas? Quisiera información sobre fecha y condiciones.',
    sourceRefs: ['F05'],
    updatedAt: '2026-11-23',
  },
  {
    slug: 'festival-de-helados',
    title: 'Festival de helados',
    category: 'Postres fríos',
    color: 'lilac',
    cover: workshopPhotos.helados,
    verifiedStatus: 'referencia',
    description: 'Cremas base y combinaciones para preparar helados de distintos sabores.',
    learningOutcomes: ['Preparación de una crema base.', 'Helado de chocolate.', 'Helado de pie de limón.'],
    format: 'Presencial',
    whatsAppPrefill: 'Hola, ¿habrá una próxima edición del Festival de helados? Quisiera información sobre fecha y condiciones.',
    sourceRefs: ['F06'],
    updatedAt: '2026-11-23',
  },
  {
    slug: 'cremoladas-y-raspadillas',
    title: 'Cremoladas y raspadillas',
    category: 'Preparaciones de fruta',
    color: 'paper',
    cover: workshopPhotos.cremoladas,
    verifiedStatus: 'referencia',
    description: 'Preparaciones frías de fruta y jarabes para servir con hielo raspado.',
    learningOutcomes: ['Cremoladas de fresa, guanábana, mango y maracuyá.', 'Preparación de raspadillas.', 'Jarabes de frutas como tamarindo, piña y mango.'],
    format: 'Presencial',
    whatsAppPrefill: 'Hola, ¿habrá una próxima edición del taller de cremoladas y raspadillas? Quisiera información sobre fecha y condiciones.',
    sourceRefs: ['F03'],
    updatedAt: '2026-11-23',
  },
];

export function isOpen(workshop: Workshop) {
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Lima' }).format(new Date());
  return workshop.verifiedStatus === 'disponible' && !!workshop.nextDate && workshop.nextDate.iso >= today;
}
