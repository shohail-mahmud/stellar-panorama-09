
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PlanetsPage from "./pages/PlanetsPage";
import PlanetDetail from "./components/PlanetDetail";
import AboutPage from "./pages/AboutPage";
import CopyrightPage from "./pages/CopyrightPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <StarBackground />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/planet/:id" element={<PlanetDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/copyright" element={<CopyrightPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
