import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const SertifikasiDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Dummy list of all certifications for the sidebar
  const otherCertifications = [
    { 
      title: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu', path: '/sertifikasi/iso-9001', icon: '🏆',
      img: 'https://placehold.co/1600x800/ca8a04/ffffff?text=ISO+9001',
      contentIntro: 'Penerapan Sistem Manajemen Mutu ISO 9001:2015 dirancang untuk membantu organisasi memastikan bahwa mereka secara konsisten memenuhi kebutuhan pelanggan dan pemangku kepentingan lainnya. Standar ini berfokus pada efektivitas proses kualitas yang berkesinambungan. Manfaat penerapan ISO 9001 meliputi:',
      benefitsTitle: 'Manfaat bagi perusahaan:',
      benefits: ['Meningkatkan efisiensi dan produktivitas operasional', 'Meningkatkan kepuasan dan kepercayaan pelanggan', 'Mengurangi biaya akibat produk cacat atau proses tidak efisien', 'Memperluas peluang memenangkan tender', 'Meningkatkan kredibilitas di mata internasional'],
      contentOutro: 'Dengan pendekatan berbasis risiko (risk-based thinking), ISO 9001:2015 memungkinkan perusahaan untuk mengidentifikasi risiko dan peluang lebih awal. Kelebihan dari penerapan standar ini antara lain:',
      advantages: ['Fokus pada komitmen manajemen puncak', 'Integrasi yang mudah dengan standar ISO lainnya', 'Budaya perbaikan terus-menerus (continuous improvement)']
    },
    { 
      title: 'ISO 14001:2015', desc: 'Sistem Manajemen Lingkungan', path: '/sertifikasi/iso-14001', icon: '🌿',
      img: 'https://placehold.co/1600x800/16a34a/ffffff?text=ISO+14001',
      contentIntro: 'Penerapan Sistem Manajemen Lingkungan ini memiliki banyak manfaat bagi perusahaan, baik yang bersifat kuantitatif maupun kualitatif. Dalam penelitian yang dilakukan oleh para ahli, disebutkan manfaat-manfaat yang dirasakan oleh perusahaan yang menerapkan SML. Manfaatnya sebagai berikut:',
      benefitsTitle: 'Manfaat utama penerapan SML:',
      benefits: ['Pengurangan pencemaran lingkungan', 'Peningkatan pada proses efisiensi sumber daya', 'Peningkatan pada kinerja manajemen dan moral kerja', 'Peningkatan kepuasan konsumen', 'Peningkatan pemenuhan peraturan lingkungan hukum'],
      contentOutro: 'Sistem manajemen lingkungan di perusahaan dapat disusun berdasarkan sistem manajemen yang telah diterapkan oleh perusahaan itu, maupun murni berbasis ISO 14001:2015. Kelebihan dari menerapkan SML ini adalah:',
      advantages: ['Penyusunan sistem lebih mudah karena ada panduan standar yang jelas', 'Diakui secara sah di dunia internasional', 'Meningkatkan reputasi perusahaan di mata stakeholder hijau', 'Meminimalisir risiko sanksi denda lingkungan dari pemerintah']
    },
    { 
      title: 'ISO 45001:2018', desc: 'Sistem Manajemen K3', path: '/sertifikasi/iso-45001', icon: '👷',
      img: 'https://placehold.co/1600x800/ea580c/ffffff?text=ISO+45001',
      contentIntro: 'ISO 45001:2018 adalah standar internasional pertama untuk Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3). Standar ini memberikan kerangka kerja untuk meningkatkan keselamatan, mengurangi risiko tempat kerja, dan meningkatkan kesehatan dan kesejahteraan. Manfaat utamanya adalah:',
      benefitsTitle: 'Keuntungan SMK3 ISO 45001:',
      benefits: ['Mencegah kecelakaan kerja dan penyakit akibat kerja', 'Meningkatkan keterlibatan dan keselamatan karyawan', 'Mengurangi premi asuransi dan biaya kompensasi', 'Memenuhi kewajiban regulasi K3 nasional'],
      contentOutro: 'Standar ini didesain agar kompatibel dan mudah diintegrasikan dengan standar manajemen lainnya, seperti ISO 9001 dan ISO 14001. Kelebihan penerapan K3 tersertifikasi meliputi:',
      advantages: ['Menciptakan lingkungan kerja yang proaktif terhadap risiko', 'Keterlibatan langsung pekerja dalam sistem keselamatan', 'Peningkatan citra perusahaan peduli pekerja']
    },
    { 
      title: 'ISO 37001:2016', desc: 'Sistem Manajemen Anti Penyuapan', path: '/sertifikasi/iso-37001', icon: '⚖️',
      img: 'https://placehold.co/1600x800/dc2626/ffffff?text=ISO+37001',
      contentIntro: 'Korupsi dan penyuapan menghancurkan kepercayaan dan menghambat perkembangan ekonomi. ISO 37001 dirancang untuk membantu organisasi menerapkan sistem manajemen anti penyuapan (SMAP) guna mendeteksi, mencegah, dan menangani praktik suap. Manfaat sertifikasi ini antara lain:',
      benefitsTitle: 'Mengapa butuh ISO 37001?',
      benefits: ['Mencegah, mendeteksi, dan merespons risiko penyuapan', 'Memberikan jaminan kepada manajemen, investor, dan mitra bisnis', 'Menghindari biaya denda hukum dan kerusakan reputasi', 'Memenuhi panduan dan perundangan anti korupsi lokal dan global'],
      contentOutro: 'Dengan menerapkan kebijakan anti suap, menunjuk petugas kepatuhan, serta melatih staf, perusahaan menunjukkan komitmen integritas yang tinggi. Kelebihan implementasi ini:',
      advantages: ['Transparansi pengadaan dan tata kelola perusahaan yang lebih baik', 'Melindungi dewan direksi dari tanggung jawab pidana kelalaian', 'Sertifikat ini sering menjadi syarat wajib tender BUMN']
    },
    { 
      title: 'ISO 27001:2022', desc: 'Sistem Manajemen Keamanan Informasi', path: '/sertifikasi/iso-27001', icon: '🔒',
      img: 'https://placehold.co/1600x800/2563eb/ffffff?text=ISO+27001',
      contentIntro: 'Era digital menuntut pengamanan data yang sangat ketat. ISO/IEC 27001:2022 adalah standar internasional yang memuat kerangka kerja Information Security Management System (ISMS). Manfaat utamanya adalah menjaga kerahasiaan, integritas, dan ketersediaan data.',
      benefitsTitle: 'Manfaat Keamanan Informasi:',
      benefits: ['Melindungi data pelanggan dan aset intelektual dari kebocoran', 'Mematuhi regulasi seperti UU Pelindungan Data Pribadi (PDP)', 'Meminimalkan kerugian finansial akibat serangan siber atau downtime', 'Memberikan keunggulan kompetitif bagi startup dan perusahaan IT'],
      contentOutro: 'Pendekatan ISO 27001 didasarkan pada penilaian risiko teknologi dan manusia secara komprehensif. Keunggulan jika sudah tersertifikasi:',
      advantages: ['Audit independen yang membuktikan keamanan data tervalidasi', 'Respons insiden keamanan (Incident Response) yang lebih terstruktur', 'Kepatuhan otomatis pada banyak standar industri teknologi lainnya']
    },
    { 
      title: 'ISO 50001:2018', desc: 'Sistem Manajemen Energi', path: '/sertifikasi/iso-50001', icon: '⚡',
      img: 'https://placehold.co/1600x800/eab308/ffffff?text=ISO+50001',
      contentIntro: 'ISO 50001:2018 memberikan pendekatan sistematis untuk mencapai perbaikan berkelanjutan dalam kinerja energi, efisiensi energi, serta penggunaan dan konsumsi energi. Organisasi dari semua skala dapat merasakan manfaat besar berikut ini:',
      benefitsTitle: 'Efisiensi dan Penghematan Energi:',
      benefits: ['Pengurangan signifikan pada biaya tagihan energi bulanan', 'Menekan jejak karbon (carbon footprint) dan emisi gas rumah kaca', 'Mengamankan pasokan energi melalui perencanaan yang lebih baik', 'Penggunaan aset penyerap energi yang lebih optimal'],
      contentOutro: 'Standar ini menggunakan siklus Plan-Do-Check-Act untuk memastikan penghematan energi benar-benar terukur. Nilai tambah dari sertifikasi ini:',
      advantages: ['Pengembalian investasi (ROI) yang cepat karena penghematan biaya operasional', 'Kepatuhan terhadap undang-undang efisiensi energi nasional', 'Peningkatan citra perusahan yang ramah lingkungan']
    },
    { 
      title: 'ISO 13485:2016', desc: 'Sistem Manajemen Alat Kesehatan', path: '/sertifikasi/iso-13485', icon: '🏥',
      img: 'https://placehold.co/1600x800/0d9488/ffffff?text=ISO+13485',
      contentIntro: 'Industri alat kesehatan (Medical Devices) diatur dengan sangat ketat. ISO 13485:2016 merupakan standar khusus bagi organisasi yang terlibat dalam desain, produksi, instalasi, dan layanan alat kesehatan. Kepatuhan terhadap standar ini memastikan:',
      benefitsTitle: 'Keuntungan Kepatuhan Industri Alkes:',
      benefits: ['Jaminan kualitas alat kesehatan yang aman dan efektif', 'Akses pasar internasional yang mewajibkan kepatuhan standar medis', 'Manajemen risiko produk secara komprehensif mulai dari desain', 'Peningkatan efisiensi rantai pasok alat medis'],
      contentOutro: 'ISO 13485 mengedepankan manajemen risiko keselamatan pasien di setiap siklus produk. Nilai lebih bagi produsen maupun distributor:',
      advantages: ['Mempermudah registrasi dan izin edar alat kesehatan di Kemenkes', 'Pengakuan secara global bahwa produk medis diproduksi secara aman', 'Dokumentasi mutu (QMS) yang ketat dan sistematis']
    },
    { 
      title: 'ISO 22000:2018', desc: 'Sistem Manajemen Keamanan Pangan', path: '/sertifikasi/iso-22000', icon: '🍽️',
      img: 'https://placehold.co/1600x800/9a3412/ffffff?text=ISO+22000',
      contentIntro: 'ISO 22000:2018 menetapkan persyaratan sistem manajemen keamanan pangan, mengawinkan prinsip HACCP dengan sistem manajemen prasyarat dasar (PRP). Semua pelaku dalam rantai pasok makanan akan mendapat manfaat dari penerapan ini, antara lain:',
      benefitsTitle: 'Manfaat Food Safety:',
      benefits: ['Menjamin produk makanan aman dikonsumsi oleh pelanggan', 'Mengendalikan bahaya keamanan pangan (biologis, kimia, fisik)', 'Mencegah terjadinya keracunan massal atau recall produk pangan', 'Meningkatkan kepercayaan konsumen ritel maupun distributor'],
      contentOutro: 'Dari ladang pertanian hingga ke meja makan konsumen, standar ini menjaga kualitas pangan. Keunggulan kompetitif sertifikasi ini:',
      advantages: ['Syarat mutlak untuk menyuplai ritel besar dan supermarket', 'Integrasi HACCP secara terstruktur di seluruh alur produksi', 'Standar yang diakui oleh inisiatif keamanan pangan global (GFSI)']
    },
    { 
      title: 'ISO 21001:2018', desc: 'Sistem Manajemen Pendidikan', path: '/sertifikasi/iso-21001', icon: '🎓',
      img: 'https://placehold.co/1600x800/7e22ce/ffffff?text=ISO+21001',
      contentIntro: 'Organisasi pendidikan (EOMS) memiliki tuntutan kritis dalam mencetak peserta didik yang unggul. ISO 21001 menyediakan kerangka kerja spesifik untuk sekolah, universitas, maupun lembaga pelatihan untuk menyelaraskan tujuan dengan kurikulum dan fasilitas. Manfaatnya termasuk:',
      benefitsTitle: 'Manfaat bagi Institusi Pendidikan:',
      benefits: ['Penyelarasan misi pendidikan yang lebih baik dan terfokus pada mutu', 'Meningkatkan kepuasan peserta didik, orang tua, dan penyedia dana', 'Meningkatkan efisiensi pengelolaan lembaga pendidikan', 'Lingkungan pembelajaran yang inklusif dan responsif terhadap kebutuhan'],
      contentOutro: 'Standar ini didasarkan pada prinsip yang sama dengan ISO 9001, namun dikontekstualisasikan untuk edukasi. Kelebihan institusi dengan sertifikat ini:',
      advantages: ['Akreditasi nasional/internasional menjadi lebih mudah diraih', 'Keunggulan daya saing dalam menarik siswa/mahasiswa baru', 'Inovasi kurikulum berbasis data evaluasi yang terukur']
    }
  ];

  const activeCert = otherCertifications.find(c => c.path.endsWith(id || '')) || otherCertifications[1];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Detail Layanan Sertifikasi - PT. Nuansa Berkah Sejahtera"
        description="Materi dan informasi lengkap terkait layanan Sertifikasi ISO dari PT. Nuansa Berkah Sejahtera."
      />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
          <span className="mx-2">/</span>
          <Link to="/layanan" className="hover:text-primary transition-colors">Sertifikasi</Link>
          <span className="mx-2">/</span>
          <span className="text-secondary font-semibold">{activeCert.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Content (Left) */}
          <div className="lg:w-2/3 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header Image */}
            <div className="w-full h-64 md:h-80 bg-gray-200 relative overflow-hidden">
              <img 
                src={activeCert.img} 
                alt={activeCert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12">
              <motion.div
                key={activeCert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl font-sen font-black text-secondary mb-6 uppercase leading-tight">
                  {activeCert.title} {activeCert.desc}
                </h1>
                <div className="w-20 h-1.5 bg-primary mb-8 rounded-full"></div>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>
                    {activeCert.contentIntro}
                  </p>
                  
                  <h4 className="font-bold text-lg text-secondary">{activeCert.benefitsTitle}</h4>
                  <ul className="space-y-3 mt-4 mb-8">
                    {activeCert.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p>
                    {activeCert.contentOutro}
                  </p>

                  <ul className="space-y-3 mt-4">
                    {activeCert.advantages.map((item, idx) => (
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
                Sertifikasi Lainnya
              </h3>
              
              <div className="space-y-4">
                {otherCertifications.map((cert, idx) => (
                  <Link 
                    key={idx} 
                    to={cert.path}
                    className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary transition-colors group-hover:scale-110 duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary group-hover:text-primary transition-colors leading-tight text-sm">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{cert.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Call to Action CTA */}
            <div className="bg-secondary rounded-3xl p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-sen font-bold mb-3 relative z-10">Butuh Bantuan?</h3>
              <p className="text-gray-300 text-sm mb-6 relative z-10">Konsultasikan kebutuhan sertifikasi perusahaan Anda bersama ahlinya.</p>
              <a 
                href="https://wa.me/6289644448721?text=Halo%20Nuansa%20Legal,%20saya%20ingin%20konsultasi%20mengenai%20Sertifikasi%20ISO"
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

export default SertifikasiDetail;
