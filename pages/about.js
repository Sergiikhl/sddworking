import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>SDD Shipping – About Us</title>
      </Head>

      <main className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          West Ships is a distinguished maritime services company headquartered
          in Istanbul. Operating under the SDD Shipping brand, we provide
          chartering, cargo planning, vessel management and commercial
          solutions tailored to our partners in the Black Sea and Mediterranean
          regions.
        </p>
      </main>
    </>
  );
}
