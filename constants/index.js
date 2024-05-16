import theme, { COLORS, SIZES, FONTS } from './theme'
import icons from "./icons"
import images from './images'

export { theme, COLORS, SIZES, FONTS, icons, images };
export const categories = [
    {
      id: 1,
      name: "Ajo",
      image: require("../assets/Productos/ajo.png"),
    },
    {
      id: 2,
      name: "Alcachofa",
      image: require("../assets/Productos/alcachofa.png"),
    },
    {
      id: 3,
      name: "Tomate",
      image: require("../assets/Productos/tomate.png"),
    },
    {
      id: 4,
      name: "Aloe Vera",
      image: require("../assets/Productos/aloevera.png"),
    },
    {
      id: 5,
      name: "Coco",
      image: require("../assets/Productos/coco.png"),
    },
    {
      id: 6,
      name: "Kale",
      image: require("../assets/Productos/kale.png"),
    },
    {
      id: 7,
      name: "Coliflor",
      image: require("../assets/Productos/colifror.png"),
    },
    {
      id: 8,
      name: "Papaya",
      image: require("../assets/Productos/papaya.png"),
    },
    {
      id: 9,
      name: "Navo",
      image: require("../assets/Productos/navo.png"),
    },
    {
      id: 10,
      name: "Menta",
      image: require("../assets/Productos/menta.png"),
    },
    {
      id: 11,
      name: "Pimiento",
      image: require("../assets/Productos/pimient.png"),
    },
    {
      id: 12,
      name: "Perejil",
      image: require("../assets/Productos/perejil.png"),
    },
    {
      id: 13,
      name: "Pepino dulce",
      image: require("../assets/Productos/pepinodulce.png"),
    },
  ];
  
  export const featured = {
    id: 1,
    title: "Negocios",
    description: "Encuentra los mejores negocios",
    restaurants: [
      {
        id: 1,
        name: "Negocio 1",
        image: require("../assets/negocios/negocio1.jpg"),
        description: "Descripcion del negocio 1",
        lng: 38.8951,
        lat: -77.0364,
        address: "Direccion 1",
        stars: 4,
        category: "Frutas y Verduras",
        productos: [
          {
            id: 1,
            name: "Coco",
            image: require("../assets/Productos/coco.png"),
            price: 10,
            description: "Descripcion del producto 1",
          },
          {
            id: 2,
            name: "Alcachofa",
            image: require("../assets/Productos/alcachofa.png"),
            price: 20,
            description: "Descripcion del producto 2",
          },
        ],
      },
      {
        id: 2,
        name: "Negocio 2",
        image: require("../assets/negocios/negocio2.jpg"),
        description: "Descripcion del negocio 2",
        lng: 38.8951,
        lat: -77.0364,
        address: "Direccion 2",
        stars: 4,
        category: "Frutas y Verduras",
        productos: [
          {
            id: 1,
            name: "Coco",
            image: require("../assets/Productos/coco.png"),
            price: 10,
            description: "Descripcion del producto 1",
          },
          {
            id: 2,
            name: "Alcachofa",
            image: require("../assets/Productos/alcachofa.png"),
            price: 20,
            description: "Descripcion del producto 2",
          },
        ],
      },
      {
        id: 3,
        name: "Negocio 3",
        image: require("../assets/negocios/negocio3.jpg"),
        description: "Descripcion del negocio 3",
        lng: 38.8951,
        lat: -77.0364,
        address: "Direccion 3",
        stars: 4,
        category: "Frutas y Verduras",
        productos: [
          {
            id: 1,
            name: "Coco",
            image: require("../assets/Productos/coco.png"),
            price: 10,
            description: "Descripcion del producto 1",
          },
          {
            id: 2,
            name: "Alcachofa",
            image: require("../assets/Productos/alcachofa.png"),
            price: 20,
            description: "Descripcion del producto 2",
          },
        ],
      },
    ],
  };
  
  export const publicactions = {
    
        id: 1,
        title: "Publicaciones",
        description: "Encuentra los mejores negocios",
        publicaciones :[
       {

      id: 1,
      title: "Publicación 1",
      description: "Descripción de la publicación 1",
      image: require("../assets/negocios/negocio1.jpg"),
      price: 10,
      isDonado: false,
    },
    {
      id: 2,
      title: "Publicación 2",
      description: "Descripción de la publicación 2",
      image: require("../assets/Productos/alcachofa.png"),
      price: 15,
      isDonado: false,
    },
    {
      id: 3,
      title: "Publicación 3",
      description: "Descripción de la publicación 3",
      price: 0,
      isDonado: true,
    },
  ],
};
  