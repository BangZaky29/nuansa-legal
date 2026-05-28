import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, CheckCircle2, Award, Landmark, HardHat, Compass, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

const LayananPPAT: React.FC = () => {
  const categories = [
    {
      title: 'I. Layanan PPAT & Hukum Agraria',
      desc: 'Pengurusan legalitas hak atas tanah dan pembuatan akta otentik oleh Pejabat Pembuat Akta Tanah (PPAT) berlisensi resmi.',
      color: 'from-amber-500 to-yellow-500',
      icon: <Landmark className="w-8 h-8" />,
      items: [
        { name: 'Akta Jual Beli (AJB)', desc: 'Pembuatan akta otentik sebagai bukti sah peralihan hak atas tanah karena jual beli.' },
        { name: 'Akta Hibah & Pembagian Hak', desc: 'Pengurusan akta penyerahan hak secara sukarela (Hibah) atau Pembagian Hak Bersama (APHB).' },
        { name: 'Balik Nama Sertifikat', desc: 'Proses pendaftaran peralihan hak di Badan Pertanahan Nasional (BPN) hingga sertifikat atas nama Anda.' },
        { name: 'Pengecekan Keaslian Sertifikat', desc: 'Validasi keaslian sertifikat tanah di BPN untuk menghindari sengketa dan tumpang tindih.' }
      ]
    },
    {
      title: 'II. Inspeksi & Sertifikasi Tanah',
      desc: 'Verifikasi kondisi fisik lapangan, batas koordinat, dan kesesuaian rencana tata ruang sebelum transaksi properti dilakukan.',
      color: 'from-emerald-500 to-teal-500',
      icon: <Compass className="w-8 h-8" />,
      items: [
        { name: 'Pengukuran Batas Fisik', desc: 'Verifikasi koordinat batas tanah di lapangan menggunakan alat ukur GPS geodetik presisi tinggi.' },
        { name: 'Uji Topografi & Kontur', desc: 'Pemetaan kontur tanah untuk kebutuhan perencanaan fondasi, drainase, dan cut-and-fill.' },
        { name: 'Penyelidikan Status Sengketa', desc: 'Investigasi riwayat tanah, kepemilikan ganda, dan status hukum sengketa aktif di pengadilan.' },
        { name: 'Kesesuaian Tata Ruang (KKPR)', desc: 'Pengecekan peruntukan lahan berdasarkan Rencana Detail Tata Ruang (RDTR) pemerintah daerah.' }
      ]
    },
    {
      title: 'III. Inspeksi Bangunan & SLF',
      desc: 'Audit teknis kelaikan fungsi bangunan gedung guna penerbitan Sertifikat Laik Fungsi (SLF) demi aspek keselamatan operasional.',
      color: 'from-blue-600 to-indigo-600',
      icon: <HardHat className="w-8 h-8" />,
      items: [
        { name: 'Audit Struktur & Arsitektur', desc: 'Pengujian kekuatan beton, keretakan dinding, kemiringan pilar, dan kelaikan struktur utama.' },
        { name: 'Audit Utilitas Gedung (MEP)', desc: 'Pemeriksaan sistem kelistrikan (grounding, beban), proteksi kebakaran (hydrant, sprinkler), dan tata udara.' },
        { name: 'Pengurusan SLF Baru / Perpanjangan', desc: 'Penyusunan dokumen kajian teknis kelaikan fungsi sebagai syarat mutlak penerbitan SLF dari Pemda.' },
        { name: 'Pemeriksaan Kelayakan K3', desc: 'Audit keselamatan dan kesehatan kerja lingkungan gedung untuk standar industri dan perkantoran.' }
      ]
    }
  ];

  const handleConsultation = (serviceName: string, categoryName: string) => {
    const text = `Halo PT. Nuansa Berkah Sejahtera, saya tertarik untuk berkonsultasi mengenai *${serviceName}* pada bagian *${categoryName}*. 

Mohon informasi mengenai estimasi biaya, kelengkapan dokumen yang harus dipersiapkan, serta prosedur pengurusannya. Terima kasih banyak.`;
    
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/6289644448721?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-gray-50 overflow-x-hidden">
      <SEO 
        title="Layanan PPAT, Inspeksi Tanah & Bangunan - PT. Nuansa Berkah Sejahtera"
        description="Layanan PPAT resmi, balik nama sertifikat, pengukuran batas tanah presisi, audit kelaikan struktur gedung, dan pengurusan Sertifikat Laik Fungsi (SLF) profesional."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Agraria & Civil Engineering Services</span>
            <h1 className="text-4xl md:text-6xl font-sen font-bold text-secondary mb-6 leading-tight">
              Layanan PPAT, Inspeksi <br className="hidden md:inline" />
              <span className="text-primary italic">Tanah & Bangunan</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Solusi integrasi satu pintu untuk legalitas pertanahan (PPAT), jaminan keakuratan batas fisik tanah, dan kepatuhan kelaikan fungsi bangunan (SLF) di Indonesia.
            </p>
            <div className="w-24 h-2 bg-primary mx-auto mt-8 rounded-full"></div>
          </motion.div>
        </div>

        {/* Sectors Layout */}
        <div className="space-y-24">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="relative">
              {/* Decorative Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent -z-10 rounded-[3rem] opacity-60"></div>
              
              <div className="p-8 md:p-12">
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-200 pb-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-lg`}>
                        {cat.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-sen font-bold text-secondary">
                        {cat.title}
                      </h2>
                    </div>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleConsultation(cat.title, 'Konsultasi Sektor')}
                    className="bg-secondary text-white font-black px-6 py-4 rounded-2xl hover:bg-primary hover:text-secondary transition-all shadow-md self-start md:self-center"
                  >
                    Konsultasi Sektor Ini
                  </motion.button>
                </div>

                {/* Sub-services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {cat.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      whileHover={{ y: -8 }}
                      className="bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100/80 hover:shadow-2xl transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-secondary mb-5 group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                          <CheckCircle2 size={24} className="text-primary group-hover:text-secondary" />
                        </div>
                        <h3 className="text-lg font-bold text-secondary mb-3 leading-snug group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium">
                          {item.desc}
                        </p>
                      </div>

                      <button
                        onClick={() => handleConsultation(item.name, cat.title)}
                        className="text-secondary font-black text-xs flex items-center gap-1.5 hover:text-primary transition-colors mt-auto border-t border-gray-50 pt-4"
                      >
                        Pesan Layanan →
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative / Risk Mitigation Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative mt-32"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 transform translate-x-20"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-3 block">Mitigasi Risiko Properti</span>
              <h2 className="text-3xl md:text-5xl font-sen font-bold mb-10 text-primary italic leading-tight">
                Mengapa Inspeksi Fisik & Hukum <br />Sangat Krusial?
              </h2>
              <div className="space-y-8">
                {[
                  { 
                    title: 'Menghindari Batas Tanah Palsu', 
                    text: 'Lebih dari 40% sengketa tanah di Indonesia disebabkan oleh ketidaksesuaian batas sertifikat BPN dengan patok fisik sebenarnya di lapangan.',
                    icon: <Compass className="text-primary" size={24} />
                  },
                  { 
                    title: 'Pemeriksaan Keabsahan Sertifikat', 
                    text: 'Melakukan verifikasi mendalam di BPN demi mematikan sertifikat bersih (Clean and Clear) dari sita jaminan, sengketa waris, atau tumpang tindih.',
                    icon: <Shield className="text-primary" size={24} />
                  },
                  { 
                    title: 'Kekuatan & Keamanan Struktur', 
                    text: 'Kerusakan struktural mikro pada bangunan yang tidak terlihat kasat mata dapat berakibat fatal pada keselamatan operasional dan investasi jangka panjang.',
                    icon: <AlertTriangle className="text-primary" size={24} />
                  },
                  { 
                    title: 'Kewajiban SLF (Sertifikat Laik Fungsi)', 
                    text: 'Berdasarkan regulasi terbaru, gedung perkantoran, ruko, pabrik, dan hotel wajib memiliki SLF untuk dapat beroperasi secara legal dan diasuransikan.',
                    icon: <FileText className="text-primary" size={24} />
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12 }}
                    className="flex gap-6"
                  >
                    <div className="mt-1 shrink-0 bg-white/5 p-3 rounded-xl flex items-center justify-center h-12 w-12">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5 relative">
              <motion.div 
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gradient-to-tr from-primary to-amber-600 w-full aspect-square rounded-full opacity-10 blur-3xl absolute inset-0"
              ></motion.div>
              <div className="relative z-10 border-8 border-white/5 rounded-full p-12">
                 <div className="bg-white/5 backdrop-blur-md rounded-full aspect-square flex items-center justify-center border border-white/10 shadow-inner">
                    <Landmark size={150} className="text-primary opacity-30 transform -rotate-12" />
                 </div>
              </div>
              
              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-black uppercase tracking-widest">PPAT Lisensi Resmi</p>
                    <p className="text-sm font-bold">100% Sah & Akurat</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LayananPPAT;
