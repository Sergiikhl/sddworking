import Head from "next/head";

export default function Fleet() {
  return (
    <>
      <Head>
        <title>SDD Shipping – Fleet</title>
      </Head>

      <main className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Fleet</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-1">M/V INDIANA JONES 1</h2>
            <p className="text-sm text-gray-500 mb-2">General Cargo Vessel</p>
            <p className="text-gray-600">
              Versatile single-decker designed for bulk, breakbulk and project
              cargoes. Operating mainly in the Black Sea and Mediterranean,
              suitable for various dry cargo trades.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-1">M/V BAHAR</h2>
            <p className="text-sm text-gray-500 mb-2">River-Sea Vessel</p>
            <p className="text-gray-600">
              River-sea type vessel suitable for Danube, coastal and inland
              trades with strong performance on dry bulk and general cargo
              routes.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

