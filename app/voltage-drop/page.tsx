
"use client";

import { useState } from "react";
import Link from "next/link";

export default function VoltageDrop() {
  const [voltage, setVoltage] = useState("230");
  const [current, setCurrent] = useState("20");
  const [length, setLength] = useState("25");
  const [mvPerAmpMetre, setMvPerAmpMetre] = useState("11");

  const valid =
    voltage !== "" &&
    current !== "" &&
    length !== "" &&
    mvPerAmpMetre !== "" &&
    Number(voltage) > 0 &&
    Number(current) >= 0 &&
    Number(length) >= 0 &&
    Number(mvPerAmpMetre) >= 0;

  const drop =
    (Number(mvPerAmpMetre) *
      Number(current) *
      Number(length)) /
    1000;

  const percentage = (drop / Number(voltage)) * 100;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to UtilityHub
        </Link>

        <h1 className="mt-10 text-3xl font-bold">
          Voltage Drop Calculator
        </h1>

        <p className="mt-3 text-slate-600">
          Calculate cable voltage drop using the mV/A/m method.
        </p>

        <div className="mt-8 space-y-5 rounded-2xl border bg-white p-6 shadow-sm">
          {[
            ["Supply voltage (V)", voltage, setVoltage],
            ["Design current (A)", current, setCurrent],
            ["Cable length (metres)", length, setLength],
            ["Cable rating (mV/A/m)", mvPerAmpMetre, setMvPerAmpMetre],
          ].map(([label, value, setter]) => (
            <label key={label as string} className="block">
              <span className="mb-2 block font-medium">
                {label as string}
              </span>
              <input
                type="number"
                min="0"
                step="any"
                value={value as string}
                onChange={(e) =>
                  (setter as (value: string) => void)(e.target.value)
                }
                className="w-full rounded-lg border border-slate-300 p-3"
              />
            </label>
          ))}

          <div className="rounded-xl bg-blue-50 p-5">
            <p className="text-sm text-slate-600">
              Voltage drop
            </p>
            <p className="text-2xl font-bold">
              {valid ? drop.toFixed(2) + " V" : "—"}
            </p>

            <p className="mt-4 text-sm text-slate-600">
              Percentage voltage drop
            </p>
            <p className="text-2xl font-bold">
              {valid ? percentage.toFixed(2) + "%" : "—"}
            </p>

            <p className="mt-4 text-sm text-slate-600">
              Estimated voltage at load
            </p>
            <p className="text-2xl font-bold">
              {valid
                ? (Number(voltage) - drop).toFixed(2) + " V"
                : "—"}
            </p>
          </div>
         </div>

        <p className="mt-5 text-sm text-slate-500">
          Enter the mV/A/m value from the appropriate cable table.
          Cable length is one-way route length. Results are
          indicative and do not replace a BS 7671 design assessment.
        </p>
      </div>
    </main>
  );
}
