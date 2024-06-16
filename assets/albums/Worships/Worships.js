import { GreatCanon } from "./GreatCanon";
import { Acathisti } from "./Acathisti";
import { Canons } from "./Canons";
import { Liturgy } from "./Liturgy";
import { TroparionsSunday } from "./TroparionsSunday";
import { TroparionsFestive } from "./TroparionsFestive";

export const worships = {
  slug: "worships",
  name: "Богаслужэнні",
  text: [
    {
      slug: "acathisti",
      name: "Акафісты",
      text: Acathisti,
    },
    {
      slug: "great-canon",
      name: "Канон вялікі прападобнага айца нашага Андрея Крыцкага і Іерусалімскага",
      text: GreatCanon,
    },
    {
      slug: "canons",
      name: "Каноны іншыя",
      text: Canons,
    },
    {
      slug: "liturgy",
      name: "Літургія",
      text: Liturgy,
    },
    {
      slug: "sunday-troparions",
      name: "Трапары і кандакі нядзельныя",
      text: TroparionsSunday,
    },
    {
      slug: "festive-troparions",
      name: "Трапары і кандакі святаў",
      text: TroparionsFestive,
    },
  ],
};
