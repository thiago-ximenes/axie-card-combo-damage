import React from 'react';
import { Card } from 'react-bootstrap';
import { useEffect } from 'react';

export default function Cards(props) {

  const { src, alt, key } = props;

  const [ numberOfCardsUsed, setNumberOfCardsUsed ] = React.useState(0);
  const [ isAllCardUsed, setIsAllCardUsed ] = React.useState(false);

  function handleClick(e) {
    setNumberOfCardsUsed(numberOfCardsUsed + 1);
  }

  useEffect(() => {
    if (numberOfCardsUsed >= 2) {
      setIsAllCardUsed(true);
    } else {
      setIsAllCardUsed(false);
    }
    if (numberOfCardsUsed > 2) {
      setNumberOfCardsUsed(0);
    }
  }, [numberOfCardsUsed]);
  
  console.log(numberOfCardsUsed);

  return (
    <Card.Img
      className={ isAllCardUsed ? 'card-disabled' : 'card-img' }
      key={ key }
      src={ src }
      alt={ alt }
      onClick = { handleClick }
    />
  )
}
