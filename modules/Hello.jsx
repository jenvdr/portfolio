import { useEffect, useRef } from 'react';
import Container from '@components/layout/container';
import Prose from '@components/layout/prose';
import { gsap, ScrollTrigger } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Hello({ title }) {
    const ref = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();
        let timeline;

        const setupAnimation = () => {
            if (timeline) {
                timeline.kill();
            }

            timeline = gsap.timeline({ paused: true });

            mm.add("(max-width: 767px)", () => {
                timeline.fromTo(
                    ref.current.querySelectorAll('.fade-in'),
                    { opacity: 0, y: 50, x: 0 },
                    { opacity: 1, y: 0, x:0, duration: .5}
                );
                timeline.fromTo(
                    ref.current.querySelector('.rolling-circle'),
                    { opacity: 0, x: '-100%', y: '-100%' },
                    { opacity: 1, x: '-50%', y: '-50%', duration: 0.5 },
                    "<"
                );
                timeline.fromTo(
                    ref.current.querySelectorAll('.fade-in-sub'),
                    { opacity: 0, y: 50, x: 0 },
                    { opacity: 1, y: 0, x:0, duration: .5}
                );
                timeline.fromTo(
                    ref.current.querySelectorAll('.fade-in-content'),
                    { opacity: 0, y: 50, x: 0 },
                    { opacity: 1, y: 0, x:0, duration: .5}
                );
            });

            mm.add("(min-width: 768px)", () => {
                timeline.fromTo(
                    ref.current.querySelectorAll('.fade-in'),
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: .5}
                );
                timeline.fromTo(
                    ref.current.querySelector('.rolling-circle'),
                    { opacity: 0, x: '-100%', y: '-100%' },
                    { opacity: 1, x: '-50%', y: '-50%', duration: 0.5 },
                    "<"
                );
                timeline.fromTo(
                    ref.current.querySelectorAll('.fade-in-sub'),
                    { opacity: 0, y: 50, x: '25%' },
                    { opacity: 1, y: 0, x: '25%', duration: .5}
                );
                timeline.fromTo(
                    ref.current.querySelectorAll('.fade-in-content'),
                    { opacity: 0, y: 50, x: '25%' },
                    { opacity: 1, y: 0, x: '25%', duration: .5}
                );
            });

            timeline.play();
        };
        setupAnimation();
        const handleResize = () => {
            setupAnimation();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            mm.revert();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='section' ref={ref} data-id={`Hello`} id={`Hello`}>
            <div className='background move-container bg-white-off'>
                <Container className={`py-[100px] h-screen`}>
                    <div className='absolute top-0 left-0 rolling-circle opacity-0'>
                        <div className='relative z-10 bg-yellow rounded-full aspect-square w-[450px] group-hover:scale-[1.3] origin-center transition-all ease-in-out duration-200' />
                    </div>
                    <div className='h-full grid grid-cols-1 lg:grid-cols-12 gap-5'>
                        <div className='lg:col-span-6 lg:col-start-4 flex flex-col justify-center'>
                            <Prose className={`flex flex-col gap-1`}>
                                <h1 className='title text-red font-medium !text-[56px] lg:!text-[80px] !leading-[.9] !mb-0 fade-in'>Jen Vobis</h1>
                                <h2 className='text-red font-medium !mt-0 translate-x-1/4 fade-in-sub'>Web Developer</h2>
                            </Prose>
                            <Prose className={`mt-8 fadein`}>
                                <p className=' text-red translate-x-1/4 fade-in-content'>
                                    Hey, thanks for stopping by! I'm a web developer from Germany based in London. I love creating beautiful, responsive websites that are easy to use and look great on any device.
                                </p>
                            </Prose>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
