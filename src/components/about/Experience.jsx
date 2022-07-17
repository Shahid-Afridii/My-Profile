import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: " Web Developer",
    compnayName: "Nutz Technovation Pvt Ltd",
    details: `  Nutz is a top-notch Website design and Mobile App development company comprises a peerless team that is striving hard to provide 
    visually appealing Websites, stunning Mobile apps, state of the UI/UX designs. Moreover, we are upholding a high standard of excellence
     in building amazing and legitimate E-commerce websites in India, crafting Best-in-class Graphic designs for logos, Business cards, Brochures, Banners. `,
  },
  {
    year: "2020 - 2021",
    position: "Python & DataScience Trainer",
    compnayName: "ACTE",
    details: `ACTE is one of the India’s leading Class Room & Online training providers. We partner with IT companies and individuals to address their unique needs, providing training and coaching that helps working professionals achieve their career goals. Our training courses are designed and updated by 650+ renowned industry experts,
     We have been named the No.1 most influential education brand in India by LinkedIn.`,
  },
  // {
  //   year: "2005 - 2013",
  //   position: "Consultant",
  //   compnayName: "Videohive",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font" style={{textAlign: 'justify'}}>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
