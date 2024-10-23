import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const[cards, setCards] = useState([])

  useEffect(()=>{
    fetch('fackdata.json')
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])

  return (
    <div className="w-full md:w-2/3 md: grid md:grid-cols-2 md:gap-6">
      {
        cards.map((card, idx)=> <Card key={idx} card={card}></Card>)
      }
    </div>
  );
};

export default Cards;