import React from "react";

const Poverty = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Poverty</h1>
      <p className="text-gray-700 text-lg mb-6">
        Poverty is one of the most pressing issues affecting millions of people worldwide. It is defined as the lack of sufficient income or resources to meet basic needs such as food, shelter, and healthcare.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">Key Statistics</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Approximately 9.2% of the world’s population lives on less than $2 a day.</li>
          <li>About 1 in 10 people worldwide live in extreme poverty.</li>
          <li>Women and children are disproportionately affected by poverty.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">Causes of Poverty</h2>
        <p className="text-gray-700">
          Poverty arises from various interrelated factors, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Lack of education and job opportunities.</li>
          <li>Economic inequality and systemic issues.</li>
          <li>Political instability and conflicts.</li>
          <li>Environmental challenges like climate change and natural disasters.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">Solutions to Poverty</h2>
        <p className="text-gray-700">
          Addressing poverty requires a multifaceted approach. Here are some solutions:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Improving access to quality education and vocational training.</li>
          <li>Investing in healthcare and social safety nets.</li>
          <li>Promoting economic policies that reduce inequality.</li>
          <li>Supporting small businesses and entrepreneurship.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500 mb-2">How You Can Help</h2>
        <p className="text-gray-700">
          Everyone can play a role in alleviating poverty:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Donate to organizations addressing poverty.</li>
          <li>Volunteer for local community initiatives.</li>
          <li>Advocate for policies that address inequality.</li>
          <li>Support ethical and fair-trade businesses.</li>
        </ul>
      </section>

      <div className="bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-600 mb-2">Did You Know?</h2>
        <p className="text-gray-700">
          The United Nations has set "No Poverty" as the first Sustainable Development Goal (SDG), aiming to eradicate poverty in all its forms by 2030.
        </p>
      </div>
    </div>
  );
};

export default Poverty;
