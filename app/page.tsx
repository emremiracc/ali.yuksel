import { siteData } from '@/content/site'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Writing from './components/Writing'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
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
      <Experience items={siteData.experience} />
      <Testimonials items={siteData.testimonials} />
      <Writing items={siteData.writing} />
      <Contact data={siteData.contact} />
    </main>
  )
}

