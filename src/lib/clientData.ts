export interface ClientCompanyDetail {
  slug: string;
  name: string;
  legalName: string;
  category: string;
  sector: 'Industrial' | 'Commercial' | 'Manufacturing' | 'Infra' | 'Logistics' | 'Institutional' | 'Healthcare';
  location: string;
  established: string;
  websiteUrl: string;
  youtubeVideoId: string;
  youtubeTitle: string;
  logoSvg: string;
  logoImg?: string;
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
    youtubeTitle: "Sperry Group Industrial Manufacturing Plant Walkthrough",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/sperry.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#03182B"/><text x="50" y="35" fill="#FFFFFF" font-weight="900" font-size="18">SPERRY</text></svg>`,
    overview: "Sperry Group (Sperry Plast Limited) is an ISO 9001:2015 certified Star Export House with over 30 years of excellence in polymer compounding, thermoplastic rubber (TPR), injection molding machinery, EPS packaging, and CPVC piping systems.",
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
    name: "E-Pack Polymer Technologies Pvt. Ltd.",
    legalName: "E-Pack Polymer Technologies Private Limited / EPACK Prefab",
    category: "Polymers & Packaging",
    sector: "Manufacturing",
    location: "Greater Noida & Neemrana",
    established: "2003",
    websiteUrl: "https://www.epackdurable.com",
    youtubeVideoId: "4y8w9gW6N2k",
    youtubeTitle: "E-Pack Polymer Technologies Corporate Manufacturing Plant Walkthrough",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/epack.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#06233D"/><text x="65" y="35" fill="#FFFFFF" font-weight="900" font-size="18">EPACK</text></svg>`,
    overview: "E-Pack Polymer Technologies Private Limited is a leading manufacturer specializing in high-performance polymer packaging, EPS solutions, and technical moulded components operating major manufacturing plants across Greater Noida and NCR.",
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
      }
    ],
    specifications: [
      { label: "Cleanroom Standard", value: "Dust-Free Class 1000" },
      { label: "Facility Area", value: "120,000 sq.ft." },
      { label: "Contractor Partner", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "lg-electronics",
    name: "LG Electronics India",
    legalName: "LG Electronics India Private Limited",
    category: "Electronics & Appliances",
    sector: "Manufacturing",
    location: "Greater Noida & Pune",
    established: "1997",
    websiteUrl: "https://www.lg.com/in",
    youtubeVideoId: "4y8w9gW6N2k",
    youtubeTitle: "LG Electronics India Industrial Manufacturing Facility Walkthrough",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/lg.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#000000"/><text x="80" y="38" fill="#FFFFFF" font-weight="900" font-size="22">LG</text></svg>`,
    overview: "LG Electronics India Pvt. Ltd. is a global leader in consumer electronics, home appliances, and industrial manufacturing operating mega manufacturing hubs in Greater Noida and Pune.",
    roshanContractScope: {
      title: "Heavy Machine RCC Foundations & Anti-Static Epoxy Flooring",
      areaDelivered: "95,000 Sq. Ft.",
      services: [
        "Heavy Duty Anti-Static Epoxy Assembly Line Floor",
        "Vibration Proof RCC Press Machine Foundations",
        "Polyurethane High-Gloss Exterior Wall Coating",
        "Industrial Floor Line Marking & PU Sealant"
      ],
      description: "Roshan Enterprises executed high-precision heavy RCC machinery foundations and anti-static self-leveling epoxy flooring for high-volume automated production lines."
    },
    reviews: [
      {
        author: "Senior Vice President (Manufacturing & Infrastructure)",
        role: "Plant Operations",
        rating: 5,
        date: "January 2026",
        comment: "Roshan Enterprises completed the heavy RCC foundations and anti-static floor coating with exceptional speed and zero downtime for our active plant lines."
      }
    ],
    specifications: [
      { label: "Facility", value: "Greater Noida Plant" },
      { label: "Flooring Grade", value: "3mm Self-Leveling Anti-Static ESD Epoxy" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "inox-air-products",
    name: "INOX Air Products",
    legalName: "INOX Air Products Private Limited",
    category: "Industrial Gases & Engineering",
    sector: "Industrial",
    location: "PAN India Plant Sites",
    established: "1963",
    websiteUrl: "https://www.inoxairproducts.com",
    youtubeVideoId: "5qap5aO4i9A",
    youtubeTitle: "INOX Air Products Cryogenic Industrial Facility Walkthrough",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/inox.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#06233D"/><text x="50" y="38" fill="#FFFFFF" font-weight="900" font-size="18">INOX AIR</text></svg>`,
    overview: "INOX Air Products is India's premier manufacturer and supplier of industrial and medical gases, operating over 45 air separation plants nationwide.",
    roshanContractScope: {
      title: "Cryogenic Machine Foundations & Anti-Corrosive Enamel Spraying",
      areaDelivered: "50,000 Sq. Ft.",
      services: [
        "Cryogenic Storage Vessel Concrete Pads",
        "Anti-Corrosive Structural Steel Coating",
        "High-Strength VDF Dewatered Flooring",
        "Industrial Boundary Wall Civil Work"
      ],
      description: "Turnkey structural civil works, anti-corrosive protective coatings, and heavy load concrete pads for gas compression and storage equipment."
    },
    reviews: [
      {
        author: "Project Operations Head",
        role: "Industrial Projects",
        rating: 5,
        date: "November 2025",
        comment: "Flawless technical execution of heavy equipment pads and weather-resistant industrial structure painting."
      }
    ],
    specifications: [
      { label: "Industry", value: "Industrial & Medical Gases" },
      { label: "Coating Type", value: "Anti-Corrosive Structural Enamel" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "haldirams",
    name: "Haldiram's Group",
    legalName: "Haldiram Snacks Private Limited",
    category: "Food Processing & Commercial",
    sector: "Commercial",
    location: "Noida & PAN India Outlets",
    established: "1937",
    websiteUrl: "https://www.haldiram.com",
    youtubeVideoId: "L_LUpnjgPso",
    youtubeTitle: "Haldiram Corporate Facility & Commercial Complex Tour",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/haldirams.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#FF0000"/><text x="50" y="38" fill="#FFFFFF" font-weight="900" font-size="18">HALDIRAMS</text></svg>`,
    overview: "Haldiram's is India's most iconic sweet, snack, and food manufacturing giant with extensive commercial retail hubs and food processing units across India and international markets.",
    roshanContractScope: {
      title: "Food-Grade Hygienic Epoxy Flooring & Commercial Facade Painting",
      areaDelivered: "60,000 Sq. Ft.",
      services: [
        "Food-Grade Polyurethane & Epoxy Floor Coating",
        "Hygienic Washable Interior Wall Coating",
        "Commercial Retail Outlet Facade Painting",
        "Vitrified Floor Tiling & Acoustic Ceilings"
      ],
      description: "Roshan Enterprises executed food-grade seamless hygienic epoxy flooring for processing lines along with elastomeric weather-proof facade painting for commercial hubs."
    },
    reviews: [
      {
        author: "General Manager (Projects)",
        role: "Corporate Infrastructure",
        rating: 5,
        date: "February 2026",
        comment: "Roshan Enterprises delivered top-tier food-grade flooring and facade painting with exemplary quality control."
      }
    ],
    specifications: [
      { label: "Standard", value: "Food-Grade Hygiene Certified" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "east-india-industries",
    name: "East India Group",
    legalName: "East India Commercial & Industrial Corporation",
    category: "Commercial & Infra",
    sector: "Commercial",
    location: "Delhi NCR & Uttar Pradesh",
    established: "1998",
    websiteUrl: "https://www.roshanenterprises.co.in/projects",
    youtubeVideoId: "L_LUpnjgPso",
    youtubeTitle: "East India Commercial Hub Facade & Interior Architectural Tour",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/east_india.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#06233D"/><text x="70" y="35" fill="#FFFFFF" font-weight="900" font-size="16">EAST INDIA</text></svg>`,
    overview: "East India Group operates major commercial real estate complexes, metal fabrication units, and commercial logistics hubs across Northern India.",
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
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "tirath-ram-shah-hospital",
    name: "Tirath Ram Shah Hospital (TRSCH)",
    legalName: "Seth Tirath Ram Shah Charitable Hospital (Estd. 1955)",
    category: "Healthcare & Medical",
    sector: "Commercial",
    location: "Civil Lines, Rajpur Road, Delhi",
    established: "1955",
    websiteUrl: "https://www.tirathramhospital.com",
    youtubeVideoId: "fJ9rUzIMcZQ",
    youtubeTitle: "Tirath Ram Shah Hospital Infrastructure Walkthrough",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/trsch.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#06233D"/><text x="55" y="35" fill="#FFFFFF" font-weight="900" font-size="14">TRSCH</text></svg>`,
    overview: "Tirath Ram Shah Hospital (TRSCH) is a premier NABH accredited multi-specialty hospital located in Civil Lines, Delhi, serving the nation with world-class healthcare, advanced operation theatres, ICUs, and medical infrastructure since 1955.",
    roshanContractScope: {
      title: "Hospital Ward Anti-Bacterial Flooring & Exterior Facade Coating",
      areaDelivered: "65,000 Sq. Ft.",
      services: [
        "Hygienic Anti-Bacterial Epoxy Flooring",
        "ICU & OT Seamless Hygienic Wall Coating",
        "Exterior Weatherproof Facade Renovation",
        "Waterproofing & Internal Civil Repairs"
      ],
      description: "Roshan Enterprises executed anti-bacterial hygienic flooring, specialized OT wall coatings, and complete exterior facade painting for Tirath Ram Shah Hospital."
    },
    reviews: [
      {
        author: "Hospital Administration",
        role: "Infrastructure Committee",
        rating: 5,
        date: "October 2025",
        comment: "Roshan Enterprises delivered high-standard anti-bacterial flooring and hospital wall coatings with minimal disruption to active patient care."
      }
    ],
    specifications: [
      { label: "Accreditation", value: "NABH Accredited" },
      { label: "Flooring System", value: "Hygienic Anti-Bacterial Epoxy" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "mahanandan-hospital",
    name: "Mahanandan Super Speciality Hospital",
    legalName: "Mahanandan Super Speciality Hospital & Research Center",
    category: "Healthcare & Medical",
    sector: "Commercial",
    location: "Delhi NCR",
    established: "2015",
    websiteUrl: "https://www.roshanenterprises.co.in/clients/mahanandan-hospital",
    youtubeVideoId: "fJ9rUzIMcZQ",
    youtubeTitle: "Mahanandan Super Speciality Hospital Infrastructure Tour",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/mahanandan.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#06233D"/><text x="40" y="35" fill="#FFFFFF" font-weight="900" font-size="14">MAHANANDAN</text></svg>`,
    overview: "Mahanandan Super Speciality Hospital is a modern patient-centric healthcare institution equipped with state-of-the-art neurosurgery, ICUs, and advanced surgical care units.",
    roshanContractScope: {
      title: "Sterile OT Flooring & Anti-Microbial Interior Painting",
      areaDelivered: "45,000 Sq. Ft.",
      services: [
        "Sterile Cleanroom Anti-Bacterial Vinyl Flooring",
        "Zero-VOC Anti-Microbial Wall Coating",
        "ICU & Patient Ward Renovation",
        "Waterproof Bathroom & Basement Sealing"
      ],
      description: "Turnkey sterile anti-microbial wall painting and hygienic floor coving executed under strict dust-free containment for operational hospital wings."
    },
    reviews: [
      {
        author: "Project Medical Director",
        role: "Hospital Management",
        rating: 5,
        date: "January 2026",
        comment: "Roshan Enterprises engineered immaculate sterile coatings and anti-bacterial flooring with zero noise or dust leakages into surrounding wards."
      }
    ],
    specifications: [
      { label: "Type", value: "Super Speciality Hospital" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "ess-kay-group",
    name: "ESS KAY Group",
    legalName: "ESS KAY Group & Infrastructure Private Limited",
    category: "Industrial & Infra",
    sector: "Infra",
    location: "Greater Noida & Delhi NCR",
    established: "2005",
    websiteUrl: "https://www.roshanenterprises.co.in/projects",
    youtubeVideoId: "3JZ_D3ELwOQ",
    youtubeTitle: "ESS KAY Group Structural Execution & Concrete Works",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/ess_kay.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#03182B"/><text x="50" y="35" fill="#FFFFFF" font-weight="900" font-size="16">ESS KAY</text></svg>`,
    overview: "ESS KAY Group is a leading industrial infrastructure and commercial development conglomerate executing large-scale structural civil engineering across North India.",
    roshanContractScope: {
      title: "Heavy RCC Structural Framing & Industrial VDF Flooring",
      areaDelivered: "75,000 Sq. Ft.",
      services: [
        "Heavy Duty RCC Column & Slab Shuttering",
        "VDF Concrete Floor Levelling & Compaction",
        "AAC Block Masonry Division Walls",
        "External Grit & Weatherproof Plastering"
      ],
      description: "Structural RCC framing and VDF concrete floor compaction for high-load industrial logistics and manufacturing facilities."
    },
    reviews: [
      {
        author: "Managing Partner",
        role: "Infrastructure Lead",
        rating: 5,
        date: "December 2025",
        comment: "Roshan Enterprises is our go-to sub-contractor for heavy RCC shuttering and VDF flooring execution."
      }
    ],
    specifications: [
      { label: "Concrete Grade", value: "IS 456 M30 RCC" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "romsons-healthcare",
    name: "Romsons Group",
    legalName: "Romsons Scientific & Surgical Private Limited",
    category: "Medical Devices & Healthcare",
    sector: "Manufacturing",
    location: "Noida & PAN India",
    established: "1952",
    websiteUrl: "https://www.romsons.com",
    youtubeVideoId: "4y8w9gW6N2k",
    youtubeTitle: "Romsons Corporate Manufacturing Facility Walkthrough",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/romsons.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#008080"/><text x="45" y="35" fill="#FFFFFF" font-weight="900" font-size="16">ROMSONS</text></svg>`,
    overview: "Romsons Group is India's pioneer in medical devices and disposable surgical products with over 70 years of innovation exporting to 100+ countries.",
    roshanContractScope: {
      title: "Cleanroom Anti-Static Epoxy & Hygienic PU Wall Coating",
      areaDelivered: "80,000 Sq. Ft.",
      services: [
        "Self-Leveling Cleanroom Epoxy Flooring",
        "Seamless Anti-Bacterial PU Wall Coating",
        "Machine Foundation Concrete Pads",
        "Low-VOC Environmental Wall Paint"
      ],
      description: "Roshan Enterprises delivered dust-free cleanroom epoxy flooring and anti-bacterial PU wall coatings for medical device manufacturing plants."
    },
    reviews: [
      {
        author: "VP Infrastructure & Operations",
        role: "Corporate Quality",
        rating: 5,
        date: "January 2026",
        comment: "Roshan Enterprises delivered immaculate cleanroom flooring meeting strict international sterile manufacturing guidelines."
      }
    ],
    specifications: [
      { label: "Certification", value: "ISO 13485 Medical Cleanroom" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  },
  {
    slug: "bimtech",
    name: "BIMTECH (Birla Institute)",
    legalName: "Birla Institute of Management Technology",
    category: "Institutional & Campus",
    sector: "Institutional",
    location: "Knowledge Park II, Greater Noida",
    established: "1988",
    websiteUrl: "https://www.bimtech.ac.in",
    youtubeVideoId: "3JZ_D3ELwOQ",
    youtubeTitle: "BIMTECH Birla Institute Campus Infrastructure Walkthrough",
    logoBg: "#FFFFFF",
    logoImg: "/images/clients/bimtech.png",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none"><rect width="200" height="60" fill="#03182B"/><text x="40" y="35" fill="#FFFFFF" font-weight="900" font-size="16">BIMTECH</text></svg>`,
    overview: "Birla Institute of Management Technology (BIMTECH) is a premier AICTE-approved B-school in Greater Noida, featuring world-class academic blocks, hostels, and green eco-campuses.",
    roshanContractScope: {
      title: "Campus Facade Painting, Kota Stone & Auditorium Acoustic Ceilings",
      areaDelivered: "85,000 Sq. Ft.",
      services: [
        "Academic Block Weatherproof Facade Coating",
        "Auditorium Acoustic False Ceiling Grid",
        "Campus Hallway Kota Stone Mirror Polishing",
        "Internal Classroom Smooth Gypsum Plaster"
      ],
      description: "Roshan Enterprises completed turnkey exterior weather-proof painting, auditorium acoustic false ceilings, and hallway Kota stone polishing for BIMTECH."
    },
    reviews: [
      {
        author: "Estate & Infrastructure Lead",
        role: "Campus Maintenance",
        rating: 5,
        date: "December 2025",
        comment: "Roshan Enterprises completed the campus block painting and acoustic ceiling works with superior finish during our academic break."
      }
    ],
    specifications: [
      { label: "Campus Area", value: "Knowledge Park II, Greater Noida" },
      { label: "Contractor", value: "Roshan Enterprises" }
    ]
  }
];
