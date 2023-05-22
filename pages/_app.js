import "@/styles/scss/globals.scss";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes";
import RoasterProvider from "context/Roaster";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <RoasterProvider>
          <Component {...pageProps} />
        </RoasterProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
