import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleWantToCookBtn}) => {
  const[cards, setCards] = useState([])

  useEffect(()=>{
    fetch('fackdata.json')
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])

  return (
    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
      {
        cards.map((card, idx)=> <Card handleWantToCookBtn={handleWantToCookBtn} key={idx} card={card}></Card>)
      }
    </div>
  );
};

export default Cards;