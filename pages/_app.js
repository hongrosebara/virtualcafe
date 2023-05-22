import "@/styles/scss/globals.scss";
import { ThemeProvider } from "next-themes";
import RoasterProvider from "context/Roaster";

const Noop = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Noop
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
