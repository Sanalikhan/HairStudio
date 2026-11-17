import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        services: 'Services',
        stylists: 'Stylists',
        gallery: 'Gallery',
        contact: 'Contact',
        bookNow: 'Book Now'
      },
      hero: {
        tag: 'Hair & Colour Studio',
        title: 'Hair,',
        titleEm: 'thoughtfully',
        titleEnd: 'done.',
        description: 'A calm, modern studio for cuts, colour and care. Book your appointment online in under a minute.',
        cta: 'Book Appointment',
        rating: '4.9 ★',
        ratingText: 'from 2,300+ clients'
      },
      services: {
        title: 'Our Services',
        cutTitle: 'Cut & Style',
        cutDesc: 'Precision cuts tailored to your face and lifestyle.',
        cutPrice: 'from $45',
        colorTitle: 'Colour',
        colorDesc: 'Balayage, highlights and natural tones.',
        colorPrice: 'from $90',
        treatmentTitle: 'Treatments',
        treatmentDesc: 'Deep conditioning and keratin smoothing.',
        treatmentPrice: 'from $60'
      },
      booking: {
        title: 'Ready for a fresh look?',
        description: "Pick a time that suits you. We'll send a reminder before your visit.",
        cta: 'Book Appointment'
      },
      footer: {
        copyright: '© 2026 Lumière Hair Studio. All rights reserved.'
      }
    }
  },
  tr: {
    translation: {
      nav: {
        services: 'Hizmetler',
        stylists: 'Stilistler',
        gallery: 'Galeri',
        contact: 'İletişim',
        bookNow: 'Randevu Al'
      },
      hero: {
        tag: 'Saç & Renk Stüdyosu',
        title: 'Saç,',
        titleEm: 'özenle',
        titleEnd: 'yapılır.',
        description: 'Kesim, renk ve bakım için sakin, modern bir stüdyo. Randevunuzu bir dakikadan kısa sürede online olarak ayarlayın.',
        cta: 'Randevu Ayarla',
        rating: '4.9 ★',
        ratingText: '2.300+ müşteriden'
      },
      services: {
        title: 'Hizmetlerimiz',
        cutTitle: 'Kesim & Şekillendirme',
        cutDesc: 'Yüzünüze ve yaşam tarzınıza özel hassas kesimler.',
        cutPrice: '45 TL\'den',
        colorTitle: 'Renklendirme',
        colorDesc: 'Balayage, röfle ve doğal tonlar.',
        colorPrice: '90 TL\'den',
        treatmentTitle: 'Bakım',
        treatmentDesc: 'Derin krem banyosu ve keratin bakımı.',
        treatmentPrice: '60 TL\'den'
      },
      booking: {
        title: 'Yeni bir görünüme hazır mısınız?',
        description: 'Size uygun bir zaman seçin. Ziyaretinizden önce size hatırlatma göndereceğiz.',
        cta: 'Randevu Ayarla'
      },
      footer: {
        copyright: '© 2026 Lumière Saç Stüdyosu. Tüm hakları saklıdır.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
