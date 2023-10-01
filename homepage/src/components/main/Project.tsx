import CardGrid from '../portfolio/CardGrid';

export default function Project() {
  const portfolioData = require('/data/portfolio.json');
  return (
    <section>
      <h1 className="xlg:text-5xl md:text-4xl sm:text-2xl font-bold text-right mb-16 xsm:text-2xl xsm:mb-5">
        PROJECT
      </h1>
      <CardGrid portfolioData={portfolioData} />
    </section>
  );
}
