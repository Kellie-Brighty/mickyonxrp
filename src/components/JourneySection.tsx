import React from "react";

const JourneySection: React.FC = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Mickey's Journey</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 p-4">
          <img
            src="/assets/micky-one.jpg"
            alt="Mickey"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-2/3 p-4">
          <h3 className="text-xl font-semibold mb-2">Early Days</h3>
          <p className="text-gray-700">
            When Mickey first joined our family, bringing joy and laughter.
          </p>
        </div>
      </div>
      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold mb-2">— Mickey —</h3>
        <p className="text-gray-600 italic">
          "Those we love don't go away, they walk beside us every day. Unseen,
          unheard, but always near, still loved, still missed and very dear."
        </p>
      </div>
    </section>
  );
};

export default JourneySection; 