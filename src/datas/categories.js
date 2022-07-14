import {
  faBeer,
  faCocktail,
  faCoffee,
  faCookieBite,
  faGlassWhiskey,
  faMartiniGlassCitrus,
  faPepperHot,
  faPlateWheat,
  faUtensils,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const secondary = "#FFA000";
export const primary = "#D0021B";

const categories = [
  {
    name: "Salades Repas",
    slug: "entrées",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faPlateWheat}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  {
    name: "Plats",
    slug: "plats",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faUtensils}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  {
    name: "Bruschettas",
    slug: "bruschettas",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faPepperHot}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  // {
  //   name: "Tapas",
  //   slug: "tapas",
  //   icon: (
  //     <FontAwesomeIcon
  //       size="4x"
  //       icon={faPepperHot}
  //       style={{
  //         "--fa-primary-color": primary,
  //         "--fa-secondary-color": secondary,
  //       }}
  //     />
  //   ),
  // },
  {
    name: "Desserts",
    slug: "desserts",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faCookieBite}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  {
    name: "Les Cocktails",
    slug: "cocktails",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faCocktail}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  {
    name: "Boissons Fraîches",
    slug: "boissons-fraiches",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faMartiniGlassCitrus}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  {
    name: "Boissons Chaudes",
    slug: "boissons-chaudes",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faCoffee}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
  },
  {
    name: "Les Alcools",
    slug: "alcools",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faGlassWhiskey}
        style={{
          "--fa-primary-color": primary,
          "--fa-secondary-color": secondary,
        }}
      />
    ),
    subCategories: [
      {
        name: "Bières",
        slug: "bieres",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faBeer}
            style={{
              "--fa-primary-color": primary,
              "--fa-secondary-color": secondary,
            }}
          />
        ),
      },
      {
        name: "Apéritifs et Alcools",
        slug: "aperitifs",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskey}
            style={{
              "--fa-primary-color": primary,
              "--fa-secondary-color": secondary,
            }}
          />
        ),
      },
      {
        name: "Vins",
        slug: "vins",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faWineBottle}
            style={{
              "--fa-primary-color": primary,
              "--fa-secondary-color": secondary,
            }}
          />
        ),
      },
    ],
  },
];

export default categories;
