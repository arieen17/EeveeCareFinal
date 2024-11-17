import React from "react";

const Jolteon = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-dogica text-yellow-600">Jolteon: Renewable Energy</h1>
      <p className="mt-4 text-lg text-gray-700 px-4 max-w-3xl text-center">
        Renewable energy is the key to a sustainable future. Harnessing natural resources like the
        sun, wind, and water helps reduce carbon emissions and combat climate change. Embracing
        renewable energy not only protects the environment but also creates jobs and drives
        innovation in energy technology.
      </p>
      <div className="mt-8 flex flex-col items-center space-y-4 max-w-3xl px-4">
        <h2 className="text-2xl font-semibold text-gray-800">Benefits of Renewable Energy</h2>
        <ul className="list-disc text-left text-gray-700">
          <li>Reduces greenhouse gas emissions.</li>
          <li>Improves air and water quality.</li>
          <li>Decreases dependency on finite fossil fuels.</li>
          <li>Creates millions of clean energy jobs globally.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Types of Renewable Energy</h2>
        <ul className="list-disc text-left text-gray-700">
          <li>
            <strong>Solar Energy:</strong> Capturing sunlight to generate electricity or heat.
          </li>
          <li>
            <strong>Wind Energy:</strong> Using wind turbines to produce power.
          </li>
          <li>
            <strong>Hydropower:</strong> Utilizing water flow for electricity generation.
          </li>
          <li>
            <strong>Geothermal Energy:</strong> Using Earth's heat for energy production.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <a
          href="https://www.energy.gov/eere/renewable-energy"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition"
        >
          Learn More About Renewable Energy
        </a>
      </div>
    </div>
  );
};

export default Jolteon;