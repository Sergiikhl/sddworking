
import "../styles/globals.css";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <div className="pt-20 px-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
