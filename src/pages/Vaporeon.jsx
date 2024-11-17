import React from "react";

const Vaporeon = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        Vaporeon & Water Conservation
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Vaporeon, the Water-type Pokémon, is a symbol of fluidity and the importance of preserving our water resources. Water is essential for life, but many regions around the world face water scarcity due to overuse and pollution. Let’s take action to conserve this vital resource.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
          alt="Vaporeon"
          className="w-48 h-48 object-contain"
        />
        <p className="text-gray-700 text-lg">
          Just like Vaporeon is closely connected to water, we must protect our rivers, lakes, and oceans. Water conservation is key to sustaining life on Earth.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          Why Water Conservation Matters
        </h2>
        <p className="text-gray-700">
          Water is essential for all forms of life. Unfortunately, water scarcity is becoming a major global challenge. According to the UN, about 2 billion people live in water-stressed regions. We must reduce waste and manage water resources carefully to ensure future generations have access to clean water.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          The Global Water Crisis
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>More than 2 billion people globally lack access to safe drinking water.</li>
          <li>Pollution, over-extraction, and climate change are worsening water scarcity.</li>
          <li>Water is wasted in agriculture, industries, and domestic use.</li>
          <li>Water-related disasters, such as floods and droughts, are increasing due to climate change.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          How Water Conservation Helps
        </h2>
        <p className="text-gray-700">
          Conserving water ensures that this precious resource is available for future generations, helps prevent pollution, and reduces the impacts of droughts and other water-related challenges.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          How You Can Conserve Water
        </h2>
        <p className="text-gray-700">
          There are simple actions everyone can take to help conserve water:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Fix leaks around your home to prevent water wastage.</li>
          <li>Use water-efficient appliances and fixtures (e.g., low-flow showerheads, water-saving toilets).</li>
          <li>Take shorter showers and turn off the tap while brushing your teeth.</li>
          <li>Use a broom instead of a hose to clean driveways and sidewalks.</li>
          <li>Advocate for policies that promote water conservation and sustainable management.</li>
        </ul>
      </section>

      <div className="bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-600 mb-2">Did You Know?</h2>
        <p className="text-gray-700">
          The average person uses about 80-100 gallons of water per day. However, the majority of this water is used in activities like washing clothes, showering, and flushing toilets. Small changes can make a big difference!
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700 text-lg">
          Just like Vaporeon thrives in water, we must protect it. Let’s conserve water and ensure its availability for all life on Earth.
        </p>
      </div>
      <div className="mt-8 text-center">
  <a
    href="https://www.worldwildlife.org/initiatives/freshwater"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-vaporeon text-white font-bold py-2 px-4 rounded hover:bg-blue-200 transition"
  >
    Learn More
  </a>
</div>

    </div>
  );
};

export default Vaporeon;
