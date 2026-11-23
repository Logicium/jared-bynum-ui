/**
 * Who this site is, for search engines and assistants.
 *
 * The one record behind every title suffix, canonical, share card, robots
 * policy and the Person node on the home page, which becomes a ProfilePage.
 * Pure data: the prerender imports it under Node and the app imports it in
 * the browser. Every fact here was already on the site (the contact page and
 * the footer). The client's published Search settings from the portal lay
 * over this at build; see scripts/prerender.ts.
 */
import type { SiteConfig } from '@/kit/seo'

export const site: SiteConfig = {
  siteUrl: 'https://www.jaredbynum.com',
  // Google Search Console ownership tag (home page only). Managed by the studio.
  verification: { google: 'uAOhnu8Mqu9HjYbM1XiBXsqGmy0AncepBXWrmxF9xhM' },
  name: 'Jared Bynum',
  tagline: 'Political strategist and organizer',
  description:
    'Jared Bynum is a political strategist and organizer in Denver, Colorado, building coalitions and moving policy on the environment, housing and voting access.',
  lang: 'en',
  locale: 'en_US',
  image: { url: '/og/default.png', width: 1200, height: 630, alt: 'Jared Bynum, political strategist and organizer, Denver, Colorado' },
  entity: {
    type: 'Person',
    name: 'Jared Bynum',
    jobTitle: 'Political Strategist & Organizer',
    description:
      'Political strategist and community organizer based in Denver, Colorado, working at the intersection of policy advocacy, environmental action and social justice. Available nationally for campaign strategy, coalition building and community organizing.',
    image: '/images/about-portrait.jpg',
    email: 'hello@jaredbynum.com',
    address: {
      addressLocality: 'Denver',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Political strategy',
      'Community organizing',
      'Coalition building',
      'Policy advocacy',
      'Environmental action',
      'Housing policy',
      'Voter registration',
      'Legislative campaigns',
    ],
  },
  crawlers: { training: 'allow' },
  llmsSummary:
    'Jared Bynum is a political strategist and community organizer based in Denver, Colorado, available nationally. His work spans policy advocacy, environmental action and social justice: coalition building, grassroots mobilization, voter registration and legislative campaigns across Colorado. The site presents selected campaigns, his background and a contact form for new engagements.',
}
