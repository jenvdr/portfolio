import Link from "next/link";
import Prose from "./layout/prose";
import { cn, gsap, ScrollTrigger } from "../lib/utils";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projectCard = ({ className, order, project, itemWidth, indexVis }) => {
    const projectCardRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        const cardAnimation = gsap.timeline({
            paused: true,
        });

        cardAnimation.fromTo(
            projectCardRef.current.querySelectorAll('.fade-in'),
            { y: 100 },
            { y: 0, duration: 1, stagger: 0.2 },
            "<50%"
        );
            ScrollTrigger.create({
                trigger: projectCardRef.current,
                animation: cardAnimation,
                end: () => `+=${window.innerHeight}`,
                scrub: true,
            });
    }, []);

    return (
        <Link test={itemWidth} ref={projectCardRef} href={project.link} target="_blank" data-order={order} key={project.key} data-width={itemWidth == 'lg:w-[40%]' ? 'small' : 'large'} className={cn(`group/parent peer min-h-[180px] lg:h-[325px] w-full md:w-[50%] ${itemWidth} data-[width=small]:hover:lg:w-[60%] data-[width=large]:peer-hover:lg:w-[40%] transition-all duration-500 ease-in-out flex justify-center items-center`, className)}>
            <div className={`fade-in relative h-full w-full rounded-[22px] rounded-tl-none border-[1px] border-white-off overflow-hidden bg-[${project.color}]`}>
                <div className={`h-full flex flex-col justify-between w-full p-5 lg:p-7`}>
                    <Prose className='max-w-none flex justify-between prose-ul:list-none prose-ul:p-0 prose-ul:m-0 prose-li:m-0 prose-li:max-md:text-xs  prose-li:lg:text-sm prose-li:p-0 text-red prose-li:font-medium'>
                        <span className='group-hover/parent:-translate-y-[calc(100%+50px)] group-hover/parent:-scale-y-100 transition-transform duration-500 ease-out text-red text-lg lg:text-2xl font-primary'>{indexVis}</span>
                        <svg className='absolute right-7 top-7 -scale-y-100 -translate-y-[calc(100%+50px)] group-hover/parent:translate-y-0 group-hover/parent:scale-y-100 transition-transform duration-500 ease-in-out max-w-6 max-h-6 stroke-red' width="114" height="88" viewBox="0 0 114 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.5 12H4V76C4 80.4183 7.58172 84 12 84H91C95.4183 84 99 80.4183 99 76V48" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M35 59L110 4M110 4H71.5964M110 4V39.4545" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="flex flex-col justify-end items-end gap-2 group-hover/parent:-translate-y-[calc(100%+50px)] group-hover/parent:-scale-y-100 transition-transform duration-500 ease-out text-right">
                            <span className="border border-red text-red px-2 py-1 rounded-full text-xs lg:text-sm leading-[1]">{project.cms}</span>
                            <ul className='!px-2'>{project.technologies?.map((technology, x) => <li key={x}>{technology}</li>)}</ul>
                        </div>
                    </Prose>
                    <Prose className="">
                        <h3 className='group-hover/parent:lg:translate-y-[calc(100%+50px)] group-hover/parent:lg:-scale-y-100 transition-transform duration-500 ease-out text-red display font-medium !leading-[.9] !mb-0'>{project.name}</h3>
                    </Prose>
                </div>
                <div className='p-2 whitespace-nowrap absolute bottom-0 left-0 right-0 text-red text-[90px] leading-[.9em] font-primary -scale-y-100 translate-y-[calc(100%+20px)] group-hover/parent:lg:translate-y-0 group-hover/parent:lg:scale-y-100 transition-transform duration-500 ease-in-out'>{project.name}</div>
            </div>
        </Link>
    )
}

export default projectCard;
