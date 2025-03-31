import React, { useRef } from "react";
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
  const imageRefs = useRef([]);

  useGSAP(() => {
    gsap.set(imageRefs.current, { opacity: 0, scale: 0.8 });

    ScrollTrigger.create({
      trigger: ".text_image",
      start: "top top",
      end: "bottom bottom",
      scrub: 2, // Makes the transition slower and smoother
      pin: ".right",
      markers: true,
      onUpdate: (self) => {
        let index = Math.round(self.progress * (infoImage.length - 1));

        gsap.to(imageRefs.current, {
          opacity: (i) => (i === index ? 1 : 0),
          scale: (i) => (i === index ? 1 : 0.8),
          duration: 1, // Increased duration for smoother effect
          ease: "power2.out", // Softer transition
        });
      },
    });
  });

  return (
    <>
      <div className="container">
        <h1 className="text-2xl font-bold text-center my-4">{headLine}</h1>
        <div className="text_image flex justify-evenly gap-2.5">
          <div className="left w-[40%]">
            {infoArray.map((item, id) => (
              <div key={id} className=" border border-amber-200 h-screen flex flex-col justify-center">
                <h3 className="font-bold text-center">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="right w-[400px] h-screen flex border border-amber-200 justify-center items-center relative overflow-hidden">
            {infoImage.map((item, id) => (
              <img
                key={id}
                ref={(el) => (imageRefs.current[id] = el)}
                className="absolute w-full h-auto object-cover transition-opacity duration-1000 ease-in-out"
                src={item}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
