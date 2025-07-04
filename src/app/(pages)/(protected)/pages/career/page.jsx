import ModernNavbar from '@/components/layout/ModernNavbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import { benefits, vacancies } from './data';
import Culture from './components/Culture';
import Vacancies from './components/Vacancies';
import CTA from './components/CTA';
import Footer from '@/components/common/Footer';
export const metadata = {
  title: 'Career Landing'
};
const Career = () => {
  return <>
      <div className="bg-gradient2 position-relative">
        <ModernNavbar buttonVariant="outline-secondary" />
        <Hero />
      </div>
      <Benefits benefits={benefits} />
      <Culture />
      <Vacancies vacancies={vacancies} />
      <CTA />
      <Footer />
    </>;
};
export default Career;