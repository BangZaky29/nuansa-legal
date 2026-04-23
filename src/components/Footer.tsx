import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import { useImages } from '../hooks/useImages';

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
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
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
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.969c0 2.112.551 4.174 1.6 6.035L0 24l6.142-1.611a11.782 11.782 0 005.904 1.587h.005c6.604 0 11.967-5.363 11.97-11.97a11.815 11.815 0 00-3.608-8.452z" />
                </svg>
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
