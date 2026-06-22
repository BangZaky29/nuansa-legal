import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ChevronRight, BookOpen, ShieldAlert, Users } from 'lucide-react';
import SEO from '../components/SEO';

const PelatihanDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const courses = [
    { 
      title: 'Pelatihan Auditor Internal', desc: 'Pelatihan untuk Auditor ISO', path: '/pelatihan/auditor-internal', icon: <BookOpen />,
      img: 'https://placehold.co/1600x800/4338ca/ffffff?text=Auditor+Internal',
      contentIntro: 'Pelatihan Auditor Internal dirancang untuk membekali peserta dengan pengetahuan dan keterampilan yang diperlukan untuk melakukan audit internal atas sistem manajemen. Pelatihan ini sangat penting bagi perusahaan yang ingin mempertahankan sertifikasi ISO.',
      benefitsTitle: 'Keuntungan Mengikuti Pelatihan Ini:',
      benefits: ['Memahami prinsip, prosedur, dan teknik audit sistem manajemen', 'Mampu merencanakan dan melaksanakan audit internal', 'Menyusun laporan audit yang objektif dan bernilai tambah', 'Meningkatkan kompetensi tim dalam melakukan perbaikan berkelanjutan', 'Memenuhi persyaratan wajib dari klausul ISO terkait audit internal'],
      contentOutro: 'Instruktur kami adalah lead auditor bersertifikat dengan pengalaman belasan tahun di berbagai industri. Nilai lebih dari program pelatihan kami:',
      advantages: ['Materi up-to-date sesuai standar audit ISO 19011:2018', 'Studi kasus nyata dari industri klien', 'Sertifikat kelulusan yang diakui', 'Pendampingan praktik langsung di lapangan']
    },
    { 
      title: 'Awareness K3 & Fire Safety', desc: 'Keselamatan dan Kesehatan Kerja', path: '/pelatihan/awareness-k3', icon: <ShieldAlert />,
      img: 'https://placehold.co/1600x800/b91c1c/ffffff?text=Awareness+K3',
      contentIntro: 'Pelatihan Awareness K3 dan Fire Safety bertujuan untuk meningkatkan kesadaran seluruh karyawan terhadap potensi bahaya di tempat kerja dan cara menanggulangi insiden kebakaran. Keselamatan adalah tanggung jawab bersama, bukan hanya tugas petugas K3.',
      benefitsTitle: 'Tujuan & Manfaat Pelatihan:',
      benefits: ['Memahami dasar-dasar keselamatan dan kesehatan kerja (K3)', 'Mampu mengidentifikasi bahaya dan menilai risiko (HIRA)', 'Mengetahui cara penggunaan APAR (Alat Pemadam Api Ringan)', 'Mampu melakukan evakuasi darurat saat terjadi kebakaran', 'Menumbuhkan budaya kerja yang aman (Safety Culture)'],
      contentOutro: 'Metode pelatihan mencakup teori di kelas dan simulasi praktik lapangan (fire drill). Kenapa memilih training K3 bersama kami?',
      advantages: ['Fasilitator ahli dan praktisi K3 berpengalaman', 'Peralatan peraga yang lengkap dan sesuai standar', 'Materi dapat disesuaikan dengan risiko spesifik pabrik/kantor Anda', 'Membantu pemenuhan kepatuhan UU No. 1 Tahun 1970']
    },
    { 
      title: 'Seminar Bisnis & UMKM', desc: 'Pelatihan Legalitas untuk UMKM', path: '/pelatihan/seminar-bisnis', icon: <Users />,
      img: 'https://placehold.co/1600x800/b45309/ffffff?text=Seminar+Bisnis',
      contentIntro: 'Program Seminar Bisnis dan UMKM kami dirancang khusus untuk para pengusaha pemula dan pemilik bisnis mikro-menengah yang ingin scale-up. Kami membahas seluk-beluk legalitas, perpajakan dasar, dan strategi manajemen risiko.',
      benefitsTitle: 'Materi yang Didapatkan:',
      benefits: ['Langkah-langkah mendirikan badan hukum (PT Perorangan & PT Biasa)', 'Cara mudah mengurus NIB melalui OSS RBA', 'Pentingnya pendaftaran merek dagang (HAKI) agar tidak dicuri', 'Dasar-dasar pembukuan dan perpajakan untuk UMKM', 'Strategi pitching dan mencari pendanaan/investor'],
      contentOutro: 'Seminar kami sering kali berkolaborasi dengan inkubator bisnis dan instansi pemerintah terkait. Benefit bergabung dalam seminar kami:',
      advantages: ['Networking dengan sesama pengusaha dan mentor bisnis', 'Konsultasi gratis 1-on-1 saat sesi seminar', 'Modul panduan langkah demi langkah', 'Grup alumni untuk diskusi lanjutan pasca-seminar']
    }
  ];

  const activeCourse = courses.find(c => c.path.endsWith(id || '')) || courses[0];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <SEO 
        title={`${activeCourse.title} - Pelatihan Nuansa Legal`}
        description="Materi dan informasi program pelatihan."
      />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <nav className="flex mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Pelatihan</span>
          <span className="mx-2">/</span>
          <span className="text-secondary font-semibold">{activeCourse.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="w-full h-64 md:h-80 bg-gray-200 relative overflow-hidden">
              <img 
                src={activeCourse.img} 
                alt={activeCourse.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <motion.div
                key={activeCourse.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl font-sen font-black text-secondary mb-6 leading-tight">
                  {activeCourse.title}
                </h1>
                <div className="w-20 h-1.5 bg-primary mb-8 rounded-full"></div>
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>{activeCourse.contentIntro}</p>
                  <h4 className="font-bold text-lg text-secondary">{activeCourse.benefitsTitle}</h4>
                  <ul className="space-y-3 mt-4 mb-8">
                    {activeCourse.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>{activeCourse.contentOutro}</p>
                  <ul className="space-y-3 mt-4">
                    {activeCourse.advantages.map((item, idx) => (
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
                Pelatihan Lainnya
              </h3>
              <div className="space-y-4">
                {courses.map((srv, idx) => (
                  <Link 
                    key={idx} 
                    to={srv.path}
                    className={`group flex items-center gap-4 p-3 rounded-2xl transition-colors border ${activeCourse.path === srv.path ? 'bg-primary/5 border-primary/20' : 'hover:bg-gray-50 border-transparent hover:border-gray-100'}`}
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
              <h3 className="text-2xl font-sen font-bold mb-3 relative z-10">Daftar Pelatihan?</h3>
              <p className="text-gray-300 text-sm mb-6 relative z-10">Hubungi tim kami untuk jadwal pelatihan terdekat.</p>
              <a 
                href="https://wa.me/6289644448721?text=Halo%20Nuansa%20Legal,%20saya%20ingin%20info%20jadwal%20pelatihan"
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

export default PelatihanDetail;
