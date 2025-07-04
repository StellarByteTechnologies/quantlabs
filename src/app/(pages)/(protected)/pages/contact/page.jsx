import ModernNavbar from '@/components/layout/ModernNavbar';
import Hero from './components/Hero';
import ContactDetail from './components/ContactDetail';
import Footer3 from '@/components/common/Footer3';
export const metadata = {
  title: 'Contact'
};
const Contact = () => {
  return <>
      <div className="header-7 bg-gradient2">
        <ModernNavbar centered buttonVariant="outline-secondary" />
        <Hero />
      </div>
      <ContactDetail />
      <Footer3 />
    </>;
};
export default Contact;