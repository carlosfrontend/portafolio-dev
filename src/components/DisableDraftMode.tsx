"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { usePathname } from "next/navigation";

export function DisableDraftMode() {
    const pathName = usePathname();
    const environment = useDraftModeEnvironment();

    // Only show the disable draft mode button when outside of Presentation Tool
    if (environment !== "live" && environment !== "unknown" && pathName !== "/studio") {
        return null;
    }

    return (
        <a
            href="/api/draft-mode/disable"
            className="fixed bottom-25 right-4 bg-base-content text-accent-content px-4 py-2"
        >
            Disable Draft Mode
        </a>
    );
}