import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>SDD Shipping – Services</title>
      </Head>

      <main className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Services</h1>
        <ul className="text-gray-700 text-lg space-y-2">
          <li>• Dry cargo chartering and voyage planning</li>
          <li>• Commercial management of vessels</li>
          <li>• Technical support and consultancy</li>
          <li>• Cargo planning &amp; stowage calculations</li>
          <li>• Port agency coordination in selected ports</li>
        </ul>
      </main>
    </>
  );
}
