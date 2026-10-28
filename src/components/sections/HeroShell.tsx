import { ReactNode } from "react";

interface HeroShellProps {
    leftColumn: ReactNode;
    rightColumn: ReactNode;
    rightId?: string;
    isWarrantyPage?: boolean;
}

export function HeroShell({
    leftColumn,
    rightColumn,
    rightId,
    isWarrantyPage = false,
}: HeroShellProps) {
    return (
        <div className="bg-ink text-ink-text pt-12 pb-16 md:pt-[72px] md:pb-[88px]">
            {isWarrantyPage ? (
                <div className="wrap grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-start">
                    <div className="order-2 lg:order-1">{leftColumn}</div>
                    <div
                        id={rightId}
                        className="vin h-full rounded-2xl order-1 lg:order-2"
                    >
                        {rightColumn}
                    </div>
                </div>
            ) : (
                <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                    <div>{leftColumn}</div>
                    <div id={rightId} className="vin h-full rounded-2xl">
                        {rightColumn}
                    </div>
                </div>
            )}
        </div>
    );
}
