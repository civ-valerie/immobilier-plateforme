import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              L'estimation du modèle a été <Mark>très précise,</Mark>
              ce qui m'a permis de vite trouver un locataire pour mon
              appartement.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah L."
              title="Montréalaise, Westmount"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Le modèle est <Mark>bien construit</Mark>
              avec les informations les plus récentes et pertinentes.
            </p>

            <Avatar
              image={userTwoImg}
              name="Jean P."
              title="Expert analyse donnée"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Je fais confiance au modèle pour <Mark>tous mes besoins.</Mark>
            </p>

            <Avatar
              image={userThreeImg}
              name="Michel L."
              title="Co-fondateur d'une entreprise immobilière."
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-[#c86b38] bg-[#c86a3858] rounded-md ring-[#c86a3858] ring-4 dark:ring-[#c86b38] dark:bg-[#c86b38] dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
