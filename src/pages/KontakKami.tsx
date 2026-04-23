import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.969c0 2.112.551 4.174 1.6 6.035L0 24l6.142-1.611a11.782 11.782 0 005.904 1.587h.005c6.604 0 11.967-5.363 11.97-11.97a11.815 11.815 0 00-3.608-8.452z" />
  </svg>
);

const KontakKami: React.FC = () => {
  const [formData, setFormData] = React.useState({
    nama: '',
    email: '',
    layanan: 'Pilih Layanan',
    pesan: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "6289644448721";
    const text = `*Halo Nuansa Legal, Saya ingin bertanya:*

*Nama:* ${formData.nama}
*Email:* ${formData.email}
*Layanan:* ${formData.layanan}
*Pesan:* ${formData.pesan}

_Terima kasih._`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-gray-50 overflow-x-hidden min-h-screen">
      <SEO
        title="Hubungi Kami - Konsultasi Legalitas Gratis"
        description="Punya pertanyaan seputar pendirian PT, CV, atau izin usaha? Hubungi tim ahli PT. NUANSA BERKAH SEJAHTERA sekarang untuk konsultasi gratis dan respon cepat."
      />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-sen font-bold text-secondary mb-6">
              Hubungi <span className="text-primary italic">Tim Ahli</span> Kami
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kami siap memberikan konsultasi gratis dan mendampingi Anda dalam setiap langkah proses legalitas bisnis Anda.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-navy rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

              <h3 className="text-3xl font-sen font-bold mb-10 relative z-10 text-primary">Informasi Kontak</h3>

              <div className="space-y-10 relative z-10">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-secondary transition-all duration-500 transform group-hover:rotate-12">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">Telepon & WhatsApp</h4>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors">+62 896-4444-8721</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-secondary transition-all duration-500 transform group-hover:rotate-12">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">Email Resmi</h4>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors">info@nuansalegal.id</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start group cursor-pointer"
                  onClick={() => window.open('https://www.google.com/maps?q=Gedung+STC+Senayan+Jakarta', '_blank')}
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-secondary transition-all duration-500 transform group-hover:rotate-12">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">Kantor Jakarta</h4>
                    <p className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">Gedung STC Senayan Lt.3 No.190, Jakarta Pusat</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start group cursor-pointer"
                  onClick={() => window.open('https://www.google.com/maps?q=-6.5793111,106.6675551&z=17&hl=id', '_blank')}
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-secondary transition-all duration-500 transform group-hover:rotate-12">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">Kantor Bogor</h4>
                    <p className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">Cibungbulang Town Hill Cluster Halimun H7, Kab. Bogor</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-8 items-center">
                <div className="flex flex-col gap-3 relative z-20">
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em]">Social Networks</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/nuansalegal.id/" target="_blank" rel="noopener noreferrer">
                      <motion.div 
                        whileHover={{ y: -5, scale: 1.1, filter: 'brightness(1.2)' }}
                        className="w-11 h-11 rounded-xl bg-[#E1306C] flex items-center justify-center transition-all cursor-pointer text-white shadow-lg shadow-[#E1306C]/20"
                      >
                        <InstagramIcon />
                      </motion.div>
                    </a>
                    <a href="https://wa.me/6289644448721" target="_blank" rel="noopener noreferrer">
                      <motion.div 
                        whileHover={{ y: -5, scale: 1.1, filter: 'brightness(1.2)' }}
                        className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center transition-all cursor-pointer text-white shadow-lg shadow-[#25D366]/20"
                      >
                        <WhatsAppIcon />
                      </motion.div>
                    </a>
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <Clock className="text-primary inline-block mb-1 animate-pulse" size={24} />
                  <p className="text-sm font-bold">Respon Cepat</p>
                  <p className="text-xs text-gray-500">Senin - Jumat (09:00 - 17:00)</p>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] h-72 overflow-hidden shadow-xl border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700 p-2"
            >
              <div className="w-full h-full rounded-[2rem] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2982885915!2d106.66536647491024!3d-6.579311093413158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzQnNDUuNSJTIDEwNsKwNDAnMDMuMiJF!5e0!3m2!1sid!2sid!4v1713780000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem]"></div>

              <h3 className="text-3xl font-sen font-bold text-secondary mb-10 relative z-10">Ada Pertanyaan? <br />Kirim Pesan Sekarang</h3>

              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] flex items-center gap-2">
                      Nama Lengkap <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-primary outline-none transition-all font-medium placeholder:text-gray-300"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] flex items-center gap-2">
                      Alamat Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-primary outline-none transition-all font-medium placeholder:text-gray-300"
                      placeholder="email@bisnis.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] flex items-center gap-2">
                    Layanan Yang Diminati
                  </label>
                  <div className="relative">
                    <select
                      name="layanan"
                      value={formData.layanan}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-primary outline-none transition-all font-medium appearance-none cursor-pointer"
                    >
                      <option>Pilih Layanan</option>
                      <option>Pendirian PT / CV</option>
                      <option>Pengurusan NIB / Izin Usaha</option>
                      <option>Pendaftaran Merek (HAKI)</option>
                      <option>Lainnya</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <Clock size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] flex items-center gap-2">
                    Pesan Anda
                  </label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-primary outline-none transition-all font-medium resize-none placeholder:text-gray-300"
                    placeholder="Apa yang bisa kami bantu?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-secondary font-black py-5 px-12 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full md:w-auto shadow-primary/20"
                >
                  Kirim Pesan Sekarang <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontakKami;
