import Image from "next/image";
import { loadData } from "@/lib/loadData";
import { DataProvider } from "@/components/providers/DataProvider";
import { LeftPanel } from "@/components/layout/LeftPanel";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default async function Home() {
  const data = await loadData();

  return (
    <DataProvider data={data}>
      <div className="mx-auto max-w-screen-xl px-6 sm:px-12 lg:px-8">
        <div className="lg:flex lg:gap-16">

          {/* Left panel: sticky on desktop, inline on mobile */}
          <div className="pt-12 pb-6 lg:py-24 lg:w-5/12 lg:sticky lg:top-0 lg:h-screen">
            <LeftPanel nav={data.nav} />
          </div>

          {/* Right scrollable content */}
          <main className="lg:w-7/12 lg:py-24">
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>

        </div>
      </div>

      <Footer personal={data.personal} />
    </DataProvider>
  );
}
