import React, { useEffect, useState, useRef } from 'react';
import { gsap, ScrollTrigger } from "../lib/gsap";
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Navigation({ title, activeSection, availableSections }) {
  const sectionRef = useRef(null);
  const navRef = useRef(null); // Reference for the navigation element
  const renderedSections = new Set();
  const [active, setActive] = useState(false);
  const [invert, setInvert] = useState(false);
  const navListRef = useRef(null);

  useEffect(() => {
    if (active) {
      navListRef.current?.querySelector("a")?.focus();
    }
  }, [active]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline.fromTo(
      navRef.current.querySelectorAll('.fade-in'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );

    timeline.fromTo(
      navRef.current.querySelector('.rolling-circle'),
      { opacity: 0, x: '40px', y: '100%' },
      { opacity: 1, x: '40px', y: '96px', duration: .5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: navRef.current,
      start: "top 80%",
      end: "bottom 30%",
      scrub: true,
      onEnter: () => timeline.play(),
    });

    if (ScrollTrigger.isInViewport(navRef.current)) {
      timeline.play();
    }

  }, []);

  useEffect(() => {
    const navElement = navRef.current;

    const checkOverlap = () => {
      const navRect = navElement.getBoundingClientRect();
      const sections = document.querySelectorAll('.background');

      sections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        if (
          navRect.top < sectionRect.bottom &&
          navRect.bottom > sectionRect.top &&
          navRect.left < sectionRect.right &&
          navRect.right > sectionRect.left
        ) {
          setInvert(section.classList.contains('bg-yellow') && activeSection !== 'Projects' )
        }
      });
    };

    window.addEventListener('scroll', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap);
    };
  }, [activeSection]);

  return (
    <nav
        role="navigation"
        aria-hidden={!active}
        aria-expanded={active}
        aria-label="Main Navigation"
        data-invert={invert}
        onClick={() => setActive(!active)}
        data-active={active}
        tabIndex={0}
        className='group fixed bottom-0 right-0 p-5 md:px-[88px] md:py-10 group cursor-pointer z-20'
        ref={navRef}
    >
    <div className='trigger relative z-10'>
        <div className='flex items-center justify-between gap-3'>
            <div className="relative fade-in after:absolute after:w-6 after:h-[1px] group-data-[active=true]:after:rotate-90 group-hover:md:after:rotate-90 after:content-[''] after:left-1/2 after:-translate-x-1/2 block w-6 h-[1px] after:bg-black-off bg-black-off after:transition-all after:ease-in-out after:duration-200" />
                <div className="relative md:w-[60px]">
                    <span className='opacity-0 tracking-widest'>{activeSection}</span>
                    <span className='fade-in absolute inset-0 tracking-widest' ref={sectionRef}>{activeSection}</span>
                </div>
            </div>
            <div className='absolute bottom-3 md:bottom-0 md:right-0 right-3 -z-10 rolling-circle opacity-0'>
            <div className='relative z-10 bg-yellow group-data-[invert=true]:!bg-white/45 group-data-[invert=true]:group-hover:md:!bg-white rounded-full aspect-square w-40 md:w-48 group-data-[active=true]:max-md:scale-[4] group-hover:md:scale-[1.3] origin-center transition-all ease-in-out duration-200' />
        </div>
    </div>
    <ul
        ref={navListRef}
        aria-hidden={!active}
        aria-expanded={active}
        className={`absolute opacity-0 max-md:z-10 max-md:flex max-md:flex-col py-10 px-5 md:px-10 max-md:right-0 max-md:-top-0 max-md:-translate-y-full md:left-0  md:top-0 group-data-[active=true]:max-md:-translate-x-0 max-md:translate-x-full group-focus:md:-translate-x-full group-hover:md:-translate-x-full group-data-[active=true]:max-md:opacity-100 group-focus:md:opacity-100 group-hover:md:opacity-100 origin-center transition-all ease-in-out duration-200 flex gap-5`}
    >
        {availableSections.map((section, index) => {
          if (section === "Projects" && renderedSections.has("Projects")) return null;
          renderedSections.add(section);
          if (section === activeSection) return null;
          return (
            <li key={section} className={`group-data-[invert=true]:!bg-white/45 group-data-[invert=true]:group-hover:md:!bg-white md:px-3 py-1 rounded-md max-md:text-right`} data-index={index}>
              <Link aria-label={section} title={section} href={`#${section}`}
                className={`tracking-widest hover:text-blue transition-colors duration-300 max-md:text-right max-md:text-lg`}
              >
                {section}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
