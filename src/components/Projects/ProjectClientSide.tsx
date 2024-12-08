'use client'

import { useState, useEffect, useRef } from 'react'
import { Project as ProjectType } from '../../types/project'
import { client } from '@/lib/sanity'
import { projectsQuery } from '@/lib/query'
import ProjectLoader from './ProjectLoader'
import ProjectList from './ProjectList'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ProjectClientSide() {
  const [projects, setProjects] = useState<ProjectType[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    async function fetchProjects() {
      try {
        const data = await client.fetch(projectsQuery)
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    if (mounted && !loading && projectsRef.current) {
      gsap.registerPlugin(ScrollTrigger)
      const projectItems = projectsRef.current.children

      gsap.fromTo(
        projectItems,
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [loading, mounted])

  if (!mounted) return null

  if (loading) {
    return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {Array.from({ length: 4 }, (_, i) => (
          <ProjectLoader key={i} index={i} />
        ))}
      </div>
    )
  }

  return (
    <div ref={projectsRef} className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {projects.map((project, index) => (
        <ProjectList project={project} key={index}/>
      ))}
    </div>
  )
}
