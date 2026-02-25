import { Service } from '@/shared/types/service-dto-types';

import ServicesWeProvideCard from './services-we-provide-card';

export default function ServiceWeProvideList({
  filterServices,
  isRegion,
}: {
  filterServices: Service[];
  isRegion: boolean;
}) {
  return (
    <div className="3xl:grid-cols-4 mt-[clamp(24px,3vw,48px)] grid grid-cols-1 flex-col gap-[clamp(14px,1.5vw,20px)]! md:grid-cols-2">
      {filterServices.map((item) => (
        <ServicesWeProvideCard isRegion={isRegion} item={item} key={item.id} />
      ))}
    </div>
  );
}
