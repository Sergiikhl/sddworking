import Head from "next/head";

export default function CalculatorPage() {
  return (
    <>
      <Head>
        <title>SDD Shipping – Hold Calculator</title>
      </Head>
      <section className="py-12">
        <h1 className="text-2xl font-bold mb-4">Hold Calculator</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Здесь позже будет калькулятор загрузки биг-бэгов по ярусам, зонам
          (нос / центр / корма) и ограничениям по прочности палубы и трюма.
          Сейчас это заглушка, чтобы страница открывалась без ошибок.
        </p>
      </section>
    </>
  );
}
