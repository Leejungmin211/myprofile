import { PortfolioData } from '@/service/portfolio';
import Card from './Card';

export default function CardGrid({
  portfolioData,
}: {
  portfolioData: PortfolioData[];
}) {
  return (
    <ul className="w-full gap-8 flex justify-center items-center xl:gap-12 xsm:flex-col xsm:gap-3">
      {portfolioData.map((data) => (
        <li key={data.id}>
          <Card data={data} />
        </li>
      ))}
    </ul>
  );
}
