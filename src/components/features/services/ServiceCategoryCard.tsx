import { ServiceCategory } from "@/types";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

export function ServiceCategoryCard({ category }: ServiceCategoryCardProps) {
  return (
    <div className="bg-surface border border-line border-t-[5px] border-t-brand-red rounded-[6px] p-5 xs:p-9">
      <div className="flex justify-between items-baseline gap-3 pb-5 mb-5 border-b-2 border-text">
        <h2>
          {category.titlePrefix}{" "}
          <span className="text-brand-red">{category.titleAccent}</span>
        </h2>
        <small className="text-[14px] font-semibold uppercase tracking-[0.04em] text-muted">
          {category.badge}
        </small>
      </div>

      <ul className="list-none m-0 p-0 grid grid-cols-1 xs:grid-cols-2 gap-y-[10px] gap-x-5">
        {category.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-[10px] py-[11px] border-b border-line font-medium text-[17px]"
          >
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-brand-red shrink-0"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
