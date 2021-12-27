import React from 'react';

export default function AxieCards(props) {

  const { cards } = props;

  console.log(cards);

  return (
    <div>
      {
        cards.map((card, index) => {
          if (index > 1) return (
            <img
              key={ card.id }
              src={ card.abilities[0].backgroundUrl }
              alt={ card.abilities[0].name }
              />
          )
        })
      }
    </div>
  )
}
