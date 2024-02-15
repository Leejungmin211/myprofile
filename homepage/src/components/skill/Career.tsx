import { CareerData } from '@/types/portfolio';

export default function Career({ careerData }: { careerData: CareerData[] }) {
  return (
    <ul className="flex items-center justify-between w-[480px] text-gray-600 overflow-hidden lg:mt-16 mt-4 xsm:mt-5 xsm:w-64 xsm:mr-0 xsm:flex-row xsm:mb-4">
      {careerData.map((career) => (
        <li key={career.id}>
          <h3 className="font-semibold text-lg pb-1">{career.company}</h3>
          <div className="flex items-end justify-between text-sm border-b pb-2">
            <span>{career.role}</span>
            <span className="text-[12px] text-gray-500">
              {career.experience_period}
            </span>
          </div>
          <div className="py-3.5">
            <p className="">{career.summary}</p>
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
