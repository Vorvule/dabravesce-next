import { GreatCanon } from "./GreatCanon";
import { Acathisti } from "./Acathisti";
import { Canons } from "./Canons";
import { Liturgy } from "./Liturgy";
import { Troparions as TroparionsSuday } from "./TroparionsSunday";

export const worships = {
  name: "Богаслужэнні",
  text: [
    {
      name: "Акафісты",
      text: Acathisti,
    },
    {
      name: "Канон вялікі прападобнага айца нашага Андрея Крыцкага і Іерусалімскага",
      text: GreatCanon,
    },
    {
      name: "Каноны іншыя",
      text: Canons,
    },
    {
      name: "Літургія",
      text: Liturgy,
    },
    {
      name: "Трапары і кандакі нядзельныя",
      text: TroparionsSuday,
    },
  ],
};
