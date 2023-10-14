import React from "react";
import "./ProductCard.css"; // Import your CSS file for styling

const callouts = [
  {
    name: "Android Smartwatch",
    description: "Android Smartwatch",
    imageSrc:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
    imageAlt: "Product1",
    href: "#",
  },
  {
    name: "Stainless steel water bottle",
    description: "stainless steel water bottle",
    imageSrc:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    imageAlt: "Product2",
    href: "#",
  },
  {
    name: "Boat Headset",
    description: "Headset",
    imageSrc:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80",
    imageAlt: "Product3",
    href: "#",
  },
];

export default function ProductCard() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Our Products</h2>

          <div className="mt-6 space-y-[23rem] sm:space-y-[34rem]  grid grid-cols-1  lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative flip-card cursor-pointer"
              >
                <div className="flip-card-inner ">
                  <div className="flip-card-front relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-[30rem]">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute top-0 h-full w-full bg-black/20 bg-cover bg-center" />
                      <div
                        className="h-[8rem] w-full absolute bottom-0 m-2 rounded-lg "
                        style={{ backdropFilter: "blur(10px)" }}
                      >
                        <h3 className="text-2xl text-white font-bold p-10 w-full">
                          <a href={callout.href}>
                            <span className="absolute inset-0" />
                            {callout.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flip-card-back">
                    <div className="flex flex-col justify-center items-center h-full p-4 text-center rounded-lg  ring-1 ring-gray-200 shadow-lg transition-all duration-300 sm:h-[30rem]">
                      <h3 className="text-base font-semibold text-gray-900">
                        {callout.description}
                      </h3>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
