// Empty module used to set up tailwind config
import { useEffect } from 'react';
import Container from '@components/layout/container';
import Prose from '@components/layout/prose';

import React from 'react';
import { gsap, ScrollTrigger } from "../lib/gsap";

gsap.registerPlugin(ScrollTrigger);


export default function Header({ title }) {
  useEffect(() => {
    gsap.to('.box', {
      scrollTrigger: '.box',
      y: 0
    });
  }, []);

  return  (
      <></>
//     <Container className={`py-[100px]`}>
//       <Prose>
//             <h1 className='text-pink-dark font-medium'>Jen Vobis</h1>
//             <h2 className='text-pink-dark'>Lorem ipsum</h2>
//             <h3 className='text-pink-dark'>Lorem ipsum</h3>
//             <h4 className='text-pink-dark'>Lorem ipsum</h4>
//             <h5 className='text-pink-dark'>Lorem ipsum</h5>
//             <h6 className='text-pink-dark'>Lorem ipsum</h6>

//             <p className='text-charcoal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada lorem id felis fringilla, non fermentum mi condimentum.</p>

//             <blockquote>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   <cite>– Lorem Ipsum Author</cite>
//             </blockquote>

//             <ul>
//                   <li>Lorem ipsum item one</li>
//                   <li>Lorem ipsum item two</li>
//                   <li>Lorem ipsum item three</li>
//             </ul>

//             <ol>
//                   <li>Lorem ipsum step one</li>
//                   <li>Lorem ipsum step two</li>
//                   <li>Lorem ipsum step three</li>
//             </ol>

//             <pre>
//                   <code>
//                   Lorem ipsum code block example
//                   </code>
//             </pre>

//             <a href="#">Lorem ipsum link</a>

//             <strong>Lorem ipsum bold text</strong>
//             <em>Lorem ipsum italic text</em>
//             <u>Lorem ipsum underlined text</u>

//             <small>Lorem ipsum small text</small>
//             <del>Lorem ipsum deleted text</del>
//             <ins>Lorem ipsum inserted text</ins>
//             <mark className='bg-yellow'>Lorem ipsum highlighted text</mark>

//             <dl>
//                   <dt>Lorem ipsum term</dt>
//                   <dd>Lorem ipsum definition</dd>
//             </dl>

//             <table>
//                   <thead>
//                   <tr>
//                   <th>Lorem ipsum header</th>
//                   <th>Lorem ipsum header</th>
//                   </tr>
//                   </thead>
//                   <tbody>
//                   <tr>
//                   <td>Lorem ipsum data</td>
//                   <td>Lorem ipsum data</td>
//                   </tr>
//                   <tr>
//                   <td>Lorem ipsum data</td>
//                   <td>Lorem ipsum data</td>
//                   </tr>
//                   </tbody>
//             </table>
//       </Prose>
//     </Container>
  )
}
