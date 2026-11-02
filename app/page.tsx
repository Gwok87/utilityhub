"use client";

import { useState } from "react";

export default function Home() {
  const [percentage, setPercentage] = useState("20");
  const [number, setNumber] = useState("150");

  const valid =
    percentage.trim() !== "" &&
    number.trim() !== "" &&
    Number.isFinite(Number(percentage)) &&
    Number.isFinite(Number(number));

  const result = (Number(percentage) / 100) * Number(number);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-2xl font-extrabold tracking-tight text-blue-700">
            UtilityHub<span className="text-sky-400">.</span>
          </span>
          <span className="text-sm text-slate-500">Free online tools</span>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-800 to-indigo-950 px-6 py-20 text-center text-white">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
          Everyday tools. Made simple.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
          Fast, free calculators and useful online utilities.
          No downloads. No hassle.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg md:p-10">
          <div className="mb-7">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              MATHEMATICS
            </span>
            <h2 className="mt-4 text-3xl font-bold">Percentage Calculator</h2>
            <p className="mt-2 text-slate-500">
              Calculate a percentage of any number instantly.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Percentage (%)</span>
              <input
                type="number"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-4 text-lg outline-none focus:border-blue-600"
                placeholder="20"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Number</span>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-4 text-lg outline-none focus:border-blue-600"
                placeholder="150"
              />
            </label>
          </div>

          <div aria-live="polite" className="mt-7 rounded-2xl bg-blue-50 p-7 text-center">
            <p className="text-sm font-medium text-blue-700">Your result</p>
            <p className="mt-2 break-words text-5xl font-extrabold text-blue-900">
              {valid ? Number(result.toPrecision(12)).toLocaleString("en-GB") : "—"}
            </p>
          </div>
          <p className="mt-5 text-center text-sm text-slate-500">
            Formula: Percentage ÷ 100 × Number
          </p>
        </div>

        <div className="mt-14 text-center">
          <h2 className="text-2xl font-bold">More tools coming soon</h2>
          <p className="mt-3 text-slate-500">
            Financial, electrical, mathematical and everyday calculators.
          </p>
        </div>
      </section>

      <footer className="border-t bg-white px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} UtilityHub. Free online tools.
      </footer>
    </main>
  );
}