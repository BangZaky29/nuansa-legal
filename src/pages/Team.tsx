import React from 'react';
import { motion } from 'framer-motion';
import OurTeam from '../components/OurTeam';
import SEO from '../components/SEO';
import { Award, Shield, Heart } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-0 bg-white overflow-x-hidden">
      <SEO
        title="Tim Kami - Nuansa Legal"
        description="Kenali tim profesional di balik Nuansa Legal. Konsultan hukum, marketing, dan kreatif yang siap membantu bisnis Anda tumbuh."
      />

      {/* Hero Header with Parallax Effect */}
      <div className="container mx-auto px-4 md:px-6 mb-20 relative">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.3em", opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-primary font-black uppercase text-sm mb-6 block"
            >
              Building The Future Together
            </motion.span>
            <h1 className="text-5xl md:text-8xl font-sen font-bold text-secondary mb-8 leading-[1.1] tracking-tight">
              Kreativitas & <br />
              <span className="text-primary italic">Integritas</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
              Kami bukan sekadar tim, kami adalah mitra strategis yang menggabungkan keahlian legal dengan inovasi modern untuk mengakselerasi bisnis Anda.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Values Section - Premium Grid */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent opacity-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-sen font-bold text-white mb-6">Nilai Utama Kami</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Fondasi yang membuat kami tetap berdiri teguh dalam melayani kebutuhan legalitas Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integritas',
                desc: 'Kejujuran adalah mata uang utama kami. Transparansi penuh dalam setiap proses perizinan.',
                icon: <Shield className="text-primary" size={40} />,
                number: '01'
              },
              {
                title: 'Keahlian',
                desc: 'Memahami setiap celah hukum untuk memberikan perlindungan maksimal bagi bisnis Anda.',
                icon: <Award className="text-primary" size={40} />,
                number: '02'
              },
              {
                title: 'Dedikasi',
                desc: 'Kami melayani dengan hati, memastikan setiap klien mendapatkan solusi yang personal.',
                icon: <Heart className="text-primary" size={40} />,
                number: '03'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="absolute top-8 right-12 text-6xl font-sen font-black text-white/5 group-hover:text-primary/10 transition-colors">
                  {value.number}
                </div>
                <div className="mb-10 w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Team Section (Reusing Enhanced Component) */}
      <div className="py-20">
        <OurTeam />
      </div>

      {/* Bottom Padding */}
      <div className="h-20"></div>
    </div>
  );
};

export default Team;
