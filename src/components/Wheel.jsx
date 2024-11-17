import React, { useState } from "react";

const Wheel = () => {
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleRotate = () => {
    // Generate a random index for the winner
    const randomIndex = Math.floor(Math.random() * sections.length);
    
    // Calculate the rotation angle so that it lands on the selected section
    const rotationAngle = randomIndex * (360 / sections.length) + Math.random() * 360;

    // Set the rotation with a larger increment for a longer spin
    const finalRotation = rotation + rotationAngle + 360 * 5; // Spins 5 full rotations before landing

    setRotation(finalRotation);

    // Set the winner label after the spin with a delay of 2 seconds
    setTimeout(() => {
      setWinner(sections[randomIndex].label);
    }, 4000); // Delay the winner display by 2 seconds
  };

  // Create 8 sections
  const sections = [
    { color: "#F59BAD", label: "Sylveon ⭐️" },
    { color: "#89D89B", label: "Leafeon 🌳" },
    { color: "#D9BAD2", label: "Espeon 🍥" },
    { color: "#371750", label: "Umbreon 🌙" },
    { color: "#E68D63", label: "Flareon 🔥" },
    { color: "#336E8C", label: "Vaporeon 💧" },
    { color: "#FCE487", label: "Jolteon ⚡️" },
    { color: "#7EC4BC", label: "Glaceon ❄️" },
  ];

  // Function to calculate the path
  const calculatePath = (startAngle, endAngle) => {
    const radius = 16; // Radius of the circle
    const x1 = 16 + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = 16 + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = 16 + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = 16 + radius * Math.sin((endAngle * Math.PI) / 180);
    return `M16 16 L${x1} ${y1} A16 16 0 0 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="z-[6] h-[450px] w-[450px] bg-[#C7AB75] rounded-full py-[26px]">
      <div className="items-center flex flex-col justify-center">
        <div className="relative h-[400px] w-[400px]">
          <svg
            viewBox="0 0 32 32"
            className="w-full h-full"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: "50% 50%",
              transition: "transform 4s ease-in-out", // Extended spin duration (6s)
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {sections.map((section, index) => {
              const startAngle = (index * 360) / sections.length;
              const endAngle = ((index + 1) * 360) / sections.length;
              const path = calculatePath(startAngle, endAngle);

              // Calculate label position (center of the segment)
              const labelAngle = (startAngle + endAngle) / 2;
              const labelX = 16 + 8 * Math.cos((labelAngle * Math.PI) / 180);
              const labelY = 16 + 8 * Math.sin((labelAngle * Math.PI) / 180);

              // Split the label into individual words
              const words = section.label.split(" ");

              return (
                <g key={index}>
                  <path d={path} fill={section.color} />
                  <text
                    x={labelX}
                    y={labelY}
                    fontSize="1.1"
                    fill={labelAngle > 90 && labelAngle < 270 ? "white" : "black"} // Adjust text color for readability
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${labelAngle}, ${labelX}, ${labelY})`} // Apply rotation to the text
                    className="font-dogica"
                  >
                    {words.map((word, wordIndex) => (
                      <tspan key={wordIndex} x={labelX} dy={wordIndex === 0 ? 0 : "1.2em"}>
                        {word}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <button
          onClick={handleRotate}
          className="z-[2] mt-10 px-4 py-3 text-white rounded bg-eevee hover:bg-[#A3854C] transition text- font-dogicabold"
        >
          Spin
        </button>
        {winner && (
          <div className="mt-1 text-xl font-dogicabold text-secondary">
            Winner: {winner}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wheel;