export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  heroImage: string;
  subServices: {
    title: string;
    description: string;
  }[];
  keyBenefits: string[];
  processSteps: string[];
  suitableIndustries: string[];
  technicalSpecs?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'painting' | 'flooring' | 'civil-works';
  sector: 'Industrial' | 'Commercial' | 'Residential' | 'Institutional' | 'Healthcare';
  location: string;
  image: string;
  description: string;
  scope: string[];
  completionYear: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  keyServicesProvided: string[];
  featuredProjectsCount: number;
}

export const COMPANY_INFO = {
  name: "Roshan Enterprises",
  tagline: "We Paint. We Build. We Deliver.",
  subTagline: "Complete Painting, Flooring & Civil Solutions for Every Space",
  phone: "+91 70489 76431",
  formattedPhone: "+91 70489 76431",
  email: "info@roshanenterprises.co.in",
  contactEmail: "roshanenterprises.noida@gmail.com",
  location: "PAN India Service",
  address: "Corporate Office, Uttar Pradesh, India",
  serviceArea: "Serving PAN India Clients",
  trustMetrics: [
    { label: "100+ Houses Decorated", desc: "Over 100+ residential homes & villas decorated with premium finishes" },
    { label: "Quality Assured", desc: "Premium grade materials & stringent QA checks" },
    { label: "Experienced Team", desc: "Skilled technicians, engineers & site managers" },
    { label: "On-Time Delivery", desc: "Rigorous project scheduling & milestone tracking" },
    { label: "Honest & Transparent", desc: "No hidden charges & upfront detailed estimations" },
  ],
  footerHighlights: [
    "100+ Houses Decorated",
    "Quality Materials",
    "Skilled Professionals",
    "Timely Completion",
    "Customer Satisfaction"
  ]
};

