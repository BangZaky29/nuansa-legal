import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const SocialIcon = ({ name, size = 20, className = "" }: { name: string, size?: number, className?: string }) => (
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

const Layout: React.FC = () => {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const phoneNumber = "6289644448721";
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    setIsChatOpen(false);
    setMessage('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Floating WhatsApp Section */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Chat Window */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 w-72 md:w-80 overflow-hidden mb-2"
            >
              {/* Header Chat */}
              <div className="bg-[#25D366] p-4 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                   <SocialIcon name="whatsapp" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Admin Nuansa Legal</h4>
                  <p className="text-[10px] opacity-80">Biasanya membalas dalam hitungan menit</p>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="ml-auto hover:bg-white/20 p-1 rounded-full transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                </button>
              </div>

              {/* Body Chat */}
              <div className="p-4 bg-gray-50/50">
                <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-secondary mb-4 max-w-[90%]">
                  Halo! Ada yang bisa kami bantu seputar legalitas bisnis Anda? Silakan ketik pesan di bawah ya.
                </div>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ketik pesan Anda di sini..."
                  className="w-full bg-white border border-gray-100 rounded-xl p-3 text-sm focus:outline-none focus:border-[#25D366] transition-all resize-none h-24 font-medium"
                ></textarea>
                <button 
                  onClick={handleSendMessage}
                  className="w-full mt-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20"
                >
                  Kirim ke WhatsApp <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group relative overflow-hidden"
          aria-label="Toggle Chat"
        >
          {!isChatOpen && (
            <span className="absolute right-full mr-3 bg-white text-secondary px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Butuh Bantuan? Chat Sekarang
            </span>
          )}
          <motion.div
            animate={{ rotate: isChatOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {isChatOpen ? (
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
            ) : (
              <SocialIcon name="whatsapp" size={28} />
            )}
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default Layout;
