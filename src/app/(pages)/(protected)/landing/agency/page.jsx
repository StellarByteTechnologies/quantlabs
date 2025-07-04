import ModernNavbar from '@/components/layout/ModernNavbar';
import Hero from './components/Hero';
import Services from './components/DataAdvantage';
import { blogPosts, jobDetails, projects, services } from './data';
import Portfolios from './components/Portfolios';

import Footer from './components/Footer';
export const metadata = {
  title: 'Agency Landing'
};
const Agency = () => {
  return <>
      <div className="header-4">
        <ModernNavbar buttonVariant="outline-secondary" />
        <Hero />
      </div>
      <Services services={services} />
      {/* <Portfolios portfolios={projects} /> */}
=      {/* <Blogs blogs={blogPosts} />
      <Vacancies jobDetails={jobDetails} /> */}
      {/* <Footer /> */}
    </>;
};
export default Agency;