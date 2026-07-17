import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeacherIntro from './components/TeacherIntro';
import WhoIsThisFor from './components/WhoIsThisFor';
import Roadmap from './components/Roadmap';
import TargetScores from './components/TargetScores';
import StudentResults from './components/StudentResults';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Ecosystem from './components/Ecosystem';

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TeacherIntro />
        <WhoIsThisFor />
        <Roadmap />
        <Ecosystem />
        <TargetScores />
        <StudentResults />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
