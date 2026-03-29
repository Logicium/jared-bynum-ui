export interface Campaign {
  slug: string
  title: string
  category: string
  year: string
  image: string
  description: string
  tags: string[]
  location: string
  duration: string
  overview: string
  challenge: string
  approach: string
  impact: string[]
  quote?: string
  quoteAttribution?: string
}

export const campaigns: Campaign[] = [
  {
    slug: 'green-future-initiative',
    title: 'Green Future Initiative',
    category: 'Environmental',
    year: '2025',
    image: '/images/campaign-green-future.jpg',
    description: 'Spearheaded grassroots organizing that secured landmark environmental legislation across Colorado\'s Front Range, mobilizing over 50,000 community members.',
    tags: ['Grassroots', 'Legislation', 'Coalition'],
    location: 'Denver, Boulder, Fort Collins',
    duration: '18 Months',
    overview: 'The Green Future Initiative was a Front Range campaign to pass comprehensive environmental protection legislation at the state level. What began as a Denver-based effort grew into a movement spanning Colorado\'s major cities and mobilizing tens of thousands of community members.',
    challenge: 'Entrenched oil and gas industry opposition and fragmented community groups made coordinated action seem impossible. Previous legislative attempts had stalled in the Colorado General Assembly due to lack of grassroots support and poorly aligned advocacy strategies.',
    approach: 'Jared built a coalition of 45+ organizations — from local environmental groups to Colorado labor unions — and developed a tiered advocacy strategy that combined direct community engagement with targeted legislative pressure. Weekly town halls in Denver, Boulder, and Fort Collins, door-to-door canvassing, and a social media campaign amplified constituent voices directly to state lawmakers.',
    impact: [
      'Landmark environmental legislation passed through the Colorado General Assembly',
      '50,000+ community members mobilized across the Front Range',
      '45 organizations unified under a single coalition framework',
      'Model legislation referenced by lawmakers in neighboring Western states',
    ],
    quote: 'Jared didn\'t just organize a campaign — he built a movement that will endure far beyond any single piece of legislation.',
    quoteAttribution: 'State Senator Julie Gonzales, Denver',
  },
  {
    slug: 'housing-for-all-coalition',
    title: 'Housing For All Coalition',
    category: 'Social Justice',
    year: '2024',
    image: '/images/campaign-housing.jpg',
    description: 'Coordinated a multi-city coalition of 30+ organizations to advance equitable housing policy across metro Denver, resulting in sweeping zoning reforms.',
    tags: ['Housing', 'Equity', 'Urban Policy'],
    location: 'Denver, Aurora, Lakewood',
    duration: '14 Months',
    overview: 'The Housing For All Coalition united housing advocates, tenant organizations, and policy researchers across the Denver metro area to push for zoning reforms that would increase affordable housing stock and protect vulnerable tenants from displacement.',
    challenge: 'Real estate interests dominated the Denver housing policy conversation. Tenant voices were fragmented across dozens of small organizations with no unified platform or coordinated strategy, while housing costs continued to skyrocket.',
    approach: 'Jared designed a coalition structure that preserved organizational autonomy while enabling collective action. A shared policy platform was developed through a series of community assemblies across Denver, Aurora, and Lakewood, and a coordinated lobbying strategy targeted Denver City Council and the Colorado legislature simultaneously.',
    impact: [
      '30+ organizations united under a common policy platform',
      'Zoning reforms passed in 12 municipalities across the metro area',
      '15,000 new affordable housing units approved',
      'Tenant protection legislation strengthened at the state level',
    ],
    quote: 'For the first time, our movement spoke with one voice. That\'s what made the difference.',
    quoteAttribution: 'Diana Torres, Executive Director, Denver Tenants United',
  },
  {
    slug: 'clean-energy-transition-act',
    title: 'Clean Energy Transition Act',
    category: 'Policy Advocacy',
    year: '2024',
    image: '/images/campaign-clean-energy.jpg',
    description: 'Developed and executed a statewide advocacy strategy that built bipartisan support for landmark clean energy legislation in Colorado.',
    tags: ['Energy', 'Bipartisan', 'Legislative'],
    location: 'Statewide — Colorado',
    duration: '10 Months',
    overview: 'The Clean Energy Transition Act was a statewide legislative campaign to establish binding clean energy targets, create green job training programs, and ensure an equitable transition for Colorado\'s fossil fuel-dependent communities on the Western Slope.',
    challenge: 'Clean energy legislation had become deeply partisan in Colorado. Previous attempts stalled in committee, and communities on the Western Slope dependent on oil, gas, and coal viewed transition proposals as threats to their livelihood.',
    approach: 'Jared pursued a deliberately bipartisan strategy, engaging conservative Western Slope communities alongside the progressive Front Range base. Economic impact studies were commissioned to demonstrate job creation potential. Town halls in Garfield and Mesa counties gave energy workers a direct voice in shaping transition policy.',
    impact: [
      'Bipartisan passage with 67% legislative support in the General Assembly',
      '100% clean energy target by 2040 codified into Colorado law',
      '$200M green job training fund established',
      'Just transition provisions for 5 Western Slope counties',
    ],
  },
  {
    slug: 'environmental-justice-network',
    title: 'Environmental Justice Network',
    category: 'Environmental',
    year: '2023',
    image: '/images/campaign-env-justice.jpg',
    description: 'Founded a regional network connecting frontline communities along Colorado\'s I-70 corridor with policymakers to address environmental inequities.',
    tags: ['Network Building', 'Environmental Justice'],
    location: 'Commerce City, Pueblo, Globeville-Elyria-Swansea',
    duration: '12 Months',
    overview: 'The Environmental Justice Network was created to bridge the gap between frontline communities bearing the brunt of environmental harm — particularly in Commerce City, Pueblo, and Denver\'s Globeville-Elyria-Swansea neighborhoods — and the Colorado policymakers with the power to change those conditions.',
    challenge: 'Frontline communities — disproportionately communities of color near industrial corridors and refineries — had limited access to legislative processes. Policymakers at the State Capitol often made environmental decisions without meaningful input from those most affected.',
    approach: 'Jared established a permanent infrastructure for community-policy engagement: a network of community liaisons across impacted neighborhoods, quarterly policy summits at the Capitol, and a rapid-response communication system that could mobilize testimony within 48 hours of relevant legislative hearings.',
    impact: [
      'Network spanning 60+ community organizations across Colorado',
      '200+ community members trained as policy advocates',
      '12 environmental justice provisions added to state legislation',
      'Model replicated by organizers in New Mexico and Utah',
    ],
    quote: 'This network gave our community a seat at the table — not as an afterthought, but as the lead voice.',
    quoteAttribution: 'Rep. Yadira Caraveo, Adams County',
  },
  {
    slug: 'voter-access-engagement-drive',
    title: 'Voter Access & Engagement Drive',
    category: 'Social Justice',
    year: '2023',
    image: '/images/campaign-voter-access.jpg',
    description: 'Led a major voter registration and civic engagement initiative that registered 25,000+ new voters across underserved communities in Colorado.',
    tags: ['Voter Access', 'Civic Engagement'],
    location: 'Denver, Aurora, Colorado Springs',
    duration: '8 Months',
    overview: 'A targeted voter registration and civic engagement initiative focused on historically underserved communities across Colorado\'s most populated cities, combining traditional canvassing with innovative digital outreach.',
    challenge: 'Systemic access barriers and voter apathy had created significant registration gaps in communities of color and low-income areas across Denver, Aurora, and Colorado Springs. Distrust of institutions made conventional outreach ineffective.',
    approach: 'Jared developed a community-embedded model: recruiting and training local leaders as voter registration captains, partnering with barbershops, churches, and community centers as registration hubs, and deploying a multilingual digital campaign tailored to each neighborhood.',
    impact: [
      '25,000+ new voters registered across Colorado',
      '500+ community registration captains trained',
      '300 community hub partnerships established',
      '18% increase in voter turnout in target precincts',
    ],
  },
  {
    slug: 'public-transit-equity-campaign',
    title: 'Public Transit Equity Campaign',
    category: 'Policy Advocacy',
    year: '2022',
    image: '',
    description: 'Organized a cross-sector campaign to reform RTD public transit funding, centering marginalized communities in Denver metro transportation policy.',
    tags: ['Transit', 'Equity', 'Infrastructure'],
    location: 'Denver Metro Area',
    duration: '11 Months',
    overview: 'A campaign to fundamentally reshape how RTD allocates public transit funding, ensuring that the communities most dependent on public transportation have the greatest voice in how it is designed and funded across the Denver metro.',
    challenge: 'RTD funding decisions were driven by ridership volume metrics that inherently favored affluent commuter corridors over transit-dependent low-income neighborhoods in East Denver, Aurora, and Commerce City.',
    approach: 'Jared convened a cross-sector coalition of transit riders, disability advocates, labor unions, and environmental groups. A rider-centered equity framework was developed through community workshops across the metro and presented to RTD\'s board alongside a detailed alternative funding model.',
    impact: [
      'Equity-weighted funding formula adopted by RTD board',
      '$150M redirected to underserved transit corridors',
      '3 new bus rapid transit lines approved for low-income areas',
      'Community advisory board established with binding input authority',
    ],
    quote: 'This campaign proved that the people who ride the bus every day can reshape the system — when someone helps them organize.',
    quoteAttribution: 'James Whitfield, Denver Transit Riders Union',
  },
]

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug)
}
