import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, MapPin, Phone, Clock, Instagram, Facebook, Twitter, ChevronRight, Star, Check, ChevronDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-2xl font-serif font-semibold tracking-tight text-stone-900">
          Wellness & Spa
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {['Tentang Kami', 'Layanan', 'Fasilitas', 'Galeri', 'Kontak'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-stone-700 hover:text-sage-600 transition-colors duration-300 font-medium"
            >
              {item}
            </a>
          ))}
          <a href="#kontak" className="btn-primary text-sm">
            Reservasi
          </a>
        </nav>

        <button
          className="md:hidden text-stone-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-50 border-t border-stone-200 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-6">
              {['Tentang Kami', 'Layanan', 'Fasilitas', 'Galeri', 'Kontak'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-stone-700 hover:text-sage-600"
                >
                  {item}
                </a>
              ))}
              <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center">
                Reservasi Sekarang
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20spa%20treatment%20room%20with%20candles%20and%20plants%2C%20serene%20ambiance%2C%20soft%20natural%20lighting&image_size=landscape_16_9"
          alt="Wellness & Spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/40 to-transparent" />
      </div>

      <div className="container-custom relative z-10 pt-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sage-300 font-medium tracking-[0.3em] uppercase mb-6"
          >
            Experience True Wellness
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold leading-tight mb-8"
          >
            Temukan Ketenangan Jiwa & Raga
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-stone-200 mb-10 leading-relaxed"
          >
            Perjalanan menuju kesejahteraan holistik dimulai di sini. Kombinasi tradisi penyembuhan kuno dan teknologi modern untuk menciptakan pengalaman tak terlupakan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#kontak" className="btn-primary bg-white text-stone-900 hover:bg-sage-600 hover:text-white">
              Reservasi Sekarang
            </a>
            <a href="#layanan" className="btn-outline border-white text-white hover:bg-white hover:text-stone-900">
              Lihat Layanan
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}

