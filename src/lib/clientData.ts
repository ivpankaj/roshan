export interface ClientCompanyDetail {
  slug: string;
  name: string;
  legalName: string;
  category: string;
  sector: 'Industrial' | 'Commercial' | 'Manufacturing' | 'Infra' | 'Logistics';
  location: string;
  established: string;
  websiteUrl: string;
  youtubeVideoId: string;
  youtubeTitle: string;
  logoSvg: string;
  logoBg: string;
  overview: string;
  roshanContractScope: {
    title: string;
    areaDelivered: string;
    services: string[];
    description: string;
  };
  reviews: {
    author: string;
    role: string;
    rating: number;
    date: string;
    comment: string;
  }[];
  specifications: { label: string; value: string }[];
}

export const CLIENTS_LIST: ClientCompanyDetail[] = [
  {
    slug: "sperry-group",
    name: "Sperry Group",
    legalName: "Sperry Plast Limited / Sperry Group",
    category: "Industrial & Polymers",
    sector: "Manufacturing",
    location: "Udyog Vihar, Greater Noida & Delhi NCR",
    established: "1992",
    websiteUrl: "http://www.sperryplastlimited.net",
    youtubeVideoId: "5qap5aO4i9A",
    youtubeTitle: "Sperry Group Industrial Manufacturing & Plastics Plant Overview",
    logoBg: "#03182B",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
      <rect width="200" height="60" fill="#03182B"/>
      <path d="M20 12 L38 25 L20 38 L38 50" stroke="#F0B323" stroke-width="5" stroke-linecap="square"/>
      <circle cx="29" cy="31" r="5" fill="#D99A16"/>
      <text x="50" y="32" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="18" letter-spacing="1">SPERRY</text>
      <text x="50" y="46" fill="#D99A16" font-family="Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3">GROUP</text>
    </svg>`,
    overview: "Sperry Group (Sperry Plast Limited) is an ISO 9001:2015 certified Star Export House with over 30 years of excellence in polymer compounding, thermoplastic rubber (TPR), injection molding machinery, EPS packaging, and CPVC piping systems operating major facilities in Greater Noida, Chennai, and Jammu.",
    roshanContractScope: {
      title: "Heavy Industrial VDF Flooring & Weatherproof Exterior Paint",
      areaDelivered: "55,000 Sq. Ft.",
      services: [
        "VDF Concrete Floor Compaction (M30 Grade)",
        "Diamond Saw Groove Cutting & PU Sealant",
        "Elastomeric Exterior Building Coating",
        "Crane Structural Enamel Spraying"
      ],
      description: "Roshan Enterprises executed turnkey high-durability VDF vacuum dewatered concrete flooring capable of handling heavy forklift and injection molding machinery vibration, combined with complete weather-proof elastomeric facade painting."
    },
    reviews: [
      {
        author: "Virendra Sperry",
        role: "Managing Director",
        rating: 5,
        date: "October 2025",
        comment: "Roshan Enterprises delivered over 55,000 sq.ft. of VDF flooring and anti-corrosive structure painting for our Greater Noida industrial plant. Their laser slope precision and zero-delay execution were exceptional."
      },
      {
        author: "Rajesh Sharma",
        role: "General Manager (Operations & Infrastructure)",
        rating: 5,
        date: "August 2025",
        comment: "Outstanding professional team. They executed the heavy machine foundations and flooring with strict quality testing of sand, cement mix, and joint filling."
      }
    ],
    specifications: [
      { label: "Plant Footprint", value: "85,000 sq.ft." },
      { label: "Sector", value: "Polymers & Engineering" },
      { label: "Certification", value: "ISO 9001:2015" },
      { label: "Turnkey Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "epack-durable",
    name: "E-Packs Durable Ltd.",
    legalName: "EPACK Durable Limited (BSE & NSE Listed)",
    category: "Electronics & Appliances",
    sector: "Manufacturing",
    location: "Greater Noida & Neemrana",
    established: "2003",
    websiteUrl: "https://www.epackdurable.com",
    youtubeVideoId: "4y8w9gW6N2k",
    youtubeTitle: "EPACK Durable Corporate Manufacturing Plant & CEO Interview",
    logoBg: "#06233D",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
      <rect width="200" height="60" fill="#06233D"/>
      <path d="M15 15 H40 V25 H25 V35 H38 V45 H15 V15 Z" fill="#D99A16"/>
      <path d="M42 15 H55 V45 H42 V15 Z" fill="#F0B323"/>
      <text x="65" y="32" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="18" letter-spacing="1">EPACK</text>
      <text x="65" y="46" fill="#F0B323" font-family="Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2">DURABLE LTD</text>
    </svg>`,
    overview: "EPACK Durable Ltd. is India's leading Original Design Manufacturer (ODM) specializing in room air conditioners (RAC), home appliances, injection molding, and electronic PCBAs serving top global appliance brands with public listing on BSE & NSE.",
    roshanContractScope: {
      title: "Cleanroom Anti-Static Epoxy & RCC Machinery Bases",
      areaDelivered: "70,000 Sq. Ft.",
      services: [
        "3mm Self-Leveling Anti-Static Epoxy Flooring",
        "Seamless Polyurethane Cleanroom Wall Coving",
        "Heavy RCC Vibration Machine Pads",
        "Low-VOC Odorless Interior Wall Coating"
      ],
      description: "Roshan Enterprises provided seamless, chemical-resistant anti-bacterial PU and self-leveling epoxy flooring for cleanroom electronics assembly lines, engineered to maintain dust-free manufacturing compliance."
    },
    reviews: [
      {
        author: "Ajay Singhania",
        role: "CEO & Managing Director",
        rating: 5,
        date: "December 2025",
        comment: "Finding a contracting partner capable of delivering chemical-resistant epoxy flooring and heavy RCC structural pads simultaneously is difficult. Roshan Enterprises exceeded our technical standards."
      },
      {
        author: "Sanjay Singhal",
        role: "VP Corporate Procurement",
        rating: 5,
        date: "September 2025",
        comment: "Their site team worked night shifts to complete the epoxy recoating without stopping our active assembly line operations."
      }
    ],
    specifications: [
      { label: "Listed Entity", value: "BSE (544095) & NSE" },
      { label: "Cleanroom Standard", value: "Dust-Free Class 1000" },
      { label: "Facility Area", value: "120,000 sq.ft." },
      { label: "Contractor Partner", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "techno-solution",
    name: "Techno Solution Plast",
    legalName: "Sperry Techno Solutions / Techno Solution Plast Ltd.",
    category: "Plastics & Moulding",
    sector: "Industrial",
    location: "Knowledge Park & Udyog Vihar",
    established: "2008",
    websiteUrl: "http://www.sperryplastlimited.net",
    youtubeVideoId: "5qap5aO4i9A",
    youtubeTitle: "Techno Solution Plast Industrial Moulding Plant Walkthrough",
    logoBg: "#03182B",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
      <rect width="200" height="60" fill="#03182B"/>
      <rect x="15" y="15" width="30" height="30" fill="none" stroke="#D99A16" stroke-width="4"/>
      <path d="M22 22 H38 V38 H22 V22 Z" fill="#F0B323"/>
      <text x="55" y="30" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="15" letter-spacing="1">TECHNO SOLUTION</text>
      <text x="55" y="44" fill="#D99A16" font-family="Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2">PLAST LIMITED</text>
    </svg>`,
    overview: "Techno Solution Plast Limited is a specialized industrial moulding and tooling company supplying high-precision plastic components, automotive sub-assemblies, and industrial containers across Delhi NCR.",
    roshanContractScope: {
      title: "Warehouse PCC Flooring & Anti-Corrosive Machine Painting",
      areaDelivered: "40,000 Sq. Ft.",
      services: [
        "PCC Basement Floor Levelling & Concrete Slope",
        "Synthetic Enamel Coating for Industrial Cranes",
        "AAC Block Masonry Division Walls",
        "Waterproof Basements Sealing"
      ],
      description: "Roshan Enterprises completed turnkey PCC basement levelling, industrial structural enamel painting, and AAC block masonry walls for their plant expansion."
    },
    reviews: [
      {
        author: "Manish Kumar",
        role: "Plant Head & Infrastructure Manager",
        rating: 5,
        date: "November 2025",
        comment: "Roshan Enterprises completed over 40,000 sq.ft. of PCC levelling and industrial painting ahead of schedule. Highly recommended contractor."
      }
    ],
    specifications: [
      { label: "Plant Location", value: "Udyog Vihar" },
      { label: "Specialization", value: "Industrial Moulding" },
      { label: "Floor Strength", value: "M25 Heavy Load Concrete" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "east-india-industries",
    name: "East India Industries",
    legalName: "East India Commercial & Industrial Corporation",
    category: "Commercial & Infra",
    sector: "Commercial",
    location: "Delhi NCR & Uttar Pradesh",
    established: "1998",
    websiteUrl: "https://www.roshanenterprises.co.in/projects",
    youtubeVideoId: "L_LUpnjgPso",
    youtubeTitle: "East India Commercial Hub Facade & Interior Architectural Tour",
    logoBg: "#06233D",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
      <rect width="200" height="60" fill="#06233D"/>
      <path d="M20 45 L35 15 L50 45 Z" fill="#D99A16"/>
      <path d="M35 15 L50 45 L65 15 Z" stroke="#F0B323" stroke-width="3"/>
      <text x="70" y="32" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="16" letter-spacing="1">EAST INDIA</text>
      <text x="70" y="46" fill="#D99A16" font-family="Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2">INDUSTRIES</text>
    </svg>`,
    overview: "East India Industries operates major commercial real estate complexes, metal fabrication units, and commercial logistics hubs across Northern India.",
    roshanContractScope: {
      title: "Commercial Facade Elastomeric Painting & Acoustic Ceilings",
      areaDelivered: "60,000 Sq. Ft.",
      services: [
        "Elastomeric Exterior Facade Coating",
        "Gypsum Board False Ceiling Grid",
        "Drywall Metal Stud Partitions",
        "Granite & Vitrified Floor Laying"
      ],
      description: "Turnkey exterior weather-proof painting and acoustic false ceiling installation for multi-floor commercial complexes."
    },
    reviews: [
      {
        author: "Alok Gupta",
        role: "Director of Facilities",
        rating: 5,
        date: "January 2026",
        comment: "The finish quality on our exterior facade and interior false ceilings was top class. Roshan Enterprises delivered line-item accuracy with no cost overruns."
      }
    ],
    specifications: [
      { label: "Property Type", value: "Commercial Complex" },
      { label: "Paint Warranty", value: "10-Year Weatherproof" },
      { label: "Ceiling Grid", value: "Acoustic Gypsum Tile" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "mahesh-infra",
    name: "Mahesh Infra Project",
    legalName: "Mahesh Infra Projects & Contracting Ltd.",
    category: "Civil Sub-Contracting",
    sector: "Infra",
    location: "PAN India Sites",
    established: "2010",
    websiteUrl: "https://www.roshanenterprises.co.in/projects",
    youtubeVideoId: "3JZ_D3ELwOQ",
    youtubeTitle: "Mahesh Infra Concrete Structural Execution & Machine Pouring",
    logoBg: "#03182B",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
      <rect width="200" height="60" fill="#03182B"/>
      <path d="M15 45 V15 L30 30 L45 15 V45 Z" fill="#F0B323"/>
      <text x="55" y="32" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="16" letter-spacing="1">MAHESH INFRA</text>
      <text x="55" y="46" fill="#D99A16" font-family="Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2">PROJECTS</text>
    </svg>`,
    overview: "Mahesh Infra Project is a specialized civil infrastructure contractor handling sub-contracting for heavy RCC foundations, bridges, industrial columns, and masonry work.",
    roshanContractScope: {
      title: "Heavy Structural RCC Framing & External Grit Plaster",
      areaDelivered: "80,000 Sq. Ft.",
      services: [
        "RCC Column, Beam & Slab Shuttering",
        "High Compressive Concrete Pouring (M30)",
        "External Grit Plastering",
        "AAC Block Masonry"
      ],
      description: "Execution of structural RCC concrete framing and external weather-resistant grit plastering for large-scale industrial projects."
    },
    reviews: [
      {
        author: "Mahesh Verma",
        role: "Managing Partner",
        rating: 5,
        date: "December 2025",
        comment: "Roshan Enterprises is our trusted execution arm for heavy RCC shuttering and concrete pouring. Outstanding civil engineering team."
      }
    ],
    specifications: [
      { label: "Concrete Grade", value: "IS 456 M30 RCC" },
      { label: "Masonry Type", value: "AAC Blocks & Mortar" },
      { label: "Execution Standard", value: "NBC Compliant" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "tirath-estate",
    name: "Tirath Commercial Estate",
    legalName: "Tirath Commercial Estate & Logistics Parks",
    category: "Real Estate & Logistics",
    sector: "Logistics",
    location: "Greater Noida & Delhi NCR",
    established: "2012",
    websiteUrl: "https://www.roshanenterprises.co.in/projects",
    youtubeVideoId: "fJ9rUzIMcZQ",
    youtubeTitle: "Tirath Logistics Park VDF Floor & Warehouse Facility Walkthrough",
    logoBg: "#06233D",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
      <rect width="200" height="60" fill="#06233D"/>
      <path d="M20 15 H50 V25 H35 V45 H20 V15 Z" fill="#D99A16"/>
      <text x="60" y="32" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="16" letter-spacing="1">TIRATH ESTATE</text>
      <text x="60" y="46" fill="#F0B323" font-family="Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2">LOGISTICS PARK</text>
    </svg>`,
    overview: "Tirath Commercial Estate develops prime industrial warehousing parks, commercial retail hubs, and logistics estates across the Delhi NCR region.",
    roshanContractScope: {
      title: "Logistics Park VDF Concrete Floor & Kota Stone Polishing",
      areaDelivered: "65,000 Sq. Ft.",
      services: [
        "VDF Concrete Logistics Flooring",
        "Kota Stone Floor Mirror Polishing",
        "Anti-Fungal Exterior Wall Sealing",
        "Groove Cutting & Elastomeric PU Joint Fill"
      ],
      description: "Heavy-duty VDF flooring with high forklift load endurance and mirror polished Kota stone for estate office lobbies."
    },
    reviews: [
      {
        author: "Tirath Singh",
        role: "Estate Development Head",
        rating: 5,
        date: "October 2025",
        comment: "The VDF concrete floor and Kota stone polishing delivered for our logistics park exceeded all tenant expectations."
      }
    ],
    specifications: [
      { label: "Logistics Area", value: "95,000 sq.ft." },
      { label: "Flooring System", value: "VDF Concrete & Kota Stone" },
      { label: "Forklift Load", value: "TR-34 Heavy Load Class" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  }
];
