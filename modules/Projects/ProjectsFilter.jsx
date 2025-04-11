import Headless from "@components/svgs/Headless";
import Heart from "@components/svgs/Heart";
import All from "@components/svgs/All";
import { gsap, ScrollTrigger } from "../../lib/utils";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsFilter({ onFilter, active }) {
    const filtersRef = useRef(null);

    useEffect(() => {
        const tmln = gsap.timeline({
            paused: true,
        });

        tmln.fromTo(
            filtersRef.current.querySelectorAll(".fade-in"),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
        );

        ScrollTrigger.create({
            trigger: filtersRef.current,
            start: "top 90%",
            scrub: true,
            onEnter: () => tmln.play(),
        });
        if (ScrollTrigger.isInViewport(filtersRef.current)) {
            tmln.play();
        }
    }, []);
    return (
        <div
            ref={filtersRef}
            className="grid grid-cols-3 lg:grid-cols-8 gap-x-4 gap-y-5 lg:col-span-11 pt-10 lg:pt-2"
        >
            <div className="fade-in col-span-3 lg:col-span-1 w-full flex items-center">
                <h3 className="font-bold text-red uppercase font-body tracking-widest">
                    Show me:
                </h3>
            </div>
            <button
                id="headless"
                onClick={() => onFilter("headless")}
                className="fade-in overflow-hidden focus:ring-1 focus:ring-red focus:ring-offset-2 outline-none focus:ring-offset-white max-lg:text-xs text-red lg:col-span-2 w-full h-auto flex flex-col justify-center items-center gap-2 border border-white-off px-3 lg:pl-1 py-3 lg:py-1 rounded-3xl rounded-tl-none"
            >
                <Headless
                    active={active === "headless"}
                    className="flex-none w-24 h-auto"
                />
                Headless
            </button>
            <button
                id="forGood"
                onClick={() => onFilter("forGood")}
                className="fade-in focus:ring-1 focus:ring-red focus:ring-offset-2 outline-none focus:ring-offset-white max-lg:text-xs text-red lg:col-span-2 w-full h-auto flex flex-col justify-center items-center gap-2 border border-white-off px-3 lg:pl-1 py-3 lg:py-1 rounded-3xl rounded-tl-none"
            >
                <Heart
                    className="flex-none w-24 h-auto"
                    active={active === "forGood"}
                />
                Tech for good
            </button>
            <button
                id="all"
                onClick={() => onFilter("all")}
                className="fade-in focus:ring-1 focus:ring-red focus:ring-offset-2 outline-none focus:ring-offset-white max-lg:text-xs text-red lg:col-span-2 w-full h-auto flex flex-col justify-center items-center gap-2 border border-white-off px-3 lg:pl-1 py-3 lg:py-1 rounded-3xl rounded-tl-none"
            >
                <All
                    className="flex-none w-24 h-auto"
                    active={active === "all"}
                />
                All
            </button>
        </div>
    );
}
