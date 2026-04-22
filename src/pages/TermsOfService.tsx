import React from 'react';
import { motion } from 'framer-motion';
import { Scale, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Syarat dan Ketentuan - Nuansa Legal"
        description="Syarat dan Ketentuan penggunaan layanan Nuansa Legal."
      />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Scale size={32} />
              </div>
              <h1 className="text-4xl font-sen font-bold text-secondary">Syarat & <span className="text-primary italic">Ketentuan</span></h1>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <CheckCircle className="text-primary" size={24} /> 1. Penerimaan Ketentuan
                </h2>
                <p>
                  Dengan mengakses dan menggunakan situs web Nuansa Legal, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui bagian apa pun dari ketentuan ini, Anda tidak diperbolehkan menggunakan layanan kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <Scale className="text-primary" size={24} /> 2. Ruang Lingkup Layanan
                </h2>
                <p>
                  Nuansa Legal menyediakan jasa konsultasi dan pengurusan administrasi hukum terkait pendirian badan usaha (PT, CV, dll), perizinan usaha, dan pendaftaran merek di Indonesia. Kami bukan firma hukum dan informasi di situs ini bukan merupakan nasihat hukum formal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <AlertCircle className="text-primary" size={24} /> 3. Kewajiban Pengguna
                </h2>
                <p>
                  Pengguna setuju untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memberikan informasi yang akurat, lengkap, dan terbaru.</li>
                  <li>Tidak menggunakan layanan kami untuk tujuan ilegal atau melanggar hukum.</li>
                  <li>Bertanggung jawab atas dokumen yang diberikan kepada kami untuk keperluan perizinan.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <HelpCircle className="text-primary" size={24} /> 4. Pembayaran dan Biaya
                </h2>
                <p>
                  Biaya layanan akan disepakati sebelum pengerjaan dimulai. Kami berhak mengubah harga layanan sewaktu-waktu, namun perubahan tersebut tidak akan memengaruhi pesanan yang sudah berjalan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <AlertCircle className="text-primary" size={24} /> 5. Batasan Tanggung Jawab
                </h2>
                <p>
                  Nuansa Legal tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial yang timbul dari penggunaan layanan kami atau keterlambatan proses perizinan yang disebabkan oleh pihak ketiga (instansi pemerintah, dll).
                </p>
              </section>

              <div className="pt-10 border-t border-gray-100 italic text-sm text-gray-400">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
