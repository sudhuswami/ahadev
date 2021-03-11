import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.css";
import "../styles/fontawesome.min.css";
import "../styles/flaticon.css";
import "../styles/globals.css";
import "../styles/responsive.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
