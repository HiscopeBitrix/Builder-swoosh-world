import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import BitrixServices from "./pages/BitrixServices";
import Bitrix24Services from "./pages/Bitrix24Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import CorporateSites from "./pages/services/CorporateSites";
import Ecommerce from "./pages/services/Ecommerce";
import Support from "./pages/services/Support";
import Development from "./pages/services/Development";
import CrmSetup from "./pages/services/CrmSetup";
import Analytics from "./pages/services/Analytics";
import Automation from "./pages/services/Automation";
import Integrations from "./pages/services/Integrations";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DataProcessing from "./pages/DataProcessing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/bitrix" element={<BitrixServices />} />
        <Route path="/services/bitrix24" element={<Bitrix24Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/corporate-sites" element={<CorporateSites />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/support" element={<Support />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/crm-setup" element={<CrmSetup />} />
        <Route path="/services/analytics" element={<Analytics />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/services/integrations" element={<Integrations />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/data-processing" element={<DataProcessing />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
