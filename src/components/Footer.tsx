import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import { useImages } from '../hooks/useImages';

const SocialIcon = ({ name, size = 18, className = "" }: { name: string, size?: number, className?: string }) => (
  <div 
    className={`bg-current ${className}`}
    style={{
      width: size,
      height: size,
      mask: `url(https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${name}.svg) no-repeat center`,
      WebkitMask: `url(https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${name}.svg) no-repeat center`,
      maskSize: 'contain',
      WebkitMaskSize: 'contain'
    }}
  />
);

const Footer: React.FC = () => {
  const { images } = useImages('other');
  const logo = images.find(img => img.name.includes('LOGO-NUANSA-LEGAL'))?.url || '';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              {logo && (
                <img src={logo} alt="PT. NUANSA BERKAH SEJAHTERA" className="h-12 w-auto rounded-lg" />
              )}
              <span className="font-sen font-bold text-2xl text-white">PT. NUANSA BERKAH SEJAHTERA</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Solusi hukum terpercaya untuk kebutuhan bisnis dan perizinan Anda di Indonesia. Profesional, cepat, dan transparan.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/nuansalegal.id/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all text-gray-400 group relative"
                title="Instagram"
              >
                <SocialIcon name="instagram" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-navy text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold shadow-lg">
                  @nuansalegal.id
                </span>
              </a>
              <a 
                href="https://wa.me/6289644448721" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-gray-400 group relative"
                title="WhatsApp"
              >
                <SocialIcon name="whatsapp" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-navy text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold shadow-lg">
                  Admin Nuansa Legal
                </span>
              </a>
              <a href="https://nuansasolution.id" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all group relative">
                <Globe size={20} />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-navy text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
                  Nuansa Solution
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sen font-bold text-xl mb-6 text-primary">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/promo" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Promo
                </Link>
              </li>
              <li>
                <Link to="/kontak-kami" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sen font-bold text-xl mb-6 text-primary">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin className="text-primary shrink-0" size={20} />
                <div>
                  <p className="text-white font-bold text-sm mb-1">Jakarta</p>
                  <p className="text-xs leading-relaxed">Gedung STC Senayan Lt.3 No.190, Jakarta Pusat</p>
                </div>
              </li>
              <li className="flex gap-3 text-gray-400">
                <MapPin className="text-primary shrink-0" size={20} />
                <div>
                  <p className="text-white font-bold text-sm mb-1">Bogor</p>
                  <p className="text-xs leading-relaxed">Cibungbulang Town Hill Cluster Halimun H7, Kab. Bogor</p>
                </div>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+62 896-4444-8721</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="text-primary shrink-0" size={20} />
                <span>info@nuansalegal.id</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-sen font-bold text-xl mb-6 text-primary">Jam Operasional</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-400">
                <span>Senin - Jumat</span>
                <span>08:00 - 17:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sabtu</span>
                <span>09:00 - 15:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Minggu</span>
                <span className="text-red-400">Tutup</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-500 italic">
                *Tersedia layanan darurat 24/7 via WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {currentYear} PT. NUANSA BERKAH SEJAHTERA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
