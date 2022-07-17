import React from "react";

const educationContent = [
  {
    year: "2015-2018",
    degree: "ARTS DEGREE",
    institute: "BHARATHIDASAN UNIVERSITY",
    details: ` The motto of the University "We will create a brave new world" has been framed from Bharathidasan's poetic words
     "புதியதோர் உலகம் செய்வோம்". The University endeavours to be true to such a vision by creating in the region a brave new world of academic innovation for social change. `,
  },
  {
    year: "2019-2020",
    degree: "DIPLOMA COURSE IN JAVA & PYTHON",
    institute: "CSC Computer Education",
    details: `
     The vision of the institute is to be in the forefront of 
    Computer Education and make emerging technologies reach the major segment of the society and providing quality education across 1 billion Indian populations.`,
  },
  {
    year: "2020",
    degree: "DATASCIENCE",
    institute: "BESANT TECNOLOGIES",
    details: `Best Online & Classroom Training Institute with 20+ Branches. Become Master in AWS, DevOps, Python, Data Science & Selenium in Just a Month. Top Courses. Fully Hands-on Training.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font" style={{textAlign: 'justify'}}>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
