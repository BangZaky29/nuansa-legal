import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, CheckCircle2, ArrowRight, Users, Briefcase, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import OurTeam from '../components/OurTeam';
import SEO from '../components/SEO';

import { useImages } from '../hooks/useImages';

const Home: React.FC = () => {
  const { images: heroImages } = useImages('hero');
  const { images: aboutImages } = useImages('about');

  const heroBg = heroImages.length > 0 ? heroImages[0].url : '';
  const aboutImg = aboutImages.length > 0 ? aboutImages[0].url : '';

  const stats = [
    { label: 'Klien Puas', value: '500+', icon: <Users className="text-primary" /> },
    { label: 'Proyek Selesai', value: '1.2k+', icon: <Briefcase className="text-primary" /> },
    { label: 'Tahun Pengalaman', value: '10+', icon: <Award className="text-primary" /> },
    { label: 'Legalitas Resmi', value: '100%', icon: <Scale className="text-primary" /> },
  ];

  const services = [
    {
      title: 'Pendirian PT',
      desc: 'Proses cepat dan transparan untuk mendirikan Perseroan Terbatas baik Lokal maupun PMA.',
      icon: <Shield className="w-8 h-8" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Pendirian CV',
      desc: 'Solusi hemat untuk mendirikan persekutuan komanditer bagi UMKM dan bisnis menengah.',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-yellow-500',
    },
    {
      title: 'Izin Usaha (NIB)',
      desc: 'Pengurusan NIB melalui sistem OSS RBA untuk kelancaran operasional bisnis Anda.',
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Beranda" 
        description="PT. NUANSA BERKAH SEJAHTERA adalah solusi terpercaya untuk pendirian PT, CV, Yayasan, dan perizinan usaha di Indonesia. Cepat, tepat, dan transparan."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {heroBg && (
            <img 
              src={heroBg} 
              alt="PT. NUANSA BERKAH SEJAHTERA Office" 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 border border-primary/30">
                #1 Jasa Legalitas Terpercaya
              </span>
              <h1 className="text-4xl md:text-7xl font-sen font-black text-white mb-6 leading-tight">
                Bangun Bisnis Anda <br />
                Dengan Pondasi <span className="text-primary italic">Legal</span> Yang Kuat
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
                PT. NUANSA BERKAH SEJAHTERA hadir sebagai mitra strategis dalam mengurus segala kebutuhan perizinan dan hukum perusahaan Anda. Cepat, tepat, dan tanpa ribet.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/layanan" className="bg-primary hover:bg-primary-dark text-secondary font-black py-4 px-10 rounded-xl shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2">
                  Mulai Sekarang <ArrowRight size={20} />
                </Link>
                <Link to="/kontak-kami" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-10 rounded-xl border border-white/20 transition-all">
                  Konsultasi Gratis
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-0 right-0 p-10 hidden lg:block">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-secondary">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <p className="text-white font-bold">Terverifikasi</p>
                <p className="text-gray-400 text-sm">Oleh Kemenkumham RI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-white relative z-20 -mt-16 mx-4 rounded-3xl shadow-xl border border-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2 border-r last:border-r-0 border-gray-100">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <h4 className="text-3xl md:text-4xl font-bold text-secondary font-sen">{stat.value}</h4>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-sen font-bold text-secondary mb-4">Layanan Legalitas Terintegrasi</h2>
              <p className="text-gray-600 text-lg">Kami menyediakan berbagai layanan perizinan yang disesuaikan dengan kebutuhan bisnis Anda di berbagai tingkatan.</p>
            </div>
            <Link to="/layanan" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all group">
              Lihat Semua Layanan <ArrowRight size={20} className="text-primary" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const waMessage = encodeURIComponent(`Halo PT. Nuansa Berkah Sejahtera, saya tertarik dengan layanan ${service.title}. ${service.desc} Bisa bantu jelaskan lebih lanjut prosedurnya?`);
              const waUrl = `https://wa.me/6289644448721?text=${waMessage}`;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-primary/30 transition-all"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">{service.desc}</p>
                  <Link 
                    to="/layanan"
                    className="text-secondary font-bold flex items-center gap-2 group-hover:text-primary transition-colors cursor-pointer"
                  >
                    Selengkapnya <ArrowRight size={18} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                {aboutImg && (
                  <img 
                    src={aboutImg} 
                    alt="Tentang PT. NUANSA BERKAH SEJAHTERA" 
                    className="w-full h-auto" 
                    loading="lazy"
                  />
                )}
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full z-0 blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full z-0 blur-3xl"></div>
              
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-2xl shadow-2xl z-20 hidden md:block">
                <p className="text-primary text-4xl font-bold mb-1">10+</p>
                <p className="text-white text-sm font-medium">Tahun Mengabdi <br /> Untuk Indonesia</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-sen font-bold text-secondary mb-6">Mitra Terpercaya Pendirian Usaha Anda</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  PT. NUANSA BERKAH SEJAHTERA didirikan dengan visi untuk menyederhanakan proses legalitas di Indonesia. Kami percaya bahwa setiap pengusaha berhak mendapatkan kemudahan dalam memulai dan menjalankan bisnis mereka.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Konsultasi gratis dengan pakar hukum',
                  'Proses transparan dan dapat dipantau',
                  'Biaya terjangkau tanpa biaya tersembunyi',
                  'Jaminan dokumen asli dan terverifikasi'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-secondary font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/kontak-kami" className="inline-block bg-secondary hover:bg-navy text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl">
                  Pelajari Tentang Kami
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <div className="bg-white">
        <OurTeam />
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-sen font-bold text-secondary mb-8 leading-tight">
                Siap Melangkah Ke Level <br className="hidden md:block" /> Berikutnya?
              </h2>
              <p className="text-secondary/80 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Jangan biarkan urusan birokrasi menghambat impian bisnis Anda. Hubungi kami sekarang dan biarkan kami yang mengurus semuanya.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://wa.me/6289644448721" 
                  className="bg-secondary hover:bg-navy text-white font-black py-5 px-12 rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center gap-3"
                >
                  <Users size={24} />
                  Hubungi Kami Via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

