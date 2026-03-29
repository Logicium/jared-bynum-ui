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
    description: 'Spearheaded grassroots organizing that secured landmark environmental legislation in three states, mobilizing over 50,000 community members.',
    tags: ['Grassroots', 'Legislation', 'Coalition'],
    location: 'Pennsylvania, Michigan, Wisconsin',
    duration: '18 Months',
    overview: 'The Green Future Initiative was a multi-state campaign to pass comprehensive environmental protection legislation. What began as a local effort grew into a movement spanning three states and mobilizing tens of thousands of community members.',
    challenge: 'Entrenched industry opposition and fragmented community groups made coordinated action seem impossible. Previous legislative attempts had failed due to lack of grassroots support and poorly aligned advocacy strategies.',
    approach: 'Jared built a coalition of 45+ organizations — from local environmental groups to labor unions — and developed a tiered advocacy strategy that combined direct community engagement with targeted legislative pressure. Weekly town halls, door-to-door canvassing, and a social media campaign amplified constituent voices directly to lawmakers.',
    impact: [
      'Landmark environmental legislation passed in all three target states',
      '50,000+ community members mobilized across the tri-state region',
      '45 organizations unified under a single coalition framework',
      'Model legislation adopted by two additional states independently',
    ],
    quote: 'Jared didn\'t just organize a campaign — he built a movement that will endure far beyond any single piece of legislation.',
    quoteAttribution: 'State Senator Maria Chen, Pennsylvania',
  },
  {
    slug: 'housing-for-all-coalition',
    title: 'Housing For All Coalition',
    category: 'Social Justice',
    year: '2024',
    image: '/images/campaign-housing.jpg',
    description: 'Coordinated a multi-city coalition of 30+ organizations to advance equitable housing policy, resulting in sweeping zoning reforms.',
    tags: ['Housing', 'Equity', 'Urban Policy'],
    location: 'New York, New Jersey, Connecticut',
    duration: '14 Months',
    overview: 'The Housing For All Coalition united housing advocates, tenant organizations, and policy researchers across the tri-state area to push for zoning reforms that would increase affordable housing stock and protect vulnerable tenants.',
    challenge: 'Real estate interests dominated the housing policy conversation. Tenant voices were fragmented across dozens of small organizations with no unified platform or coordinated strategy.',
    approach: 'Jared designed a coalition structure that preserved organizational autonomy while enabling collective action. A shared policy platform was developed through a series of community assemblies, and a coordinated lobbying strategy targeted key legislative committees in all three states simultaneously.',
    impact: [
      '30+ organizations united under a common policy platform',
      'Zoning reforms passed in 12 municipalities',
      '15,000 new affordable housing units approved',
      'Tenant protection legislation strengthened in two states',
    ],
    quote: 'For the first time, our movement spoke with one voice. That\'s what made the difference.',
    quoteAttribution: 'Diana Torres, Executive Director, NYC Tenants United',
  },
  {
    slug: 'clean-energy-transition-act',
    title: 'Clean Energy Transition Act',
    category: 'Policy Advocacy',
    year: '2024',
    image: '/images/campaign-clean-energy.jpg',
    description: 'Developed and executed a statewide advocacy strategy that built bipartisan support for landmark clean energy legislation.',
    tags: ['Energy', 'Bipartisan', 'Legislative'],
    location: 'Virginia',
    duration: '10 Months',
    overview: 'The Clean Energy Transition Act was a statewide legislative campaign to establish binding clean energy targets, create green job training programs, and ensure an equitable transition for fossil fuel-dependent communities.',
    challenge: 'Clean energy legislation had become deeply partisan. Previous attempts died in committee, and fossil fuel-dependent communities viewed transition proposals as threats to their livelihood.',
    approach: 'Jared pursued a deliberately bipartisan strategy, engaging conservative rural communities alongside progressive urban bases. Economic impact studies were commissioned to demonstrate job creation potential. Town halls in coal country gave workers a direct voice in shaping transition policy.',
    impact: [
      'Bipartisan passage with 67% legislative support',
      '100% clean energy target by 2040 codified into law',
      '$200M green job training fund established',
      'Just transition provisions for 5 coal-dependent counties',
    ],
  },
  {
    slug: 'environmental-justice-network',
    title: 'Environmental Justice Network',
    category: 'Environmental',
    year: '2023',
    image: '/images/campaign-env-justice.jpg',
    description: 'Founded a regional network connecting frontline communities with policymakers to address environmental inequities.',
    tags: ['Network Building', 'Environmental Justice'],
    location: 'Mid-Atlantic Region',
    duration: '12 Months',
    overview: 'The Environmental Justice Network was created to bridge the gap between frontline communities bearing the brunt of environmental harm and the policymakers with the power to change those conditions.',
    challenge: 'Frontline communities — disproportionately communities of color — had limited access to legislative processes. Policymakers often made environmental decisions without meaningful input from those most affected.',
    approach: 'Jared established a permanent infrastructure for community-policy engagement: a network of community liaisons, quarterly policy summits, and a rapid-response communication system that could mobilize testimony within 48 hours of relevant legislative hearings.',
    impact: [
      'Network spanning 8 states and 60+ community organizations',
      '200+ community members trained as policy advocates',
      '12 environmental justice provisions added to state legislation',
      'Model replicated in 3 additional regions nationally',
    ],
    quote: 'This network gave our community a seat at the table — not as an afterthought, but as the lead voice.',
    quoteAttribution: 'Rev. Michael Okafor, Camden Environmental Alliance',
  },
  {
    slug: 'voter-access-engagement-drive',
    title: 'Voter Access & Engagement Drive',
    category: 'Social Justice',
    year: '2023',
    image: '/images/campaign-voter-access.heic',
    description: 'Led a major voter registration and civic engagement initiative that registered 25,000+ new voters across underserved communities.',
    tags: ['Voter Access', 'Civic Engagement'],
    location: 'Georgia, North Carolina, Arizona',
    duration: '8 Months',
    overview: 'A targeted voter registration and civic engagement initiative focused on historically underserved communities in three key states, combining traditional canvassing with innovative digital outreach.',
    challenge: 'Voter suppression efforts and systemic access barriers had created significant registration gaps in communities of color and low-income areas. Distrust of institutions made conventional outreach ineffective.',
    approach: 'Jared developed a community-embedded model: recruiting and training local leaders as voter registration captains, partnering with barbershops, churches, and community centers as registration hubs, and deploying a multilingual digital campaign tailored to each community.',
    impact: [
      '25,000+ new voters registered across three states',
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
    description: 'Organized a cross-sector campaign to reform public transit funding, centering marginalized communities in transportation policy.',
    tags: ['Transit', 'Equity', 'Infrastructure'],
    location: 'Washington, D.C. Metro Area',
    duration: '11 Months',
    overview: 'A campaign to fundamentally reshape how public transit funding is allocated, ensuring that the communities most dependent on public transportation have the greatest voice in how it is designed and funded.',
    challenge: 'Transit funding decisions were driven by ridership volume metrics that inherently favored affluent commuter corridors over transit-dependent low-income neighborhoods.',
    approach: 'Jared convened a cross-sector coalition of transit riders, disability advocates, labor unions, and environmental groups. A rider-centered equity framework was developed through community workshops and presented to the regional transit authority alongside a detailed alternative funding model.',
    impact: [
      'Equity-weighted funding formula adopted by regional transit authority',
      '$150M redirected to underserved transit corridors',
      '3 new bus rapid transit lines approved for low-income areas',
      'Community advisory board established with binding input authority',
    ],
    quote: 'This campaign proved that the people who ride the bus every day can reshape the system — when someone helps them organize.',
    quoteAttribution: 'James Whitfield, D.C. Transit Riders Union',
  },
]

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug)
}
