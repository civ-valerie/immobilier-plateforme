import React from "react";
import Container from "./container";
import Marquee from "react-fast-marquee";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-18 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <div className="text-lg font-bold tracking-wider text-[#c86b38] uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-full mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          <Marquee
            autoFill="true"
            gradient="true"
            gradientColor="#d0dcb4"
            className="text-8xl mt-4"
            speed="80"
            pauseOnHover="true"
          >
            {props.title}
          </Marquee>
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;
