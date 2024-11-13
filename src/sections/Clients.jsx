import React from "react";
import { clientReviews } from "../constants";
import { div } from "three/webgpu";

const Clients = () => {
  return (
    <section className="c-space my-20 max-w-7xl lg:mx-auto">
      <h3 className="head-text">Hear from My Clients</h3>
      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <div>
              <p className="text-white font-light">{review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold text-white-800 text-lg">
                      {name}
                    </p>
                    <p className="text-white-600 md:text-base text-sm">
                      {position}
                    </p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star ratings"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
