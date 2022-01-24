import { arrayCards } from './constants';
import { Card } from './Card';

export function PostsSocial() {
  return arrayCards.map((card) => {
    return (
      <div style={{ display: 'flex', margin: '10px' }}>
        <Card
          title={card.title}
          subtitle={card.subtitle}
          author={card.author}
          key={card.id}
        />
      </div>
    );
  });
}
