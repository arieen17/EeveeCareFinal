import React from "react";

const Leafeon = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center py-8">
      <div className="flex flex-col items-center">
        {/* Leafeon Pixel Art */}
        <h1 className="text-4xl font-dogica text-green-600">
          Leafeon: Conservation and Biodiversity
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-700 px-4 max-w-3xl text-center">
        Conservation and biodiversity are vital to maintaining the delicate balance of our planet’s
        ecosystems. Protecting plant and animal species ensures the health and sustainability of
        our environment for future generations.
      </p>
      <div className="mt-8 flex flex-col items-center space-y-4 max-w-3xl px-4">
        <h2 className="text-2xl font-semibold text-gray-800">Why Conservation Matters</h2>
        <ul className="list-disc text-left text-gray-700">
          <li>Preserves habitats for endangered species.</li>
          <li>Maintains the balance of ecosystems.</li>
          <li>Protects natural resources for human and animal survival.</li>
          <li>Combats climate change through forest preservation.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">How You Can Help</h2>
        <ul className="list-disc text-left text-gray-700">
          <li>Support organizations working on conservation projects.</li>
          <li>Participate in local cleanups and tree-planting drives.</li>
          <li>Advocate for policies that protect biodiversity.</li>
          <li>Educate others about the importance of protecting nature.</li>
        </ul>
      </div>
      <div className="mt-8">
        <a
          href="https://www.worldwildlife.org"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
        >
          Learn More About Conservation
        </a>
      </div>
    </div>
  );
};

export default Leafeon;
