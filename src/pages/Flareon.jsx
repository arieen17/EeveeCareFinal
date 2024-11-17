import React from "react";

const Flareon = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold text-red-500">Flareon: Wildfires Awareness</h1>
      <p className="mt-4 text-lg text-gray-700 px-4 max-w-3xl text-center">
        Wildfires are devastating natural disasters that impact ecosystems, wildlife, and human
        lives. With increasing global temperatures and deforestation, wildfires are becoming
        more frequent and severe. Raising awareness and taking preventive measures can
        significantly reduce their occurrence and impact.
      </p>
      <div className="mt-8 flex flex-col items-center space-y-4 max-w-3xl px-4">
        <h2 className="text-2xl font-semibold text-gray-800">Did You Know?</h2>
        <ul className="list-disc text-left text-gray-700">
          <li>Wildfires destroy an average of 7 million acres of land in the US annually.</li>
          <li>Over 85% of wildfires are caused by human activities.</li>
          <li>Climate change increases the frequency and intensity of wildfires globally.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">How You Can Help</h2>
        <ul className="list-disc text-left text-gray-700">
          <li>Support reforestation efforts and sustainable land management.</li>
          <li>Educate your community about fire safety and prevention.</li>
          <li>Reduce your carbon footprint to mitigate climate change.</li>
        </ul>
      </div>
      <div className="mt-8">
        <a
          href="https://www.ready.gov/wildfires"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
        >
          Learn More About Wildfire Preparedness
        </a>
      </div>
    </div>
  );
};

export default Flareon;
