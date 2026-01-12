import type { Metadata } from 'next'
import './globals.css'
import CommandMenu from './components/CommandMenu'
import { siteData } from '@/content/site'

export const metadata: Metadata = {
  title: 'Ali Yüksel - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        {children}
        <CommandMenu
          email={siteData.contact.email}
          linkedinUrl={siteData.contact.social.linkedin}
          twitterUrl={siteData.contact.social.twitter}
        />
      </body>
    </html>
  )
}

