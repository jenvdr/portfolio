import { useEffect, useState, useRef } from 'react';
import Container from '@components/layout/container';
import Prose from '@components/layout/prose';
import React from 'react';
import Link from 'next/link';
import { useGSAP, gsap, ScrollTrigger } from "../lib/utils";
import ProjectCard from '@components/projectCard';

gsap.registerPlugin(ScrollTrigger);


export default function Projects({ title, projects, activeSection }) {
    const ref = useRef(null);
    const projectsRef = useRef(null);
    const tl = useRef(gsap.timeline({ paused: true }));

    const projectPairs = projects.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 2);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    const firstThreePairs = projectPairs.slice(0, 3);
    const remainingPairs = projects.slice(6);

    return  (
        <div className={`section`} ref={projectsRef}  id={'Projects'} data-id={`Projects`}>
            <div className={`background bg-white`}>
                <Container className="pb-[100px]" additionalClass="grid lg:grid-cols-12">
                    {firstThreePairs.map((projectPair, i) => (
                        <div
                            key={i}
                            className={`lg:col-span-12 flex max-md:flex-col gap-4 mb-4 w-full ${i % 2 === 0 ? '' : ''}`}
                        >
                            {projectPair.map((project, j) => {
                                const isOddRow = i % 2 === 0;
                                const itemWidth = (j === 0 && isOddRow) || (j === 1 && !isOddRow) ? 'lg:w-[40%]' : 'lg:w-[60%]';
                                const order = (i * 2 + j) % 3 === 0 ? 'default' : 'reverse';
                                const indexVis = i * 2 + j + 1 < 10 ? `0${i * 2 + j + 1}` : i * 2 + j + 1;
                                return (
                                    <ProjectCard
                                        className={`not-visible left`}
                                        key={project.key}
                                        project={project}
                                        order={order}
                                        itemWidth={itemWidth}
                                        indexVis={indexVis}
                                    />
                                );
                            })}
                        </div>
                    ))}
                    <div
                        className={`lg:col-span-12 flex max-md:flex-col gap-4 mb-4 w-full`}
                    >
                        {remainingPairs.map((project, j) => {
                            const itemWidth = (j === 0 ) || (j % 2 == 0) ? 'lg:w-[40%]' : 'lg:w-[60%]';
                            const order = (j === 0 ) || (j % 2 == 0) ? 'default' : 'reverse';
                            const indexVis = (j + 1) + 6 < 10 ? `0${j + 1 + 6}` : j + 1 + 6;
                            return (
                                <ProjectCard
                                    className={`not-visible`}
                                    key={project.key}
                                    project={project}
                                    order={order}
                                    itemWidth={itemWidth}
                                    indexVis={indexVis}
                                />
                            );
                        })}
                    </div>
                </Container>
            </div>
        </div>
    )
}
