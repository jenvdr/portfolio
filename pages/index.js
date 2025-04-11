import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "modules/Footer";
import Hello from "modules/Hello";
import Projects from "modules/Projects/Projects";
import Navigation from "modules/Navigation";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { SectionProvider } from "../lib/sectionContext";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const [activeSection, setActiveSection] = useState("hello");
    const [availableSections, setAvailableSections] = useState([]);

    useEffect(() => {
        const sections = gsap.utils.toArray(".section");

        sections.forEach((section) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () =>
                    setActiveSection(section.getAttribute("data-id")),
                onEnterBack: () =>
                    setActiveSection(section.getAttribute("data-id")),
                onLeave: () => {
                    const nextSection = sections[sections.indexOf(section) + 1];
                    if (nextSection)
                        setActiveSection(nextSection.getAttribute("data-id"));
                },
                onLeaveBack: () => {
                    const prevSection = sections[sections.indexOf(section) - 1];
                    if (prevSection)
                        setActiveSection(prevSection.getAttribute("data-id"));
                },
            });
            setAvailableSections(
                sections.map((section) => section.getAttribute("data-id"))
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <SectionProvider>
            <div className="bg-yellow overflow-hidden">
                <Head>
                    <title>Jen Vobis | Web Developer</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main
                    className="group/controller relative"
                    data-active-section={activeSection}
                >
                    <div className="navigation-circle absolute -translate-x-1/2 -translate-y-1/2 -z-10 bg-yellow rounded-full aspect-square w-[450px] group-hover:scale-[1.3] origin-center transition-all ease-in-out duration-200" />
                    <Navigation
                        activeSection={activeSection}
                        availableSections={availableSections}
                    />
                    <Hello />
                    <Projects />
                </main>

                <Footer />
            </div>
        </SectionProvider>
    );
}
