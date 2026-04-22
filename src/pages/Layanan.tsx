import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, CheckCircle2, Globe, FileText, Scale, Landmark, Award } from 'lucide-react';
import SEO from '../components/SEO';

const Layanan: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Pendirian Badan Usaha',
      services: [
        { name: 'Pendirian PT (Lokal)', icon: <Shield />, desc: 'Perseroan Terbatas untuk pemegang saham WNI.' },
        { name: 'Pendirian PT Perorangan', icon: <Users />, desc: 'PT untuk usaha mikro dan kecil dengan satu pemegang saham.' },
        { name: 'Pendirian CV', icon: <Zap />, desc: 'Badan usaha persekutuan komanditer.' },
        { name: 'Yayasan & Perkumpulan', icon: <Landmark />, desc: 'Legalitas untuk organisasi non-profit.' },
      ]
    },
    {
      title: 'Perizinan & Lisensi',
      services: [
        { name: 'NIB (OSS RBA)', icon: <FileText />, desc: 'Nomor Induk Berusaha sebagai identitas pelaku usaha.' },
        { name: 'Izin Usaha Industri', icon: <Briefcase />, desc: 'Legalitas untuk sektor manufaktur dan produksi.' },
        { name: 'Pendaftaran Merek', icon: <Award />, desc: 'Perlindungan HAKI untuk nama dan logo bisnis Anda.' },
        { name: 'PMA (PT Penanaman Modal Asing)', icon: <Globe />, desc: 'Pendirian perusahaan untuk investor asing.' },
      ]
    }
  ];

  const handleConsultation = (serviceName: string, desc: string) => {
    const messages = [
      `Halo PT. Nuansa Berkah Sejahtera, saya sedang merencanakan *${serviceName}* (${desc}). Kira-kira apa saja persyaratan yang perlu saya siapkan agar prosesnya cepat dan lancar ya? Mohon infonya, terima kasih.`,
      `Selamat siang Admin PT. Nuansa Berkah Sejahtera, saya tertarik dengan layanan *${serviceName}*. Bisa bantu jelaskan estimasi waktu pengerjaan dan benefit yang saya dapatkan? Terima kasih.`,
      `Halo, saya ingin tanya-tanya seputar *${serviceName}*. Apakah saat ini ada promo atau paket khusus untuk pendirian baru? Mohon bantuannya, terima kasih.`
    ];
    
    // Pick a random message for variety or just use a well-crafted one
    const message = messages[0];
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6289644448721?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-gray-50 overflow-x-hidden">
      <SEO 
        title="Layanan Legalitas & Perizinan Usaha - PT. Nuansa Berkah Sejahtera"
        description="Jasa pendirian PT, CV, Yayasan, PMA, hingga pengurusan NIB dan Pendaftaran Merek. Solusi legalitas terlengkap untuk bisnis Anda di Indonesia."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Our Expertise</span>
            <h1 className="text-4xl md:text-6xl font-sen font-bold text-secondary mb-6">Layanan Profesional Kami</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kami menawarkan solusi legalitas menyeluruh yang dirancang untuk memberikan ketenangan pikiran bagi para pengusaha di Indonesia.
            </p>
            <div className="w-24 h-2 bg-primary mx-auto mt-8 rounded-full"></div>
          </motion.div>
        </div>

        {/* Categories */}
        {serviceCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-sen font-bold text-secondary mb-10 pl-4 border-l-8 border-primary italic"
            >
              {category.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] -mr-8 -mt-8 transition-all group-hover:scale-150 group-hover:bg-primary/10"></div>
                  
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-secondary transition-all duration-500 transform group-hover:rotate-12">
                    {React.cloneElement(service.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 relative z-10">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
                    {service.desc}
                  </p>
                  <button 
                    onClick={() => handleConsultation(service.name, service.desc)}
                    className="text-secondary font-bold text-sm flex items-center gap-2 hover:text-primary transition-colors mt-auto group/btn"
                  >
                    Selengkapnya <CheckCircle2 size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Detailed Service Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 transform translate-x-20"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-sen font-bold mb-10 text-primary italic leading-tight">Kenapa Legalitas <br/>Itu Penting?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Kredibilitas Bisnis', text: 'Mempermudah kerja sama dengan perusahaan besar dan instansi pemerintah.' },
                  { title: 'Perlindungan Hukum', text: 'Melindungi aset pribadi dari kewajiban bisnis perusahaan.' },
                  { title: 'Akses Permodalan', text: 'Syarat utama untuk pengajuan pinjaman bank atau pendanaan investor.' },
                  { title: 'Kepatuhan Regulasi', text: 'Menghindari sanksi hukum dan penutupan usaha oleh pemerintah.' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex gap-6"
                  >
                    <div className="mt-1 text-primary shrink-0 bg-white/5 p-2 rounded-lg"><CheckCircle2 size={24} /></div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gradient-to-tr from-primary to-yellow-600 w-full aspect-square rounded-full opacity-10 blur-3xl absolute inset-0"
              ></motion.div>
              <div className="relative z-10 border-8 border-white/5 rounded-full p-16">
                 <div className="bg-white/5 backdrop-blur-md rounded-full aspect-square flex items-center justify-center border border-white/10 shadow-inner">
                    <Scale size={180} className="text-primary opacity-30 transform -rotate-12" />
                 </div>
              </div>
              
              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary">
                    <Shield size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-black uppercase tracking-widest">Verified</p>
                    <p className="text-sm font-bold">Layanan Terproteksi</p>
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

// Helper components for missing icons
const Users = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const Briefcase = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

export default Layanan;
