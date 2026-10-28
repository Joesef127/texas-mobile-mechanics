import { HomeServicePreviewItem } from "@/types";

interface HomeServiceItemProps {
  item: HomeServicePreviewItem;
}

export function HomeServiceItem({ item }: HomeServiceItemProps) {
  return (
    <li className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-[6px] md:gap-6 py-[26px] border-b border-line transition-[padding-left] duration-300 ease-brand hover:pl-3">
      <h3>{item.title}</h3>
      <p className="text-muted max-w-[36em]">{item.description}</p>
    </li>
  );
}
