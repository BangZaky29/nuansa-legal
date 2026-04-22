import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar, Download, Share2, ImageOff, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

// Scanning all images in the .promo directory recursively
const allPromoModules = import.meta.glob('../assets/images/.promo/**/*.{jpg,jpeg,png,webp,svg}', { eager: true });

const monthNames = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const Promo: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPromos, setCurrentPromos] = useState<{ src: string; title: string; order: number }[]>([]);

  // Body scroll lock with improved compatibility
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedImage]);

  // Get current date information
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonthName = monthNames[now.getMonth()];

  useEffect(() => {
    const filteredPromos = Object.entries(allPromoModules)
      .filter(([path]) => {
        return path.includes(`/${currentYear}/`) && path.includes(`/${currentMonthName}/`);
      })
      .map(([path, module]: [string, any]) => {
        const fullFilename = path.split('/').pop() || '';
        let cleanName = fullFilename.replace(/\.[^/.]+$/, "");
        
        // Remove sequence numbers or timestamps if they exist (e.g., "1_2026...")
        if (/^\d+_/.test(cleanName)) {
          cleanName = cleanName.split('_').slice(1).join('_');
        }
        
        if (cleanName.includes('-')) {
          cleanName = cleanName.split('-')[0];
        }

        // Determine category for sorting: Pendirian first (1), Pembuatan second (2)
        let categoryOrder = 99;
        if (path.includes('/Pendirian_legalitas/')) categoryOrder = 1;
        else if (path.includes('/Pembuatan_legalitas/')) categoryOrder = 2;

        return {
          src: module.default,
          title: cleanName.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim(),
          order: categoryOrder
        };
      })
      .sort((a, b) => a.order - b.order);

    setCurrentPromos(filteredPromos);
  }, [currentYear, currentMonthName]);

  const pendirianPromos = currentPromos.filter(p => p.order === 1);
  const pembuatanPromos = currentPromos.filter(p => p.order === 2);
  const otherPromos = currentPromos.filter(p => p.order === 99);

  const PromoGrid = ({ items, title, subtitle }: { items: typeof currentPromos, title: string, subtitle?: string }) => (
    <div className="mb-20 last:mb-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-center gap-4"
      >
        <div className="h-12 w-2 bg-primary rounded-full"></div>
        <div>
          <h2 className="text-2xl md:text-4xl font-sen font-bold text-secondary">{title}</h2>
          {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(img.src)}
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-gray-100">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primary font-bold text-sm mb-1">{currentMonthName} {currentYear}</p>
                    <h3 className="text-white font-sen font-bold text-xl">{img.title}</h3>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary shadow-lg">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-gray-50 min-h-screen overflow-x-hidden">
      <SEO
        title={`Promo ${currentMonthName} ${currentYear} - Penawaran Spesial PT. Nuansa Berkah Sejahtera`}
        description={`Cek promo terbaru bulan ${currentMonthName} ${currentYear} di PT. Nuansa Berkah Sejahtera. Dapatkan harga spesial untuk pendirian PT, CV, dan izin usaha lainnya.`}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-secondary font-bold text-sm mb-4 border border-primary/30 uppercase tracking-widest">
              Campaign Berjalan
            </span>
            <h1 className="text-4xl md:text-6xl font-sen font-black text-secondary mb-6 italic">
              Promo <span className="text-primary">{currentMonthName} {currentYear}</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {currentPromos.length > 0
                ? 'Lihat koleksi penawaran eksklusif kami yang berlaku bulan ini. Klik gambar untuk melihat detail lebih jelas.'
                : 'Kami sedang menyiapkan penawaran spesial untuk Anda. Nantikan update promo terbaru kami segera!'}
            </p>
          </motion.div>
        </div>

        {currentPromos.length > 0 ? (
          <div className="flex flex-col gap-12">
            {pendirianPromos.length > 0 && (
              <PromoGrid
                items={pendirianPromos}
                title="Pendirian Legalitas"
                subtitle="Penawaran spesial untuk pendirian badan usaha Anda."
              />
            )}

            {pembuatanPromos.length > 0 && (
              <PromoGrid
                items={pembuatanPromos}
                title="Pembuatan Legalitas"
                subtitle="Layanan pembuatan dokumen hukum dan Izin Operasional SBUJK (Konstruksi)."
              />
            )}

            {otherPromos.length > 0 && (
              <PromoGrid
                items={otherPromos}
                title="Promo Lainnya"
              />
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-8">
              <ImageOff size={64} />
            </div>
            <h2 className="text-3xl font-sen font-bold text-secondary mb-4">Ups! Belum Ada Promo</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Saat ini tim kami sedang meramu promo terbaik khusus untuk Anda. Silakan cek kembali dalam beberapa hari atau hubungi kami langsung untuk penawaran spesial.
            </p>
            <a
              href="https://wa.me/6289644448721"
              className="flex items-center gap-2 bg-secondary text-white font-bold py-4 px-8 rounded-2xl hover:bg-navy transition-all shadow-lg"
            >
              <MessageSquare size={20} />
              Tanya Penawaran Khusus
            </a>
          </motion.div>
        )}

        {currentPromos.length > 0 && (
          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-4xl font-sen font-bold text-secondary mb-6">
                Tertarik Dengan Salah Satu Promo Di Atas?
              </h2>
              <p className="text-gray-500 mb-10 text-lg">
                Hubungi konsultan kami sekarang dan dapatkan harga spesial <span className="text-primary font-bold">{currentMonthName}</span> sebelum periode berakhir.
              </p>
              <a
                href="https://wa.me/6289644448721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary-dark text-secondary font-black py-5 px-12 rounded-2xl shadow-xl transition-all transform hover:scale-105"
              >
                Konsultasi Promo Sekarang
              </a>
            </motion.div>
          </div>
        )}
      </div>

      {/* Lightbox Modal rendered via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto p-4 sm:p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#FFD700]/30 backdrop-blur-xl"
                onClick={() => setSelectedImage(null)}
              />

              {/* Close Button - Outside Modal for better UX */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                className="fixed top-6 right-6 z-[10000] bg-white text-secondary p-3 rounded-full shadow-2xl hover:bg-primary transition-all active:scale-90 hidden md:flex items-center justify-center border-4 border-[#FFD700]/40"
                onClick={() => setSelectedImage(null)}
              >
                <X size={28} strokeWidth={3} />
              </motion.button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.4)] flex flex-col border border-white/40"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Close Button */}
                <button
                  className="absolute top-4 right-4 z-[100] bg-white/80 backdrop-blur-md text-secondary p-2.5 rounded-full shadow-lg md:hidden active:scale-95"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={20} />
                </button>

                {/* Content Container */}
                <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
                  <div className="flex-1 bg-gray-50/30 flex items-center justify-center p-4 sm:p-8 min-h-[350px]">
                    <img
                      src={selectedImage}
                      alt="Promo Detail"
                      className="max-w-full max-h-full object-contain block rounded-xl md:rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Modal Footer/Actions */}
                  <div className="p-6 md:p-8 bg-white border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-2xl border border-primary/20">
                      <Calendar size={20} className="text-secondary" />
                      <span className="text-secondary font-black text-sm uppercase tracking-wider">{currentMonthName} {currentYear}</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
                      <div className="flex gap-4">
                        <button
                          onClick={() => window.open(selectedImage, '_blank')}
                          className="p-4 bg-gray-100 rounded-2xl text-secondary hover:bg-primary transition-all shadow-sm active:scale-90"
                          title="Download Image"
                        >
                          <Download size={22} />
                        </button>
                        <button
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({ title: 'Promo PT. Nuansa Berkah Sejahtera', url: window.location.href });
                            }
                          }}
                          className="p-4 bg-gray-100 rounded-2xl text-secondary hover:bg-primary transition-all shadow-sm active:scale-90"
                          title="Share Promo"
                        >
                          <Share2 size={22} />
                        </button>
                      </div>
                      <a
                        href="https://wa.me/6289644448721"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none bg-secondary text-white font-black py-4 px-12 rounded-2xl hover:bg-navy transition-all text-center text-sm shadow-xl shadow-secondary/20 active:scale-95 uppercase tracking-widest min-w-[200px]"
                      >
                        Ambil Promo Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Promo;
