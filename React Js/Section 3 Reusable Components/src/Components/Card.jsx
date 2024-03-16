import React from "react";

const Card = () => {
  const card = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptatibus possimus?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptatibus possimus?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Flipkart Basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptatibus possimus?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ipad",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptatibus possimus?",
    },
  ];

  return (
    <div className="w-full flex  items-center justify-center gap-10 h-screen bg-zinc-200">
      {card.map((elem, index) => {
        return (
          <>
            <div
              key={index}
              className="w-52  bg-zinc-100 rounded-md overflow-hidden"
            >
              <div className="w-full h-32 bg-zinc-300  ">
                <img
                  className="w-full h-full object-cover"
                  src={elem.image}
                  alt=""
                />
              </div>
              <div className="px-3 py-4">
                <h1 className="font-bold text-center text-xl tracking-tighter">
                  {elem.name}
                </h1>
                <p className="font-semibold text-sm w-4/4 text-center mt-3">
                  {elem.description}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Card;
