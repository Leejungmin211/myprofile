import TeckStack from '../skill/TeckStack';

export default function Skill() {
  const stackData = require('/data/teckStack.json');
  return (
    <section className="flex justify-around xsm:mt-0">
      <h1 className="text-6xl font-bold text-pink mb-8 xsm:text-2xl">
        #SKILLS
      </h1>
      <TeckStack stackData={stackData} />
    </section>
  );
}
