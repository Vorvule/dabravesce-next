import { John } from "./John";
import { Luke } from "./Luke";
import { Mark } from "./Mark";
import { Matthew } from "./Matthew";

export const gospels = {
  slug: "gospels",
  name: "Евангелле",
  text: [
    {
      slug: "matthew",
      name: "Святое Дабравесце паводле Матфея",
      text: Matthew,
    },
    {
      slug: "mark",
      name: "Святое Дабравесце паводле Марка",
      text: Mark,
    },
    {
      slug: "luke",
      name: "Святое Дабравесце паводле Лукі",
      text: Luke,
    },
    {
      slug: "john",
      name: "Святое Дабравесце паводле Іаана",
      text: John,
    },
  ],
};
