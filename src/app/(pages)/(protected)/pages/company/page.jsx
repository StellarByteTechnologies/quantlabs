import Footer from '@/components/common/Footer';
import ModernNavbar from '@/components/layout/ModernNavbar';
import About from './components/About';
import Counter from './components/Counter';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Team from './components/Team';
import { teamMembers } from './data';
export const metadata = {
  title: 'Company'
};
const Company = () => {
  return <>
      <ModernNavbar buttonVariant="outline-secondary" />
      <Hero />
      <About />
      <Feature />
      <Counter />
      <Team teamMembers={teamMembers} />
      
      <Footer />
    </>;
};
export default Company;