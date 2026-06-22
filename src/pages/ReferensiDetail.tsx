import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ChevronRight, FileSearch, ClipboardList } from 'lucide-react';
import SEO from '../components/SEO';

const ReferensiDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const refs = [
    { 
      title: 'Permohonan Legalitas', desc: 'Formulir Permohonan Layanan', path: '/referensi/permohonan-legalitas', icon: <ClipboardList />,
      img: 'https://placehold.co/1600x800/115e59/ffffff?text=Permohonan+Legalitas',
      contentIntro: 'Halaman Referensi Permohonan Legalitas berisi informasi mengenai tata cara, syarat pengajuan, dan form yang dibutuhkan oleh calon klien sebelum memulai proses perizinan. Dengan melengkapi dokumen pendahuluan ini, proses kerja tim konsultan akan menjadi jauh lebih cepat dan akurat.',
      benefitsTitle: 'Dokumen Dasar yang Biasanya Diperlukan:',
      benefits: ['Scan KTP & NPWP pengurus (Direktur, Komisaris, Pemegang Saham)', 'Kartu Keluarga pengurus perusahaan', 'Pas foto latar belakang merah (untuk dokumen tertentu)', 'Surat Keterangan Domisili/Sewa Tempat Usaha', 'Stempel perusahaan (jika sudah ada)'],
      contentOutro: 'Selain dokumen pribadi, Anda akan diminta mengisi form draf perusahaan yang mencakup usulan nama PT (3 opsi), bidang usaha KBLI, besaran modal dasar, dan persentase saham. Mengapa data awal ini penting?',
      advantages: ['Mencegah revisi akta notaris di kemudian hari', 'Mempercepat pengecekan ketersediaan nama PT di Kemenkumham', 'Memastikan kode KBLI sudah linear dengan aktivitas riil bisnis']
    },
    { 
      title: 'Kajian Dokumen Legal', desc: 'Pengecekan dan Due Diligence', path: '/referensi/kajian-dokumen', icon: <FileSearch />,
      img: 'https://placehold.co/1600x800/312e81/ffffff?text=Kajian+Dokumen+Legal',
      contentIntro: 'Layanan Referensi Kajian Dokumen Legal (Legal Due Diligence/Legal Opinion) disediakan untuk klien yang ingin memverifikasi keabsahan dokumen perusahaannya sendiri atau perusahaan mitra (misal: sebelum proses merger, akuisisi, atau kerja sama besar).',
      benefitsTitle: 'Ruang Lingkup Kajian Dokumen:',
      benefits: ['Pengecekan keabsahan Akta Pendirian dan Perubahannya', 'Verifikasi status NIB dan izin komersial di kementerian terkait', 'Pengecekan kontrak-kontrak kerja sama bisnis eksisting', 'Identifikasi potensi sengketa hukum atau utang piutang', 'Pemeriksaan status kepemilikan aset dan HAKI perusahaan'],
      contentOutro: 'Hasil dari kajian ini adalah sebuah dokumen opini hukum yang dikeluarkan oleh ahli hukum kami. Rekomendasi ini bersifat objektif dan rahasia. Keunggulan layanan review dokumen kami:',
      advantages: ['Dilakukan oleh konsultan hukum bersertifikasi dan berpengalaman', 'Laporan yang komprehensif, mendetail, namun mudah dipahami', 'Memberikan rekomendasi mitigasi risiko jika ditemukan celah hukum', 'Keamanan data dan kerahasiaan NDA terjamin penuh']
    }
  ];

  const activeRef = refs.find(c => c.path.endsWith(id || '')) || refs[0];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <SEO 
        title={`${activeRef.title} - Nuansa Legal Referensi`}
        description="Materi referensi dan form."
      />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <nav className="flex mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Referensi</span>
          <span className="mx-2">/</span>
          <span className="text-secondary font-semibold">{activeRef.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="w-full h-64 md:h-80 bg-gray-200 relative overflow-hidden">
              <img 
                src={activeRef.img} 
                alt={activeRef.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <motion.div
                key={activeRef.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl font-sen font-black text-secondary mb-6 leading-tight">
                  {activeRef.title}
                </h1>
                <div className="w-20 h-1.5 bg-primary mb-8 rounded-full"></div>
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>{activeRef.contentIntro}</p>
                  <h4 className="font-bold text-lg text-secondary">{activeRef.benefitsTitle}</h4>
                  <ul className="space-y-3 mt-4 mb-8">
                    {activeRef.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>{activeRef.contentOutro}</p>
                  <ul className="space-y-3 mt-4">
                    {activeRef.advantages.map((item, idx) => (
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

          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-sen font-bold text-secondary mb-6 border-b border-gray-100 pb-4">
                Referensi Lainnya
              </h3>
              <div className="space-y-4">
                {refs.map((srv, idx) => (
                  <Link 
                    key={idx} 
                    to={srv.path}
                    className={`group flex items-center gap-4 p-3 rounded-2xl transition-colors border ${activeRef.path === srv.path ? 'bg-primary/5 border-primary/20' : 'hover:bg-gray-50 border-transparent hover:border-gray-100'}`}
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
              <h3 className="text-2xl font-sen font-bold mb-3 relative z-10">Konsultasi Dokumen?</h3>
              <p className="text-gray-300 text-sm mb-6 relative z-10">Hubungi kami untuk melakukan verifikasi berkas hukum.</p>
              <a 
                href="https://wa.me/6289644448721?text=Halo%20Nuansa%20Legal,%20saya%20ingin%20konsultasi%20kajian%20dokumen"
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

export default ReferensiDetail;
