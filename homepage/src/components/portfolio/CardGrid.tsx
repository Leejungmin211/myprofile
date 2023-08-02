import { PortfolioData } from '@/service/portfolio';
import Card from './Card';

export default function CardGrid({
  portfolioData,
}: {
  portfolioData: PortfolioData[];
}) {
  return (
    <ul className="w-full flex justify-center items-center gap-12 xsm:flex-col">
      {portfolioData.map((data) => (
        <li key={data.id}>
          <Card data={data} />
        </li>
      ))}
    </ul>
  );
}
