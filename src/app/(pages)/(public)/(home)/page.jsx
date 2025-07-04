
import ModernNavbar from '@/components/layout/ModernNavbar';
import Hero from '../../(protected)/landing/agency/components/Hero';
import { blogPosts, jobDetails, projects, services } from '../../(protected)/landing/agency/data';
import Clients from '../../(protected)/landing/agency/components/Clients';
//import Blogs from '../../(protected)/landing/agency/components/Blogs';
import Features2 from '../../(protected)/landing/app/components/Features2';
import DataBook from '../../(protected)/landing/agency/components/DataBook';
import RegulatedGradeData from '../../(protected)/landing/coworking/components/RegulatedGradeData';
import DataOffering from '../../(protected)/landing/coworking/components/DataOffering';
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
      {/* <DataBook />
      < DataOffering/>
      <RegulatedGradeData />
      <Clients />
      <Features2 /> */}
      {/* <Blogs blogs={blogPosts} /> */}
      {/* <Footer /> */}
    </>;
};
export default Home;