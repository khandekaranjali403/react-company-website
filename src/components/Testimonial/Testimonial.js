import React, { useState } from "react";
import "./testimonial.css";

const Testimonial = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Jon Doe",
      position: "Full stack software developer",
    },

    {
      img: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Muller",
      position: "UI/UX Designer",
    },
    {
      img: "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Charlotte",
      position: "Javascript developer",
    },
    {
      img: "https://images.pexels.com/photos/2776582/pexels-photo-2776582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Alexander",
      position: "Node js developer",
    },
    {
      img: "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Emily",
      position: "Nuxt js developer",
    },

    {
      img: "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Elizabeth",
      position: "Next js developer",
    },
    {
      img: "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Jacob",
      position: "Angular js developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },
    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },
    {
      img: "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Jayden",
      position: "Vue js developer",
    },
  ];

  const [showMorePost, setShowMorePost] = useState(9);

  const loadMore = () => {
    setShowMorePost((prev) => prev + 3);
  };

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section_title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMorePost).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>

            <div className={index==0  ? "marked-content-card":"content-card"}>
              <img src={item.img} alt="image" />
              <p>{item.content}</p>
              <p>
                <span className="name">{item.name}</span>
              </p>
              <p>{item.position}</p>
            </div>

          </div>
        ))}

        {showMorePost >= data.length ? null : (
          <span className="load-more-button" onClick={loadMore}>
            Load More
          </span>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
