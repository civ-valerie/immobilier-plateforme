import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/real-estate-agent-isometric-2.svg";
import benefitTwoImg from "../public/real-estate-agent-two-color.svg";

const benefitOne = {
  title: "Avantages de l'IA dans l'estimation immobilière",
  desc: "Découvrez comment notre modèle d'intelligence artificielle révolutionne l'estimation des prix immobiliers.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Précision des estimations",
      desc: "Notre modèle fournit des estimations de prix précises pour les biens immobiliers.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Couverture mondiale",
      desc: "Capable d'évaluer des propriétés dans diverses régions et marchés.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Optimisation des prix",
      desc: "Aidez vos clients à obtenir le meilleur prix pour leur bien immobilier.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Élargissez votre horizon avec notre IA",
  desc: "Explorez les fonctionnalités étendues de notre modèle d'IA et découvrez comment il peut transformer votre entreprise immobilière.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Modèle réactif mobile",
      desc: "Notre service est conçu pour être pleinement fonctionnel sur les appareils mobiles.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Alimenté par l'IA",
      desc: "Ce modèle utilise les dernières technologies et outils en matière d'intelligence artificielle.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Support continu",
      desc: "Nous offrons un soutien continu pour garantir la précision et la fiabilité du modèle.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
