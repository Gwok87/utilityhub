
"use client";

import { useState } from "react";

export default function OhmsLaw() {
  const [voltage, setVoltage] = useState("230");
  const [current, setCurrent] = useState("10");

  const v = Number(voltage);
  const i = Number(current);
  const valid =
    voltage.trim() !== "" &&
    current.trim() !== "" &&
    Number.isFinite(v) &&
    Number.isFinite(i) &&
    i > 0;

  const resistance = v / i;
  const power = v * i;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-xl">
        <a href="/" className="text-blue-600 hover:underline">
          ← Back to UtilityHub
        </a>

        <h1 className="mt-8 text-3xl font-bold">
          Ohm&apos;s Law Calculator
        </h1>
        <p className="mt-3 text-slate-600">
          Calculate resistance and electrical power from voltage and current.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <label className="block font-medium">
            Voltage (V)
          </label>
          <input
            type="number"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 p-3"
          />

          <label className="mt-6 block font-medium">
            Current (A)
          </label>
          <input
            type="number"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 p-3"
          />

          <div className="mt-8 rounded-xl bg-blue-50 p-5">
            {valid ? (
              <>
                <p className="text-slate-600">Resistance (R = V ÷ I)</p>
                <p className="text-2xl font-bold">
                  {Number(resistance.toPrecision(10))} Ω
                </p>

                <p className="mt-5 text-slate-600">
                  Power (P = V × I)
                </p>
                <p className="text-2xl font-bold">
                  {Number(power.toPrecision(10))} W
                </p>
              </>
            ) : (
              <p>Enter a voltage and a current greater than zero.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
