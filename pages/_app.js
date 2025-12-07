// pages/_app.js
import "../styles/globals.css";
import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 pb-16 pt-6">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
