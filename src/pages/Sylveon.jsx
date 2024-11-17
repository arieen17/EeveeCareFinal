import React from "react";

const Sylveon = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-pink-500 mb-4">
        Sylveon & Gender Equality
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Sylveon, known for its graceful and harmonious nature, inspires us to
        create a world where everyone, regardless of gender, has equal
        opportunities and respect. Gender equality is essential for building a
        fair and thriving society.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png"
          alt="Sylveon"
          className="w-48 h-48 object-contain"
        />
        <p className="text-gray-700 text-lg">
          Sylveon's ribbons symbolize unity and understanding. Just as Sylveon
          connects with others through its feelers, we should strive to connect
          and support one another, regardless of gender.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-pink-400 mb-2">
          Why Gender Equality Matters
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Gender equality is a fundamental human right and a cornerstone of
            peaceful, prosperous societies.
          </li>
          <li>
            Equality ensures that everyone has access to education, healthcare,
            and job opportunities.
          </li>
          <li>
            Diverse perspectives foster innovation and growth in every field.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-pink-400 mb-2">
          Challenges to Gender Equality
        </h2>
        <p className="text-gray-700">
          Despite progress, significant challenges remain:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Gender-based discrimination and stereotypes.</li>
          <li>Unequal pay for equal work.</li>
          <li>Lack of representation in leadership positions.</li>
          <li>Limited access to education and resources for women and girls.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-pink-400 mb-2">
          How We Can Achieve Gender Equality
        </h2>
        <p className="text-gray-700">
          Together, we can work towards a more equal and inclusive world:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Challenge gender stereotypes in everyday life.</li>
          <li>
            Support policies and programs that promote equality in education and
            the workplace.
          </li>
          <li>Encourage diverse representation in media and leadership roles.</li>
          <li>
            Educate ourselves and others about the importance of gender equality.
          </li>
        </ul>
      </section>

      <div className="bg-pink-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-pink-500 mb-2">Did You Know?</h2>
        <p className="text-gray-700">
          Achieving gender equality is one of the United Nations' Sustainable
          Development Goals (SDG 5). It aims to empower all women and girls
          globally by 2030.
        </p>
      </div>

      <div className="mt-8 text-center">
      <div className="mt-8 text-center">
  <p className="text-gray-700 text-lg mb-4">
    Together, we can create a future where gender equality is not a dream but a reality.
  </p>
  <a
    href="https://www.unwomen.org/en"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-sylveon text-white font-bold py-2 px-4 rounded hover:bg-pink-200 transition"
  >
    Learn More
  </a>
</div>

      </div>
    </div>
  );
};

export default Sylveon;
