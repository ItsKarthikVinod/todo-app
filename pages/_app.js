import Layout from "../components/Layout";
import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";
import "../styles/calendar.css";
import "../styles/DatePicker.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
