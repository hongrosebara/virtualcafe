import "@/styles/scss/globals.scss";
import { ThemeProvider } from "next-themes";
import RoasterProvider from "context/Roaster";
import Script from "next/script";

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Noop;
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
