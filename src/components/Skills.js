import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      section: "LANGUAGES",
      logos: [
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
          alt: "Python",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png",
          alt: "Java",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1280px-Go_Logo_Blue.svg.png",
          alt: "Go",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
          alt: "C++",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png",
          alt: "Lua",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
          alt: "HTML",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
          alt: "CSS",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
          alt: "JavaScript",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
          alt: "SQL",
        },
      ],
      skills: [
        "Python",
        "Java",
        "Go",
        "C++",
        "Lua",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
      ],
    },
    {
      section: "TECH/FRAMEWORKS",
      logos: [
        {
          image:
            "https://images.vexels.com/media/users/3/140692/isolated/lists/72d1f12edf758d24f5b6db73bac4f297-linux-logo.png",
          alt: "Linux",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png",
          alt: "Git",
        },
        {
          image:
            "https://miro.medium.com/v2/resize:fit:700/1*-uckV8DOh3l0bCvqZ73zYg.png",
          alt: "Spring Boot",
        },
        {
          image:
            "https://storage.googleapis.com/knoldus-images/Techhub%20website/spring-cloud.png",
          alt: "Spring Cloud",
        },
        {
          image:
            "https://static.djangoproject.com/img/logos/django-logo-negative.png",
          alt: "Django",
        },
        {
          image:
            "https://repository-images.githubusercontent.com/260928305/92388600-8d1c-11ea-9993-a726466b5099",
          alt: "FastAPI",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          alt: "React",
        },
        {
          image:
            "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-ar21.png",
          alt: "Kibana",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Elasticsearch_logo.svg/1280px-Elasticsearch_logo.svg.png",
          alt: "ElasticSearch",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/2560px-Logo-redis.svg.png",
          alt: "Redis",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
          alt: "MongoDB",
        },
        {
          image:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--yeQTETna--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffgjuqw3ijlfz4wf72ha.png",
          alt: "DynamoDB",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Apache_kafka_wordtype.svg/2560px-Apache_kafka_wordtype.svg.png",
          alt: "Kafka",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/RabbitMQ_logo.svg/2560px-RabbitMQ_logo.svg.png",
          alt: "RabbitMQ",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
          alt: "AWS",
        },
      ],
      skills: [
        "Linux",
        "Git",
        "Spring Boot",
        "Spring Cloud",
        "Django",
        "FastAPI",
        "React",
        "Kibana",
        "ElasticSearch",
        "Redis",
        "MongoDB",
        "DynamoDB",
        "Kafka",
        "RabbitMQ",
        "AWS",
      ],
    },
    // Add more sections here
  ];

  return (
    <div className="skills">
      {skillsData.map((skillSection, index) => (
        <div key={index} className="section">
          <h1>{skillSection.section}</h1>
          <div className="logo-grid">
            {skillSection.logos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo.image} alt={logo.alt} />
              </div>
            ))}
          </div>
          <ul>
            {skillSection.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
