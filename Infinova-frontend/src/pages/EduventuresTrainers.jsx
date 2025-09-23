import React from "react";


const EduventuresTrainers = () => {
  const trainers = [
    {
      name: "Ayushman Kumar",
      role: "CEO of AI Solutions",
      desc: "He worked with Mark Zuckerberg and led the team that built FB Messenger, before setting up FB's office outside the US",
      img: "/trainersDummy.png",
    },
    {
      name: "Ayushman Kumar",
      role: "CEO of AI Solutions",
      desc: "He worked with Mark Zuckerberg and led the team that built FB Messenger, before setting up FB's office outside the US",
      img: "/trainersDummy.png",
    },
    {
      name: "Ayushman Kumar",
      role: "CEO of AI Solutions",
      desc: "He worked with Mark Zuckerberg and led the team that built FB Messenger, before setting up FB's office outside the US",
      img: "/trainersDummy.png",
    },
  ];

  return (
    <div className="eduventuresTrainers-container bg-white">
      {/* Heading */}
      <h2 className="eduventuresTrainers-heading text-4xl font-bold text-center">
        Meet Our <span className="text-blue-600 text-5xl">Trainers</span>
      </h2>

      {/* Trainers flex cards */}
      <div className="eduventuresTrainers-cards flex flex-wrap justify-center">
        {trainers.map((trainer, index) => (
          <div key={index} className="eduventuresTrainers-card bg-blue-100 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="eduventuresTrainers-image">
              <img src={trainer.img} alt={trainer.name} className="rounded-xl w-full h-auto" />
            </div>
            <div className="eduventuresTrainers-cardContent">
              <h3 className="text-xl font-bold">{trainer.name}</h3>
              <p className="text-gray-600 font-medium">{trainer.role}</p>
              <hr className="eduventuresTrainers-divider" />
              <p className="eduventuresTrainers-desc text-sm text-gray-700">{trainer.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduventuresTrainers;
