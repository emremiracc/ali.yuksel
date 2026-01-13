import { siteData } from '@/content/site'
import Hero from './components/Hero'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Stack from './components/Stack'
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
      <Work
        items={siteData.work}
        heading={siteData.workIntro.heading}
        subheading={siteData.workIntro.subheading}
      />
      <Testimonials items={siteData.testimonials} />
      <Stack items={siteData.stack} />
      <Writing items={siteData.writing} />
      <Contact data={siteData.contact} />
    </main>
  )
}

