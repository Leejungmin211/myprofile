import { CareerData } from '@/types/portfolio';

export default function Career({ careerData }: { careerData: CareerData[] }) {
  return (
    <ul className="flex items-center justify-between w-full lg:w-[480px] text-gray-600 overflow-hidden lg:mt-16 mt-4 xsm:mt-5 xsm:flex-row">
      {careerData.map((career) => (
        <li key={career.id}>
          <h3 className="font-semibold text-base lg:text-xl pb-1.5">
            {career.company}
          </h3>
          <div className="flex items-end justify-between text-xs lg:text-sm border-b pb-3">
            <span>{career.role}</span>
            <span className="lg:text-[12px] text-gray-500">
              {career.experience_period}
            </span>
          </div>
          <div className="py-4">
            <p>{career.summary}</p>
          </div>
          <ul>
            {career.content.map((item, index) => (
              <li key={index} className="pb-2">
                <span className="before:content-['•']"></span>
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
