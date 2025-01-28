import { useEffect, useRef, useState } from 'react';
import Container from '@components/layout/container';
import Prose from '@components/layout/prose';
import React from 'react';
import { useGSAP, gsap, ScrollTrigger } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);


export default function Projects({ title, activeSection }) {
    const projectsTitleRef = useRef(null);
    const projectsTitleTextRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        const timeline = gsap.timeline({
            paused: true,
        });

        const tl = gsap.timeline({
            paused: true,
        });

        tl.fromTo(
            projectsTitleRef.current.querySelectorAll('.slidein'),
            { scale: .9, y: "50vh" },
            { scale: 1, y: 0, duration: 1 }
        );

        timeline.fromTo(
            projectsTitleTextRef.current.querySelectorAll('.fade-in'),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
            "<50%"
        );

        timeline.fromTo(
            projectsTitleTextRef.current.querySelector('.fadein-content'),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
            "<50%"
        );


            mm.add("(min-width: 768px)", () => {
                ScrollTrigger.create({
                    trigger: projectsTitleTextRef.current,
                    start: "top top",
                    scrub: true,
                    onEnter: () => timeline.play(),
                    oonLeaveBack: () => timeline.reverse(),
                });

                ScrollTrigger.create({
                    trigger: projectsTitleRef.current,
                    animation: tl,
                    pin: true,
                    snap: 1 / 3,
                    end: () => `+=${window.innerHeight * 2}`,
                    scrub: true,
                });
            });

            mm.add("(max-width: 767px)", () => {
                ScrollTrigger.create({
                    trigger: projectsTitleTextRef.current,
                    start: "top 80%",
                    scrub: true,
                    onEnter: () => timeline.play(),
                    oonLeaveBack: () => timeline.reverse(),
                });

                ScrollTrigger.create({
                    trigger: projectsTitleRef.current,
                    animation: tl,
                    start: "top 90%",
                    scrub: true,
                    snap: false,
                });
            });

            if (ScrollTrigger.isInViewport(projectsTitleRef.current)) {
                timeline.play();
            }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return  (
        <div className={`section background bg-white-off`} ref={projectsTitleRef}  id={'ProjectsTitle'} data-id={`Projects`}>
            <div className={`bg-white slidein rounded-t-[22px]`}>
                <Container className={`pb-[100px]`}>
                    <div className='fade w-full max-lg:pt-20 lg:min-h-screen flex items-center justify-center'>
                        <div className='h-full grid grid-cols-1 lg:grid-cols-12 gap-5'>
                            <div className='fade lg:col-span-6 lg:col-start-4 flex flex-col justify-center'>
                                <div className='relative h-full w-full flex justify-center'>
                                    <div className='max-w-none'  ref={projectsTitleTextRef}>
                                            <Prose className={`lg:w-max`}>
                                                <h2 className='fade-in text-red font-medium !leading-[.9] !mb-0'>A few projects I have contributed to</h2>
                                            </Prose>
                                            <Prose className={`mt-8 lg:translate-x-1/4`}>
                                                <p className='text-red fadein-content'>
                                                    Over the years I got to work on many great projects together with brilliant designers and developers. As each project comes with its own requirements I have developed a great range of skills and adopted different technologies to tackle what was needed. Here are a few of my favorites:
                                                </p>
                                            </Prose>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
