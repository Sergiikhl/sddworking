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

      {/* HERO */}
      <section id="home" className="py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
          {/* Текст слева */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              SDD Shipping
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Maritime logistics, dry cargo shipping and vessel management
              with a focus on the Black Sea and Mediterranean regions.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
              >
                Contact us
              </a>
              <a
                href="#fleet"
                className="px-5 py-2 border border-gray-400 rounded-lg hover:border-blue-600 hover:text-blue-600"
              >
                View fleet
              </a>
            </div>
          </div>

          {/* Картинка справа – аккуратного размера */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src="https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg"
              alt="Sea"
              className="w-full h-64 object-cover" // не огромная, фиксированная высота
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            West Ships is a distinguished maritime services company headquartered
            in Istanbul. Operating under the SDD Shipping brand, we provide
            chartering, cargo planning, vessel management and commercial
            solutions tailored to our partners in the Black Sea and Mediterranean
            regions.
          </p>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Fleet</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-1">M/V INDIANA JONES 1</h3>
              <p className="text-sm text-gray-500 mb-2">General Cargo Vessel</p>
              <p className="text-gray-600">
                Versatile single-decker designed for bulk, breakbulk and project
                cargoes. Operating mainly in the Black Sea and Mediterranean,
                suitable for various dry cargo trades.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-1">M/V BAHAR</h3>
              <p className="text-sm text-gray-500 mb-2">River-Sea Vessel</p>
              <p className="text-gray-600">
                River-sea type vessel suitable for Danube, coastal and inland
                trades with strong performance on dry bulk and general cargo
                routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Vision</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            To build a modern, flexible shipping platform connecting niche cargo
            flows with reliable tonnage, ensuring transparency, predictable
            performance and long-term partnerships with our clients.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Mission</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            To operate and manage vessels safely and efficiently, protect the
            interests of owners and charterers, and provide practical shipping
            solutions based on real operational experience both on board and
            ashore.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Services</h2>
          <ul className="text-gray-700 text-lg space-y-2">
            <li>• Dry cargo chartering and voyage planning</li>
            <li>• Commercial management of vessels</li>
            <li>• Technical support and consultancy</li>
            <li>• Cargo planning &amp; stowage calculations</li>
            <li>• Port agency coordination in selected ports</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12 border-t border-gray-200 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>

          <form className="grid gap-4 max-w-lg">
            <input
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded-lg py-2 px-3"
            />
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 rounded-lg py-2 px-3"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="border border-gray-300 rounded-lg py-2 px-3"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
