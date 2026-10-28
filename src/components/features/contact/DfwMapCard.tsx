import { siteConfig } from "@/data/siteConfig";

export function DfwMapCard() {
  return (
    <div className="bg-bg text-text border border-ink-line border-t-[5px] border-t-brand-red rounded-[6px] overflow-hidden grid">
      <div className="px-6 py-[18px] flex justify-between items-center gap-3 flex-wrap border-b border-line">
        <strong className="font-head font-extrabold italic text-[26px] leading-none uppercase text-brand-red">
          WE SERVICE ALL OF DFW!!
        </strong>
        <span className="text-[14px] text-muted font-medium">
          Dallas · Fort Worth · Arlington &amp; Surrounding Cities
        </span>
      </div>

      <iframe
        src={siteConfig.googleMapsEmbedUrl}
        width="600"
        height="450"
        className="w-full h-[400px] border-0 block"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Texas Mobile Mechanics Map"
      />
    </div>
  );
}
