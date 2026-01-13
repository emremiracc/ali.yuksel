import { siteData } from '@/content/site'
import Hero from './components/Hero'
import ShowcaseBanner from './components/ShowcaseBanner'
import Stack from './components/Stack'
import Work from './components/Work'
import Showcase from './components/Showcase'
import Experience from './components/Experience'
import Writing from './components/Writing'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      <Hero
        name={siteData.hero.name}
        title={siteData.hero.title}
        description={siteData.hero.description}
        email={siteData.hero.email}
        avatarSrc={siteData.hero.avatarSrc}
        companyName={siteData.hero.companyName}
        companyLogoSrc={siteData.hero.companyLogoSrc}
        established={siteData.hero.established}
      />
      <ShowcaseBanner />
      <Stack items={siteData.stack} />
      <Work
        items={siteData.work}
        heading={siteData.workIntro.heading}
        subheading={siteData.workIntro.subheading}
      />
      <Showcase images={siteData.showcase.images} />
      <Experience
        eyebrow={siteData.experienceSection.eyebrow}
        intro={siteData.experienceSection.intro}
        items={siteData.experience}
      />
      <Writing items={siteData.writing} />
      <Contact data={siteData.contact} />
    </main>
  )
}

