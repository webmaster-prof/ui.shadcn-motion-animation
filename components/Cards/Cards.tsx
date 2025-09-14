import React from "react";
import CardItem from "../Card/Card";
import { cardsItems } from "@/data/cards-data";

type Props = {};

const Cards = (props: Props) => {
  return (
    <section className="mt-[120px] laptop:mt-[60px]">
      <div className="container">
        <div>
          <h2 className="text-center text-orange-500 uppercase text-[35px] font-semibold mb-[60px]  laptop:mb-[20px]">
            our tours
          </h2>
          <div className="grid grid-cols-4 gap-4 desktop:grid-cols-3 laptop:grid-cols-2 mobile2:grid-cols-1 justify-items-center">
            {cardsItems.map((card) => (
              <CardItem
                key={card.id}
                image={card.image}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
