import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

import LoadingScreen from './components/LoadingScreen';

// Helper to handle lazy loading errors (useful after new deployments)
const lazyRetry = (componentImport: () => Promise<{ default: React.ComponentType<any> }>) => {
  return React.lazy(() =>
    componentImport().catch((error) => {
      console.error('Error loading chunk:', error);
      // Force reload to get the latest build from server
      window.location.reload();
      return { default: () => null };
    })
  );
};

// Lazy loading pages for better performance
const Home = lazyRetry(() => import('./pages/Home'));
const Layanan = lazyRetry(() => import('./pages/Layanan'));
const Promo = lazyRetry(() => import('./pages/Promo'));
const KontakKami = lazyRetry(() => import('./pages/KontakKami'));
const Team = lazyRetry(() => import('./pages/Team'));
const PrivacyPolicy = lazyRetry(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazyRetry(() => import('./pages/TermsOfService'));

import { DataProvider } from './context/DataContext';

const App: React.FC = () => {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
};

const AppContent: React.FC = () => {
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);

  React.useEffect(() => {
    // Reduced initial load time to 5s for better UX
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <React.Suspense fallback={
        <div className="fixed top-0 left-0 w-full h-1 z-[9999]">
          <div className="h-full bg-primary animate-[loading_2s_ease-in-out_infinite]"></div>
          <style>{`
            @keyframes loading {
              0% { width: 0%; left: 0%; }
              50% { width: 100%; left: 0%; }
              100% { width: 0%; left: 100%; }
            }
          `}</style>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="layanan" element={<Layanan />} />
            <Route path="promo" element={<Promo />} />
            <Route path="team" element={<Team />} />
            <Route path="kontak-kami" element={<KontakKami />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
};


export default App;
