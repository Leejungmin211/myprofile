import CardGrid from "../portfolio/CardGrid";

export default function Project() {
  const portfolioData = require('/data/portfolio.json');
  return (
    <section className="mt-36 xsm:mt-0">
      <h1 className="text-2xl font-semibold text-slate-700 mb-8 xsm:text-base xsm:mb-2">
        PROJECT
      </h1>
      <CardGrid portfolioData={portfolioData} />
    </section>
  );
}
