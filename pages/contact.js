import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>SDD Shipping – Contact</title>
      </Head>

      <main className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Contact</h1>

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
      </main>
    </>
  );
}
