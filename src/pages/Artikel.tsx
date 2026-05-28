import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, ExternalLink, Clock, RefreshCw, Newspaper, AlertTriangle, Search, ArrowRight, TrendingUp, Globe, Cpu, Filter, X } from 'lucide-react';
import SEO from '../components/SEO';
import { useArticles, formatArticleDate, getRelativeTime, getFallbackImage } from '../hooks/useArticles';
import type { Article } from '../hooks/useArticles';
import { ARTICLE_CATEGORIES } from '../config';

// ─── Category Icon Map ─────────────────────────────────────────────
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'hukum-bisnis': <Scale size={14} />,
  'regulasi': <Newspaper size={14} />,
  'notaris': <Cpu size={14} />,
  'sertifikasi': <Globe size={14} />,
};

// ─── Skeleton Loader ───────────────────────────────────────────────
const SkeletonCard: React.FC<{ featured?: boolean }> = ({ featured }) => (
  <div className={`bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 ${featured ? 'md:col-span-3' : ''}`}>
    <div className={`${featured ? 'md:flex' : ''}`}>
      <div className={`bg-gray-200 animate-pulse ${featured ? 'md:w-1/2 h-64 md:h-80' : 'h-48'}`} />
      <div className={`p-6 ${featured ? 'md:w-1/2 md:p-10' : ''} space-y-4`}>
        <div className="flex gap-2">
          <div className="w-20 h-5 bg-gray-200 rounded-full animate-pulse" />
          <div className="w-28 h-5 bg-gray-200 rounded-full animate-pulse" />
        </div>
        <div className="w-full h-6 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-3/4 h-6 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-full h-4 bg-gray-100 rounded animate-pulse" />
        <div className="w-2/3 h-4 bg-gray-100 rounded animate-pulse" />
        <div className="w-32 h-9 bg-gray-200 rounded-xl animate-pulse mt-4" />
      </div>
    </div>
  </div>
);

// ─── Article Card ──────────────────────────────────────────────────
const ArticleCard: React.FC<{ article: Article; index: number; featured?: boolean }> = ({ article, index, featured }) => {
  const fallback = getFallbackImage(article.title, index);
  
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: featured ? 0 : index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 block ${
        featured ? 'md:col-span-3' : ''
      }`}
    >
      <div className={`${featured ? 'md:flex' : ''}`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : ''}`}>
          <img
            src={article.image || fallback}
            alt={article.title}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
              featured ? 'h-64 md:h-full' : 'h-48'
            }`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallback;
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Source Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-md text-secondary text-xs font-bold py-1.5 px-3 rounded-full shadow-lg">
              {article.source.name}
            </span>
          </div>

          {/* External Link Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-primary text-secondary p-2 rounded-full shadow-lg">
              <ExternalLink size={14} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'md:w-1/2 md:p-10 md:flex md:flex-col md:justify-center' : ''}`}>
          {/* Meta */}
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {getRelativeTime(article.publishedAt)}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{formatArticleDate(article.publishedAt)}</span>
          </div>

          {/* Title */}
          <h3 className={`font-sen font-bold text-secondary mb-3 leading-tight group-hover:text-primary transition-colors duration-300 ${
            featured ? 'text-2xl md:text-3xl' : 'text-lg'
          }`}>
            {article.title}
          </h3>

          {/* Description */}
          <p className={`text-gray-500 leading-relaxed mb-4 ${
            featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'
          }`}>
            {article.description}
          </p>

          {/* CTA */}
          <div className="flex items-center justify-between mt-auto">
            <span className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:text-primary group-hover:gap-3 transition-all duration-300">
              Baca Selengkapnya <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

// ─── Error State ───────────────────────────────────────────────────
const ErrorState: React.FC<{ error: string; onRetry: () => void }> = ({ error, onRetry }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-20"
  >
    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
      <AlertTriangle size={36} className="text-red-400" />
    </div>
    <h3 className="text-2xl font-sen font-bold text-secondary mb-3">Gagal Memuat Artikel</h3>
    <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">{error}</p>
    <button
      onClick={onRetry}
      className="bg-secondary hover:bg-navy text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
    >
      <RefreshCw size={18} />
      Coba Lagi
    </button>
  </motion.div>
);

// ─── Empty State ───────────────────────────────────────────────────
const EmptyState: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-20"
  >
    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <Search size={36} className="text-gray-400" />
    </div>
    <h3 className="text-2xl font-sen font-bold text-secondary mb-3">Belum Ada Artikel</h3>
    <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
      Tidak ada artikel yang ditemukan. Coba gunakan kata kunci atau kategori lain.
    </p>
  </motion.div>
);

