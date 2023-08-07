import TeckStack from '../skill/TeckStack';

export default function Skill() {
  const stackData = require('/data/teckStack.json');
  return (
    <section className="flex justify-around xsm:mt-0">
      <h1 className="xlg:text-5xl md:text-4xl sm:text-2xl font-bold text-pink mb-16 xsm:text-2xl">
        #SKILLS
      </h1>
      <TeckStack stackData={stackData} />
    </section>
  );
}
