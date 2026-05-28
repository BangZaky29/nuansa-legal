import React from 'react';
import { motion } from 'framer-motion';
import { Building, Mail, Phone, MapPin, CheckCircle2, Shield, Calendar, Users, Award } from 'lucide-react';
import SEO from '../components/SEO';

const VirtualOffice: React.FC = () => {
  const packages = [
    {
      name: 'Virtual Office Basic',
      price: 'Rp 2.400.000',
      period: 'tahun',
      desc: 'Solusi ideal bagi startup dan pengusaha mandiri yang membutuhkan alamat bisnis prestisius dan penanganan surat menyurat profesional.',
      features: [
        'Alamat Bisnis Prestisius (Gedung STC Senayan, Jakarta Pusat)',
        'Sistem Penerimaan & Manajemen Surat Menyurat',
        'Pemberitahuan Surat Masuk via WhatsApp & Email',
        'Layanan Resepsionis Profesional',
        'Bebas Penggunaan Wi-Fi Cepat di Ruang Tunggu',
        'Gratis Konsultasi Pendirian PT/CV'
      ],
      color: 'border-gray-200 hover:border-gray-300',
      badge: null,
      popular: false
    },
    {
      name: 'Virtual Office Standard (PKP)',
      price: 'Rp 3.000.000',
      period: 'tahun',
      desc: 'Paket paling populer yang mendukung pengurusan izin Pengusaha Kena Pajak (PKP) dan fasilitas ruang rapat bulanan.',
      features: [
        'Semua Fitur Paket Basic',
        'Mendukung Penuh Pengurusan PKP (Pengusaha Kena Pajak)',
        'Bantuan Survei dari Instansi Pemerintah (Pajak/OSS)',
        'Fasilitas Ruang Rapat (Meeting Room) 8 Jam/Bulan',
        'Papan Nama Perusahaan Resmi di Lobi Bersama',
        'Nomor Telepon Bersama & Call Forwarding'
      ],
      color: 'border-primary shadow-2xl relative scale-105',
      badge: 'Paling Populer',
      popular: true
    },
    {
      name: 'Virtual Office Premium',
      price: 'Rp 8.000.000',
      period: 'tahun',
      desc: 'Layanan terlengkap dengan kuota ruang rapat lebih besar, nomor telepon eksklusif, serta prioritas pendampingan kepatuhan hukum.',
      features: [
        'Semua Fitur Paket Standard',
        'Fasilitas Ruang Rapat (Meeting Room) 10 Jam/Bulan',
        'Nomor Telepon Khusus/Dedicated untuk Perusahaan Anda',
        'Penerusan Panggilan Langsung ke Nomor Pribadi',
        'Prioritas Pendampingan Kunjungan Pajak & Perbankan',
        'Diskon Khusus 15% untuk Pengurusan Legalitas Lainnya'
      ],
      color: 'border-gray-200 hover:border-gray-300',
      badge: 'Terbaik',
      popular: false
    }
  ];

  const handleBooking = (packageName: string, price: string) => {
    const text = `Halo Admin PT. Nuansa Berkah Sejahtera, saya tertarik dengan layanan *${packageName}* seharga *${price}/tahun*. 

Mohon informasi mengenai prosedur pengisian formulir, syarat dokumen pendukung, serta ketersediaan kuota alamat bisnis saat ini. Terima kasih banyak.`;

    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/6289644448721?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-gray-50 overflow-x-hidden">
      <SEO
        title="Jasa Virtual Office Jakarta Pusat Murah & Resmi - PT. Nuansa Berkah Sejahtera"
        description="Sewa Virtual Office murah di Gedung STC Senayan Jakarta Pusat. Mendukung pengurusan PKP, fasilitas ruang rapat, penanganan surat, dan legalitas aman 100%."
      />

      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Prestigious Business Address</span>
            <h1 className="text-4xl md:text-6xl font-sen font-bold text-secondary mb-6 leading-tight">
              Virtual Office Murah & <br className="hidden md:inline" />
              <span className="text-primary italic">Mendukung PKP Resmi</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Tingkatkan kredibilitas bisnis Anda dengan alamat kantor prestisius di pusat bisnis Jakarta, lengkap dengan resepsionis profesional dan ruang rapat modern, mulai dari 100 ribuan per bulan.
            </p>
            <div className="w-24 h-2 bg-primary mx-auto mt-8 rounded-full"></div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch mb-24 pt-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`bg-white rounded-[3rem] p-8 md:p-10 border-2 flex flex-col justify-between transition-all duration-300 ${pkg.popular ? 'border-primary shadow-2xl relative ring-4 ring-primary/10' : 'border-gray-100 hover:shadow-xl'
                }`}
            >
              {pkg.badge && (
                <span className={`absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${pkg.popular ? 'bg-primary text-secondary' : 'bg-secondary text-white'
                  }`}>
                  {pkg.badge}
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-sen font-bold text-secondary mb-4">{pkg.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium min-h-[50px]">{pkg.desc}</p>
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-4xl md:text-5xl font-sen font-black text-secondary">{pkg.price}</span>
                  <span className="text-gray-400 font-bold text-sm">/{pkg.period}</span>
                </div>
                <div className="w-full h-px bg-gray-100 mb-8" />

                <h4 className="font-bold text-sm text-secondary mb-4 flex items-center gap-2">
                  <Award size={16} className="text-primary" /> Fasilitas Utama:
                </h4>
                <ul className="space-y-4">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex gap-3 items-start text-xs font-medium text-gray-600">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleBooking(pkg.name, pkg.price)}
                className={`w-full py-4 px-6 rounded-2xl font-black text-sm transition-all shadow-lg ${pkg.popular
                  ? 'bg-primary hover:bg-primary-dark text-secondary shadow-primary/20'
                  : 'bg-secondary hover:bg-navy text-white shadow-secondary/20'
                  }`}
              >
                Pesan Sekarang
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-3 block">Why Choose Our Office</span>
            <h2 className="text-3xl md:text-4xl font-sen font-bold text-secondary">
              Keunggulan Layanan Kantor Kami
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Alamat Bisnis Sah & Resmi',
                text: 'Berlokasi di Gedung STC Senayan Jakarta Pusat, zonasi komersial murni resmi yang lolos verifikasi BPN, Kemenkumham, & Kantor Pajak.',
                icon: <Building className="text-primary" size={32} />
              },
              {
                title: 'Dukungan PKP 100%',
                text: 'Kami mendampingi proses survei lapangan oleh petugas pajak secara profesional demi menjamin kelulusan status PKP perusahaan Anda.',
                icon: <Shield className="text-primary" size={32} />
              },
              {
                title: 'Fasilitas Rapat Eksklusif',
                text: 'Nikmati akses ruang rapat ber-AC dengan layar presentasi, proyektor, Wi-Fi super cepat, dan kopi/teh gratis untuk tamu bisnis Anda.',
                icon: <Users className="text-primary" size={32} />
              },
              {
                title: 'Manajemen Surat Menyurat',
                text: 'Setiap surat fisik atau dokumen perbankan yang masuk akan disimpan dengan aman dan langsung dilaporkan kepada Anda via WhatsApp/Email.',
                icon: <Mail className="text-primary" size={32} />
              },
              {
                title: 'Layanan Penerima Telepon',
                text: 'Nomor telepon bersama atau khusus perusahaan Anda dengan resepsionis profesional yang siap menyapa klien Anda dengan ramah.',
                icon: <Phone className="text-primary" size={32} />
              },
              {
                title: 'Fleksibilitas Domisili',
                text: 'Tersedia pilihan lokasi di Jakarta Pusat (Senayan) maupun Bogor (Cibungbulang) untuk menyesuaikan dengan target pasar bisnis Anda.',
                icon: <MapPin className="text-primary" size={32} />
              }
            ].map((benefit, bidx) => (
              <div key={bidx} className="space-y-4">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary">{benefit.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 transform translate-x-20"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-sen font-bold mb-6 text-primary italic leading-tight">
                Mulai Bisnis Kredibel <br />Tanpa Biaya Sewa Mahal
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                Hemat anggaran operasional fisik kantor hingga 90%! Alihkan investasi modal Anda untuk pengembangan produk dan pemasaran sementara kami mengurus alamat resmi dan penanganan operasional kantor Anda secara aman dan profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/6289644448721?text=Halo%20Admin%20Nuansa%20Legal,%20saya%20tertarik%20untuk%20sewa%20Virtual%20Office%20di%20STC%20Senayan.%20Bisa%20bantu%20jelaskan%20persyaratannya?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-white text-secondary font-black py-4 px-8 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 text-sm"
                >
                  Hubungi Admin Sekarang
                </motion.a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center relative">
              <div className="relative z-10 border-8 border-white/5 rounded-full p-12">
                <div className="bg-white/5 backdrop-blur-md rounded-full aspect-square w-80 flex items-center justify-center border border-white/10 shadow-inner">
                  <Calendar size={130} className="text-primary opacity-30 transform -rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default VirtualOffice;
