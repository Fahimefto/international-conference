import React from "react";

export default function Table() {
  const tableData = [
    {
      heading: "Artificial Intelligence, Security System and Networking",
      sub: [
        "Artificial Intelligence",
        " Machine Learning and Deep Learning",
        "Computer Vision, Image processing and Pattern recognisition",
        "Augmented Reality , Virtual Reality and Mixed Reality",
        "Bio Informatics",
        "Natural Langugae Processing",
        " Cloud, Fog and Edge Computing",
        "Computer Network, Information Security",
        "Cryptography and Network Security",
        "Data Mining and Engineering",
        "Mobile and Ubiqutous computing",
      ],
    },
    {
      heading: "Software Engineering",
      sub: [
        "Search-based software engineering",
        "Software fairness",
        "Recommender systems",
        "Autonomic systems and self adaptation",
        "Program synthesis",
        "Software testing",
        "Program analysis",
        "Debugging and Fault localization",
        "Programming languages",
        "Performance",
        "Mining software repositories",
        "Apps and app store analysis",
        "Software ecosystems",
        "Configuration management",
        "Software visualization",
        "Evolution and maintenance",
        "API design and evolution",
        "Release engineering and DevOps",
        "Software reuse",
        "Refactoring",
        "Program comprehension",
        "Reverse engineering",
        "Distributed and collaborative software engineering",
        "Agile methods and software processes",
        "Software economics",
        "Crowd-based software engineering",
        "Ethics in software engineering",
        "Green and sustainable technologies",
        "Requirements Engineering",
        "Privacy and Security by Design",
        "Modeling and Model-Driven Engineering",
        "Software Architecture and Design",
        "Variability and product lines",
        "Software services",
        "Formal methods",
        "Validation and Verification",
        "Reliability and Safety",
        "Privacy and Security",
      ],
    },
    {
      heading: "Industry 4.0",
      sub: [
        "Smart home, city and village",
        "IoT",
        " Bloack chain Technology ",
        " Big Data Analytics",
        " Simulation and digital twins",
        "Robotics",
        "5G and Beyond",
      ],
    },
    {
      heading: "Business and Social Informatics",
      sub: [
        " Data Driven Business apllication",
        " Information Management",
        " Scoial Computing",
        " Business Innovationa and Digital Transformation",
        " ICT4D",
        " Gamification",
        " Human Computer Interaction",
      ],
    },
    {
      heading: "Power Systems and Renewable Energy",
      sub: [
        "Power Generation and Transmission",
        "Power Electronics and Drives",
        " Renewable Energy Systems",
        "Energy Storage and Management",
        " Smart Grid Technologies",
        "Microgrids and Distributed Energy Resources",
        "Electrification of Transportation",
      ],
    },
    {
      heading: "Communications and Signal Processing",
      sub: [
        " Wireless Communications and Networking",
        "Optical Communications and Networking",
        "Information Theory and Coding",
        " Signal Processing Algorithms and Architectures",
        "Speech and Audio Processing",
        "Image and Video Processing",
        "Machine Learning for Signal Processing",
      ],
    },
    {
      heading: "Electronic Circuits and Systems",
      sub: [
        "Analog and Mixed-Signal Circuits",
        "Digital Circuits and Systems",
        " RF and Microwave Circuits",
        " Integrated Circuits and Systems",
        " MEMS and Sensors",
        " VLSI Design and Test",
        " FPGA-based Systems and Reconfigurable Computing",
      ],
    },
  ];
  return (
    <>
      {tableData.map((data: any, index) => (
        <section
          className="rounded-md border-2 border-blue-800 min-w-full"
          key={index}
        >
          <h2 className="bg-blue-800 w-full  text-center text-white py-1 font-bold ">
            {data.heading}
          </h2>
          {data.sub?.map((sub: any, index: any) => (
            <div
              className={
                index % 2 !== 0
                  ? "bg-blue-800 bg-opacity-10 p-1 text-center text-sm"
                  : "p-1 text-center text-sm"
              }
              key={index}
            >
              {sub}
            </div>
          ))}
        </section>
      ))}
    </>
  );
}
