import { useState, useEffect } from 'react';
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // set isClient to true when component is mounted
  }, []);

  return (
    <Layout>
      {isClient ? <Component {...pageProps} /> : <div>Loading...</div>}
    </Layout>
  );
}

export default MyApp;
