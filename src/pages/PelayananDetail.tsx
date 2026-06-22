import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  CheckCircle2, 
  ChevronRight, 
  Briefcase, 
  FileText, 
  Shield, 
  Zap, 
  Landmark, 
  Award, 
  Globe, 
  Users 
} from 'lucide-react';
import SEO from '../components/SEO';

const PelayananDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const services = [
    { 
      title: 'Pendirian Badan Usaha', 
      desc: 'PT, CV, Yayasan, PMA', 
      path: '/pelayanan/pendirian-badan-usaha', 
      icon: <Briefcase size={24} />,
      img: 'https://placehold.co/1600x800/1e40af/ffffff?text=Pendirian+Badan+Usaha',
      contentIntro: 'Layanan pendirian badan usaha ditujukan bagi pengusaha yang ingin melegalkan usahanya menjadi entitas yang diakui hukum. Memiliki badan hukum (seperti PT) memberikan jaminan hukum atas aset, membatasi tanggung jawab pribadi, dan meningkatkan profesionalitas di mata klien.',
      subServices: [
        { name: 'Pendirian PT (Lokal)', icon: <Shield size={28} />, desc: 'Perseroan Terbatas untuk pemegang saham WNI.' },
        { name: 'Pendirian PT Perorangan', icon: <Users size={28} />, desc: 'PT untuk usaha mikro dan kecil dengan satu pemegang saham.' },
        { name: 'Pendirian CV', icon: <Zap size={28} />, desc: 'Badan usaha persekutuan komanditer.' },
        { name: 'Yayasan & Perkumpulan', icon: <Landmark size={28} />, desc: 'Legalitas untuk organisasi non-profit.' },
      ],
      benefitsTitle: 'Keuntungan Pendirian Badan Usaha:',
      benefits: ['Aset pribadi terpisah dari aset perusahaan (khusus PT)', 'Akses permodalan dari Bank dan Investor lebih mudah', 'Lebih dipercaya oleh mitra bisnis dan instansi pemerintah', 'Dapat mengikuti tender proyek berskala besar', 'Melindungi nama brand perusahaan dari plagiasi pihak lain'],
      contentOutro: 'Tim konsultan kami siap membantu pengurusan dokumen secara tuntas, mulai dari Akta Notaris, SK Kemenkumham, NPWP Badan, hingga izin dasar. Kelebihan menggunakan jasa kami:',
      advantages: ['Proses cepat, transparan, dan sesuai aturan hukum', 'Notaris rekanan resmi dan berpengalaman', 'Layanan konsultasi gratis pasca-pendirian', 'Antar-jemput dokumen untuk wilayah tertentu']
    },
    { 
      title: 'Legalitas Usaha & NIB', 
      desc: 'Izin Usaha, OSS RBA', 
      path: '/pelayanan/legalitas-nib', 
      icon: <FileText size={24} />,
      img: 'https://placehold.co/1600x800/0f766e/ffffff?text=Legalitas+%26+NIB',
      contentIntro: 'Nomor Induk Berusaha (NIB) adalah identitas resmi pelaku usaha yang diterbitkan oleh sistem OSS (Online Single Submission). NIB sekaligus berlaku sebagai Tanda Daftar Perusahaan (TDP), Angka Pengenal Importir (API), dan hak akses kepabeanan. Memiliki legalitas yang lengkap sangat penting.',
      subServices: [
        { name: 'NIB (OSS RBA)', icon: <FileText size={28} />, desc: 'Nomor Induk Berusaha sebagai identitas pelaku usaha.' },
        { name: 'Izin Usaha Industri', icon: <Briefcase size={28} />, desc: 'Legalitas untuk sektor manufaktur dan produksi.' },
        { name: 'Pendaftaran Merek', icon: <Award size={28} />, desc: 'Perlindungan HAKI untuk nama dan logo bisnis Anda.' },
        { name: 'PMA (PT Penanaman Modal Asing)', icon: <Globe size={28} />, desc: 'Pendirian perusahaan untuk investor asing.' },
      ],
      benefitsTitle: 'Fungsi Utama Legalitas & NIB:',
      benefits: ['Sebagai identitas legal untuk menjalankan operasional bisnis', 'Syarat mutlak untuk mengurus izin lanjutan atau izin komersial', 'Mendapatkan fasilitas perlindungan hukum bagi usaha Anda', 'Mempermudah proses ekspor dan impor barang', 'Berlaku seumur hidup selama usaha masih berjalan'],
      contentOutro: 'Sistem OSS RBA (Risk-Based Approach) menyesuaikan perizinan berdasarkan tingkat risiko kegiatan usaha Anda. Jika merasa kesulitan dalam klasifikasi KBLI dan teknis OSS, keunggulan layanan kami meliputi:',
      advantages: ['Bantuan pemilihan kode KBLI 2020 yang tepat', 'Pengurusan tuntas tanpa perlu repot datang ke instansi', 'Solusi atas kendala migrasi OSS versi lama ke OSS RBA', 'Pengecekan kesesuaian tata ruang secara akurat']
    }
  ];

  const activeService = services.find(c => c.path.endsWith(id || '')) || services[0];

  const handleConsultation = (serviceName: string, desc: string) => {
    const messages = [
      `Halo PT. Nuansa Berkah Sejahtera, saya sedang merencanakan *${serviceName}* (${desc}). Kira-kira apa saja persyaratan yang perlu saya siapkan agar prosesnya cepat dan lancar ya? Mohon infonya, terima kasih.`,
      `Selamat siang Admin PT. Nuansa Berkah Sejahtera, saya tertarik dengan layanan *${serviceName}*. Bisa bantu jelaskan estimasi waktu pengerjaan dan benefit yang saya dapatkan? Terima kasih.`,
      `Halo, saya ingin tanya-tanya seputar *${serviceName}*. Apakah saat ini ada promo atau paket khusus untuk pendirian baru? Mohon bantuannya, terima kasih.`
    ];
    
    const message = messages[0];
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6289644448721?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <SEO 
        title={`${activeService.title} - PT. Nuansa Berkah Sejahtera`}
        description="Materi dan informasi layanan perizinan dan legalitas."
      />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Pelayanan</span>
          <span className="mx-2">/</span>
          <span className="text-secondary font-semibold">{activeService.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Content (Left) */}
          <div className="lg:w-2/3 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="w-full h-64 md:h-80 bg-gray-200 relative overflow-hidden">
              <img 
                src={activeService.img} 
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl font-sen font-black text-secondary mb-6 leading-tight">
                  {activeService.title}
                </h1>
                <div className="w-20 h-1.5 bg-primary mb-8 rounded-full"></div>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p className="text-lg leading-relaxed">{activeService.contentIntro}</p>

                  <h3 className="text-2xl font-sen font-bold text-secondary mt-10 mb-6">
                    Materi & Sub Layanan {activeService.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {activeService.subServices.map((sub, idx) => (
                      <div 
                        key={idx}
                        className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {sub.icon}
                          </div>
                          <h4 className="text-lg font-bold text-secondary mb-2">{sub.name}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed mb-6">{sub.desc}</p>
                        </div>
                        <button 
                          onClick={() => handleConsultation(sub.name, sub.desc)}
                          className="text-primary font-bold text-xs flex items-center gap-1.5 hover:text-secondary transition-colors group/btn mt-auto"
                        >
                          Konsultasi Sekarang <CheckCircle2 size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="font-bold text-lg text-secondary mt-8 mb-4">{activeService.benefitsTitle}</h4>
                  <ul className="space-y-3 mb-8">
                    {activeService.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p>{activeService.contentOutro}</p>

                  <ul className="space-y-3 mt-4">
                    {activeService.advantages.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-sen font-bold text-secondary mb-6 border-b border-gray-100 pb-4">
                Pelayanan Lainnya
              </h3>
              
              <div className="space-y-4">
                {services.map((srv, idx) => (
                  <Link 
                    key={idx} 
                    to={srv.path}
                    className={`group flex items-center gap-4 p-3 rounded-2xl transition-colors border ${activeService.path === srv.path ? 'bg-primary/5 border-primary/20' : 'hover:bg-gray-50 border-transparent hover:border-gray-100'}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {srv.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary group-hover:text-primary transition-colors leading-tight text-sm">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{srv.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-secondary rounded-3xl p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-sen font-bold mb-3 relative z-10">Butuh Bantuan?</h3>
              <p className="text-gray-300 text-sm mb-6 relative z-10">Konsultasikan pendirian badan usaha Anda sekarang.</p>
              <a 
                href="https://wa.me/6289644448721?text=Halo%20Nuansa%20Legal,%20saya%20ingin%20konsultasi%20mengenai%20Pelayanan%20Legalitas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-secondary font-bold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-all w-full justify-center relative z-10 shadow-lg"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PelayananDetail;
