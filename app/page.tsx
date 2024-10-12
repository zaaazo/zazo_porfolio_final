import Introduction from '@/components/Introduction';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Collaboration from '@/components/Collaboration';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-24 overflow-hidden">
      <Introduction />
      <Projects />
      <Testimonials />
      <FAQ />
      <Collaboration />
    </main>
  );
}