export const CLIENT_REFERENCES = [
  { name: "Sperry Group", category: "Industrial & Polymers", location: "Greater Noida" },
  { name: "LG Electronics India", category: "Electronics & Manufacturing", location: "Greater Noida / Pune" },
  { name: "INOX Air Products", category: "Industrial Gases & Infra", location: "PAN India" },
  { name: "E-Pack Polymer Technologies", category: "Polymers & Packaging", location: "Greater Noida" },
  { name: "BIMTECH (Birla Institute)", category: "Institutional & Campus", location: "Greater Noida" },
  { name: "Tirath Ram Shah Hospital (TRSCH)", category: "Healthcare & Medical", location: "Civil Lines, Delhi" },
  { name: "Mahanandan Super Speciality Hospital", category: "Healthcare & Medical", location: "Delhi NCR" },
  { name: "Romsons Group", category: "Medical Devices & Cleanrooms", location: "Noida / PAN India" },
  { name: "East India Group", category: "Commercial & Infra", location: "Uttar Pradesh" },
  { name: "ESS KAY Group", category: "Civil Sub-contracting", location: "PAN India" },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "painting",
    slug: "painting",
    title: "Painting Services",
    shortDesc: "Professional interior and exterior painting solutions designed to transform, aestheticize, and protect your commercial, industrial, and residential spaces.",
    fullDesc: "Roshan Enterprises offers end-to-end professional painting solutions across PAN India. Our experienced painting specialists use premium grade paints, advanced surface preparation tools, and weather-resistant protective coatings to deliver flawless finishes that elevate aesthetics and safeguard structures against corrosion, weathering, and moisture.",
    iconName: "Paintbrush",
    badge: "Surface Transformation",
    heroImage: "/images/painting_interior.jpg",
    subServices: [
      {
        title: "Interior & Exterior Painting",
        description: "High-durability acrylic, elastomeric, and weather-proof emulsion coatings engineered for internal halls, external facades, and high-rise commercial structures."
      },
      {
        title: "Texture & Designer Paint",
        description: "Custom metallic textures, stencil finishes, acoustic wall textures, and luxury architectural coating patterns tailored to corporate offices and lobbies."
      },
      {
        title: "Enamel Painting",
        description: "Heavy-duty synthetic enamel finishes for structural steelwork, metal railings, fire escape doors, and industrial equipment requiring anti-rust protection."
      },
      {
        title: "Wall Putty & Surface Polish",
        description: "Multi-coat polymer-modified white cement wall putty application, power sanding, smooth primer sealing, and wood/metal mirror polish."
      },
      {
        title: "Waterproof Painting & Sealing",
        description: "Specialized anti-fungal, moisture barrier, and crack-bridging elastomeric waterproof paints for damp-prone walls, basements, and exterior brickwork."
      }
    ],
    keyBenefits: [
      "Weather & UV resistant exterior coatings engineered for harsh climates",
      "Dust-free preparation & low-VOC eco-friendly paints for occupied offices",
      "Flawless surface smoothing with multi-stage inspection checks",
      "Complete mask-and-protect protocol for existing furniture and equipment",
      "5-Year to 10-Year paint warranty packages backed by leading paint manufacturers"
    ],
    processSteps: [
      "Surface Inspection & Moisture Mapping",
      "Scraping, Pressure Washing & Crack Filling",
      "Primer Coating & Multi-layer Putty Polish",
      "Dual Top-coat Precision Spray or Roller Application",
      "Final Quality Handover & Site Cleanup"
    ],
    suitableIndustries: ["Commercial Offices", "Industrial Factories", "Residential Complexes", "Healthcare Facilities", "Educational Institutions"],
    technicalSpecs: [
      { label: "Drying Time", value: "3-4 Hours per coat" },
      { label: "Washability Rate", value: "Class 1 Scrub Resistance" },
      { label: "Coverage", value: "120 - 140 sq ft / liter (2 coats)" },
      { label: "VOC Content", value: "< 50 g/L (Eco compliant)" }
    ]
  },
  {
    id: "flooring",
    slug: "flooring",
    title: "Flooring Solutions",
    shortDesc: "Durable, high-load, and professionally executed flooring solutions for industrial plants, warehouses, commercial hubs, and residential projects.",
    fullDesc: "From heavy-load industrial warehouse floors to high-end polished granite tiles, Roshan Enterprises provides engineered flooring solutions built for endurance and high aesthetic standards. We specialize in Vacuum Dewatered Concrete (VDF), PCC, Epoxy Coatings, Concrete Densification, and precision tile installation.",
    iconName: "Grid",
    badge: "Industrial & Decorative",
    heroImage: "/images/flooring_industrial.jpg",
    subServices: [
      {
        title: "PCC (Plain Cement Concrete) Flooring",
        description: "Heavy-duty base levelling concrete work with accurate slope creation and steel reinforcers for factory basements and open yards."
      },
      {
        title: "VDF (Vacuum Dewatered Concrete) Flooring",
        description: "High-density concrete compaction utilizing vacuum dewatering mats to achieve high compressive strength, wear resistance, and minimal surface shrinkage."
      },
      {
        title: "Epoxy & Polyurethane Flooring",
        description: "Seamless, chemical-resistant, anti-static, and food-grade self-leveling epoxy flooring ideal for cleanrooms, pharma units, and auto assembly plants."
      },
      {
        title: "Concrete Densification & Polishing",
        description: "Lithium-based liquid hardener application followed by diamond pad polishing to convert dull concrete into dust-proof, reflective, and abrasion-resistant surfaces."
      },
      {
        title: "Tiles, Granite & Kota Stone",
        description: "Precision installation of vitrified tiles, heavy-traffic Kota stone, natural granite slabs, and anti-skid ceramic tiles for interior and exterior zones."
      },
      {
        title: "Groove Cutting & Sealant Filling",
        description: "Stress-relief control joint groove cutting using diamond saws, followed by PU backing rod insertion and elastomeric poly-sulfide sealant filling."
      }
    ],
    keyBenefits: [
      "Ultra-high compressive strength designed for heavy forklift & vehicular traffic",
      "Seamless chemical, oil, and solvent spill protection",
      "Zero dust generation for cleanroom and food-grade compliance",
      "Laser-guided slope and flatness checking (TR-34 compliance standards)",
      "High reflectivity enhancing interior ambient lighting efficiency"
    ],
    processSteps: [
      "Sub-base Preparation & Compaction",
      "Laser Grade Levelling & Reinforcement Mesh Placement",
      "Concrete Pouring & Mechanical Power Trowel Polishing",
      "Groove Cutting within 24 Hours of Pouring",
      "Curing, PU Joint Filling & Sealant Coating"
    ],
    suitableIndustries: ["Logistics & Warehousing", "Automobile Manufacturing", "Pharmaceutical Plants", "Commercial Malls & Garages", "Residential Communities"],
    technicalSpecs: [
      { label: "Compressive Strength", value: "M20 to M40 Grade Concrete" },
      { label: "Epoxy Thickness Options", value: "500 Micron to 4.0 mm Self-Leveling" },
      { label: "Abrasion Resistance", value: "Taber Abrader < 30mg loss" },
      { label: "Surface Finish", value: "High Gloss Polish / Anti-skid Matt" }
    ]
  },
  {
    id: "civil-works",
    slug: "civil-works",
    title: "Civil Works",
    shortDesc: "Reliable civil construction, masonry, structural masonry, and interior finishing solutions delivered with structural integrity and exact execution.",
    fullDesc: "Roshan Enterprises provides complete civil construction and finishing solutions for new developments, structural extensions, and facility modernizations. Our civil works division handles RCC structural framing, brickwork masonry, plastering, acoustic false ceilings, boundary walls, and custom civil modifications.",
    iconName: "Building2",
    badge: "Structural & Finishing",
    heroImage: "/images/civil_construction.jpg",
    subServices: [
      {
        title: "RCC (Reinforced Cement Concrete) Work",
        description: "Precision shuttering, steel bar bending, structural column, beam, slab, and foundation concrete pouring executed under civil engineering supervision."
      },
      {
        title: "Brickwork & Block Masonry",
        description: "Red brick, AAC block, and concrete solid block masonry constructed with polymer modified mortar for thermal efficiency and structural strength."
      },
      {
        title: "Plastering (Internal & External)",
        description: "Smooth gypsum plastering, cement mortar wall plastering, chicken wire mesh reinforced joint plastering, and weather-proof external grit plaster."
      },
      {
        title: "False Ceiling & Drywall Partition",
        description: "Gypsum board false ceilings, grid acoustic ceiling tiles, metal baffle ceilings, and metal stud partition walls for modern commercial offices."
      },
      {
        title: "All Types of Civil Modifications",
        description: "Core cutting, structural rehabilitation, waterproofing membrane laying, trench creation, drain construction, and boundary wall erection."
      }
    ],
    keyBenefits: [
      "Engineered structural strength adhering to Indian Standard Code (IS Codes)",
      "Strict quality testing for sand, cement mix ratios, and steel tensile strength",
      "Integrated MEP (Mechanical, Electrical, Plumbing) horizontal conduit routing",
      "Turnkey site management with dedicated safety officers and engineers",
      "On-time project milestone delivery with clear progress documentation"
    ],
    processSteps: [
      "Architectural Blueprint Analysis & Layout Marking",
      "Foundation Excavation & Shuttering Assembly",
      "Rebar Reinforcement & Quality Concrete Pouring",
      "Brickwork Masonry & Concealed Pipe Placement",
      "Plastering, Curing & Final Surface Handover"
    ],
    suitableIndustries: ["Industrial Facilities", "Commercial Establishments", "Institutional Campuses", "Residential Developers", "Infrastructure Projects"],
    technicalSpecs: [
      { label: "Concrete Grade", value: "M25 / M30 Structural RCC" },
      { label: "Block Type", value: "AAC Blocks / Red Clay Bricks" },
      { label: "Plaster Thickness", value: "12mm Internal / 18mm External Dual Layer" },
      { label: "Safety Standard", value: "IS 456 & NBC Code Compliant" }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Heavy Industrial VDF & Epoxy Flooring",
    category: "flooring",
    sector: "Industrial",
    location: "Knowledge Park V, Greater Noida",
    image: "/images/flooring_industrial.jpg",
    description: "Execution of 45,000 sq.ft. VDF heavy-duty industrial floor with joint groove cutting and anti-static epoxy coating for high forklift load capacity.",
    scope: ["VDF Concrete Flooring", "Groove Cutting & PU Filling", "3mm Self-Leveling Epoxy Coating"],
    completionYear: "2025"
  },
  {
    id: "proj-2",
    title: "Corporate Headquarters Exterior & Interior Painting",
    category: "painting",
    sector: "Commercial",
    location: "Noida Expressway, Sector 135",
    image: "/images/painting_interior.jpg",
    description: "Complete weather-proof elastomeric exterior painting and custom texture wall putty polish for a multi-story corporate IT park.",
    scope: ["Elastomeric Exterior Paint", "Designer Wall Textures", "Fire Door Enamel Coating"],
    completionYear: "2025"
  },
  {
    id: "proj-3",
    title: "Manufacturing Plant RCC Civil Works & Masonry",
    category: "civil-works",
    sector: "Industrial",
    location: "Ecotech 3, Greater Noida",
    image: "/images/civil_construction.jpg",
    description: "Civil structural work including RCC machine foundations, AAC block partitions, internal gypsum plastering, and boundary wall construction.",
    scope: ["Heavy RCC Machine Pads", "AAC Block Masonry", "Gypsum Plastering"],
    completionYear: "2024"
  },
  {
    id: "proj-4",
    title: "Pharmaceutical Cleanroom Epoxy & Anti-Bacterial Coating",
    category: "flooring",
    sector: "Healthcare",
    location: "Neemrana Industrial Zone",
    image: "/images/flooring_industrial.jpg",
    description: "Seamless anti-bacterial PU flooring with coving for a specialized pharmaceutical cleanroom unit, maintaining zero dust standards.",
    scope: ["Seamless PU Flooring", "Wall-to-Floor Coving", "Waterproof Sealing"],
    completionYear: "2024"
  },
  {
    id: "proj-5",
    title: "Institutional Campus Civil Renovation & Painting",
    category: "painting",
    sector: "Institutional",
    location: "Knowledge Park III, Greater Noida",
    image: "/images/hero_painting.jpg",
    description: "Turnkey painting and plastering works covering 80,000 sq.ft. of academic blocks, administrative halls, and residential hostels.",
    scope: ["Academic Block Painting", "Crack Repair & Waterproofing", "False Ceiling Grid"],
    completionYear: "2024"
  },
  {
    id: "proj-6",
    title: "100+ Residential Houses & Villas Decoration & Painting",
    category: "painting",
    sector: "Residential",
    location: "Greater Noida & Delhi NCR",
    image: "/images/hero_painting.jpg",
    description: "Successfully decorated and painted over 100+ high-rise apartments, villas, and independent houses with velvet emulsion, wall textures, and waterproof exterior coatings.",
    scope: ["100+ Houses Decorated", "Interior Velvet Emulsion", "Designer Wall Textures", "Exterior Waterproofing"],
    completionYear: "2025"
  },
  {
    id: "proj-7",
    title: "Plain Cement Concrete (PCC) Basement Flooring",
    category: "flooring",
    sector: "Industrial",
    location: "Ecotech 6, Greater Noida",
    image: "/images/flooring_industrial.jpg",
    description: "Turnkey execution of 50,000 sq.ft. PCC basement levelling, concrete compaction, surface trowel finishing, and laser slope levelling.",
    scope: ["PCC Floor Levelling", "Drainage Slope Compaction", "Laser Level Check"],
    completionYear: "2025"
  },
  {
    id: "proj-8",
    title: "Heavy RCC Structural Framing & Column Casting",
    category: "civil-works",
    sector: "Industrial",
    location: "Udyog Vihar, Greater Noida",
    image: "/images/civil_construction.jpg",
    description: "Structural RCC civil construction including heavy beam casting, column shuttering, rebar binding, and M30 compressive strength slab pouring.",
    scope: ["RCC Shuttering & Rebar", "M30 Concrete Pouring", "Structural Beam Casting"],
    completionYear: "2025"
  },
  {
    id: "proj-9",
    title: "Vitrified Floor Tiles & Bathroom Wall Tiling",
    category: "civil-works",
    sector: "Residential",
    location: "Greater Noida West",
    image: "/images/painting_interior.jpg",
    description: "Precision installation of 800x1600mm vitrified floor tiles, anti-skid balcony tiles, and ceramic bathroom wall tiling with epoxy grouting.",
    scope: ["Vitrified Floor Tiling", "Bathroom Wall Ceramic Tiles", "Spacer Epoxy Grouting"],
    completionYear: "2025"
  },
  {
    id: "proj-10",
    title: "Mirror Polished Granite Lobby & Countertop Work",
    category: "civil-works",
    sector: "Commercial",
    location: "Noida Expressway, Sector 142",
    image: "/images/painting_interior.jpg",
    description: "Premium Rajasthan Granite floor laying, elevator lobby wall cladding, chamfered edge moulding, and mirror polishing for corporate hubs.",
    scope: ["Granite Floor Laying", "Lobby Wall Cladding", "Edge Moulding & Mirror Polish"],
    completionYear: "2025"
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "industrial",
    title: "Industrial",
    slug: "industrial",
    iconName: "Factory",
    shortDesc: "Factories, manufacturing plants, warehouses, auto assembly lines, and logistics parks requiring heavy-duty performance.",
    fullDesc: "We provide high-impact VDF flooring, anti-chemical epoxy coatings, heavy RCC civil foundations, and anti-corrosive industrial painting engineered to withstand extreme mechanical loads and vibration.",
    image: "/images/flooring_industrial.jpg",
    keyServicesProvided: ["VDF & Epoxy Flooring", "Heavy RCC Foundations", "Anti-Corrosive Painting", "Groove Cutting"],
    featuredProjectsCount: 18
  },
  {
    id: "commercial",
    title: "Commercial",
    slug: "commercial",
    iconName: "Building",
    shortDesc: "Corporate office towers, retail malls, IT parks, technology hubs, and commercial complexes.",
    fullDesc: "Premium interior acoustic ceilings, designer texture paints, polished granite lobbies, drywall partitions, and modern architectural finishes built to reflect corporate authority.",
    image: "/images/painting_interior.jpg",
    keyServicesProvided: ["Designer Wall Textures", "False Ceilings & Partitions", "Granite & Vitrified Flooring", "Exterior Weatherproof Paint"],
    featuredProjectsCount: 24
  },
  {
    id: "residential",
    title: "Residential",
    slug: "residential",
    iconName: "Home",
    shortDesc: "Group housing societies, high-rise apartment towers, private villas, and residential developments.",
    fullDesc: "Flawless wall putty and velvet emulsion painting, decorative polish, durable basement PCC flooring, and precise masonry waterproofing for modern living spaces.",
    image: "/images/hero_painting.jpg",
    keyServicesProvided: ["All types of painting and maintenance services", "Waterproof Wall Coatings", "Basement Parking PCC", "Tile & Stone Laying"],
    featuredProjectsCount: 30
  },
  {
    id: "institutional",
    title: "Institutional",
    slug: "institutional",
    iconName: "GraduationCap",
    shortDesc: "Universities, engineering colleges, schools, government buildings, and research institutes.",
    fullDesc: "Reliable, large-scale painting, durable hallway floor tiles, sturdy RCC civil additions, and routine structural rehabilitation delivered during academic breaks.",
    image: "/images/civil_construction.jpg",
    keyServicesProvided: ["For all maintenance and painting", "Kota Stone & Terrazzo Flooring", "Civil Structure Maintenance", "Auditorium Acoustic Ceilings"],
    featuredProjectsCount: 15
  },
  {
    id: "healthcare",
    title: "Hospitals",
    slug: "healthcare",
    iconName: "Hospital",
    shortDesc: "Providing turnkey services to hospitals with execution perfected for active, sensitive hospital environments.",
    fullDesc: "We provide specialized anti-bacterial PU flooring, zero-VOC odorless paints, and sterile civil maintenance engineered specifically to operate cleanly and silently in active hospital environments without disrupting patient care.",
    image: "/images/flooring_industrial.jpg",
    keyServicesProvided: ["Hospital Environment Execution", "Anti-Bacterial Wall Coatings", "Zero-VOC Odorless Paints", "Seamless Wall Coving"],
    featuredProjectsCount: 12
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Quality Assured",
    description: "We work exclusively with certified raw materials (Asian Paints, Berger, UltraTech Cement, Fosroc Epoxy) and adhere to strict quality checklists.",
    iconName: "ShieldCheck"
  },
  {
    title: "Experienced Team",
    description: "Our workforce includes seasoned civil engineers, site supervisors, certified VDF operators, and master paint technicians.",
    iconName: "Users"
  },
  {
    title: "On-Time Delivery",
    description: "We deploy structured project gantt charts and dedicated site leads to ensure guaranteed target date execution without compromises.",
    iconName: "Clock"
  },
  {
    title: "Honest & Transparent",
    description: "No hidden costs or scope creep. Clear line-item estimates, precise material specifications, and upfront communication.",
    iconName: "FileCheck"
  },
  {
    title: "Complete Solutions",
    description: "Painting, flooring, and civil construction unified under one reliable contractor—simplifying management and vendor coordination.",
    iconName: "Layers"
  },
  {
    title: "PAN India Service",
    description: "Strategically headquartered in Greater Noida, equipped with mobile machinery and teams capable of mobilizing across India.",
    iconName: "MapPin"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "We engage directly with your team to review project goals, architectural blueprints, timeline targets, and material preferences."
  },
  {
    step: "02",
    title: "Site Assessment",
    description: "Our engineers visit the site to take precise laser measurements, evaluate sub-floor/wall dampness, and formulate a detailed quote."
  },
  {
    step: "03",
    title: "Execution",
    description: "Certified field personnel execute works using industrial tools (power trowels, spray rigs, laser levels) with daily safety audits."
  },
  {
    step: "04",
    title: "Completion",
    description: "We conduct multi-point joint quality inspections, clean the site thoroughly, and issue project handover documentation with warranties."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Roshan Enterprises completed over 40,000 sq.ft. of heavy VDF flooring for our industrial plant in Greater Noida ahead of schedule. Their laser leveling precision and groove cutting work were exceptional.",
    author: "Plant Head & Operations Manager",
    company: "Sperry Techno Solutions",
    rating: 5
  },
  {
    quote: "The painting and false ceiling works executed across our regional facilities were completed with top quality materials. Their team managed the site with strict safety standards and neat execution.",
    author: "Infrastructure Project Lead",
    company: "Sperry Group",
    rating: 5
  },
  {
    quote: "Finding a single contractor who can seamlessly handle high-durability epoxy flooring, RCC foundations, and elastomeric building painting is rare. Roshan Enterprises is our trusted partner.",
    author: "Facility Engineering Director",
    company: "E-Pack Polymer Technologies Pvt. Ltd.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "Which locations does Roshan Enterprises serve?",
    answer: "Our central headquarters is in Greater Noida, Uttar Pradesh. However, we have mobile execution teams and specialized equipment that handle projects across PAN India (Delhi NCR, Haryana, Rajasthan, Gujarat, UP, Maharashtra, and beyond)."
  },
  {
    question: "Do you offer warranties on painting and flooring works?",
    answer: "Yes! We provide project-specific warranties ranging from 3 to 10 years depending on the chosen material grade, epoxy thickness, or paint specifications, backed by manufacturer documentation."
  },
  {
    question: "What is the turn-around time for a site inspection and quote?",
    answer: "Upon receiving your inquiry, our project engineering team contacts you within 2 to 4 hours. Site assessments in Greater Noida & Delhi NCR are typically conducted within 24 hours."
  },
  {
    question: "Can you execute works in fully operational or occupied facilities?",
    answer: "Absolutely. We utilize dust-extracted floor grinders, zero-VOC low-odor paints, and staged night-shift work plans so your daily business operations remain uninterrupted."
  }
];
