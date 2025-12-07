// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SDD Shipping – Maritime Services</title>
        <meta
          name="description"
          content="SDD Shipping – boutique maritime company focused on dry cargo shipping, vessel management and tailor-made logistics solutions."
        />
      </Head>

      {/* HERO / HOME */}
      <section id="home" className="py-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              SDD Shipping
            </h1>
            <p className="text-slate-300 text-sm md:text-base mb-6">
              Boutique maritime company focused on dry cargo shipping, vessel
              management and tailor-made logistics solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                Contact us
              </a>
              <a
                href="#fleet"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-4 py-2 text-sm hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View fleet
              </a>
            </div>
          </div>

          {/* Простая «абстрактная» заставка вместо видео */}
          <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-600/40 to-slate-900 shadow-card">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.4),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.5),transparent_55%)]" />
            <div className="relative h-full flex items-center justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-200">
                Maritime operations · Black Sea · Med
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-10 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-3">About Us</h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          West Ships is a distinguished maritime services company headquartered
          in Istanbul, focusing on dry cargo transportation, ship management and
          tailor-made solutions for our clients. Under the SDD Shipping brand we
          combine hands-on technical experience with commercial know-how in the
          Black Sea, Mediterranean and wider European trades.
        </p>
      </section>

      {/* FLEET */}
      <section id="fleet" className="py-10 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-4">Fleet</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 shadow-card">
            <h3 className="text-lg font-semibold mb-1">M/V INDIANA JONES 1</h3>
            <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
              General Cargo Vessel
            </p>
            <p className="text-slate-300 text-sm">
              Versatile single-decker general cargo vessel suitable for bulk,
              breakbulk and project cargoes, trading mainly in the Black Sea and
              Mediterranean.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 shadow-card">
            <h3 className="text-lg font-semibold mb-1">M/V BAHAR</h3>
            <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
              River-Sea Vessel
            </p>
            <p className="text-slate-300 text-sm">
              River-sea type vessel ideal for coastal and inland trades,
              including Danube and Black Sea connections, with focus on dry bulk
              and unitized cargoes.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-10 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-3">Vision</h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Our vision is to build a modern, flexible shipping platform that
          connects niche cargo flows with reliable tonnage, delivering
          predictable performance and transparent cooperation to our partners.
        </p>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-10 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-3">Mission</h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Our mission is to operate and manage vessels safely and efficiently,
          protect owners’ and charterers’ interests, and provide pragmatic
          shipping solutions based on real operational experience on board and
          ashore.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-10 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm md:text-base">
          <li>Dry cargo chartering and voyage planning</li>
          <li>Commercial and technical management of vessels</li>
          <li>Port agency support in selected ports</li>
          <li>Cargo handling advice, stowage and stability calculations</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-10 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-slate-300 text-sm md:text-base mb-4">
          Leave your message and we will get back to you:
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-3 max-w-lg"
        >
          <div>
            <label className="block text-xs uppercase tracking-wide text-slate-400 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide text-slate-400 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide text-slate-400 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Short description of your enquiry"
            />
          </div>

          <button
            type="submit"
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            Send
          </button>
        </form>

        <p className="mt-3 text-xs text-slate-500">
          (Пока форма никуда не отправляет данные — позже можно прикрутить
          e-mail или API.)
        </p>
      </section>
    </>
  );
}
