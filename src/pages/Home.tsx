import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, CheckCircle2, ArrowRight, Users, Briefcase, Scale, MessageSquare, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import FAQ from '../components/FAQ';
import OurTeam from '../components/OurTeam';
import SEO from '../components/SEO';

import { useImages } from '../hooks/useImages';
import { useArticles, getFallbackImage } from '../hooks/useArticles';

const Home: React.FC = () => {
  const { images: heroImages } = useImages('hero');
  const { images: aboutImages } = useImages('about');
  const { articles, loading: loadingArticles } = useArticles();
  const navigate = useNavigate();
  const [certSearchQuery, setCertSearchQuery] = useState('');

  const handleCertSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (certSearchQuery.trim()) {
      navigate(`/verifikasi?q=${encodeURIComponent(certSearchQuery.trim())}`);
    }
  };

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -344 : 344;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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

  const sertifikasiList = [
    { title: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu', icon: '🏆', path: '/sertifikasi/iso-9001' },
    { title: 'ISO 14001:2015', desc: 'Sistem Manajemen Lingkungan', icon: '🌿', path: '/sertifikasi/iso-14001' },
    { title: 'ISO 45001:2018', desc: 'Sistem Manajemen K3', icon: '👷', path: '/sertifikasi/iso-45001' },
    { title: 'ISO 37001:2016', desc: 'Sistem Manajemen Anti Penyuapan', icon: '⚖️', path: '/sertifikasi/iso-37001' },
    { title: 'ISO 27001:2022', desc: 'Sistem Manajemen Keamanan Informasi', icon: '🔒', path: '/sertifikasi/iso-27001' },
    { title: 'ISO 50001:2018', desc: 'Sistem Manajemen Energi', icon: '⚡', path: '/sertifikasi/iso-50001' },
    { title: 'ISO 13485:2016', desc: 'Sistem Manajemen Alat Kesehatan', icon: '🏥', path: '/sertifikasi/iso-13485' },
    { title: 'ISO 22000:2018', desc: 'Sistem Manajemen Keamanan Pangan', icon: '🍽️', path: '/sertifikasi/iso-22000' },
    { title: 'ISO 21001:2018', desc: 'Sistem Manajemen Pendidikan', icon: '🎓', path: '/sertifikasi/iso-21001' }
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

      {/* Latest Articles Section */}
      <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20">
                Wawasan Hukum
              </span>
              <h2 className="text-3xl md:text-5xl font-sen font-bold text-secondary mb-4">Wawasan & Edukasi Hukum</h2>
              <p className="text-gray-600 text-lg">Dapatkan informasi terkini seputar hukum bisnis, perizinan, dan regulasi di Indonesia.</p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 shrink-0 mt-4 md:mt-0">
              <div className="hidden md:flex items-center gap-2">
                <button 
                  onClick={() => scrollSlider('left')}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-secondary hover:border-primary transition-all shadow-sm"
                  aria-label="Geser ke kiri"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => scrollSlider('right')}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-secondary hover:border-primary transition-all shadow-sm"
                  aria-label="Geser ke kanan"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <Link to="/artikel" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all group ml-0 md:ml-4">
                Lihat Semua Artikel <ArrowRight size={20} className="text-primary" />
              </Link>
            </div>
          </motion.div>

          <div ref={sliderRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
            {loadingArticles ? (
              [...Array(4)].map((_, i) => (
                <div key={i} className="w-[85vw] sm:w-[300px] md:w-[320px] snap-center bg-gray-100 rounded-3xl h-96 animate-pulse shrink-0"></div>
              ))
            ) : articles.length > 0 ? (
              articles.slice(0, 5).map((article, idx) => {
                const fallback = getFallbackImage(article.title, idx);
                return (
                  <motion.a
                    key={idx}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="w-[85vw] sm:w-[300px] md:w-[320px] snap-center group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col shrink-0"
                  >
                    <div className="relative h-48 overflow-hidden shrink-0">
                      <img 
                        src={article.image || fallback} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = fallback;
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md text-secondary text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                          {article.source.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-sen font-bold text-secondary text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
                        {article.description}
                      </p>
                      <span className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:text-primary group-hover:gap-3 transition-all mt-auto">
                        Baca Selengkapnya <ArrowRight size={16} />
                      </span>
                    </div>
                  </motion.a>
                );
              })
            ) : (
              <div className="w-full text-center py-10 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-500">Artikel belum tersedia saat ini.</p>
              </div>
            )}
          </div>
        </div>
      </section>

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
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/layanan"
                      className="text-secondary font-bold flex items-center gap-2 group-hover:text-primary transition-colors cursor-pointer"
                    >
                      Selengkapnya <ArrowRight size={18} />
                    </Link>
                    <a 
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all shadow-sm"
                      title="Chat WhatsApp"
                    >
                      <MessageSquare size={18} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sertifikasi Grid Section */}
      <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20">
              Standar Internasional
            </span>
            <h2 className="text-3xl md:text-5xl font-sen font-bold text-secondary mb-4">Layanan Sertifikasi</h2>
            <p className="text-gray-600 text-lg mb-8">Tingkatkan kredibilitas dan kepercayaan pelanggan terhadap bisnis Anda dengan sertifikasi standar internasional.</p>
            
            <form onSubmit={handleCertSearch} className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto shadow-xl p-2 bg-white rounded-3xl border border-gray-100">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={certSearchQuery}
                  onChange={(e) => setCertSearchQuery(e.target.value)}
                  placeholder="Cek Sertifikat (Contoh: NL-2026-9001...)"
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 text-sm md:text-base font-medium"
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-secondary font-bold py-3 px-6 rounded-2xl flex items-center justify-center transition-all disabled:opacity-70 whitespace-nowrap"
              >
                Cari Data
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Coba tes dengan No. Sertifikat Dummy: <span className="font-mono text-primary font-bold cursor-pointer hover:underline" onClick={() => setCertSearchQuery('NL-2026-9001-001')}>NL-2026-9001-001</span>, <span className="font-mono text-primary font-bold cursor-pointer hover:underline" onClick={() => setCertSearchQuery('NL-2026-14001-088')}>NL-2026-14001-088</span>, atau <span className="font-mono text-primary font-bold cursor-pointer hover:underline" onClick={() => setCertSearchQuery('123')}>123</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            {sertifikasiList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white p-6 rounded-3xl border-2 border-gray-50 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <Link to={item.path} className="flex items-center gap-5">
                  <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-secondary mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-tight">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/sertifikasi/iso-14001" className="inline-flex items-center gap-2 bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-navy transition-colors shadow-lg">
              Lihat Selengkapnya <ArrowRight size={18} />
            </Link>
          </motion.div>
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

