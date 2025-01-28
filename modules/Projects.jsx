import { useEffect, useState, useRef } from 'react';
import Container from '@components/layout/container';
import Prose from '@components/layout/prose';
import React from 'react';
import Link from 'next/link';
import { useGSAP, gsap, ScrollTrigger } from "../lib/utils";
import ProjectCard from '@components/projectCard';
import Headless from "../public/assets/headless.svg";
import Heart from "../public/assets/heart.svg";
import All from "../public/assets/all.svg";

gsap.registerPlugin(ScrollTrigger);


export default function Projects({ title, projects, activeSection }) {
    const [activeCategory, setActiveCategory] = useState('all');
    const ref = useRef(null);
    const projectsRef = useRef(null);
    const tl = useRef(gsap.timeline({ paused: true }));
    let firstThreePairs;
    let remainingPairs;

    const filteredProjects = projects.filter((project) => {
        if (activeCategory === 'all') return true;
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


    // const projectPairs = projects.reduce((resultArray, item, index) => {
    //     const chunkIndex = Math.floor(index / 2);
    //     if (!resultArray[chunkIndex]) {
    //         resultArray[chunkIndex] = [];
    //     }
    //     resultArray[chunkIndex].push(item);
    //     return resultArray;
    // }, []);

    if (activeCategory === 'all')  {
        firstThreePairs = projectPairs.slice(0, 4);
        remainingPairs = projects.slice(8);
    } else {
        firstThreePairs = projectPairs;
        remainingPairs = [];
    }

    return  (
        <div className={`section`} ref={projectsRef}  id={'Projects'} data-id={`Projects`}>
            <div className={`background bg-white`}>
                <Container className="pb-[100px]" additionalClass="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-10 divide-y divide-white-off">
                    <div className="grid grid-cols-3 lg:grid-cols-8 gap-x-4 gap-y-5 lg:col-span-11 pt-10 lg:pt-2">
                        <div className="col-span-3 lg:col-span-1 w-full flex items-center"><h3 className="font-bold text-red uppercase font-body tracking-widest">Show me:</h3></div>
                        <button
                            id="headless"
                            onClick={() => setActiveCategory('headless')}
                            className="focus:ring-1 focus:ring-red focus:ring-offset-2 outline-none focus:ring-offset-white max-lg:text-xs text-red lg:col-span-2 w-full h-auto flex flex-col justify-center items-center gap-2 border border-white-off px-3 lg:pl-1 py-3 lg:py-1 rounded-3xl rounded-tl-none"
                        >
                            <Headless className="flex-none w-24 h-auto" />
                            Headless
                        </button>
                        <button
                            id="forGood"
                            onClick={() => setActiveCategory('forGood')}
                            className="focus:ring-1 focus:ring-red focus:ring-offset-2 outline-none focus:ring-offset-white max-lg:text-xs text-red lg:col-span-2 w-full h-auto flex flex-col justify-center items-center gap-2 border border-white-off px-3 lg:pl-1 py-3 lg:py-1 rounded-3xl rounded-tl-none"
                        >
                            <Heart className="flex-none w-24 h-auto" />
                            Tech for good
                        </button>
                        <button
                            id="all"
                            onClick={() => setActiveCategory('all')}
                            className="focus:ring-1 focus:ring-red focus:ring-offset-2 outline-none focus:ring-offset-white max-lg:text-xs text-red lg:col-span-2 w-full h-auto flex flex-col justify-center items-center gap-2 border border-white-off px-3 lg:pl-1 py-3 lg:py-1 rounded-3xl rounded-tl-none"
                        >
                            <All className="flex-none w-24 h-auto" />
                            All
                        </button>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-12 lg:col-span-12 pt-10 lg:pt-20">
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
                                const indexVis = (j + 1) + 8 < 10 ? `0${j + 1 + 8}` : j + 1 + 8;
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
                    </div>
                </Container>
            </div>
        </div>
    )
}
