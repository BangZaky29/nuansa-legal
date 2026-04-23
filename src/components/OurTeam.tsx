import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useImages } from '../hooks/useImages';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  whatsapp?: string;
}

const SocialIcon = ({ name, className = "" }: { name: string, className?: string }) => (
  <div 
    className={`w-5 h-5 bg-current ${className}`}
    style={{
      mask: `url(https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${name}.svg) no-repeat center`,
      WebkitMask: `url(https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${name}.svg) no-repeat center`,
      maskSize: 'contain',
      WebkitMaskSize: 'contain'
    }}
  />
);

const teamSocials: Record<string, { ig: string; wa: string }> = {
  'Vikri Firdaus': {
    ig: 'https://www.instagram.com/dausisasi/',
    wa: 'https://wa.me/6285883437514'
  },
  'Arin': {
    ig: 'https://www.instagram.com/cintamarina015_/',
    wa: 'https://wa.me/6288213977435'
  },
  'Ela': {
    ig: 'https://www.instagram.com/elanurajijah14_/',
    wa: 'https://wa.me/6288294096100'
  }
};

const OurTeam: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { images: teamImages, loading } = useImages('team');

  useEffect(() => {
    if (loading) return;

    const parsedMembers = teamImages.map((img) => {
      const filename = img.name.split('.')[0] || '';
      let name = '';
      let role = '';

      if (filename.includes('_as_')) {
        const parts = filename.split('_as_');
        name = parts[0].replace(/_/g, ' ');
        role = parts[1].replace(/_/g, ' ');
      } else {
        const lastUnderscore = filename.lastIndexOf('_');
        if (lastUnderscore !== -1) {
          name = filename.substring(0, lastUnderscore).replace(/_/g, ' ');
          role = filename.substring(lastUnderscore + 1).replace(/_/g, ' ');
        } else {
          name = filename.replace(/_/g, ' ');
          role = 'Team Member';
        }
      }

      const social = teamSocials[name] || 
                    Object.entries(teamSocials).find(([k]) => name.includes(k))?.[1];

      return {
        name,
        role,
        image: img.url,
        instagram: social?.ig,
        whatsapp: social?.wa
      };
    });

    setMembers(parsedMembers.sort((a, b) => {
      if (a.role.toLowerCase().includes('founder')) return -1;
      if (b.role.toLowerCase().includes('founder')) return 1;
      return a.name.localeCompare(b.name);
    }));
  }, [teamImages, loading]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const bgTextX = useTransform(scrollXProgress, [0, 1], [0, -200]);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Text */}
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[18rem] font-sen font-black text-gray-50/50 whitespace-nowrap pointer-events-none select-none z-0"
      >
        EXPERT TEAM PT. NUANSA BERKAH SEJAHTERA
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Meet The Experts</span>
            <h2 className="text-4xl md:text-6xl font-sen font-bold text-secondary mb-6 italic leading-tight">
              Di Balik Kesuksesan <br />
              <span className="text-primary">Legalitas Anda</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Tim profesional kami berdedikasi tinggi untuk memberikan solusi hukum dan perizinan terbaik bagi pertumbuhan bisnis Anda.
            </p>
          </motion.div>

          <div className="flex flex-col items-end gap-6">
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:border-primary transition-all shadow-sm active:scale-90"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:border-primary transition-all shadow-sm active:scale-90"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            {/* Scroll Progress Bar */}
            <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
              />
            </div>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto pb-20 pt-10 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="min-w-[320px] md:min-w-[450px] snap-center"
            >
              <div className="group relative">
                {/* Artistic Card Frame */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] bg-gray-100 group-hover:shadow-[0_40px_80px_-15px_rgba(255,200,0,0.3)] transition-all duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Social Overlay - Moved to Bottom Right */}
                  <div className="absolute bottom-10 right-10 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    {member.instagram && (
                      <a 
                        href={member.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#E1306C] rounded-2xl flex items-center justify-center text-white transition-all shadow-lg shadow-[#E1306C]/30"
                      >
                        <SocialIcon name="instagram" />
                      </a>
                    )}
                    {member.whatsapp && (
                      <a 
                        href={member.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center text-white transition-all shadow-lg shadow-[#25D366]/30"
                      >
                        <SocialIcon name="whatsapp" />
                      </a>
                    )}
                  </div>

                  {/* Top Right Label - Fixed position and visibility */}
                  <div className="absolute top-10 right-[-10px] bg-primary shadow-xl text-secondary font-black text-[10px] uppercase tracking-widest py-2 px-6 rounded-l-full transform z-20">
                    Nuansa Team
                  </div>
                </div>

                {/* Name & Role Badge */}
                <div className="mt-10 px-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-[2px] w-12 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-3xl font-sen font-black text-secondary group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                  </div>
                  <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs italic pl-16">
                    {member.role}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -z-10 top-1/4 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
            </motion.div>
          ))}
          {/* Spacer for scroll end */}
          <div className="min-w-[100px] h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
