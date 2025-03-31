import React from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
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
        
      ],
    },
  ];
  const infoArray = array[0].info;
  const infoImage = array[0].image;
  useGSAP(() => {
    gsap.set
      ScrollTrigger.create({
        trigger: ".right",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        
      })

  });
  return (
    <>
      <div className="container">
        <h1 className=" text-2xl font-bold text-center my-4">{headLine}</h1>
        <div className="text_image flex justify-evenly gap-2.5">
          <div className="left w-[40%]">
            {infoArray.map((item,id) => (
              <div key={id} className="h-screen flex flex-col justify-center">
                <h3 className=" font-bold text-center">{item.title}</h3>
                <p>{ item.description}</p>
              </div>
            ))}
          </div>
          <div className="right">
            {infoImage.map((item, id) => (
              <div key={id} id="pin_box" className="relative border w-[400px] border-amber-300 h-screen flex flex-col justify-center">
                <img className=" absolute" src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
