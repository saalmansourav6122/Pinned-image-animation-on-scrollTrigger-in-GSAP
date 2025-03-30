import React from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
function App() {
  const headLine = "We can do for You";
  const array = [
    {
      info: [
        {
          title: "One",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet commodi vel velit libero non deserunt veniam dolores quae cupiditate tenetur?",
        },
        {
          title: "Two",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet commodi vel velit libero non deserunt veniam dolores quae cupiditate tenetur?",
        },
        {
          title: "Three",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet commodi vel velit libero non deserunt veniam dolores quae cupiditate tenetur?",
        },
      ],
      image: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/200/300?grayscale",
      ],
    },
  ];
  const infoArray = array[0].info;
  useGSAP(() => {
    gsap.to(".box", {
      duration: 1,
      rotate: 360,
    });
  });
  return (
    <>
      <div className="container">
        <h1 className=" text-2xl font-bold text-center my-4">{headLine}</h1>
        <div className="text_image">
          <div className="left">
            {infoArray.forEach((item) => {
              console.log("Title:", item.title);
              console.log("Description:", item.description);
            })}
            <div></div>
          </div>
          <div className="right">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
