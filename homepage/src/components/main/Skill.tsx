import TeckStack from '../skill/TeckStack';

export default function Skill() {
  const stackData = require('/data/teckStack.json');

  return (
    <section className="flex flex-col justify-center mt-10 xsm:mx-10">
      <h2 className="xlg:text-5xl md:text-4xl text-3xl font-bold text-dark_black">
        SKILLS
      </h2>
      <div className="mt-10 xsm:mt-5">
        <TeckStack stackData={stackData} />
      </div>
    </section>
  );
}
