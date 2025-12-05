// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SDD Shipping – Maritime Services</title>
        <meta
          name="description"
          content="SDD Shipping – maritime transportation, chartering and vessel management."
        />
      </Head>

      {/* HERO / HOME */}
      <section
        id="home"
        className="flex min-h-[70vh] flex-col items-center justify-center px-4"
      >
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            SDD Shipping
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Boutique maritime company focused on dry cargo shipping, vessel
            management and tailor-made logistics solutions.
          </p>
          <div className="relative mx-auto mt-4 h-48 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-sky-400/10 to-indigo-500/30 animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,#22d3ee11,transparent_50%),radial-gradient(circle_at_80%_80%,#6366f111,transparent_55%)]" />
            <div className="relative flex h-full items-center justify-center">
              <span className="text-xs sm:text-sm text-slate-200/80">
                Abstract ocean-like animation placeholder (можно потом заменить
                на реальное видео/картинку)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="px-4 py-10 border-t border-slate-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">About Us</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            West Ships is a distinguished maritime services company
            headquartered in Istanbul, focusing on dry cargo transportation,
            ship management and tailor-made solutions for our clients. Under
            the SDD Shipping brand we combine hands-on technical experience
            with commercial know-how in the Black Sea, Mediterranean and wider
            European trades.
          </p>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="px-4 py-10 border-t border-slate-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Fleet</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 p-4">
              <h3 className="text-lg font-semibold mb-1">M/V INDIANA JONES 1</h3>
              <p className="text-xs text-slate-400 mb-1">
                General Cargo Vessel
              </p>
              <p className="text-sm text-slate-300">
                Versatile single-decker general cargo vessel suitable for bulk,
                breakbulk and project cargoes, trading mainly in the Black Sea
                and Mediterranean.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 p-4">
              <h3 className="text-lg font-semibold mb-1">M/V BAHAR</h3>
              <p className="text-xs text-slate-400 mb-1">River-Sea Vessel</p>
              <p className="text-sm text-slate-300">
                River-sea type vessel ideal for coastal and inland trades,
                including Danube and Black Sea connections, with focus on dry
                bulk and unitized cargoes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="px-4 py-10 border-t border-slate-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Vision</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our vision is to build a modern, flexible shipping platform that
            connects niche cargo flows with reliable tonnage, delivering
            predictable performance and transparent cooperation to our partners.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="px-4 py-10 border-t border-slate-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Mission</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our mission is to operate and manage vessels safely and efficiently,
            protect owners’ and charterers’ interests, and provide pragmatic
            shipping solutions based on real operational experience on board and
            ashore.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-4 py-10 border-t border-slate-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Services</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-sm sm:text-base text-slate-300">
            <li className="rounded-xl border border-slate-800 p-4">
              • Dry cargo chartering and voyage planning
            </li>
            <li className="rounded-xl border border-slate-800 p-4">
              • Commercial and technical management of vessels
            </li>
            <li className="rounded-xl border border-slate-800 p-4">
              • Port agency support in selected ports
            </li>
            <li className="rounded-xl border border-slate-800 p-4">
              • Cargo handling advice, stowage and stability calculations
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-4 py-10 border-t border-slate-900 mb-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-sm text-slate-300 mb-4">
            Leave your message and we will get back to you:
          </p>
          <form className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
              <input
                type="email"
                placeholder="Your e-mail"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
              <input
                type="text"
                placeholder="Company / vessel / topic"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
            </div>
            <div className="md:col-span-1 flex flex-col">
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400 resize-none"
              />
              <button
                type="submit"
                className="mt-3 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            (Пока форма никуда не отправляет данные — позже можно прикрутить
            e-mail или API.)
          </p>
        </div>
      </section>
    </>
  );
}
