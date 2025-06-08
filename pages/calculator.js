// pages/calculator.js
import { useState, useMemo } from 'react';

const HOLD = {
  length: 62.92,
  width: 12.82,
  height: 8.25,
  aftLen: 6.10,
  aftH: 2.60,
  fwdLen: 12.42,
  fwdH: 4.20,
  tankW: 2.56,
};

export default function Calculator() {
  const [bag, setBag] = useState({ L: 1.10, W: 1.10, H: 1.20 });
  const [bagWeight, setBagWeight] = useState(1.25);

  const result = useMemo(() => {
    const lenAft = Math.floor(HOLD.aftLen / bag.L);
    const lenCtr = Math.floor((HOLD.length - HOLD.aftLen - HOLD.fwdLen) / bag.L);
    const lenFwd = Math.floor(HOLD.fwdLen / bag.L);

    const wFull = Math.floor(HOLD.width / bag.W);
    const wMinus = Math.floor((HOLD.width - 2 * HOLD.tankW) / bag.W);

    const maxLayers = Math.floor(HOLD.height / bag.H);
    let total = 0, layers = [];

    for (let L = maxLayers; L >= 1; L--) {
      const currentHeight = L * bag.H;
      const wA = currentHeight > HOLD.aftH ? wFull : wMinus;
      const wF = currentHeight > HOLD.fwdH ? wFull : wMinus;

      const aft = lenAft * wA;
      const ctr = lenCtr * wFull;
      const fwd = lenFwd * wF;
      const sum = aft + ctr + fwd;

      layers.push({
        L,
        'Aft Length': lenAft,
        'Aft Width': wA,
        'Aft Total': aft,
        'Centre Length': lenCtr,
        'Centre Width': wFull,
        'Centre Total': ctr,
        'Fwd Length': lenFwd,
        'Fwd Width': wF,
        'Fwd Total': fwd,
        'Layer Total': sum,
      });
      total += sum;
    }

    return { layers, total, weight: total * bagWeight };
  }, [bag, bagWeight]);

  const inputField = (label, key) => (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm">{label}</span>
      <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => setBag(p => ({ ...p, [key]: Math.max(0, +(p[key] - 0.1).toFixed(2)) }))} className="px-3 text-xl text-gray-600">−</button>
        <input
          type="number"
          step="0.01"
          value={bag[key]}
          onChange={e => setBag({ ...bag, [key]: +e.target.value || 0 })}
          className="w-20 text-center py-1 border-l border-r text-sm"
        />
        <button onClick={() => setBag(p => ({ ...p, [key]: +(p[key] + 0.1).toFixed(2) }))} className="px-3 text-xl text-gray-600">+</button>
      </div>
    </div>
  );

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Big-Bag Loading Calculator</h1>

        <section className="grid sm:grid-cols-2 gap-6 bg-white shadow-lg rounded-2xl p-6 mb-10">
          <div className="space-y-4">
            {inputField('Length (m)', 'L')}
            {inputField('Width (m)', 'W')}
            {inputField('Height (m)', 'H')}
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm">Bag Weight (t)</span>
              <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
                <button onClick={() => setBagWeight(p => +(Math.max(0, p - 0.1).toFixed(2)))} className="px-3 text-xl text-gray-600">−</button>
                <input
                  type="number"
                  step="0.01"
                  value={bagWeight}
                  onChange={(e) => setBagWeight(+(parseFloat(e.target.value) || 0).toFixed(2))}
                  className="w-20 text-center py-1 border-l border-r text-sm"
                />
                <button onClick={() => setBagWeight(p => +(p + 0.1).toFixed(2))} className="px-3 text-xl text-gray-600">+</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-lg text-gray-800 text-center sm:text-left">
            <p><strong>Total Bags:</strong> {result.total.toLocaleString("en-US")}</p>
            <p><strong>Total Weight (t):</strong> {result.weight.toLocaleString("en-US")}</p>
            <p><strong>Layers:</strong> {result.layers.length}</p>
          </div>
        </section>

        <section className="overflow-x-auto w-full mb-10">
          <table className="min-w-full bg-white rounded-xl shadow-md text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                {Object.keys(result.layers[0] || {}).map((col) => (
                  <th key={col} className="px-4 py-2 border-b">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {result.layers.map((row, idx) => (
                <tr key={idx} className="even:bg-gray-50">
                  {Object.values(row).map((cell, i) => (
                    <td key={i} className="px-4 py-2 border-b text-center">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
