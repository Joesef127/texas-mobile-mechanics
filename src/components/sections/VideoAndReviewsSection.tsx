import { YouTubePlayer } from "@/components/ui/YouTubePlayer";
import { ReviewLogoCards } from "@/components/ui/ReviewLogoCards";
import { ServiceAreaPills } from "@/components/ui/ServiceAreaPills";

interface VideoAndReviewsSectionProps {
  alternateBg?: boolean;
  includeVideo?: boolean;
}

export function VideoAndReviewsSection({
  alternateBg = false,
  includeVideo = true,
}: VideoAndReviewsSectionProps) {
  return (
    <section
      id="areas"
      className={`py-[68px] md:py-24 ${
        alternateBg ? "bg-surface border-y border-line" : ""
      }`.trim()}
    >
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {includeVideo ? (
          <div>
            <h2>See how we work.</h2>
            <p className="mt-4 mb-6 text-muted text-[19px]">
              Mobile auto repair and maintenance delivered straight to your
              driveway or workplace across DFW.
            </p>
            <YouTubePlayer />
          </div>
        ) : (
          <div>
            <h2>Where we work.</h2>
            <p className="mt-4 text-muted text-[19px]">
              We serve the Dallas and Fort Worth area. Outside these cities?
              Call and ask.
            </p>
            <ServiceAreaPills />
          </div>
        )}

        <div>
          <h2>Read what customers say.</h2>
          {includeVideo && (
            <p className="mt-4 text-muted text-[19px]">
              Verified customer reviews across the Dallas–Fort Worth metroplex.
            </p>
          )}
          <ReviewLogoCards variant="full" />
          {includeVideo && <ServiceAreaPills />}
        </div>
      </div>
    </section>
  );
}