function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="tentang-kami" className="section-padding bg-stone-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20spa%20interior%20design%2C%20minimalist%20japanese%20style%2C%20natural%20materials%2C%20calm%20atmosphere&image_size=portrait_4_3"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sage-600/10 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sage-600 font-medium tracking-[0.2em] uppercase mb-4">
              Tentang Kami
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-900 mb-8">
              Harmony of Mind, Body & Soul
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Selama lebih dari satu dekade, Wellness & Spa telah menjadi destinasi utama bagi mereka yang mencari ketenangan dan penyembuhan. Kami percaya bahwa kesejahteraan sejati dimulai dari keseimbangan antara pikiran, tubuh, dan jiwa.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Setiap perawatan dirancang dengan cermat oleh terapis profesional kami, menggunakan bahan-bahan alami terbaik dan teknik-teknik penyembuhan yang telah teruji.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {[
                { number: '15+', label: 'Tahun Pengalaman' },
                { number: '50K+', label: 'Klien Puas' },
                { number: '30+', label: 'Perawatan' },
                { number: '24/7', label: 'Reservasi' }
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-sage-600 pl-4">
                  <p className="text-4xl font-serif font-semibold text-stone-900">{stat.number}</p>
                  <p className="text-stone-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      name: 'Signature Massage',
      description: 'Kombinasi unik teknik pijat tradisional dan modern yang disesuaikan dengan kebutuhan tubuh Anda.',
      duration: '90 - 120 menit',
      price: '270.000',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20relaxing%20massage%20treatment%2C%20calm%20spa%20room%2C%20soft%20lighting&image_size=square_hd'
    },
    {
      name: 'Foot Reflexology',
      description: 'Perawatan refleksi kaki yang merangsang titik-titik energi untuk meningkatkan sirkulasi dan kesehatan.',
      duration: '90 menit',
      price: '175.000',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=foot%20reflexology%20treatment%2C%20spa%20setting%2C%20relaxing%20atmosphere&image_size=square_hd'
    },
    {
      name: 'Deep Tissue Healing',
      description: 'Perawatan intensif untuk mengatasi ketegangan otot dan nyeri kronis dengan teknik pijat mendalam.',
      duration: '90 menit',
      price: '310.000',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=deep%20tissue%20massage%2C%20professional%20therapist%2C%20spa%20environment&image_size=square_hd'
    },
    {
      name: 'Hot Stone Therapy',
      description: 'Terapi menggunakan batu basalt hangat untuk melepaskan ketegangan dan meningkatkan relaksasi.',
      duration: '90 menit',
      price: '350.000',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=hot%20stone%20massage%2C%20luxury%20spa%2C%20relaxing%20experience&image_size=square_hd'
    },
    {
      name: 'Body Scrub & Wrap',
      description: 'Perawatan eksfoliasi dan wrap dengan bahan alami untuk kulit yang lembut dan bercahaya.',
      duration: '60 menit',
      price: '165.000',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=body%20scrub%20treatment%2C%20natural%20ingredients%2C%20spa%20salon&image_size=square_hd'
    },
    {
      name: 'Facial Treatment',
      description: 'Perawatan wajah premium dengan produk organik untuk meremajakan dan menutrisi kulit.',
      duration: '60 - 90 menit',
      price: '250.000',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=facial%20treatment%2C%20luxury%20spa%2C%20professional%20skincare&image_size=square_hd'
    }
  ]

  return (
    <section id="layanan" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sage-600 font-medium tracking-[0.2em] uppercase mb-4">
            Layanan Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-900 mb-6">
            Signature Treatments
          </h2>
          <p className="text-stone-600 text-lg">
            Pilih perawatan yang sesuai dengan kebutuhan Anda dan rasakan transformasi menuju kesejahteraan sejati.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover bg-stone-50 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <div>
                    <p className="text-stone-500 text-sm mb-1">{service.duration}</p>
                    <p className="text-2xl font-serif font-semibold text-sage-600">
                      Rp {service.price}
                    </p>
                  </div>
                  <a href="#kontak" className="text-sage-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Pesan <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Philosophy() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const principles = [
    {
      title: 'Balance',
      description: 'Menciptakan keseimbangan harmonis antara elemen alam dan tubuh manusia.',
      icon: '🌿'
    },
    {
      title: 'Purity',
      description: 'Hanya menggunakan bahan-bahan alami terbaik dan organik.',
      icon: '✨'
    },
    {
      title: 'Tranquility',
      description: 'Lingkungan yang tenang dan menenangkan untuk penyembuhan optimal.',
      icon: '🕊️'
    },
    {
      title: 'Renewal',
      description: 'Proses transformasi menuju versi terbaik dari diri Anda.',
      icon: '🌸'
    }
  ]

  return (
    <section className="section-padding bg-sage-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sage-600 font-medium tracking-[0.2em] uppercase mb-4">
            Filosofi Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-900">
            Wellness Philosophy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8"
            >
              <div className="text-6xl mb-6">{principle.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-4">
                {principle.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Facilities() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const facilities = [
    { name: 'Private Treatment Rooms', desc: 'Ruang perawatan pribadi dengan desain elegan', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=private%20spa%20treatment%20room%2C%20elegant%20design%2C%20calm%20lighting&image_size=square_hd' },
    { name: 'Relaxation Lounge', desc: 'Area relaksasi untuk sebelum dan sesudah perawatan', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=relaxation%20lounge%20spa%2C%20comfortable%20seating%2C%20minimalist%20design&image_size=square_hd' },
    { name: 'Steam Room', desc: 'Sauna dan steam room untuk detoksifikasi', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20steam%20room%20spa%2C%20natural%20stone%20design&image_size=square_hd' },
    { name: 'Jacuzzi', desc: 'Jacuzzi hangat dengan pemandangan menenangkan', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20jacuzzi%20spa%2C%20outdoor%20setting%2C%20natural%20surroundings&image_size=square_hd' },
    { name: 'Herbal Tea Bar', desc: 'Pilihan teh herbal organik untuk penyegaran', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=herbal%20tea%20bar%20spa%2C%20natural%20ingredients%2C%20cozy%20atmosphere&image_size=square_hd' },
    { name: 'Garden Terrace', desc: 'Teras taman dengan nuansa alami', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=garden%20terrace%20spa%2C%20lush%20plants%2C%20peaceful%20setting&image_size=square_hd' }
  ]

  return (
    <section id="fasilitas" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sage-600 font-medium tracking-[0.2em] uppercase mb-4">
            Fasilitas
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-900 mb-6">
            Our Facilities
          </h2>
          <p className="text-stone-600 text-lg">
            Nikmati fasilitas premium kami yang dirancang untuk melengkapi pengalaman wellness Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-serif font-semibold mb-2">{facility.name}</h3>
                <p className="text-stone-200">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const testimonials = [
    {
      name: 'Sarah Wijaya',
      role: 'Regular Customer',
      quote: 'Pengalaman yang luar biasa! Dari saat memasuki pintu, saya langsung merasa tenang. Terapisnya sangat profesional dan perawatannya sempurna.',
      rating: 5
    },
    {
      name: 'Michael Tan',
      role: 'Executive',
      quote: 'Tempat terbaik untuk melepas penat setelah hari kerja yang panjang. Desain interiornya sangat elegan dan menenangkan.',
      rating: 5
    },
    {
      name: 'Dewi Lestari',
      role: 'Wellness Enthusiast',
      quote: 'Sudah mencoba banyak spa, tapi ini yang terbaik. Kombinasi teknik tradisional dan modern sangat tepat. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-stone-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sage-600 font-medium tracking-[0.2em] uppercase mb-4">
            Testimoni
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-900">
            Apa Kata Mereka
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 card-hover"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-sage-600 text-sage-600" />
                ))}
              </div>
              <p className="text-stone-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-600/20 flex items-center justify-center text-sage-600 font-serif text-xl font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-stone-900">{testimonial.name}</p>
                  <p className="text-stone-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Bagaimana cara melakukan reservasi?',
      answer: 'Anda dapat melakukan reservasi melalui WhatsApp, telepon, atau langsung datang ke lokasi kami. Kami menyarankan untuk reservasi minimal 1 hari sebelumnya untuk ketersediaan yang lebih baik.'
    },
    {
      question: 'Apakah ada paket khusus untuk pasangan?',
      answer: 'Ya, kami menyediakan paket Couple Retreat yang mencakup perawatan untuk dua orang di ruangan pribadi dengan fasilitas eksklusif.'
    },
    {
      question: 'Apa yang harus dipersiapkan sebelum datang?',
      answer: 'Datanglah 15-30 menit sebelum jadwal untuk bersiap-siap. Gunakan pakaian yang nyaman dan hindari makan berat 1 jam sebelum perawatan.'
    },
    {
      question: 'Apakah tersedia gift voucher?',
      answer: 'Tentu saja! Gift voucher kami merupakan hadiah yang sempurna untuk orang tersayang. Tersedia dalam berbagai nominal dan paket.'
    },
    {
      question: 'Apakah ada kebijakan pembatalan?',
      answer: 'Pembatalan dapat dilakukan maksimal 6 jam sebelum jadwal. Pembatalan mendadak atau no-show akan dikenakan biaya 50% dari harga perawatan.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sage-600 font-medium tracking-[0.2em] uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-900">
            Pertanyaan Umum
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-stone-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-stone-900">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-sage-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-stone-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const locations = [
    {
      name: 'Cabang Pusat',
      address: 'Jl. Sudirman No. 123, Jakarta Pusat',
      phone: '+62 21 1234 5678',
      whatsapp: '6281234567890'
    },
    {
      name: 'Cabang Selatan',
      address: 'Jl. Senopati No. 45, Jakarta Selatan',
      phone: '+62 21 8765 4321',
      whatsapp: '6281987654321'
    }
  ]

  return (
    <section id="kontak" className="section-padding bg-stone-900 text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sage-400 font-medium tracking-[0.2em] uppercase mb-4">
            Kontak
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Mulai Perjalanan Wellness Anda
          </h2>
          <p className="text-stone-300 text-lg">
            Hubungi kami untuk reservasi atau informasi lebih lanjut.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-stone-800 p-8"
                >
                  <h3 className="text-xl font-serif font-semibold mb-4 text-sage-400">
                    {location.name}
                  </h3>
                  <div className="space-y-3 text-stone-300">
                    <p className="flex items-start gap-3">
                      <MapPin size={20} className="text-sage-400 shrink-0 mt-0.5" />
                      {location.address}
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone size={20} className="text-sage-400 shrink-0" />
                      {location.phone}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${location.whatsapp}?text=Halo Wellness & Spa, saya ingin melakukan reservasi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sage-400 font-medium hover:text-sage-300"
                  >
                    <Calendar size={18} />
                    Reservasi via WhatsApp
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-stone-800 p-8"
            >
              <h3 className="text-xl font-serif font-semibold mb-4 text-sage-400">
                Jam Operasional
              </h3>
              <div className="space-y-2 text-stone-300">
                <p className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium">09:00 - 22:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sabtu - Minggu</span>
                  <span className="font-medium">08:00 - 23:00</span>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-stone-800 p-10"
          >
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-300 mb-2 text-sm">Nama</label>
                  <input
                    type="text"
                    className="w-full bg-stone-700 border border-stone-600 px-4 py-3 text-white focus:outline-none focus:border-sage-500 transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 mb-2 text-sm">Telepon</label>
                  <input
                    type="tel"
                    className="w-full bg-stone-700 border border-stone-600 px-4 py-3 text-white focus:outline-none focus:border-sage-500 transition-colors"
                    placeholder="No. Telepon"
                  />
                </div>
              </div>
              <div>
                <label className="block text-stone-300 mb-2 text-sm">Layanan yang Diinginkan</label>
                <select className="w-full bg-stone-700 border border-stone-600 px-4 py-3 text-white focus:outline-none focus:border-sage-500 transition-colors">
                  <option>Pilih layanan...</option>
                  <option>Signature Massage</option>
                  <option>Foot Reflexology</option>
                  <option>Deep Tissue Healing</option>
                  <option>Hot Stone Therapy</option>
                  <option>Body Scrub & Wrap</option>
                  <option>Facial Treatment</option>
                </select>
              </div>
              <div>
                <label className="block text-stone-300 mb-2 text-sm">Pesan</label>
                <textarea
                  rows={4}
                  className="w-full bg-stone-700 border border-stone-600 px-4 py-3 text-white focus:outline-none focus:border-sage-500 transition-colors resize-none"
                  placeholder="Pesan Anda..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full bg-sage-600 hover:bg-sage-500"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-semibold text-white mb-4">
              Wellness & Spa
            </h3>
            <p className="leading-relaxed mb-6 max-w-md">
              Destinasi wellness premium yang menggabungkan tradisi penyembuhan kuno dengan teknologi modern untuk pengalaman tak terlupakan.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-sage-600 hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {['Tentang Kami', 'Layanan', 'Fasilitas', 'Galeri', 'Kontak'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-sage-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} />
                +62 21 1234 5678
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} />
                Daily 09:00 - 22:00
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center">
          <p>&copy; 2024 Wellness & Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <Facilities />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
