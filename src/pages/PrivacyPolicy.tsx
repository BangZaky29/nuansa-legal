import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Kebijakan Privasi - Nuansa Legal"
        description="Kebijakan Privasi Nuansa Legal menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda."
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
                <Shield size={32} />
              </div>
              <h1 className="text-4xl font-sen font-bold text-secondary">Kebijakan <span className="text-primary italic">Privasi</span></h1>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <Eye className="text-primary" size={24} /> 1. Pendahuluan
                </h2>
                <p>
                  Nuansa Legal ("kami", "milik kami") berkomitmen untuk melindungi dan menghormati privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda mengunjungi situs web kami dan menggunakan layanan kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <Lock className="text-primary" size={24} /> 2. Informasi Yang Kami Kumpulkan
                </h2>
                <p>
                  Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara langsung kepada kami, termasuk namun tidak terbatas pada:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Informasi bisnis (Nama PT/CV, alamat kantor)</li>
                  <li>Pesan atau pertanyaan yang Anda kirimkan melalui formulir kontak</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <FileText className="text-primary" size={24} /> 3. Penggunaan Informasi
                </h2>
                <p>
                  Informasi yang kami kumpulkan digunakan untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memberikan layanan jasa hukum dan legalitas yang Anda minta</li>
                  <li>Menghubungi Anda kembali terkait pertanyaan atau konsultasi</li>
                  <li>Mengirimkan informasi administratif atau pembaruan layanan</li>
                  <li>Meningkatkan kualitas layanan dan pengalaman pengguna di situs web kami</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <Shield className="text-primary" size={24} /> 4. Keamanan Data
                </h2>
                <p>
                  Kami mengimplementasikan langkah-langkah keamanan teknis dan organisasional yang tepat untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, perlu diingat bahwa tidak ada metode transmisi data melalui internet yang 100% aman.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-sen font-bold text-secondary flex items-center gap-3">
                  <FileText className="text-primary" size={24} /> 5. Hak Anda
                </h2>
                <p>
                  Anda memiliki hak untuk mengakses, memperbarui, atau meminta penghapusan informasi pribadi Anda yang kami simpan. Silakan hubungi kami jika Anda ingin menggunakan hak-hak ini.
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

export default PrivacyPolicy;
