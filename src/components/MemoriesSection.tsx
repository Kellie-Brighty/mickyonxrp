import React from "react";

const MemoriesSection: React.FC = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Cherished Memories
      </h2>
      <div className="grid grid-cols-7 gap-2">
        <div className="col-span-4 row-span-2">
          <img
            src="/assets/micky-three.jpg"
            alt="Mickey"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 row-span-1">
          <img
            src="/assets/micky-six.jpg"
            alt="Mickey"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-2">
          <img
            src="/assets/micky-seven.jpg"
            alt="Mickey"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 row-span-1">
          <img
            src="/assets/micky-four.jpg"
            alt="Mickey"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            src="/assets/micky-five.jpg"
            alt="Mickey"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-5 row-span-1">
          <img
            src="/assets/micky-eight.jpg"
            alt="Mickey"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
