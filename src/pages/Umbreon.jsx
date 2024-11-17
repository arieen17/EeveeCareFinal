import React from "react";

const UmbreonSocialInjustice = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-dogica text-gray-800 mb-4">
        Umbreon & Social Injustice
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Umbreon, the Moonlight Pokémon, thrives in the darkness and symbolizes resilience and adaptability. Just like Umbreon, we must confront the darkness of social injustice and work to create a brighter, fairer world for everyone.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"
          alt="Umbreon"
          className="w-48 h-48 object-contain"
        />
        <p className="text-gray-700 text-lg">
          Umbreon’s glowing rings pierce through the shadows, reminding us that even in the darkest times, there’s a path toward justice and equality.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2">
          What is Social Injustice?
        </h2>
        <p className="text-gray-700">
          Social injustice refers to unfair treatment of individuals or groups based on factors such as race, gender, economic status, religion, or ethnicity. It manifests as inequality, discrimination, and oppression in society.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2">
          Forms of Social Injustice
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Racial discrimination and systemic racism.</li>
          <li>Gender inequality and sexism.</li>
          <li>Economic disparities and poverty.</li>
          <li>Lack of access to education and healthcare.</li>
          <li>Environmental injustice affecting marginalized communities.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2">
          Causes of Social Injustice
        </h2>
        <p className="text-gray-700">
          Social injustice is rooted in systemic problems, such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Historical oppression and colonization.</li>
          <li>Unequal laws and policies.</li>
          <li>Socioeconomic inequalities and power imbalances.</li>
          <li>Discrimination and prejudice in institutions and communities.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2">
          How We Can Fight Social Injustice
        </h2>
        <p className="text-gray-700">
          Tackling social injustice requires collective action and individual efforts:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Educate yourself and others about social issues and systemic inequality.</li>
          <li>Advocate for policies that promote fairness and equality.</li>
          <li>Support organizations and movements fighting for justice.</li>
          <li>Amplify marginalized voices and stand against discrimination.</li>
        </ul>
      </section>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Did You Know?</h2>
        <p className="text-gray-700">
          According to the World Economic Forum, it will take more than 130 years to close the global gender gap at the current rate of progress. Together, we can accelerate change.
        </p>
      </div>

      <div className="mt-8 text-center">
      <div className="mt-8 text-center">
  <p className="text-gray-700 text-lg mb-4">
    Join the fight for justice and equality, creating a brighter future for everyone.
  </p>
  <a
    href="https://www.amnesty.org/en/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-umbreon text-white font-bold py-2 px-4 rounded hover:bg-slate-500 transition"
  >
    Learn More
  </a>
</div>

      </div>
    </div>
  );
};

export default UmbreonSocialInjustice;
