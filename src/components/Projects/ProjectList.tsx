"use client";
import { gsap } from 'gsap'

import { Project } from "@/types/project"
import Image from "next/image"
import { useEffect, useRef } from "react";

export default function ProjectList({ project }: { project: Project }) {

    const imageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const image = imageRef.current

        if(!image) return;
        
         // Mouse-follow skew effect
         const skewEffect = (e: MouseEvent) => {
            const rect = image.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const skewX = (mouseY - centerY) / centerY * 10; // Max 10 degrees
            const skewY = (centerX - mouseX) / centerX * 10; // Max 10 degrees

            gsap.to(image, {
                skewX: skewX,
                skewY: skewY,
                scale: 1.1,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        const resetSkew = () => {
            gsap.to(image, {
                skewX: 0,
                skewY: 0,
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        image.addEventListener('mousemove', skewEffect);
        image.addEventListener('mouseleave', resetSkew);

        return () => {
            image.removeEventListener('mousemove', skewEffect);
            image.removeEventListener('mouseleave', resetSkew);
        };
    },[]);
    return (
        <>
            <div className="relative flex flex-col lg:flex-row justify-between items-start w-full  rounded-md w-full bg-white gap-8 lg:gap-6  p-4">

                <div className="lg:w-1/4 w-full flex items-center justify-center  ">
                    <div className="bg-blue-400/40 flex items-center justify-center h-28 w-28 rounded-full" ref={imageRef}>
                        <Image  src={project.imageUrl} alt={project.title}
                            width={100} height={100}
                            priority
                            className="object-contain rounded-full h-28 w-28"
                        />
                    </div>

                </div>
                <div className="lg:w-3/4 w-full  flex flex-col  justify-between  gap-2 ">
                    <div className="flex flex-col">
                        <h3 className="text-lg lg:text-xl font-bold capitalize">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-gray-200 text-xs text-gray-600 px-2 py-1 rounded-md">{tech}</span>
                        ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 text-sm hover:underline">View Project</a>
                </div>





            </div>
        </>
    )
};