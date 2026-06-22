import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, CheckCircle, XCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';

const Verifikasi: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  // Dummy Data Array
  const dummyCertificates = [
    {
      certificateNo: 'NL-2026-9001-001',
      customerName: 'PT. BERKAH JAYA ABADI',
      systemType: 'ISO 9001:2015 Sistem Manajemen Mutu',
      scope: 'Penyediaan Jasa Konstruksi, Pengadaan Barang, dan Perdagangan Umum',
      address: 'Jl. Jenderal Sudirman Kav. 50, Senayan, Jakarta Selatan, Indonesia',
      systemState: 'Valid',
      expireDate: '15/08/2029',
      fileUrl: '#'
    },
    {
      certificateNo: 'NL-2026-14001-088',
      customerName: 'CV. MAJU BERSAMA',
      systemType: 'ISO 14001:2015 Sistem Manajemen Lingkungan',
      scope: 'Manufaktur dan Pengelolaan Limbah Terpadu',
      address: 'Kawasan Industri Cikarang, Jawa Barat, Indonesia',
      systemState: 'Valid',
      expireDate: '20/11/2028',
      fileUrl: '#'
    },
    {
      certificateNo: '123',
      customerName: 'PT. DEMO TESTING',
      systemType: 'ISO 45001:2018 Sistem Manajemen K3',
      scope: 'Layanan Pengujian dan Audit K3',
      address: 'Jl. Contoh No. 123, Jakarta Pusat, Indonesia',
      systemState: 'Expired',
      expireDate: '01/01/2025',
      fileUrl: '#'
    }
  ];

  const [foundCertificate, setFoundCertificate] = useState<any>(null);

  const performSearch = (query: string) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setSearched(false);
    
    // Simulate network request
    setTimeout(() => {
      const result = dummyCertificates.find(
        (cert) => 
          cert.certificateNo.toLowerCase() === query.trim().toLowerCase() ||
          cert.customerName.toLowerCase().includes(query.trim().toLowerCase())
      );
      
      setFoundCertificate(result || null);
      setLoading(false);
      setSearched(true);
    }, 1000);
  };

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchParams({ q: searchQuery });
    performSearch(searchQuery);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-24 pb-20">
      <SEO 
        title="Verifikasi Sertifikat" 
        description="Verifikasi keaslian sertifikat legalitas dan perizinan usaha dari PT. Nuansa Berkah Sejahtera."
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-sen font-black text-secondary mb-4">
            Verifikasi Sertifikat
          </h1>
          <p className="text-gray-600">
            Masukkan Nomor Sertifikat atau Nama Perusahaan untuk memeriksa keabsahan dokumen legalitas Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10"
        >
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Contoh: NL-2026-9001-001 atau 123"
                className="w-full pl-11 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-700 font-medium"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary-dark text-secondary font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" />
              ) : (
                'Cari Data'
              )}
            </button>
          </form>

          <p className="mb-10 text-sm text-gray-500 text-center">
            Coba tes dengan No. Sertifikat Dummy: <span className="font-mono text-primary font-bold cursor-pointer hover:underline" onClick={() => setSearchQuery('NL-2026-9001-001')}>NL-2026-9001-001</span>, <span className="font-mono text-primary font-bold cursor-pointer hover:underline" onClick={() => setSearchQuery('NL-2026-14001-088')}>NL-2026-14001-088</span>, atau <span className="font-mono text-primary font-bold cursor-pointer hover:underline" onClick={() => setSearchQuery('123')}>123</span>
          </p>

          {searched && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {foundCertificate ? (
                <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-primary/10 px-6 py-4 border-b border-primary/20 flex items-center gap-3">
                    <CheckCircle className="text-primary w-6 h-6" />
                    <h3 className="font-bold text-secondary text-lg">Sertifikat Ditemukan</h3>
                  </div>
                  <div className="p-6 md:p-8">
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        {[
                          { label: 'Certificate No', value: foundCertificate.certificateNo },
                          { label: 'Customer Name', value: foundCertificate.customerName },
                          { label: 'System Type', value: foundCertificate.systemType },
                          { label: 'Scope', value: foundCertificate.scope },
                          { label: 'Address', value: foundCertificate.address },
                          { 
                            label: 'System State', 
                            value: (
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-sm ${foundCertificate.systemState === 'Valid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                <span className={`w-2 h-2 rounded-full ${foundCertificate.systemState === 'Valid' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                {foundCertificate.systemState}
                              </span>
                            ) 
                          },
                          { label: 'Expire Date', value: foundCertificate.expireDate },
                          { 
                            label: 'File', 
                            value: (
                              <a href={foundCertificate.fileUrl} className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold hover:underline">
                                <FileText size={18} />
                                Click here
                              </a>
                            ) 
                          },
                        ].map((row, idx) => (
                          <tr key={idx} className="border-b border-gray-100 last:border-0">
                            <th className="py-4 pr-4 text-gray-500 font-medium w-1/3 md:w-1/4 align-top">{row.label}</th>
                            <td className="py-4 text-secondary font-semibold font-sen align-top break-words">
                              <span className="hidden md:inline mr-4 text-gray-300">:</span>
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center flex flex-col items-center">
                  <XCircle className="w-12 h-12 text-red-400 mb-3" />
                  <h3 className="font-bold text-red-800 text-lg mb-1">Data Tidak Ditemukan</h3>
                  <p className="text-red-600/80">Sertifikat dengan kata kunci "{searchQuery}" tidak ada dalam database kami.</p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Verifikasi;
