/**
 * The public route table, with each page's SEO record.
 *
 * This is the only list of public routes. The router spreads it; the
 * prerender (scripts/prerender.ts) walks it to write one HTML file per page,
 * the sitemap, robots.txt and llms.txt; the runtime applies the same records on
 * navigation. No browser dependency here: the prerender imports this under
 * Node, so every body is built from the data modules.
 */
import type { RouteRecordRaw } from 'vue-router'
import { creativeWorkNode, esc, itemListNode, truncate, type RouteSeo } from '@/kit/seo'
import { bioParagraphs, focusAreas, recognition, stats } from '@/data/about'
import { campaigns, type Campaign } from '@/data/campaigns'
import { content } from '@/data/site'

const list = (items: string[]) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`

/* ------------------------------ campaigns ------------------------------ */

const campaignSeo: RouteSeo<Campaign> = {
  expand: () => campaigns.map((c) => ({ params: { slug: c.slug }, data: c })),
  title: ({ data }) => `${data.title} (${data.year})`,
  description: ({ data }) => truncate(data.description, 160),
  image: ({ data }) => (data.image ? { url: data.image, alt: `${data.title} campaign` } : undefined),
  breadcrumb: ({ data }) => [{ name: 'Work', path: '/work' }, { name: data.title }],
  schema: ({ site, path, data }) =>
    creativeWorkNode(site, {
      path,
      name: data.title,
      description: data.description,
      image: data.image || undefined,
      dateCreated: data.year,
      genre: data.category,
      extra: { keywords: data.tags.join(', '), locationCreated: { '@type': 'Place', name: data.location } },
    }),
  body: ({ data }) =>
    `<article><p>${esc(data.category)} · ${esc(data.year)} · ${esc(data.location)} · ${esc(data.duration)}</p><h1>${esc(data.title)}</h1><p>${esc(data.description)}</p>` +
    `<h2>Overview</h2><p>${esc(data.overview)}</p><h2>The challenge</h2><p>${esc(data.challenge)}</p><h2>The approach</h2><p>${esc(data.approach)}</p>` +
    `<h2>Impact</h2>${list(data.impact)}` +
    (data.quote ? `<blockquote><p>${esc(data.quote)}</p>${data.quoteAttribution ? `<footer>${esc(data.quoteAttribution)}</footer>` : ''}</blockquote>` : '') +
    `<p><a href="/work">All campaigns</a> · <a href="/contact">Start a conversation</a></p></article>`,
}

/* ------------------------------ the table ------------------------------ */

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      seo: {
        description:
          'Jared Bynum is a political strategist and organizer in Denver, Colorado, building coalitions and moving policy on the environment, housing and voting access.',
        body: () =>
          `<main><h1>${esc(content.hero.firstName)} ${esc(content.hero.lastName)}</h1><p>${esc(content.hero.eyebrow)}</p>` +
          `<p>${esc(content.hero.subtitleLead)} ${esc(content.hero.subtitleMid)} ${esc(content.hero.subtitleTrail)}</p>` +
          `<h2>${esc(content.featured.titleLead)} ${esc(content.featured.titleAccent)} ${esc(content.featured.titleTrail)}</h2>` +
          `<ul>${campaigns.slice(0, 3).map((c) => `<li><a href="/work/${esc(c.slug)}">${esc(c.title)}</a> (${esc(c.category)}, ${esc(c.year)}): ${esc(c.description)}</li>`).join('')}</ul>` +
          `<h2>${esc(content.philosophy.label)}</h2><blockquote><p>${esc(content.philosophy.quote)}</p></blockquote><p>${esc(content.philosophy.body)}</p>` +
          `<h2>${esc(content.hire.titleLead)} ${esc(content.hire.titleAccent)}</h2><p>${esc(content.hire.body)}</p>` +
          `<p><a href="/work">Selected work</a> · <a href="/about">About</a> · <a href="/contact">Contact</a></p></main>`,
      },
    },
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('@/views/WorkView.vue'),
    meta: {
      seo: {
        title: 'Selected campaigns',
        description:
          'Six Colorado campaigns organized by Jared Bynum: environmental law, housing reform, clean energy, voter registration and transit equity, with their results.',
        schema: ({ site, path }) =>
          itemListNode(
            site,
            path,
            'Campaigns organized by Jared Bynum',
            campaigns.map((c) => ({ name: c.title, path: `/work/${c.slug}`, image: c.image || undefined })),
          ),
        body: () =>
          `<main><h1>Strategic Organizing for Real Impact</h1><p>A selection of campaigns and initiatives that demonstrate the power of strategic political organizing.</p>` +
          campaigns.map((c) => `<h2><a href="/work/${esc(c.slug)}">${esc(c.title)}</a></h2><p>${esc(c.category)} · ${esc(c.year)} · ${esc(c.location)}</p><p>${esc(c.description)}</p>`).join('') +
          `<p>Jared is available for political consulting, campaign strategy, and community organizing engagements. <a href="/contact">Start a conversation</a>.</p></main>`,
      },
    },
  },
  { path: '/work/:slug', name: 'campaign', component: () => import('@/views/CampaignView.vue'), meta: { seo: campaignSeo } },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      seo: {
        title: 'About Jared Bynum',
        description:
          'Organizer, strategist, advocate: a decade of coalition building and legislative wins in policy, environmental action and social justice across Colorado.',
        body: () =>
          `<main><h1>The Strategist Behind the Movement</h1><h2>Organizer. Strategist. Advocate.</h2>` +
          bioParagraphs.map((p) => `<p>${esc(p)}</p>`).join('') +
          `<h2>Three Pillars of Change</h2>${focusAreas.map((f) => `<h3>${esc(f.title)}</h3><p>${esc(f.description)}</p>`).join('')}` +
          `<h2>By the Numbers</h2>${list(stats.map((s) => `${s.number} ${s.desc}`))}` +
          `<h2>Recognition</h2>${list(recognition)}` +
          `<p>Whether you're launching a campaign or building a coalition, Jared is ready to bring strategic leadership to your cause. <a href="/contact">Let's talk</a>.</p></main>`,
      },
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      seo: {
        title: 'Contact',
        description:
          'Work with Jared Bynum on a campaign, policy push or coalition. Email hello@jaredbynum.com. Based in Denver, Colorado, available nationally for new engagements.',
        body: ({ site }) =>
          `<main><h1>Let's Build Something Bold</h1><p>Whether you're launching a political campaign, advancing policy, or mobilizing a community, Jared is ready to bring strategic leadership to your cause.</p>` +
          `<h2>Email</h2><p><a href="mailto:${esc(site.entity.email ?? '')}">${esc(site.entity.email ?? '')}</a></p>` +
          `<h2>Based in</h2><p>Denver, Colorado. Available nationally.</p><h2>Availability</h2><p>Currently accepting new engagements.</p></main>`,
      },
    },
  },
]

/** The catch-all: a real not-found page, noindex, never a redirect home. */
export const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('@/views/NotFoundView.vue'),
  meta: { seo: { title: 'Page not found', description: 'That page is not on jaredbynum.com.', noindex: true } },
}
