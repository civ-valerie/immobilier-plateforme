import React from "react";
import { IconArrowDown, IconCheck } from "@tabler/icons-react";
import Image from "next/image";

const Steps = () => {
  const { title, items, image } = stepsData;

  return (
    <div className="row-gap-10 grid gap-6 md:grid-cols-1">
      <div className="mb-4  md:mb-0 md:py-4 pr-4">
        {items &&
          items.length &&
          items.map(({ title, description, icon: Icon }, index) => (
            <div key={`item-steps-${index}`} className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  {index !== items.length - 1 ? (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                      {Icon ? (
                        <Icon className="h-6 w-6 text-primary-800 dark:text-slate-200" />
                      ) : (
                        <IconArrowDown className="h-6 w-6 text-primary-800 dark:text-slate-200" />
                      )}
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                      {Icon ? (
                        <Icon className="h-6 w-6 text-primary-900 dark:text-slate-200" />
                      ) : (
                        <IconCheck className="h-6 w-6 text-primary-900 dark:text-slate-200" />
                      )}
                    </div>
                  )}
                </div>
                {index !== items.length - 1 && (
                  <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                )}
              </div>
              <div
                className={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}
              >
                {title && (
                  <p className="mb-2 text-xl font-medium text-gray-900 dark:text-slate-300">
                    {title}
                  </p>
                )}
                {description && (
                  <p className="text-gray-900 font-light dark:text-slate-400">
                    {description}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Steps;

// Steps data
const stepsData = {
  title: [
    "En 3 clics,",
    "Civ.IA vous offre l’univers de l’analyse de données.",
  ],
  items: [
    {
      title: "Étape 1",
      description:
        "On commence par la collection des données par web-scraping. La récolte est une grosse base de données d'immobiliers: leur prix de vente et de loyer, et leur description.",
      icon: IconArrowDown,
    },
    {
      title: "Étape 2",
      description:
        "On entraîne le modèle avec cette information. À partir de cette plateforme-ci, vous envoyez une requête au modèle et demandez son avis.",
      icon: IconArrowDown,
    },

    {
      title: "Estimation prête!",
      icon: IconCheck,
    },
  ],
  image: {
    src: "/trio.svg",
    alt: "Steps image",
  },
};
