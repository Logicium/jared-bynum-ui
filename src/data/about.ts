/**
 * The about page as data: the biography, the three focus areas and the
 * credentials. The components render these, and the prerender writes the
 * same records into the static /about page so the biography is readable
 * before the app runs.
 */

export const bioParagraphs = [
  'Jared Bynum is a political strategist and community organizer whose work sits at the intersection of policy advocacy, environmental action, and social justice. With a decade of experience building coalitions and moving legislation, Jared has become a trusted voice in progressive political strategy.',
  'His approach is defined by meticulous research, authentic community engagement, and an uncompromising commitment to equity. Whether mobilizing grassroots movements or advising elected officials, Jared brings the same discipline and creative thinking to every challenge.',
  'Before his organizing career, Jared studied political science and urban planning, grounding his strategic work in rigorous academic understanding of the systems he works to change.',
]

export const focusAreas = [
  {
    number: '01',
    title: 'Policy Advocacy',
    description:
      'Crafting and advancing legislation through strategic coalition-building, stakeholder engagement, and sustained public pressure campaigns.',
  },
  {
    number: '02',
    title: 'Environmental Action',
    description:
      'Organizing communities around climate justice and environmental protection, ensuring frontline voices lead the conversation.',
  },
  {
    number: '03',
    title: 'Social Justice',
    description:
      'Fighting for equity across housing, voting rights, healthcare access, and criminal justice reform through systemic organizing.',
  },
]

export const stats = [
  { number: '50+', desc: 'Campaigns Organized' },
  { number: '12', desc: 'Legislative Wins' },
  { number: '100K+', desc: 'Community Members Mobilized' },
]

export const recognition = [
  'Emerging Organizer of the Year — Colorado Progressive Alliance',
  '40 Under 40 — Colorado Politics',
  'Environmental Champion Award — Conservation Colorado',
  'Community Impact Fellow — Denver Urban Policy Foundation',
]
