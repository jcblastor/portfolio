import { TechCard } from './tech-card.interface';
export interface Card {
  id: number;
  title: string,
  description: string;
  image: string;
  techList: TechCard[];
  link_deploy: string;
  link_repository: string;
}
