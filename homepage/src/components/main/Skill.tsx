import TeckStack from '../skill/TeckStack';

export default function Skill() {
  const stackData = require('/data/teckStack.json');
  return (
    <section className="flex flex-col justify-center items-center mt-10 relative xsm:mt-0">
      <h1 className="absolute top-1 left-5 xlg:text-5xl md:text-4xl sm:text-2xl xsm:text-2xl font-bold text-pink">
        #SKILLS
      </h1>
      <div className="bg-babypink mt-7 p-20 xsm:p-7 xsm:mt-5">
        <TeckStack stackData={stackData} />
      </div>
    </section>
  );
}
