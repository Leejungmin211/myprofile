import CardGrid from '../portfolio/CardGrid';

export default function Project() {
  const portfolioData = require('/data/portfolio.json');
  return (
    <section className="xsm:mx-10">
      <h2 className="xlg:text-5xl md:text-4xl text-3xl font-bold text-dark_black text-right m-5 xsm:text-2xl xsm:mb-5">
        PROJECT
      </h2>
      <CardGrid portfolioData={portfolioData} />
    </section>
  );
}
