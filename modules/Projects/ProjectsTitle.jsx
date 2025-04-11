import { useEffect, useRef, useState } from "react";
import Container from "@components/layout/container";
import Prose from "@components/layout/prose";
import React from "react";
import { useGSAP, gsap, ScrollTrigger } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const projectsTitleSectionRef = useRef(null);
    const projectsTitleTextRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        const tl = gsap.timeline({
            paused: true,
        });

        const tle = gsap.timeline({
            paused: true,
        });

        tle.fromTo(
            projectsTitleTextRef.current.querySelectorAll(".stagger-in"),
            { opacity: 0, x: 250 },
            { opacity: 1, x: 0, duration: 1, stagger: 0.2 }
        );

        ScrollTrigger.create({
            trigger: projectsTitleTextRef.current,
            animation: tle,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            // markers: true,
        });

        mm.add("(min-width: 768px)", () => {
            tl.fromTo(
                projectsTitleSectionRef.current.querySelectorAll(".slidein"),
                { scale: 0.9, y: "50vh" },
                { scale: 1, y: 0, duration: 1 }
            );
            ScrollTrigger.create({
                trigger: projectsTitleSectionRef.current,
                animation: tl,
                pin: true,
                snap: 1 / 3,
                end: () => `+=${window.innerHeight * 2}`,
                scrub: true,
            });
        });

        mm.add("(max-width: 767px)", () => {
            tl.fromTo(
                projectsTitleSectionRef.current.querySelectorAll("h2"),
                { y: "40px" },
                { y: 0, duration: 1 }
            );
            ScrollTrigger.create({
                trigger: projectsTitleSectionRef.current,
                animation: tl,
                // pin: true,
                // snap: 1 / 3,
                // end: () => `+=${window.innerHeight * 2}`,
                // scrub: true,
            });
        });
    }, []);

    return (
        <section
            className={`section background bg-white-off`}
            ref={projectsTitleSectionRef}
            id={"ProjectsTitle"}
            data-id={`Projects`}
        >
            <div
                className={`bg-white slidein rounded-t-[22px] overflow-hidden relative max-lg:py-12`}
            >
                <Prose className={`lg:absolute lg:inset-0 max-w-full`}>
                    <h2 className="fade-in text-red text-center font-medium !leading-[.75] !mb-0 text-[5em] md:text-[6em] lg:text-[8em] xl:text-[9.3em] 2xl:text-[11em]">
                        Featured Projects
                    </h2>
                </Prose>
                <Container
                    className={`fade w-full lg:min-h-screen  max-lg:pt-20 flex justify-center items-center`}
                >
                    <div className="max-w-none overflow--hidden">
                        <Prose className={`lg:text-xl`}>
                            <p
                                className="text-red  text-pretty fade-in"
                                ref={projectsTitleTextRef}
                            >
                                <span className="block stagger-in">
                                    Over the years I got to work on many great
                                    projects
                                </span>
                                <span className="block stagger-in">
                                    together with brilliant designers and
                                    developers.
                                </span>
                                <span className="block stagger-in">
                                    As each project comes with its own
                                    requirements I have
                                </span>
                                <span className="block stagger-in">
                                    developed a great range of skills and
                                    adopted different technologies
                                </span>
                                <span className="block stagger-in">
                                    to tackle what was needed. Check out some of
                                    my favourites below.
                                </span>
                            </p>
                        </Prose>
                    </div>
                </Container>
            </div>
        </section>
    );
}
