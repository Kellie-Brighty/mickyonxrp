import React from "react";

const RememberingSection: React.FC = () => {
  const memories = [
    {
      title: "Playful Spirit",
      description: "Mickey's playful nature brought joy to everyone around",
    },
    {
      title: "Gentle Soul",
      description: "Known for gentle purrs and loving cuddles",
    },
    {
      title: "Brave Fighter",
      description: "Showed incredible strength throughout the journey",
    },
    {
      title: "Family's Heart",
      description: "Forever a cherished member of our family",
    },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Remembering Mickey</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{memory.title}</h3>
            <p className="text-gray-700">{memory.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RememberingSection; 