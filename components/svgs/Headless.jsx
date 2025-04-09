import { useEffect, useRef } from "react";
import { cn } from "lib/utils";

export default function Headless({ className, active }) {
    const itemRef = useRef();

    useEffect(() => {
        if (itemRef.current) {
            const top = itemRef.current.querySelector(".top");
            const bottom = itemRef.current.querySelector(".bottom");

            if (active) {
                top.classList.add("animate-topRotate");
                bottom.classList.add("animate-bottomRotate");
            } else {
                top.classList.remove("animate-topRotate");
                bottom.classList.remove("animate-bottomRotate");
            }

            setTimeout(() => {
                if (active) {
                    top.classList.remove("animate-topRotate");
                    bottom.classList.remove("animate-bottomRotate");
                }
            }, 2250);
        }
    }, [active]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 367 305"
            fill="none"
            className={cn(className, "data-[active=true]:animate-goodbye")}
            data-active={active}
            ref={itemRef}
        >
            <g
                className="bottom"
                style={{ transformOrigin: "82.607px 152.4px" }}
            >
                <path
                    d="M82.607 152.362C71.7783 213.774 112.784 272.337 174.197 283.165C235.609 293.994 294.171 252.988 305 191.576L82.607 152.362Z"
                    fill="#EFB11D"
                />
            </g>
            <g className="top" style={{ transformOrigin: "82.607px 152.4px" }}>
                <path
                    d="M82.607 152.41C71.7783 90.9983 112.784 32.4356 174.197 21.607C235.609 10.7783 294.171 51.7844 305 113.197L82.607 152.41Z"
                    fill="#EFB11D"
                />
            </g>
        </svg>
    );
}
