import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Header from 'modules/Header';
import Footer from "modules/Footer";
import Hello from "modules/Hello";
import Projects from "modules/Projects";
import ProjectsTitle from "modules/ProjectsTitle";
import Navigation from "modules/Navigation";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { SectionProvider } from "../lib/sectionContext";
import projects from "../lib/projects.json";

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
                    <Navigation
                        activeSection={activeSection}
                        availableSections={availableSections}
                    />
                    <Hello />
                    <div className="relative">
                        <ProjectsTitle />
                        <Projects projects={projects} />
                    </div>
                </main>

                <Footer />
            </div>
        </SectionProvider>
    );
}
