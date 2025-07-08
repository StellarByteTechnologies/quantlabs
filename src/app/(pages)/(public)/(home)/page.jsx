
import ModernNavbar from '@/components/layout/ModernNavbar';
import Hero from '../../(protected)/landing/agency/components/Hero';
import { blogPosts, jobDetails, projects, services } from '../../(protected)/landing/agency/data';
import Clients from '../../(protected)/landing/agency/components/Clients';
//import Blogs from '../../(protected)/landing/agency/components/Blogs';
import DataMasterySection from '../../(protected)/landing/agency/components/DataMastery'
import CapabilitiesSection from '../../(protected)/landing/app/components/CapabilitiesSection';
import ComparisonSection from '../../(protected)/landing/agency/components/ComparisonSection';
import CaseStudiesSection from '../../(protected)/landing/coworking/components/CaseStudiesSection';
import NumberSection from '../../(protected)/landing/coworking/components/NumberSection';
import Footer from '../../(protected)/landing/agency/components/Footer';
import DataAdvantage from '../../(protected)/landing/agency/components/DataAdvantage';
export const metadata = {
  title: 'Home'
};
const Home = () => {
  return <>
      <div className="header-4">
        <ModernNavbar buttonVariant="outline-secondary" />
        <Hero />
      </div>
      <DataAdvantage/>
      <DataMasterySection/>
       <ComparisonSection />
      < NumberSection/>
      <CaseStudiesSection />
      {/*<Clients />*/}
      <CapabilitiesSection /> 
      {/* <Blogs blogs={blogPosts} /> */}
      {/* <Footer /> */}
    </>;
};
export default Home;