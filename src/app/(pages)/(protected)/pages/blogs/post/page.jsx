import ModernNavbar from '@/components/layout/ModernNavbar';
import Hero from './components/Hero';
import PostContent from './components/PostContent';
import PostNavigation from './components/PostNavigation';
import Comments from './components/Comments';
import Footer3 from '@/components/common/Footer3';
export const metadata = {
  title: 'Blog Post'
};
const Post = () => {
  return <>
      <ModernNavbar buttonVariant="outline-secondary" centered />
      <Hero />
      <PostContent />
      <PostNavigation />
      <Comments />
      <Footer3 />
    </>;
};
export default Post;