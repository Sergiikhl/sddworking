import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SDD Shipping – Maritime Services</title>
        <meta
          name="description"
          content="SDD Shipping – maritime logistics, dry cargo shipping and vessel management focused on the Black Sea and Mediterranean."
        />
      </Head>

      <main className="max-w-6xl mx-auto py-16 px-4">
        <section>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            SDD Shipping
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Maritime logistics, dry cargo shipping and vessel management
            with a focus on the Black Sea and Mediterranean regions.
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
            >
              Contact us
            </a>
            <a
              href="/fleet"
              className="px-5 py-2 border border-gray-400 rounded-lg hover:border-blue-600 hover:text-blue-600"
            >
              View fleet
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
