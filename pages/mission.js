import Head from "next/head";

export default function Mission() {
  return (
    <>
      <Head>
        <title>SDD Shipping – Mission</title>
      </Head>

      <main className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Mission</h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          To operate and manage vessels safely and efficiently, protect the
          interests of owners and charterers, and provide practical shipping
          solutions based on real operational experience both on board and
          ashore.
        </p>
      </main>
    </>
  );
}
