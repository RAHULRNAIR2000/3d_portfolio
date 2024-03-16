import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tarento,
    IEDC,
    tesla,
    SSF,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "web Developer",
      company_name: "IEDC",
      icon: IEDC,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in Hackathons and providing constructive feedback to other developers.",
      ],
    },
   
    {
      title: "Web Developer",
      company_name: "Summer Startup Festivel",
      icon: SSF,
      iconBg: "#383E56",
      date: "Jan 2023 - June 2023",
      points: [
        "Developed a website for startup product expo and networking event named Summer Startup Festival gathering 2000+ participants  showcasing startup innovations ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Tarento",
      icon: tarento,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js , Springboot and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MovieMania",
      description:
        "MovieMania is a user-friendly web application designed to help users explore a vast database of movies.Where users can easily search for their favorite movies",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Omdb api",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/RAHULRNAIR2000/moviemania.git",
    },
    {
      name: "Blog Posting Website",
      description:
        "This is a Blog Posting Website developed with Spring Boot and React, offering users a seamless experience for creating, reading, and interacting with blog content",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Springboot",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/RAHULRNAIR2000/Full-stack-Projects.git",
    },
    {
      name: "Employee management system",
      description:
        "Website that facilitate the seamless entry of details of newly onboarded employees.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Springboot",
          color: "green-text-gradient",
        },
        {
          name: "MUI",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/RAHULRNAIR2000/Full-stack-Projects.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };