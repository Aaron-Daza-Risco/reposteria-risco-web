interface SiteContent {
  name: string;
  socialName: string;
  city: string;
  region: string;
  country: string;
  facebookUrl: string;
  whatsapp: { number: string; display: string };
  venue?: { address: string; mapsUrl: string };
}

export const site: SiteContent = {
  name: 'Escuela de Repostería Risco',
  socialName: 'Nathaly Pastelería Creativa',
  city: 'Chimbote',
  region: 'Áncash',
  country: 'Perú',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100063596920257',
  whatsapp: { number: '51972411665', display: '+51 972 411 665' },
  venue: {
    address: 'Jr. Elías Aguirre 1168',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Jr.%20El%C3%ADas%20Aguirre%201168%2C%20Chimbote%2C%20%C3%81ncash%2C%20Per%C3%BA',
  },
};

export const generalMessage = 'Hola, quisiera información sobre las próximas fechas de los talleres de repostería en Chimbote.';

export const venueMessage = 'Hola, ¿podrían indicarme dónde se dicta el próximo taller de repostería en Chimbote?';

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const registration = [
  { title: 'Elige un tema', detail: 'Revisa el temario y escríbenos por WhatsApp con el nombre del taller que te interesa.' },
  { title: 'Confirma las condiciones', detail: 'Pregunta por fecha, cupo, precio, qué incluye y dónde se dicta la clase.' },
  { title: 'Coordina tu inscripción', detail: 'Cuando tengas toda la información, coordina directamente con la escuela.' },
];

export const faqs = [
  { question: '¿Cuándo es el próximo taller?', answer: 'Escríbenos con el tema que te interesa para consultar la próxima fecha y la disponibilidad.' },
  { question: '¿Necesito experiencia previa?', answer: 'Consulta el nivel del taller antes de inscribirte y cuéntanos si sería tu primera clase.' },
  { question: '¿Qué materiales debo llevar?', answer: 'Pregunta qué insumos y utensilios incluye la clase y cuáles debes llevar.' },
  {
    question: '¿Dónde se dictan las clases?',
    answer: site.venue
      ? `Los talleres son presenciales en ${site.city}. Usa el enlace de la sección Ubicación para abrir la ruta en Google Maps.`
      : `Los talleres son presenciales en ${site.city}. Solicita la dirección y una referencia antes de asistir.`,
  },
  { question: '¿Cómo me inscribo?', answer: 'Escríbenos por WhatsApp para confirmar las condiciones y coordinar tu inscripción directamente con la escuela.' },
];
