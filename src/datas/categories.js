import {
  faBeer,
  faCocktail,
  faCoffee,
  faCookieBite,
  faGlassWhiskey,
  faIceCream,
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
    icon: <FontAwesomeIcon size="4x" color="#DF920F" icon={faPlateWheat} />,
  },
  {
    name: "Plats",
    slug: "plats",
    icon: <FontAwesomeIcon size="4x" color="#DF920F" icon={faUtensils} />,
  },
  {
    name: "Bruschettas",
    slug: "bruschettas",
    icon: <FontAwesomeIcon size="4x" color="#DF920F" icon={faPepperHot} />,
  },
  // {
  //   name: "Tapas",
  //   slug: "tapas",
  //   icon: (
  //     <FontAwesomeIcon
  //       size="4x" color="#DF920F"
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
    icon: <FontAwesomeIcon size="4x" color="#DF920F" icon={faCookieBite} />,
  },
  {
    name: "Glaces",
    slug: "glaces",
    icon: <FontAwesomeIcon size="4x" color="#DF920F" icon={faIceCream} />,
  },
  {
    name: "Les Cocktails",
    slug: "cocktails",
    icon: <FontAwesomeIcon size="4x" color="#DF920F" icon={faCocktail} />,
  },
  {
    name: "Boissons Fraîches",
    slug: "boissons-fraiches",
    icon: (
      <FontAwesomeIcon size="4x" color="#DF920F" icon={faMartiniGlassCitrus} />
    ),
  },
  {
    name: "Boissons Chaudes",
    slug: "boissons-chaudes",
    icon: <FontAwesomeIcon size="4x" color="#DF920F" icon={faCoffee} />,
  },
  {
    name: "Les Alcools",
    slug: "alcools",
    icon: <FontAwesomeIcon size="4x" color="#DF920F" icon={faGlassWhiskey} />,
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
