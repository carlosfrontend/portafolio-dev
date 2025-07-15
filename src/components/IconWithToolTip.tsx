'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

interface IconWithToolTipProps {
    icon: React.ElementType;
    tooltipContent: string;
    iconClassName?: string;
    ariaLabel: string;
}

export default function IconWithTooltip({
    icon: IconComponent,
    tooltipContent,
    iconClassName = "size-18 aspect-video mx-4 cursor-pointer transform transition ease-in-out hover:scale-95 duration-300",
    ariaLabel,
}: IconWithToolTipProps) {
    const [isOpen, setIsOpen] = useState(false);
    const isTouchDevice = useRef(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        }
    }, []);


    const handleInteraction = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (isTouchDevice.current) {
            event.preventDefault()
            setIsOpen(prev => !prev);
        }
    };

    return (
        <Tooltip.Root open={isOpen} onOpenChange={setIsOpen}>
            <Tooltip.Trigger asChild>
                <div
                    onClick={handleInteraction}
                    onContextMenu={(e) => {
                        if (isTouchDevice.current) e.preventDefault();
                    }}
                    className="inline-block"
                >
                    <IconComponent className={iconClassName} aria-label={ariaLabel} />
                </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
                <Tooltip.Content
                    className="bg-base-content text-accent-content -rotate-10 text-2xl font-black rounded-md py-1 px-2 shadow-lg z-[9999]"
                    sideOffset={5}
                >
                    {tooltipContent}
                    <Tooltip.Arrow className="fill-current text-base-300" />
                </Tooltip.Content>
            </Tooltip.Portal>
        </Tooltip.Root>
    );
}