import React from "react";
import Layout from "../../components/common/Layout";
import TitleBar from "../../components/common/TitleBar";
import CommitteeCard from "../../components/common/CommitteeCard";

function Organizing() {
  const committees = [
    {
      name: "Dr. M. Jahirul Islam",
      designation: "Professor, CSE & Director, IICT",
      img: "/committee/jahirul.jpg",
      role: "Conference Chair",
    },
    {
      name: "Md. Masum",
      designation: "Professor, CSE",
      img: "/committee/masum.jpg",
      role: "Co-Chair",
    },
    {
      name: "Dr. Ifte Khairul Amin",
      designation: "Associate Professor, EEE",
      img: "/committee/ifte.png",
      role: "Co-Chair",
    },
    {
      name: "Dr. Ahsan Habib",
      designation: "Assistant Professor, IICT",
      img: "/committee/habib.jpg",
      role: "Joint Secretary",
    },
    {
      name: "Mohammad Kamruzzaman Khan Prince,",
      designation: "Assistant Professor, EEE",
      img: "/committee/prince.jpg",
      role: "Joint Secretary",
    },
    {
      name: "Dr. M. Shahidur Rahman",
      designation: " Professor, CSE",
      img: "/committee/shahid.jpg",
      role: "Technical Program Committee Chair",
    },
    {
      name: "Dr. Md Reza Selim",
      designation: "Professor, CSE",
      img: "/committee/reza.jpg",
      role: "Finance Chair",
    },
    {
      name: "Dr. Abdullah al Mumin,",
      designation: "Professor, CSE",
      img: "/committee/dummy.jpg",
      role: "Registration and Communication Chair",
    },
    {
      name: "Dr. Sadia Sultana",
      designation: "Associate Professor, CSE",
      img: "/committee/sadia.jpg",
      role: "Publicity Chair",
    },
    {
      name: "Dr. Md Rasedujjaman",
      designation: "Associate Professor, EEE",
      img: "/committee/rashed.jpg",
      role: "Poster, workshop and exhibition Chair",
    },
    {
      name: "Mahruba Sharmin Chowdhury",
      designation: "Associate Professor, CSE",
      img: "/committee/sharmin.jpg",
      role: "Refreshment Chair",
    },
  ];

  return (
    <Layout>
      <TitleBar title="Organizing Committee" />
      <div className="max-w-screen-2xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center items-center">
        {committees.map((committee, index) => (
          <CommitteeCard
            name={committee.name}
            role={committee.role}
            designation={committee.designation}
            img={committee.img}
            key={index}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Organizing;
