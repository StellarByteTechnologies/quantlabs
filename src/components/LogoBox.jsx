import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';
import logoLight from '@/assets/images/logo-light.png';
const LogoBox = () => {
  return <Link className="navbar-brand logo" href="/">
      <Image src={logo} height={30} className="align-top logo-dark" alt="logo" />
      <Image src={logoLight} height={30} className="align-top logo-light" alt="logo-light" />
    </Link>;
};
export default LogoBox;