
"use client";

import { useState } from "react";

const tools = [
  { name: "Percentage Calculator", category: "Mathematics", description: "Calculate percentages instantly.", available: true },
  { name: "Percentage Change", category: "Mathematics", description: "Work out increases and decreases.", available: false },
  { name: "VAT Calculator", category: "Finance", description: "Add or remove VAT.", available: true },
  { name: "Compound Interest", category: "Finance", description: "Explore savings and investment growth.", available: false },
  { name: "Ohm's Law", category: "Electrical", description: "Calculate voltage, current and resistance.", available: false },
  { name: "Voltage Drop", category: "Electrical", description: "Estimate electrical voltage drop.", available: false },
  { name: "Time Calculator", category: "Everyday", description: "Calculate hours and minutes.", available: false },
  { name: "Unit Converter", category: "Everyday", description: "Convert common measurements.", available: false },
];

export default function Home() {
  const [percentage, setPercentage] = useState("20");
  const [number, setNumber] = useState("150");
  const [search, setSearch] = useState("");

  const valid =
    percentage.trim() !== "" &&
    number.trim() !== "" &&
    Number.isFinite(Number(percentage)) &&
    Number.isFinite(Number(number));

  const result = (Number(percentage) / 100) * Number(number);

  const filteredTools = tools.filter((tool) =>
    `${tool.name} ${tool.category}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">
          <a href="/" className="text-2xl font-extrabold tracking-tight text-blue-800">
            ⚡ Utility<span className="text-sky-500">Hub</span>
          </a>
          <span className="text-sm text-slate-500">Free online tools</span>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-sky-600 text-white">
        <div className="max-w-5xl mx-auto px-5 py-20 text-center">
          <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
            Simple • Fast • Free
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Every tool you need.
            <br />
            One simple place.
          </h1>

          <p className="text-blue-100 text-lg mt-6 max-w-2xl mx-auto">
            Free calculators and everyday tools to make life easier.
            No sign-ups. No fuss. Just answers.
          </p>

          <div className="max-w-xl mx-auto mt-9">
            <label htmlFor="tool-search" className="sr-only">
              Search tools
            </label>
            <input
              id="tool-search"
              type="search"
              placeholder="🔎 Search calculators and tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl bg-white text-slate-900 px-6 py-5 shadow-xl outline-none focus:ring-4 focus:ring-sky-300"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="mb-7">
          <h2 className="text-3xl font-bold">Explore our tools</h2>
          <p className="text-slate-500 mt-2">
            Find the right calculator for the job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {["Mathematics", "Finance", "Electrical", "Everyday"].map((category) => (
            <div key={category} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-4">
                {category === "Mathematics" ? "🧮" :
                 category === "Finance" ? "💷" :
                 category === "Electrical" ? "⚡" : "🕒"}
              </div>
              <h3 className="text-xl font-bold">{category}</h3>
              <p className="text-slate-500 text-sm mt-2">
                {category === "Mathematics" ? "Numbers made simple." :
                 category === "Finance" ? "Money calculations made easy." :
                 category === "Electrical" ? "Practical electrical tools." :
                 "Useful tools for everyday life."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-14">
        <h2 className="text-3xl font-bold mb-6">Popular calculators</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <div key={tool.name} className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="text-xs font-semibold text-blue-700 mb-2">{tool.category}</p>
              <h3 className="font-bold">{tool.name}</h3>
              <p className="text-sm text-slate-500 mt-2">{tool.description}</p>
              <p className={`text-xs font-semibold mt-4 ${tool.available ? "text-green-700" : "text-slate-400"}`}>
                {tool.available ? (
  
<a href={tool.name === "VAT Calculator" ? "/vat-calculator" : tool.name === "Ohm's Law" ? "/ohms-law" : "#percentage-calculator"} className="hover:underline">

    Available now ↓
  </a>
) : (
  "Coming soon"
)}
              </p>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <p className="text-slate-500 mt-5">No matching tools found.</p>
        )}
      </section>

      <section id="percentage-calculator" className="max-w-3xl mx-auto px-5 pb-20">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-lg">
          <div className="text-sm font-bold text-blue-700 mb-3">
            MATHEMATICS
          </div>
          <h2 className="text-3xl font-extrabold">Percentage Calculator</h2>
          <p className="text-slate-500 mt-3 mb-8">
            Find a percentage of any number in seconds.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="percentage" className="block font-semibold mb-2">
                Percentage (%)
              </label>
              <input
                id="percentage"
                type="number"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                className="w-full border border-slate-300 rounded-xl p-4 text-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="number" className="block font-semibold mb-2">
                Number
              </label>
              <input
                id="number"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full border border-slate-300 rounded-xl p-4 text-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 mt-7 text-center">
            <p className="text-slate-600 font-medium">Your result</p>
            <div className="text-5xl font-extrabold text-blue-800 mt-3 break-words">
              {valid
                ? Number(result.toPrecision(12)).toLocaleString("en-GB")
                : "—"}
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-6">
            Example: 20% of 150 = 30. Multiply the number by the percentage divided by 100.
          </p>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-5 py-12 text-center">
          <h2 className="text-2xl font-bold">Simple tools. Real answers.</h2>
          <p className="text-blue-200 mt-3">
            UtilityHub is growing into a library of free, useful calculators for everyone.
          </p>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500">
        © 2026 UtilityHub. Free online tools.
      </footer>
    </main>
  );
}
