// pages/_app.js
import "../styles/globals.css";
import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}