// ─── Main Page ─────────────────────────────────────────────────────
const Artikel: React.FC = () => {
  const { articles, loading, error, activeCategory, searchQuery, setActiveCategory, handleSearch, refetch } = useArticles();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const featuredArticle = articles.length > 0 ? articles[0] : null;
  const gridArticles = articles.slice(1);

  return (
    <div className="flex flex-col">
      <SEO
        title="Artikel Hukum & Legalitas Indonesia"
        description="Kumpulan artikel edukasi dan wawasan seputar hukum bisnis, perizinan usaha, dan legalitas perusahaan di Indonesia."
      />

      {/* ─── Hero Section ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-navy">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="artikel-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#artikel-grid)" />
          </svg>
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px]"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1.5 px-5 rounded-full bg-primary/15 text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 border border-primary/20">
                Our Insights
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sen font-black text-white mb-6 leading-tight">
                Artikel Hukum <br />
                & <span className="text-primary italic">Legalitas</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
                Kumpulan artikel edukasi dan wawasan seputar hukum bisnis, perizinan usaha, dan
                regulasi terkini di Indonesia. Diperbarui setiap hari.
              </p>
              <div className="w-24 h-2 bg-primary rounded-full mt-8" />
            </motion.div>
          </div>

          {/* Floating Decorative */}
          <div className="absolute bottom-10 right-10 hidden lg:block">
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-secondary">
                  <Newspaper size={28} />
                </div>
                <div>
                  <p className="text-primary font-black text-2xl">{articles.length || '10'}+</p>
                  <p className="text-gray-400 text-sm font-medium">Artikel Terbaru</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Filter Chips + Content ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter Chips & Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12"
          >
            {/* Filter Chips (Desktop Only) */}
            <div className="hidden md:flex flex-wrap gap-3">
              {ARTICLE_CATEGORIES.map((cat) => {
                const icon = CATEGORY_ICONS[cat.id] || <TrendingUp size={14} />;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 py-2.5 px-5 rounded-full font-bold text-sm transition-all duration-300 border ${
                      isActive
                        ? 'bg-primary text-secondary border-primary shadow-lg shadow-primary/20 scale-105'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-primary/50 hover:text-secondary hover:shadow-md'
                    }`}
                  >
                    {icon}
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Actions: Search & Refresh */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Search Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const input = form.elements.namedItem('searchQuery') as HTMLInputElement;
                  handleSearch(input.value);
                }}
                className="flex items-center flex-1 md:flex-none relative"
              >
                <input
                  type="text"
                  name="searchQuery"
                  defaultValue={searchQuery}
                  placeholder="Cari artikel..."
                  className="w-full md:w-64 py-2.5 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm bg-white"
                />
                <Search size={16} className="absolute left-4 text-gray-400" />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-primary text-secondary p-1.5 rounded-full hover:bg-yellow-400 transition-colors"
                >
                  <Search size={14} />
                </button>
              </form>

              {/* Refresh Button */}
              <button
                onClick={() => refetch()}
                disabled={loading}
                className="flex items-center gap-2 py-2.5 px-5 rounded-full font-bold text-sm bg-white text-gray-400 border border-gray-200 hover:border-secondary hover:text-secondary transition-all duration-300 disabled:opacity-50"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </motion.div>

          {/* Loading State */}
          {loading && articles.length === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkeletonCard featured />
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {/* Error State */}
          {error && articles.length === 0 && (
            <ErrorState error={error} onRetry={refetch} />
          )}

          {/* Empty State */}
          {!loading && !error && articles.length === 0 && (
            <EmptyState />
          )}

          {/* Articles Content */}
          {articles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Featured Article */}
              {featuredArticle && (
                <ArticleCard article={featuredArticle} index={0} featured />
              )}

              {/* Grid Articles */}
              {gridArticles.map((article, idx) => (
                <ArticleCard key={article.url} article={article} index={idx + 1} />
              ))}
            </div>
          )}

          {/* Loading indicator when refreshing with existing articles */}
          {loading && articles.length > 0 && (
            <div className="flex items-center justify-center gap-3 mt-8 text-gray-400">
              <RefreshCw size={18} className="animate-spin" />
              <span className="text-sm font-medium">Memperbarui artikel...</span>
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA Section ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Scale size={32} className="text-secondary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-sen font-bold text-secondary mb-6 leading-tight">
                Butuh Konsultasi <br className="hidden md:block" /> Hukum Profesional?
              </h2>
              <p className="text-secondary/70 text-lg mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Setelah membaca artikel, masih punya pertanyaan? Tim kami siap membantu Anda
                dengan konsultasi gratis seputar legalitas bisnis.
              </p>
              <a
                href="https://wa.me/6289644448721?text=Halo%20PT.%20Nuansa%20Berkah%20Sejahtera%2C%20saya%20baru%20saja%20membaca%20artikel%20di%20website%20Anda%20dan%20ingin%20berkonsultasi%20lebih%20lanjut%20mengenai%20legalitas%20bisnis%20saya.%20Terima%20kasih."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-secondary hover:bg-navy text-white font-black py-5 px-12 rounded-2xl shadow-xl transition-all transform hover:scale-105"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Gratis via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Filter FAB & Popup */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-primary text-secondary w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform border border-primary/20"
        >
          <Filter size={24} />
        </button>

        <AnimatePresence>
          {isMobileFilterOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileFilterOpen(false)}
                className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
              />
              
              {/* Filter Popup */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.9 }}
                className="fixed bottom-24 left-6 right-6 bg-white p-6 rounded-3xl z-50 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-secondary text-xl">Pilih Kategori</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-gray-100 rounded-full text-gray-500">
                    <X size={20} />
                  </button>
                </div>
                
                <div className="flex flex-col gap-3">
                  {ARTICLE_CATEGORIES.map((cat) => {
                    const icon = CATEGORY_ICONS[cat.id] || <TrendingUp size={14} />;
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`flex items-center gap-3 py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 border ${
                          isActive
                            ? 'bg-primary text-secondary border-primary shadow-lg shadow-primary/20'
                            : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'
                        }`}
                      >
                        {icon}
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Artikel;
