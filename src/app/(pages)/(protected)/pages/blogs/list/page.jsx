import Footer3 from '@/components/common/Footer3';
import ModernNavbar from '@/components/layout/ModernNavbar';
import Blogs from './components/Blogs';
import Hero from './components/Hero';
export const metadata = {
  title: 'Blogs'
};
const BlogList = () => {
  return <>
      <div className="header-7">
        <div className="overlay"></div>
        <ModernNavbar buttonVariant="primary" />
        <Hero />
      </div>
      <Blogs />
      <Footer3 />
    </>;
};
export default BlogList;