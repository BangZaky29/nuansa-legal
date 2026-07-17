import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useImages } from '../hooks/useImages';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { images } = useImages('other');
  const logo = images.find(img => img.name.includes('LOGO-NUANSA-LEGAL'))?.url || '/LOGO-NUANSA-LEGAL.jpeg';
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    {
      name: 'Sertifikasi',
      isDropdown: true,
      items: [
        { name: 'Sertifikasi ISO 9001:2015', path: '/sertifikasi/iso-9001', desc: 'Sistem Manajemen Mutu' },
        { name: 'Sertifikasi ISO 14001:2015', path: '/sertifikasi/iso-14001', desc: 'Sistem Manajemen Lingkungan' },
        { name: 'Sertifikasi ISO 45001:2018', path: '/sertifikasi/iso-45001', desc: 'Sistem Manajemen K3' },
        { name: 'Sertifikasi ISO 27001:2022', path: '/sertifikasi/iso-27001', desc: 'Sistem Manajemen Keamanan Informasi' }
      ]
    },
    {
      name: 'Pelayanan',
      isDropdown: true,
      items: [
        { name: 'Pendirian Badan Usaha', path: '/pelayanan/pendirian-badan-usaha', desc: 'PT, CV, Yayasan, PMA' },
        { name: 'Legalitas Usaha & NIB', path: '/pelayanan/legalitas-nib', desc: 'Izin Usaha, OSS RBA' },
        { name: 'Kalkulator PPH', path: 'https://nuansasolution.id/generator-surat/calculator-PPH/', desc: 'Kalkulator Pajak Penghasilan', isExternal: true },
        { name: 'Kalkulator Pajak Properti', path: 'https://nuansasolution.id/generator-surat/kalkulator-pajak-properti/', desc: 'Kalkulator Pajak Properti', isExternal: true },
        { name: 'Kalkulator PBG/IMB', path: 'https://nuansasolution.id/generator-surat/kalkulator-pbg/', desc: 'Kalkulator PBG & IMB', isExternal: true }
      ]
    },
    {
      name: 'Pelatihan',
      isDropdown: true,
      items: [
        { name: 'Pelatihan Auditor Internal', path: '/pelatihan/auditor-internal', desc: 'Pelatihan untuk Auditor ISO' },
        { name: 'Awareness K3 & Fire Safety', path: '/pelatihan/awareness-k3', desc: 'Keselamatan dan Kesehatan Kerja' },
        { name: 'Seminar Bisnis & UMKM', path: '/pelatihan/seminar-bisnis', desc: 'Pelatihan Legalitas untuk UMKM' }
      ]
    },
    {
      name: 'Referensi',
      isDropdown: true,
      items: [
        { name: 'Permohonan Legalitas', path: '/referensi/permohonan-legalitas', desc: 'Formulir Permohonan' },
        { name: 'Kajian Dokumen Legal', path: '/referensi/kajian-dokumen', desc: 'Pengecekan Dokumen' }
      ]
    },
    { name: 'Promo', path: '/promo' },
    { name: 'Kontak', path: '/kontak-kami' },
    { name: 'Verifikasi', path: '/verifikasi' },
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Determine if the current page has a dark hero background
  const isHome = location.pathname === '/';
  const textColorClass = (isScrolled || !isHome) ? 'text-secondary' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="relative"
            >
              <img src={logo} alt="PT. Nuansa Berkah Sejahtera" className="h-10 md:h-12 w-auto rounded-xl shadow-lg border border-white/20" />
            </motion.div>
            <div className="flex items-center gap-2">
              <span className={`font-sen font-black text-xl md:text-2xl transition-colors duration-300 ${textColorClass}`}>
                NUANSA LEGAL
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                const isActive = false; // logic to determine if path is inside dropdown
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:text-primary flex items-center gap-1.5 ${isActive ? 'text-primary' : textColorClass
                        }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-primary' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl py-3 z-[100] overflow-hidden"
                        >
                          {link.items?.map((item: any, idx) => {
                            const linkClasses = `flex flex-col px-5 py-3 hover:bg-primary/10 transition-colors text-left group/item ${idx !== link.items!.length - 1 ? 'border-b border-gray-50' : ''}`;

                            if (item.isExternal) {
                              return (
                                <a
                                  key={idx}
                                  href={item.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={linkClasses}
                                >
                                  <span className="font-bold text-sm text-secondary group-hover/item:text-primary transition-colors">{item.name}</span>
                                  <span className="text-[10px] text-gray-500 font-medium mt-1 leading-snug">{item.desc}</span>
                                </a>
                              );
                            }

                            return (
                              <Link
                                key={idx}
                                to={item.path}
                                className={linkClasses}
                              >
                                <span className="font-bold text-sm text-secondary group-hover/item:text-primary transition-colors">{item.name}</span>
                                <span className="text-[10px] text-gray-500 font-medium mt-1 leading-snug">{item.desc}</span>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path || '/'}
                  className={`font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:text-primary relative group ${location.pathname === link.path ? 'text-primary' : textColorClass
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6289644448721"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-white text-secondary font-black py-3 px-8 rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
            >
              <Phone size={18} />
              Konsultasi
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'bg-secondary/5 text-secondary' : 'bg-white/10 text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  const isActive = false;
                  const isMobileOpen = mobileDropdown === link.name;
                  return (
                    <div key={link.name} className="flex flex-col gap-2">
                      <button
                        className={`font-black text-xl flex items-center justify-between group w-full text-left ${isActive ? 'text-primary' : 'text-secondary'
                          }`}
                        onClick={() => setMobileDropdown(isMobileOpen ? null : link.name)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={22} className={`transition-transform duration-300 ${isMobileOpen ? 'rotate-180 text-primary' : 'text-secondary'}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden flex flex-col pl-4 gap-3 border-l-2 border-primary/30 mt-2"
                          >
                            {link.items?.map((item: any, idx) => {
                              const linkClasses = `font-bold text-base flex flex-col py-1.5 ${location.pathname === item.path ? 'text-primary' : 'text-secondary/70'}`;
                              const handleClick = () => {
                                setIsOpen(false);
                                setMobileDropdown(null);
                              };

                              if (item.isExternal) {
                                return (
                                  <a
                                    key={idx}
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClasses}
                                    onClick={handleClick}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span>{item.name}</span>
                                      <span>→</span>
                                    </div>
                                  </a>
                                );
                              }

                              return (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className={linkClasses}
                                  onClick={handleClick}
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{item.name}</span>
                                    <span>→</span>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.path || '/'}
                    className={`font-black text-xl flex items-center justify-between group ${location.pathname === link.path ? 'text-primary' : 'text-secondary'}`}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdown(null);
                    }}
                  >
                    {link.name}
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      →
                    </motion.div>
                  </Link>
                );
              })}
              <a
                href="https://wa.me/6289644448721"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} />
                Hubungi Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
