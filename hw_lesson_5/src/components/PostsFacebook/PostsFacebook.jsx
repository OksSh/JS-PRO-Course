import { Card } from './Card';
import { arrayCards } from './constants';

export function PostsFacebook() {
  return arrayCards.map((card, index) => {
    return (
      <Card
        name={card.name}
        postDescription={card.postDescription}
        location={card.location}
        timeText={card.timeText}
        key={index}
      />
    );
  });
}
