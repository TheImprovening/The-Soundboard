import '../styles/globals.css';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.querySelector("body").classList.add("bg-slate-100")
  });

  return <Component {...pageProps} />
}

export default MyApp
