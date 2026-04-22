import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Camera } from 'lucide-react';
import SEO from '../components/SEO';

const KontakKami: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 bg-gray-50 overflow-x-hidden min-h-screen">
      <SEO 
        title="Hubungi Kami - Konsultasi Legalitas Gratis"
        description="Punya pertanyaan seputar pendirian PT, CV, atau izin usaha? Hubungi tim ahli PT. Nuansa Berkah Sejahtera sekarang untuk konsultasi gratis dan respon cepat."
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
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em]">Social Networks</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/nuansalegal.id/" target="_blank" rel="noopener noreferrer">
                      <motion.div 
                        whileHover={{ y: -5, backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                      >
                        <Camera size={20} />
                      </motion.div>
                    </a>
                    <motion.div 
                      whileHover={{ y: -5, backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                    >
                      <MessageSquare size={20} />
                    </motion.div>
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
              
              <h3 className="text-3xl font-sen font-bold text-secondary mb-10 relative z-10">Ada Pertanyaan? <br/>Kirim Pesan Sekarang</h3>
              
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] flex items-center gap-2">
                       Nama Lengkap <span className="text-primary">*</span>
                    </label>
                    <input 
                      type="text" 
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
                    <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-primary outline-none transition-all font-medium appearance-none cursor-pointer">
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
