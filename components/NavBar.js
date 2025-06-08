// pages/_app.js
import "../styles/globals.css";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
