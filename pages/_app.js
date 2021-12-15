import '../styles/globals.css'
import Head from 'next/head';
import ReactGA from "react-ga4";
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';


function MyApp({ Component, pageProps }) {
  const router =  useRouter()


  useEffect(() => {
    ReactGA.initialize("G-14NXRL0FB8");
  }, [])

  useEffect(() => {
    ReactGA.send("pageview");
  }, [router.asPath])
  

  return <>
  {/* <Head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-14NXRL0FB8"></script>
<script dangerouslySetInnerHTML={{ __html:`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-14NXRL0FB8');
` }}>
  
</script>
  </Head> */}
  <Component {...pageProps} />
  </>
}

export default MyApp
