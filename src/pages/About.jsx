import React from "react";

const AboutEeveeCare = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-dogicabold text-gray-700 mb-6">
        About Eevee Care
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Welcome to **Eevee Care**, a platform dedicated to raising awareness about
        important global issues through the unique and adorable perspective of the
        Eevee Evolutions. Each evolution represents a cause that needs our attention,
        from mental health and gender equality to water conservation and social justice.
        Join us as we explore these themes and work together to create a better world!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {/* Espeon Pixel Art */}
        <div className="flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
            alt="Espeon"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-center text-gray-600 font-bold font-dogica">Espeon - Mental Health</p>
        </div>
        
        {/* Vaporeon Pixel Art */}
        <div className="flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
            alt="Vaporeon"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-center text-gray-600 font-bold font-dogica">Vaporeon - Water Conservation</p>
        </div>

        {/* Sylveon Pixel Art */}
        <div className="flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"
            alt="Sylveon"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-center text-gray-600 font-bold font-dogica">Sylveon - Gender Equality</p>
        </div>

        {/* Umbreon Pixel Art */}
        <div className="flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
            alt="Umbreon"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-center text-gray-600 font-bold font-dogica">Umbreon - Social Justice</p>
        </div>

        {/* Glaceon Pixel Art */}
        <div className="flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
            alt="Glaceon"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-center text-gray-600 font-bold font-dogica">Glaceon - Climate Change</p>
        </div>

        {/* Flareon Pixel Art */}
        <div className="flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
            alt="Flareon"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-center text-gray-600 font-bold font-dogica">Flareon - Wild Fires</p>
        </div>

        {/* Leafeon Pixel Art */}
        <div className="flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
            alt="Leafeon"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-center text-gray-600 font-bold font-dogica">Leafeon - Biodiversity</p>
        </div>

        {/* Jolteon Pixel Art */}
        <div className="flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
            alt="Jolteon"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-center text-gray-600 font-bold font-dogica">Jolteon - Renewable Energy</p>
        </div>

        {/* Eevee Pixel Art */}
        <div className="flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
            alt="Eevee"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-center text-gray-600 font-bold font-dogica">Eevee - Our Foundation</p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-dogicabold text-gray-700 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-600">
          At Eevee Care, we believe that small changes can make a big impact. By highlighting global issues through the lens of the beloved Eevee and its evolutions, we hope to engage people of all ages and backgrounds in meaningful conversations about how we can all contribute to a more sustainable, fair, and compassionate world.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-dogicabold text-gray-700 mb-2">
          Our Purpose
        </h2>
        <p className="text-gray-600">
          Each Eevee evolution represents a global issue we’re passionate about:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li><strong>Espeon</strong>: Mental Health Awareness - Promoting emotional well-being and supporting mental health care initiatives.</li>
          <li><strong>Vaporeon</strong>: Water Conservation - Educating on the importance of protecting freshwater resources and reducing water waste.</li>
          <li><strong>Sylveon</strong>: Gender Equality - Advocating for equal rights, opportunities, and respect for all genders.</li>
          <li><strong>Umbreon</strong>: Social Justice - Fighting for equality, fairness, and the eradication of discrimination and injustice.</li>
          <li><strong>Glaceon</strong>: Climate Change - Raising awareness about the climate crisis and encouraging eco-friendly habits.</li>
          <li><strong>Flareon</strong>: Energy Conservation - Promoting the reduction of energy consumption and the use of renewable resources.</li>
          <li><strong>Leafeon</strong>: Deforestation - Raising awareness about the importance of protecting forests and plant life for biodiversity.</li>
          <li><strong>Jolteon</strong>: Renewable Energy - Advocating for the transition to solar, wind, and other renewable energy sources to reduce carbon emissions.</li>
        </ul>
      </section>

      <div className="mt-8 text-center">
        <p className="text-gray-700 font-bold text-lg">
          Whether you’re here to learn, support, or take action, we’re so glad you’ve joined us in our journey toward positive change. Together, we can make the world a better place—one evolution at a time!
        </p>
      </div>
    </div>
  );
};

export default AboutEeveeCare;
