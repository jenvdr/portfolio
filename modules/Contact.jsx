import { useEffect, useRef } from 'react';
import Container from '@components/layout/container';
import Prose from '@components/layout/prose';
import Link from 'next/link';
import React from 'react';
import { useGSAP, gsap, ScrollTrigger } from "../lib/utils";
import { useSection } from '../lib/sectionContext';
gsap.registerPlugin(ScrollTrigger);


export default function Contact({ title }) {
    const contactRef = useSection('contact'); // Access the ref for 'contact'
    const footerRef = useSection('footer');

    const mm = gsap.matchMedia();

    return  (
        <div className={`section bg-yellow`} id={`Contact`} data-id={`Contact`} ref={contactRef}>
            <Container className={`h-[60vh]`}>
                <div className='fade w-full pt-[250px] pb-[112px] flex items-center justify-center'>
                    <div className='h-full grid grid-cols-1 lg:grid-cols-12 gap-5'>
                        <div className='fade lg:col-span-6 lg:col-start-4 flex flex-col justify-center'>
                            <div className='relative h-full w-full flex justify-center'>
                                <div className='max-w-none '>
                                    <Prose className={`w-max`}>
                                        <h2 className='fadein-heading text-white font-medium  !text-[36px] lg:!text-[80px] !leading-[.9] !mb-0'>Get in touch</h2>
                                    </Prose>
                                    <Prose className={`mt-8 lg:translate-x-1/4`}>
                                        <p className='text-red fadein-content'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada lorem id felis fringilla, non fermentum mi condimentum.
                                        </p>
                                    </Prose>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
  )
}
