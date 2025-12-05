// pages/calculator.js
import { useState, useMemo } from "react";
import Head from "next/head";

export default function CalculatorPage() {
  const [holdLength, setHoldLength] = useState(60); // m
  const [holdWidth, setHoldWidth] = useState(12); // m
  const [holdHeight, setHoldHeight] = useState(8); // m

  const [bagLength, setBagLength] = useState(1.0); // m
  const [bagWidth, setBagWidth] = useState(1.0); // m
  const [bagHeight, setBagHeight] = useState(1.4); // m
  const [bagWeight, setBagWeight] = useState(1.0); // t

  const [tiers, setTiers] = useState(4);

  const {
    bagsPerLayer,
    totalBags,
    totalWeight,
    usedHeight,
    maxTiersByHeight,
  } = useMemo(() => {
    const bagsByLength = Math.floor(holdLength / bagLength) || 0;
    const bagsByWidth = Math.floor(holdWidth / bagWidth) || 0;
    const perLayer = bagsByLength * bagsByWidth;

    const maxTiers = Math.floor(holdHeight / bagHeight) || 0;
    const actualTiers = Math.min(tiers, maxTiers);
    const total = perLayer * actualTiers;
    const weight = total * bagWeight;
    const heightUsed = actualTiers * bagHeight;

    return {
      bagsPerLayer: perLayer,
      totalBags: total,
      totalWeight: weight,
      usedHeight: heightUsed,
      maxTiersByHeight: maxTiers,
    };
  }, [holdLength, holdWidth, holdHeight, bagLength, bagWidth, bagHeight, bagWeight, tiers]);

  return (
    <>
      <Head>
        <title>Big-Bag Calculator – SDD Shipping</title>
      </Head>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          Big-Bag Loading Calculator
        </h1>
        <p className="text-sm text-slate-300 mb-6">
          Упрощённый калькулятор для оценки количества биг-бэгов в трюме.
          Здесь важно, чтобы страница стабильно работала — потом можно
          доработать логику под твои точные схемы (нос/центр/корма, танки и т.д.).
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Параметры трюма */}
          <div className="rounded-xl border border-slate-800 p-4">
            <h2 className="text-lg font-semibold mb-3">Hold parameters</h2>
            <FieldNumber
              label="Length, m"
              value={holdLength}
              onChange={setHoldLength}
              step={0.5}
            />
            <FieldNumber
              label="Width, m"
              value={holdWidth}
              onChange={setHoldWidth}
              step={0.1}
            />
            <FieldNumber
              label="Height, m"
              value={holdHeight}
              onChange={setHoldHeight}
              step={0.1}
            />
          </div>

          {/* Параметры биг-бэга */}
          <div className="rounded-xl border border-slate-800 p-4">
            <h2 className="text-lg font-semibold mb-3">Big-bag parameters</h2>
            <FieldNumber
              label="Length, m"
              value={bagLength}
              onChange={setBagLength}
              step={0.05}
            />
            <FieldNumber
              label="Width, m"
              value={bagWidth}
              onChange={setBagWidth}
              step={0.05}
            />
            <FieldNumber
              label="Height, m"
              value={bagHeight}
              onChange={setBagHeight}
              step={0.05}
            />
            <FieldNumber
              label="Weight, t per bag"
              value={bagWeight}
              onChange={setBagWeight}
              step={0.1}
            />
          </div>
        </div>

        {/* Ярусы */}
        <div className="mb-8 rounded-xl border border-slate-800 p-4">
          <h2 className="text-lg font-semibold mb-3">Tiers (ярусы)</h2>
          <p className="text-xs text-slate-400 mb-2">
            Максимум по высоте: {maxTiersByHeight} ярусов (по соотношению
            высота трюма / высота биг-бэга).
          </p>
          <FieldNumber
            label="Number of tiers"
            value={tiers}
            onChange={(v) =>
              v < 1 ? setTiers(1) : setTiers(Math.min(v, maxTiersByHeight || 1))
            }
            step={1}
            min={1}
            max={8}
          />
        </div>

        {/* Итоги */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 p-4">
            <h2 className="text-lg font-semibold mb-3">Result</h2>
            <ul className="space-y-1 text-sm">
              <li>
                <span className="text-slate-400">Bags per layer: </span>
                <span className="font-semibold">{bagsPerLayer}</span>
              </li>
              <li>
                <span className="text-slate-400">Total bags: </span>
                <span className="font-semibold">{totalBags}</span>
              </li>
              <li>
                <span className="text-slate-400">Total weight, t: </span>
                <span className="font-semibold">
                  {totalWeight.toFixed(1)}
                </span>
              </li>
              <li>
                <span className="text-slate-400">Used height, m: </span>
                <span className="font-semibold">
                  {usedHeight.toFixed(2)} / {holdHeight} m
                </span>
              </li>
            </ul>
          </div>

          {/* Простая визуализация */}
          <div className="rounded-xl border border-slate-800 p-4">
            <h2 className="text-lg font-semibold mb-3">Top view (simplified)</h2>
            <p className="text-xs text-slate-400 mb-3">
              Условная схема сверху: чем больше прямоугольников, тем больше
              биг-бэгов в слое.
            </p>
            <div className="relative h-40 w-full border border-slate-700 rounded-lg bg-slate-900 overflow-hidden">
              {bagsPerLayer === 0 ? (
                <div className="flex h-full items-center justify-center text-xs text-slate-500">
                  Adjust dimensions to fit at least one bag.
                </div>
              ) : (
                <div className="grid h-full w-full"
                  style={{
                    gridTemplateColumns: `repeat(${Math.max(
                      1,
                      Math.floor(holdLength / bagLength) || 1
                    )}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${Math.max(
                      1,
                      Math.floor(holdWidth / bagWidth) || 1
                    )}, minmax(0, 1fr))`,
                  }}
                >
                  {Array.from(
                    { length: bagsPerLayer },
                    (_, i) => i
                  ).map((i) => (
                    <div
                      key={i}
                      className="m-0.5 rounded bg-cyan-500/60"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Вспомогательный компонент для числовых полей с "стрелками"
function FieldNumber({ label, value, onChange, step = 1, min, max }) {
  const change = (delta) => {
    let next = Number(value || 0) + delta;
    if (typeof min === "number") next = Math.max(min, next);
    if (typeof max === "number") next = Math.min(max, next);
    onChange(Number(next.toFixed(3)));
  };

  return (
    <div className="mb-3 text-sm">
      <div className="mb-1 flex items-center justify-between">
        <span>{label}</span>
        <span className="text-xs text-slate-500">step {step}</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          step={step}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm outline-none focus:border-cyan-400"
        />
        <div className="flex flex-col gap-1">
          <button
            type="button"
            onClick={() => change(step)}
            className="flex h-6 w-7 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-xs hover:border-cyan-400"
          >
            ▲
          </button>
          <button
            type="button"
            onClick={() => change(-step)}
            className="flex h-6 w-7 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-xs hover:border-cyan-400"
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
}
