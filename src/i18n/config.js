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
      stylists: {
        title: 'Our Stylists',
        description: 'Meet our talented team of hair artists dedicated to bringing your vision to life.',
        seniorStylist: 'Senior Stylist',
        colorSpecialist: 'Color Specialist',
        masterStylist: 'Master Stylist',
        stylist: 'Stylist'
      },
      testimonials: {
        title: 'What Our Clients Say',
        review1: 'Best salon experience I\'ve ever had. Emma completely transformed my hair and the atmosphere was so relaxing.',
        review2: 'I\'ve been coming here for two years and wouldn\'t go anywhere else. Consistently amazing results every time.',
        review3: 'The team here is incredibly skilled and attentive. They really listen to what you want and deliver beyond expectations.'
      },
      contact: {
        title: 'Get In Touch',
        description: 'Have questions or ready to book? Send us a message and we\'ll get back to you within 24 hours.',
        info: 'Contact Information',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Opening Hours',
        weekdays: 'Monday - Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        closed: 'Closed',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          message: 'Your Message',
          submit: 'Send Message'
        }
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
      stylists: {
        title: 'Stilistlerimiz',
        description: 'Hayallerinizi gerçeğe dönüştürmeye adanmış yetenekli saç sanatçıları ekibimizle tanışın.',
        seniorStylist: 'Kıdemli Stilist',
        colorSpecialist: 'Renk Uzmanı',
        masterStylist: 'Usta Stilist',
        stylist: 'Stilist'
      },
      testimonials: {
        title: 'Müşterilerimiz Ne Diyor',
        review1: 'Şimdiye kadarki en iyi kuaför deneyimim. Emma saçımı tamamen değiştirdi ve atmosfer çok rahatlatıcıydı.',
        review2: 'İki yıldır buraya geliyorum ve başka bir yere gitmem. Her seferinde sürekli olarak harika sonuçlar.',
        review3: 'Buradaki ekip inanılmaz yetenekli ve özenli. Gerçekten ne istediğinizi dinliyorlar ve beklentilerin ötesinde sonuçlar veriyorlar.'
      },
      contact: {
        title: 'İletişime Geçin',
        description: 'Sorularınız mı var veya randevu almaya hazır mısınız? Bize mesaj gönderin, 24 saat içinde size geri döneceğiz.',
        info: 'İletişim Bilgileri',
        address: 'Adres',
        phone: 'Telefon',
        email: 'E-posta',
        hours: 'Çalışma Saatleri',
        weekdays: 'Pazartesi - Cuma',
        saturday: 'Cumartesi',
        sunday: 'Pazar',
        closed: 'Kapalı',
        form: {
          name: 'Ad Soyad',
          email: 'E-posta Adresi',
          phone: 'Telefon Numarası',
          message: 'Mesajınız',
          submit: 'Mesaj Gönder'
        }
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
