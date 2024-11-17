import React from "react";

const GlaceonClimateChange = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Glaceon & Climate Change
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Glaceon, with its icy elegance and connection to the cold, reminds us of the fragility of Earth’s polar regions. Climate change is causing glaciers to melt, temperatures to rise, and ecosystems to change at alarming rates. It's time to act.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png"
          alt="Glaceon"
          className="w-48 h-48 object-contain"
        />
        <p className="text-gray-700 text-lg">
          Glaceon symbolizes the beauty of icy landscapes, which are rapidly disappearing due to global warming. Together, we can work to preserve our planet for future generations.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          What is Climate Change?
        </h2>
        <p className="text-gray-700">
          Climate change refers to long-term shifts in temperatures and weather patterns. While some changes occur naturally, human activities—especially the burning of fossil fuels—have accelerated these changes, leading to global warming.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          Effects of Climate Change
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Rising global temperatures.</li>
          <li>Melting glaciers and rising sea levels.</li>
          <li>More frequent and severe weather events (hurricanes, droughts).</li>
          <li>Loss of biodiversity and disrupted ecosystems.</li>
          <li>Impact on agriculture and food security.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          Causes of Climate Change
        </h2>
        <p className="text-gray-700">
          The main drivers of climate change include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Burning fossil fuels (coal, oil, and gas).</li>
          <li>Deforestation and habitat destruction.</li>
          <li>Industrial emissions and waste.</li>
          <li>Agriculture and livestock farming (methane emissions).</li>
          <li>Overconsumption and wasteful practices.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          How You Can Help
        </h2>
        <p className="text-gray-700">
          Every individual can contribute to the fight against climate change:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Reduce your carbon footprint by conserving energy.</li>
          <li>Support renewable energy sources like solar and wind.</li>
          <li>Plant trees and protect forests.</li>
          <li>Reduce, reuse, and recycle materials.</li>
          <li>Advocate for climate policies and support eco-friendly businesses.</li>
        </ul>
      </section>

      <div className="bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-600 mb-2">Did You Know?</h2>
        <p className="text-gray-700">
          The Arctic is warming nearly four times faster than the global average. Scientists estimate that, if global emissions aren’t reduced, we could see ice-free Arctic summers by 2040.
        </p>
      </div>

      <div className="mt-8 text-center">
<div className="mt-8 text-center">
  <p className="text-gray-700 text-lg mb-4">
    Let’s honor Glaceon’s icy spirit by protecting Earth’s frozen regions and fighting for a sustainable future.
  </p>
  <a
    href="https://www.un.org/en/climatechange"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
  >
    Learn More
  </a>
</div>

      </div>
    </div>
  );
};

export default GlaceonClimateChange;
