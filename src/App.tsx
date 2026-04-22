import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

import LoadingScreen from './components/LoadingScreen';

// Lazy loading pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Layanan = React.lazy(() => import('./pages/Layanan'));
const Promo = React.lazy(() => import('./pages/Promo'));
const KontakKami = React.lazy(() => import('./pages/KontakKami'));
const Team = React.lazy(() => import('./pages/Team'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));

const App: React.FC = () => {
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);

  React.useEffect(() => {
    // Force loading screen for 5 seconds on initial load
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
      <React.Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="layanan" element={<Layanan />} />
            <Route path="promo" element={<Promo />} />
            <Route path="team" element={<Team />} />
            <Route path="kontak-kami" element={<KontakKami />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            {/* Fallback for 404 */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
