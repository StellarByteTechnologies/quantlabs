'use client';

import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import Aos from 'aos';
const AppProvidersWrapper = ({
  children
}) => {
  useEffect(() => {
    Aos.init();
    if (document) {
      const e = document.querySelector('#__next_splash');
      if (e?.hasChildNodes()) {
        document.querySelector('#splash-screen')?.classList.add('remove');
      }
      e?.addEventListener('DOMNodeInserted', () => {
        document.querySelector('#splash-screen')?.classList.add('remove');
      });
    }
  }, []);
  return <SessionProvider>
      {children}
    </SessionProvider>;
};
export default AppProvidersWrapper;