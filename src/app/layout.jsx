import Image from 'next/image';
import { Be_Vietnam_Pro } from 'next/font/google';
import logo from '@/assets/images/logo.png';
import { DEFAULT_PAGE_TITLE } from '@/assets/data/constants';
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper';
import NextTopLoader from 'nextjs-toploader';
const BeVietnamPro = Be_Vietnam_Pro({
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: 'normal'
});
import 'aos/dist/aos.css';
import '@/assets/scss/theme.scss';
export const metadata = {
  title: {
    template: '%s | Quant Labs',
    default: DEFAULT_PAGE_TITLE
  },
  description: 'Welcome to Quant Labs'
};
const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`;
export default function RootLayout({
  children
}) {
  return <html lang="en">
      <head>
      <script 
          type="text/javascript" 
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body className={BeVietnamPro.className}>
        <div id="splash-screen">
          <Image alt="logo-text" src={logo} style={{
          height: '8%',
          width: 'auto'
        }} priority />
        </div>
        <NextTopLoader color="#05f" showSpinner={false} />
        <div id="__next_splash">
          <AppProvidersWrapper>{children}</AppProvidersWrapper>
        </div>
      </body>
    </html>;
}