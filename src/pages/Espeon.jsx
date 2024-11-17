import React from "react";

const EspeonMentalHealth = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-purple-500 mb-4">
        Espeon & Mental Health Awareness
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Espeon, the Psychic-type Pokémon, embodies clarity, focus, and emotional sensitivity. Just as Espeon uses its psychic abilities to connect with the world, we must strive to connect with our own mental health and the well-being of those around us.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png"
          alt="Espeon"
          className="w-48 h-48 object-contain"
        />
        <p className="text-gray-700 text-lg">
          Mental health is just as important as physical health. By understanding our emotions and seeking support when needed, we can create a healthier and more empathetic society.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-2">
          Understanding Mental Health
        </h2>
        <p className="text-gray-700">
          Mental health encompasses emotional, psychological, and social well-being. It affects how we think, feel, and behave, influencing our relationships, decision-making, and ability to handle stress.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-2">
          Common Mental Health Challenges
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Anxiety Disorders</li>
          <li>Depression</li>
          <li>Post-Traumatic Stress Disorder (PTSD)</li>
          <li>Bipolar Disorder</li>
          <li>Eating Disorders</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-2">
          Signs to Look Out For
        </h2>
        <p className="text-gray-700">
          Recognizing the signs of mental health struggles is the first step in getting help:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Persistent sadness or low mood</li>
          <li>Excessive worry or fear</li>
          <li>Changes in sleep or appetite</li>
          <li>Difficulty concentrating</li>
          <li>Withdrawing from social activities</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-2">
          How to Support Your Mental Health
        </h2>
        <p className="text-gray-700">
          Small steps can make a big difference in maintaining your mental well-being:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Stay physically active to boost your mood.</li>
          <li>Practice mindfulness or meditation.</li>
          <li>Reach out to trusted friends or family for support.</li>
          <li>Maintain a balanced diet and get enough sleep.</li>
          <li>Seek professional help when needed—it's okay to ask for help.</li>
        </ul>
      </section>

      <div className="bg-purple-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-purple-600 mb-2">Did You Know?</h2>
        <p className="text-gray-700">
          Approximately 1 in 5 adults in the U.S. experiences mental illness each year. Raising awareness and providing support can help break the stigma around mental health.
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700 text-lg mb-4">
          Like Espeon’s psychic intuition, let’s learn to listen to ourselves and others, creating a community that values mental health.
        </p>
        <a
          href="https://www.nami.org/Home"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default EspeonMentalHealth;
