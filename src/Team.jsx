import React from "react";

export default function Team() {
  const team = [
    {
      name: "Lorem Ipsum",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      image:
        "data:image/png;base64,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",
      link: "/",
    },
    {
      name: "Lorem Ipsum",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      image:
        "data:image/png;base64,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",
      link: "/",
    },
  ];
  const teamsCard = (teamMember) => {
    return (
      <div
        style={{
          backgroundColor: "#FFF3E2",
          borderRadius: 20,
          padding: 10,
          width: "30%",
        }}
      >
        <img
          style={{ borderRadius: "100%", height: 100 }}
          src={teamMember.image}
          alt="profile"
        />
        <p style={{ fontSize: 40 }}>{teamMember.name}</p>
        <p>{teamMember.description}</p>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <p
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
              padding: 10,
              borderRadius: 10,
              width: "30%",
            }}
          >
            Read More
          </p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#FA9884", padding: 10 }}>
      <h1>Our Team</h1>
      <div
        style={{
          display: "flex",
          margin: 5,
          gap: 200,
          justifyContent: "center",
        }}
      >
        {team.map((member) => teamsCard(member))}
      </div>
    </div>
  );
}
