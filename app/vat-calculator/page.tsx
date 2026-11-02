
"use client";

import { useState } from "react";

export default function VATCalculator() {
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState("20");
  const [mode, setMode] = useState<"add" | "remove">("add");

  const value = Number(amount);
  const vatRate = Number(rate);

  const valid =
    amount.trim() !== "" &&
    rate.trim() !== "" &&
    Number.isFinite(value) &&
    Number.isFinite(vatRate) &&
    value >= 0 &&
    vatRate >= 0 &&
    vatRate <= 100;

  const net = mode === "add" ? value : value / (1 + vatRate / 100);
  const vat = mode === "add" ? value * vatRate / 100 : value - net;
  const total = mode === "add" ? value + vat : value;

  const money = (n: number) =>
    n.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-5 py-5 flex items-center justify-between">
          <a href="/" className="text-2xl font-extrabold text-blue-800">
            ⚡ Utility<span className="text-sky-500">Hub</span>
          </a>
          <a href="/" className="text-sm font-semibold text-blue-700 hover:underline">
            ← All tools
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-5 py-14 text-center">
          <p className="text-blue-200 font-semibold mb-3">FINANCE TOOLS</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">VAT Calculator</h1>
          <p className="text-blue-100 mt-4 text-lg">
            Add or remove VAT instantly with our free UK VAT calculator.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-5 py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-lg">
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button
              type="button"
              onClick={() => setMode("add")}
              className={`rounded-xl p-4 font-bold ${
                mode === "add"
                  ? "bg-blue-800 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              Add VAT
            </button>
            <button
              type="button"
              onClick={() => setMode("remove")}
              className={`rounded-xl p-4 font-bold ${
                mode === "remove"
                  ? "bg-blue-800 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              Remove VAT
            </button>
          </div>

          <label htmlFor="amount" className="block font-semibold mb-2">
            {mode === "add" ? "Price excluding VAT (£)" : "Price including VAT (£)"}
          </label>
          <input
            id="amount"
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-slate-300 rounded-xl p-4 text-xl mb-6 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="rate" className="block font-semibold mb-2">
            VAT rate (%)
          </label>
          <select
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full border border-slate-300 rounded-xl p-4 text-lg mb-8 bg-white"
          >
            <option value="20">20% — Standard rate</option>
            <option value="5">5% — Reduced rate</option>
            <option value="0">0% — Zero rate</option>
          </select>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between gap-3">
              <span>Price excluding VAT</span>
              <strong>{valid ? money(net) : "—"}</strong>
            </div>
            <div className="flex justify-between gap-3">
              <span>VAT amount</span>
              <strong>{valid ? money(vat) : "—"}</strong>
            </div>
            <div className="border-t border-blue-200 pt-4 flex justify-between gap-3 text-xl">
              <span className="font-bold">Total including VAT</span>
              <strong className="text-blue-800">{valid ? money(total) : "—"}</strong>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-6">
            This calculator uses UK VAT rates of 20%, 5% and 0%.
            The correct rate depends on the goods or services supplied.
          </p>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500">
        © 2026 UtilityHub. Free online tools.
      </footer>
    </main>
  );
}
