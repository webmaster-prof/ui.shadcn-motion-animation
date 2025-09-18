"use client";

import React, { useRef } from "react";
import CardItem from "../Card/Card";
import { cardsItems } from "@/data/cards-data";
import { motion, useInView } from "framer-motion";

type Card = {
  id: number;
  image: string;
  title: string;
  desc: string;
};

const AnimatedCard = ({ card, delay }: { card: Card; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full relative">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        <CardItem image={card.image} title={card.title} desc={card.desc} />
      </motion.div>
    </div>
  );
};

const Cards = () => {
  return (
    <section className="mt-[120px] laptop:mt-[60px]">
      <div className="container">
        <div>
          <h2 className="text-center text-orange-500 uppercase text-[35px] font-semibold mb-[60px] laptop:mb-[20px]">
            our tours
          </h2>
          <div className="grid grid-cols-4 gap-4 desktop:grid-cols-3 laptop:grid-cols-2 mobile2:grid-cols-1 justify-items-center">
            {cardsItems.map((card, i) => (
              <AnimatedCard key={card.id} card={card} delay={i * 0.3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
