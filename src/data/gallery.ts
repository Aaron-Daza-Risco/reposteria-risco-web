import type { ImageMetadata } from 'astro';
import cremoladas from '../assets/cremoladas-de-fruta.webp';
import detalle from '../assets/detalle-manga-pastelera.webp';
import empanadas from '../assets/empanadas-horneadas.webp';
import helados from '../assets/helados-en-canastas.webp';
import mesa from '../assets/mesa-decoracion-en-proceso.webp';
import portada from '../assets/portada-tortas-florales.webp';
import crema from '../assets/tortas-con-crema.webp';
import proyectos from '../assets/tortas-decoradas-en-mesa.webp';

export interface Photo {
  image: ImageMetadata;
  alt: string;
  caption: string;
  position?: string;
}

export const photography: { hero: Photo; gallery: Photo[] } = {
  hero: {
    image: portada,
    alt: 'Tortas sobre bases giratorias, decoradas con flores y ondas de crema amarilla, rosa y naranja',
    caption: 'Tortas elaboradas en una clase de decoración de Risco.',
    position: '53% center',
  },
  gallery: [
    {
      image: mesa,
      alt: 'Tortas a medio decorar junto a mangas pasteleras, un batidor y utensilios sobre la mesa',
      caption: 'La mesa de trabajo durante la práctica de decoración.',
      position: '58% center',
    },
    {
      image: detalle,
      alt: 'Torta blanca con una rosa roja y ondas de crema fucsia y naranja',
      caption: 'Detalle de las ondas trazadas con manga pastelera.',
      position: 'center 29%',
    },
    {
      image: proyectos,
      alt: 'Varias tortas pequeñas con figuras de colores alineadas sobre bases giratorias',
      caption: 'Proyectos terminados, alineados en la mesa del taller.',
      position: '56% center',
    },
  ],
};

export const workshopPhotos: Record<'chantilly' | 'empanadas' | 'helados' | 'cremoladas', Photo> = {
  chantilly: {
    image: crema,
    alt: 'Tortas con coberturas de crema, fresas y chocolate en la mesa de la escuela',
    caption: 'Tortas con crema del archivo de Risco.',
    position: '34% center',
  },
  empanadas: {
    image: empanadas,
    alt: 'Empanadas doradas con sésamo y bordes repulgados en bandejas',
    caption: 'Empanadas horneadas del archivo de Risco.',
  },
  helados: {
    image: helados,
    alt: 'Porciones de helado servidas en canastas de barquillo sobre una bandeja granate',
    caption: 'Helados del archivo de Risco.',
  },
  cremoladas: {
    image: cremoladas,
    alt: 'Cremoladas de distintos colores servidas en vasos junto a jarras de fruta',
    caption: 'Cremoladas servidas en la mesa del taller.',
  },
};
