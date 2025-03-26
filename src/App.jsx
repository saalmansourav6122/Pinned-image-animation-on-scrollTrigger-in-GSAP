import React from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
function App() {
  const array = [
    {
      headLine: "We can do for You",
      info: [
        {
          title: "One",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet commodi vel velit libero non deserunt veniam dolores quae cupiditate tenetur?"
        },
        {
          title: "Two",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet commodi vel velit libero non deserunt veniam dolores quae cupiditate tenetur?"
        },
        {
          title: "Three",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet commodi vel velit libero non deserunt veniam dolores quae cupiditate tenetur?"
        }
      ],
      image: ["https://picsum.photos/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/seed/picsum/200/300", "https://picsum.photos/200/300?grayscale"]
    }
  ];
  
  useGSAP(() => {
    gsap.to(".box", {
      duration: 1,
      rotate: 360,
    });
  });
  return (
    <>
      <div className="container">

      </div>
    </>
  );
}

export default App;
