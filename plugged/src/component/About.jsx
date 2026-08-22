import {
  FaEnvelope,
  FaBriefcase
} from "react-icons/fa";

import "./About.css";

function About() {
  const teamMembers = [
    {
      name: "Ikechukwu David",
      email: "ikechukwud2020@gmail.com",
      role: "Frontend Developer",
      image: "/Team/ME.jpeg"
    },
    {
      name: "Ngobili Vanessa C.",
      email: "ngboilivanessa@gmail.com",
      role: "Project Manager",
      image: "/Team/vanessa.jpeg"
    },
    {
      name: "Ananaba Victor Ujunwa",
      email: "Ujananaba@gmail.com",
      role: "Backend Developer",
      image: "/Team/victor.jpeg"
    },
    {
      name: "Ekpunobi Stephanie ogochukwu",
      email: "ekpunobistephanie@gmail.com",
      role: "Project Researcher",
      image: "/Team/stephanie.jpeg"
    },
    {
      name: "",
      email: "",
      role: "",
      image: "/Team/member5.jpeg"
    }
  ];

  return (
    <div className="about-page">

      {/* Introduction */}
      <section className="about-intro">
        <p className="small-title">GET TO KNOW US</p>

        <h1>About Us</h1>

        <p>
          We are a passionate team of young developers and designers
          working together to bring you the best online shopping
          experience.
        </p>
      </section>


      <section className="team-section">

        <h2>Meet Our Team</h2>

        <div className="team-grid">

          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>

              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />

              <div className="team-info">

                <h3>{member.name}</h3>

                <div className="member-detail">
                  <FaEnvelope />
                  <span>{member.email}</span>
                </div>

            

                <div className="member-detail">
                  <FaBriefcase />
                  <span>{member.role}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default About;