import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/cc/9e/c9/cc9ec905bff2dcd351159320def91125.jpg",
    title: "Super Car",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, esse? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendusquos maiores soluta maxime nam commodi quod eligendi esse pariaturdolor nihil, corporis voluptas laboriosam asperiores sunt,consequuntur dolorem nobis modi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, esse? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendusquos maiores soluta maxime nam commodi quod eligendi esse pariaturdolor nihil, corporis voluptas laboriosam asperiores sunt,consequuntur dolorem nobis modi",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/2c/82/c0/2c82c091134a6718a6d370e7e334807a.jpg",
    title: "Super Car",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, esse?",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/e7/8b/66/e78b666e0a9121d434078df993f96720.jpg",
    title: "Super Car",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, esse? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendusquos maiores soluta maxime nam commodi quod eligendi esse pariaturdolor nihil, corporis voluptas laboriosam asperiores sunt,consequuntur dolorem nobis modi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, esse? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendusquos maiores soluta maxime nam commodi quod eligendi esse pariaturdolor nihil, corporis voluptas laboriosam asperiores sunt,consequuntur dolorem nobis modi",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/b4/08/56/b408565aa7e1ea29f8fa5c7b13aa3655.jpg",
    title: "Super Car",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, esse?",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/69/6b/2e/696b2eff1747e6776e7b6976a3182029.jpg",
    title: "Super Car",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, esse? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendusquos maiores soluta maxime nam commodi quod eligendi esse pariaturdolor nihil, corporis voluptas laboriosam asperiores sunt,consequuntur dolorem nobis modi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, esse? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendusquos maiores soluta maxime nam commodi quod eligendi esse pariaturdolor nihil, corporis voluptas laboriosam asperiores sunt,consequuntur dolorem nobis modi",
  },
];

const Card = ({ card }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to(cardRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 5,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 10%",
        end: "bottom 10%",
        scrub: true,
        // markers: true
      },
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="lg:w-[95%] w-[90%] lg:h-[60vh] h-screen bg-[#2e251e] flex flex-col md:flex-row rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 pb-1"
    >
      <img
        src={card.img}
        alt={card.title}
        className="lg:w-[60%] w-full object-cover rounded-l-lg border border-t-amber-300"
      />
      <div className="flex flex-col justify-center items-center pt-15 overflow-y-auto">
        <h1 className="text-2xl font-bold text-white">{card.title}</h1>
        <p className="text-white px-6 leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black flex flex-col items-center gap-8 py-40">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <div className="h-screen">
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quos maiores soluta maxime nam commodi quod eligendi esse pariatur
          dolor nihil, corporis voluptas laboriosam asperiores sunt,
          consequuntur dolorem nobis modi.
        </h1>
      </div>
    </>
  );
};

export default App;
