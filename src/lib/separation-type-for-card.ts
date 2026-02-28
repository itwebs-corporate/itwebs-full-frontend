import type { Service } from '@/shared/types/service-dto-types';
import type { ServiceGroupDto } from '@/shared/types/service-group-dto-types';

export type ServiceCardUI = {
  id: number;
  title: string;
  desc: string;
  price: number;
  link: string;
};

export function separationTypeForCard(card: Service | ServiceGroupDto): ServiceCardUI {
  if ('title' in card) {
    // Service
    return {
      id: card.id,
      title: card.title,
      desc: card.description,
      price: card.price,
      link: card.link,
    };
  }
  // ServiceGroupDto
  return {
    id: card.id,
    title: card.name,
    desc: card.listDesc,
    price: card.price,
    link: card.link,
  };
}
