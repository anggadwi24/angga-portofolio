// src/app/page.tsx
import CoverWrapper from '@/components/Cover/CoverWrapper'
import ProjectWrapper from '@/components/Projects/ProjectWrapper'

export default function Home() {
  
  return (
    <main className="min-h-screen transition-all ease-in overflow-hidden">
      <CoverWrapper />
      <ProjectWrapper />
    </main>
  );
}
