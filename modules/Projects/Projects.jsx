import { useState, useRef } from "react";
import Container from "@components/layout/container";
import React from "react";
import { gsap, ScrollTrigger } from "../../lib/utils";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsResults from "./ProjectsResults";
import ProjectsTitle from "./ProjectsTitle";
import projectsData from "../../lib/projectsdata.json";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("initial");
    const projectsRef = useRef(null);
    let firstThreePairs;
    let remainingPairs;

    const filteredProjects = projectsData.filter((project) => {
        if (activeCategory === "initial" || activeCategory === "all")
            return true;
        return project.category === activeCategory;
    });

    const projectPairs = filteredProjects.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 2);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    if (activeCategory === "all" || activeCategory === "initial") {
        firstThreePairs = projectPairs.slice(0, 4);
        remainingPairs = projectsData.slice(8);
    } else {
        firstThreePairs = projectPairs;
        remainingPairs = [];
    }

    return (
        <>
            <ProjectsTitle />
            <section
                className={`section`}
                ref={projectsRef}
                id={"Projects"}
                data-id={`Projects`}
            >
                <div className={`background bg-white`}>
                    <Container
                        className="pb-[100px]"
                        additionalClass="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-10 divide-y divide-white-off"
                    >
                        <ProjectsFilter
                            onFilter={setActiveCategory}
                            active={activeCategory}
                        />
                        <ProjectsResults
                            firstThreePairs={firstThreePairs}
                            remainingPairs={remainingPairs}
                        />
                    </Container>
                </div>
            </section>
        </>
    );
}
