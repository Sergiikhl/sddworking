import "../styles/globals.css";
import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
