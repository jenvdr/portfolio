// Footer.js
import { useEffect, useRef } from 'react';
import Container from "@components/layout/container";
import Prose from "@components/layout/prose";
import Link from "next/link";
import { gsap, ScrollTrigger } from "../lib/utils"; // Ensure gsap and ScrollTrigger are correctly imported

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        const timeline = gsap.timeline({
            paused: true,
        });

        const tl = gsap.timeline({
            paused: true,
        });

        tl.fromTo(
            footerRef.current.querySelectorAll('.slidein'),
            { y: "100vh" },
            { y: 0, duration: 1, stagger: 1 }
        );

        timeline.fromTo(
            footerRef.current.querySelectorAll('.fade-in'),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
            "<50%"
        );
            ScrollTrigger.create({
                trigger: footerRef.current,
                start: "top top",
                scrub: true,
                pin: true,
                onEnter: () => timeline.play(),
                oonLeaveBack: () => timeline.reverse(),
            });

            ScrollTrigger.create({
                trigger: footerRef.current,
                start: "top 50%",
                scrub: true,
                snap: 1 / 3,
                onEnter: () => tl.play(),
                onLeaveBack: () => tl.reverse(),
            });

            if (ScrollTrigger.isInViewport(footerRef.current)) {
                timeline.play();
            }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <footer
            className="section relative z-10 bg-white h-[100vh] overflow-hidden"
            ref={footerRef}
            data-id={`Contact`}
            id={`Contact`}
        >
            <div className="background slidein bg-yellow rounded-t-[22px] overflow-hidden">
                <Container>
                    <div className='grid grid-cols-1 lg:grid-cols-12'>
                        <div className='w-full h-[60vh] pt-[180px] pb-[112px] lg:col-span-6 lg:col-start-4 flex flex-col justify-center gap-8'>
                            <Prose>
                                <h2 className='fade-in text-white font-medium  lg:!text-[44px] lg:!text-[80px] !leading-[.9] !mb-0'>
                                    Before you leave..
                                </h2>
                            </Prose>
                            <Prose className={`lg:translate-x-1/4`}>
                                <p className='text-white fade-in'>
                                    In German we say 'Aufwiedersehen' which means 'until we see each other again', so if you like my work and have a cool project you'd like to chat about please don't hesitate to reach out to me. Below are some ways you can contact me. Thank you and Aufwiedersehen!
                                </p>
                            </Prose>
                        </div>
                    </div>
                </Container>
                <div className="background footer slidein-with-scroll bg-white rounded-t-[50%] h-[50vh] lg:h-[40vh] w-[calc(100%+200px)] -translate-x-[100px]">
                    <Container className="h-full max-w-full pt-16 pb-10">
                        <div className='h-full'>
                            <div className='h-full flex flex-col lg:justify-center max-lg:pt-9'>
                                <Prose className="max-w-full text-center flex flex-col lg:justify-between max-lg:gap-3 lg:mt-8 prose-ul:list-none prose-li:text-2xl prose-li:lg:text-4xl prose-li:font-primary prose-li:p-0 prose-a:no-underline text-red prose-a:text-red">
                                    <ul className='flex gap-5 lg:gap-10 justify-center'>
                                        <li><Link href="mailto:jennifervobis01@gmail.com" target="_blank">Email</Link></li>
                                        <li><Link href="https://www.linkedin.com/in/jennifer-vobis" target="_blank">LinkedIn</Link></li>
                                        <li><Link href="https://github.com/jenvdr" target="_blank">GitHub</Link></li>
                                    </ul>
                                    <p>Design and development by Jen</p>
                                </Prose>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </footer>
    );
}
