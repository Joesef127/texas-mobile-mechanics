import { ReactNode } from "react";

interface HeroShellProps {
    leftColumn: ReactNode;
    rightColumn: ReactNode;
    rightId?: string;
    isWarrantyPage?: boolean;
    isHomePage?: boolean;
    /** Full-width row under both columns. Used by the home hero for the proof ledger. */
    bottomRow?: ReactNode;
}

export function HeroShell({
    leftColumn,
    rightColumn,
    rightId,
    isWarrantyPage = false,
    isHomePage = false,
    bottomRow,
}: HeroShellProps) {
    if (isHomePage) {
        return (
            <div className="bg-ink text-ink-text pt-12 md:pt-20">
                <div className="wrap grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
                    <div>{leftColumn}</div>
                    <div id={rightId} className="relative isolate">
                        {rightColumn}
                    </div>
                </div>
                {bottomRow ? (
                    <div className="wrap mt-14 md:mt-20 pb-16 md:pb-20">
                        {bottomRow}
                    </div>
                ) : (
                    <div className="pb-12 md:pb-16" />
                )}
                {/* Center line of a road. Echoes the logo. Used once. */}
                <div
                    aria-hidden
                    className="border-t-[3px] border-dashed border-brand-red"
                />
            </div>
        );
    }

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