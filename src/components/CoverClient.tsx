'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Profile } from '../types/profile';

export default function CoverClient({ profileData }: { profileData: Profile }) {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const image = imageRef.current;
        const text = textRef.current;
    
        if (!section || !image || !text) return;

        const textChildren = text.querySelectorAll('*');
    
        gsap.set([image, ...textChildren], { autoAlpha: 0 });
    
        const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    
        tl.fromTo(section, 
          { backgroundColor: '#ffffff' }, 
          { backgroundColor: '#fff', duration: 1 }
        )
        .fromTo(image, 
          { x: -50, autoAlpha: 0 }, 
          { x: 0, autoAlpha: 1, duration: 0.8 }
        )
        .fromTo(textChildren, 
          { y: 20, autoAlpha: 0 }, 
          { y: 0, autoAlpha: 1, stagger: 0.2, duration: 0.8 },
          '-=0.4'
        );
    
    }, []);

    return (
        <section ref={sectionRef} className="relative flex items-center justify-center w-full h-screen bg-white">
            <div className='max-w-7xl w-full p-4 lg:p-12'>
                <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-4'>
                    <div ref={textRef} className='w-3/4 order-2 lg:order-1 flex flex-col gap-3'>
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-lg lg:text-3xl tracking-wide text-center lg:text-left'>{profileData.name}</h1>
                            <h6 className='font-medium text-sm lg:text-md tracking-none lg:tracking-wide text-center lg:text-left'>{profileData.jobTitle}</h6>
                        </div>

                        <p className='text-justify text-sm'>
                        I am I Kadek Angga Dwiantara, a proficient software developer based in Bali, Indonesia. Having graduated in 2022 from ITB STIKOM BALI with a degree in Information Systems, I have been refining my skills since 2018. Currently, I work in Bali while also taking on freelance projects, offering a unique blend of local insight and global perspective. My expertise allows me to deliver innovative solutions that bridge cultural and technological gaps in the ever-evolving world of software development.
                        </p>
                    </div>
                    <div ref={imageRef}  className='w-full lg:w-1/3 order-1 lg:order-2 flex items-center justify-center'>
                        {profileData.image && (
                            <Image
                                src={profileData.image.asset.url}
                                alt={profileData.name}
                                width={200}
                                height={200}
                                priority
                                className='rounded-full w-32 lg:w-60 h-32 lg:h-60'
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
