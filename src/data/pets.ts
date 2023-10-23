import { Pet } from "../types";

const pets: Pet[] = [
  {
    id: 1,
    species: "Perrete",
    picture:
      "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
    alternativeText: "Perrete que lo hicieron mal",
    description:
      "Animal que siempre está feliz le hagas lo que le hagas y por eso os gusta tanto",
    isFavourite: false,
  },
  {
    id: 2,
    species: "Gatete",
    picture:
      "https://preview.redd.it/n00ji04kd7lb1.jpg?width=398&format=pjpg&auto=webp&s=fb5e9253bc963c724129a6d69d4e1dbbd3c2000f",
    alternativeText: "Gatete comiendo pizza un viernes",
    description: "Perfecto.",
    isFavourite: true,
  },
];

export default pets;
