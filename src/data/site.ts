import { reactive } from 'vue'

/**
 * The site's copy, lifted into one reactive object.
 *
 * Everything here is prose on the public screens: the hero, the philosophy
 * pull-quote, the selected-work heading and the closing banner. It lives in
 * one place for one reason: the Apotome editor kit edits a single reactive
 * tree, and the published overlay from the studio is merged onto this object
 * at boot.
 *
 * The campaigns are deliberately NOT here. They live in campaigns.ts as
 * structured records with slugs, images and impact figures, which is a
 * portfolio rather than site copy.
 *
 * Components render from `content` and nothing else, so an edit published
 * through the studio reaches visitors without a deploy.
 */
export const content = reactive({
  hero: {
    eyebrow: 'Political Strategist & Organizer',
    firstName: 'Jared',
    lastName: 'Bynum',
    subtitleLead: 'Building coalitions. Shaping policy.',
    subtitleMid: 'Driving change through strategic',
    subtitleTrail: 'organizing and unwavering advocacy.',
    primaryCta: 'Work With Jared',
    secondaryCta: 'View Campaigns',
    index: 'No. 01 — Portfolio',
    scroll: 'Scroll',
  },

  featured: {
    label: 'Selected Work',
    titleLead: 'Campaigns That',
    titleAccent: 'Moved',
    titleTrail: 'the Needle',
  },

  philosophy: {
    label: 'Philosophy',
    quote:
      '"Real change doesn\'t start in a boardroom. It starts in communities — with people who refuse to accept the world as it is."',
    body: "Jared's approach to political organizing blends rigorous policy analysis with ground-level coalition building. Every campaign is rooted in the belief that sustainable progress requires both vision and the discipline to see it through.",
  },

  hire: {
    label: 'Ready to win?',
    titleLead: "Let's Build Your Next",
    titleAccent: 'Campaign',
    body: 'From policy advocacy to grassroots mobilization, Jared brings strategic clarity and relentless execution to every engagement.',
    cta: 'Get in Touch',
  },
})
