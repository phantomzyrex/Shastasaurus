export type EvidenceLevel =
  | 'CONFIRMED'
  | 'ESTIMATE'
  | 'DEBATED'
  | 'INFERRED'
  | 'REJECTED'
  | 'ichthyosaur group trait';

export interface EvidenceLegendItem {
  level: EvidenceLevel;
  shortCode: string;
  meaning: string;
}

export const EVIDENCE_LEGEND: EvidenceLegendItem[] = [
  {
    level: 'CONFIRMED',
    shortCode: 'CFM',
    meaning: 'Directly supported by described fossil material of Shastasaurus.',
  },
  {
    level: 'ESTIMATE',
    shortCode: 'EST',
    meaning: 'Calculated from incomplete skeletons, scaling equations, or stage dating.',
  },
  {
    level: 'DEBATED',
    shortCode: 'DBT',
    meaning: 'Actively contested in peer-reviewed paleontological literature.',
  },
  {
    level: 'INFERRED',
    shortCode: 'INF',
    meaning: 'Deduced from indirect skeletal cues or closely related taxa.',
  },
  {
    level: 'ichthyosaur group trait',
    shortCode: 'GRP',
    meaning: 'Documented in Ichthyosauria broadly, not directly preserved in Shastasaurus.',
  },
];

export interface StatCardItem {
  id: string;
  label: string;
  value: string;
  detail: string;
  chips: EvidenceLevel[];
  subnote?: string;
}

export const HERO_ASSET_PRIMARY = '/assets/aistudio/Blue_Marine_Reptile_with_Curled_Tail_0aad539d.png';
export const HERO_ASSET_FALLBACK = '/assets/shastasaurus-hero.png';
export const SIDE_ASSET_FALLBACK = '/assets/shastasaurus-side.png';

export const OVERVIEW_STATS: StatCardItem[] = [
  {
    id: 'name-meaning',
    label: 'Name meaning',
    value: '“Mount Shasta lizard”',
    detail: 'Named for the Shasta region of northern California where the first fossils were found (Greek sauros, lizard).',
    chips: ['CONFIRMED'],
  },
  {
    id: 'lived',
    label: 'Lived',
    value: 'Late Triassic, Carnian stage (~237–227 Ma)',
    detail: 'About 237 to 227 million years ago (S. liangae: early Carnian; S. pacificus: late Carnian).',
    chips: ['CONFIRMED', 'ESTIMATE'],
    subnote: 'Dates approximate',
  },
  {
    id: 'length',
    label: 'Length',
    value: 'Over ~7 m (S. pacificus) · Up to 8.3 m (S. liangae)',
    detail: 'S. pacificus over about 7 m (23 ft), known from fragmentary remains. S. liangae up to 8.3 m (27 ft) for the largest specimen; a juvenile measured 3.74 m.',
    chips: ['ESTIMATE'],
  },
  {
    id: 'skull',
    label: 'Skull proportion',
    value: 'Only ~8–9% of total body length',
    detail: 'Only about 8–9% of total body length in S. liangae (8.3% adult, 9.3% juvenile), a very small head.',
    chips: ['CONFIRMED'],
  },
  {
    id: 'teeth',
    label: 'Teeth & jaws',
    value: 'Toothless snout (S. liangae)',
    detail: 'None in adult or juvenile S. liangae, with no tooth groove; S. pacificus probably similar, but its skull is incomplete.',
    chips: ['CONFIRMED', 'INFERRED'],
  },
  {
    id: 'diet',
    label: 'Diet',
    value: 'Unresolved feeding ecology',
    detail: 'Suggested prey is soft-bodied animals such as cephalopods and fish.',
    chips: ['DEBATED'],
  },
  {
    id: 'habitat',
    label: 'Habitat',
    value: 'Late Triassic open seas',
    detail: 'Late Triassic seas, with fossils from northern California and southwestern China.',
    chips: ['CONFIRMED'],
  },
  {
    id: 'group',
    label: 'Taxonomic group',
    value: 'Ichthyosauria · Family Shastasauridae',
    detail: 'Marine reptile clade that evolved pelagic adaptations independently of fish and cetaceans.',
    chips: ['CONFIRMED'],
  },
  {
    id: 'status',
    label: 'Status',
    value: 'Extinct',
    detail: 'Disappeared during the Late Triassic turnover prior to the Jurassic radiation of neoichthyosaurs.',
    chips: ['CONFIRMED'],
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  citation?: string;
  chip?: EvidenceLevel;
}

export const DISCOVERY_TIMELINE: TimelineEvent[] = [
  {
    year: '1895',
    title: 'Genus Established in Northern California',
    description: 'John C. Merriam names Shastasaurus pacificus from Triassic remains in northern California.',
    citation: 'Merriam (1895)',
    chip: 'CONFIRMED',
  },
  {
    year: '1902',
    title: 'Additional California Material Described',
    description: 'Merriam names two more species, S. alexandrae and S. osmonti; both are now regarded as the same animal as S. pacificus.',
    citation: 'Merriam (1902)',
    chip: 'CONFIRMED',
  },
  {
    year: '1997–2000',
    title: 'Excavation of the Sikanni Chief Giant',
    description: 'A giant ichthyosaur is excavated from the Pardonet Formation of northeastern British Columbia (now in the Royal Tyrrell Museum).',
    citation: 'Royal Tyrrell Museum',
    chip: 'CONFIRMED',
  },
  {
    year: '2000',
    title: 'Discovery in Guizhou Province, China',
    description: 'Yin et al. name Guanlingsaurus liangae from Guizhou Province, China.',
    citation: 'Yin et al. (2000)',
    chip: 'CONFIRMED',
  },
  {
    year: '2004',
    title: 'Canadian Giant Named Shonisaurus sikanniensis',
    description: 'Nicholls and Manabe describe the Canadian giant as Shonisaurus sikanniensis, up to about 21 m long (estimate).',
    citation: 'Nicholls & Manabe (2004)',
    chip: 'ESTIMATE',
  },
  {
    year: '2008',
    title: 'Review of the Guanling Biota',
    description: 'Wang et al. review the Guanling Biota, a Late Triassic fossil site of exceptional preservation with marine reptiles, fishes, ammonites and pelagic crinoids.',
    citation: 'Wang et al. (2008)',
    chip: 'CONFIRMED',
  },
  {
    year: '2011',
    title: 'Lumping & Suction-Feeding Proposal',
    description: 'Sander et al. move the Chinese species and the Canadian giant into Shastasaurus and propose that it was a toothless suction feeder.',
    citation: 'Sander et al. (2011)',
    chip: 'DEBATED',
  },
  {
    year: '2013',
    title: 'Taxonomic Split & Biomechanical Challenge',
    description: 'A juvenile Guanlingsaurus specimen (Ji et al.) shows features that make it distinct from Shastasaurus, and the genus name is revived. The same year, Motani et al. argue that shastasaurid ichthyosaurs do not fit a suction-feeding design.',
    citation: 'Ji et al. (2013); Motani et al. (2013)',
    chip: 'DEBATED',
  },
  {
    year: '2015',
    title: 'Lower Jurassic Welsh Limb Bone',
    description: 'Martin et al. describe a huge shastasaurid-type limb bone from the Lower Jurassic of Wales, estimated at 12–15 m body length.',
    citation: 'Martin et al. (2015)',
    chip: 'ESTIMATE',
  },
  {
    year: '2024',
    title: 'Ichthyotitan severnensis Named',
    description: 'Lomax et al. name the giant Ichthyotitan severnensis from England, with an estimated length of up to about 25 m.',
    citation: 'Lomax et al. (2024)',
    chip: 'ESTIMATE',
  },
  {
    year: 'Today',
    title: 'Active Phylogenetic Re-evaluation',
    description: 'The genus is still being reclassified as new cranial and postcranial analyses refine shastasaurid relationships.',
    chip: 'DEBATED',
  },
];

export interface AnatomyHotspot {
  id: string;
  label: string;
  xPercent: number;
  yPercent: number;
  description: string;
  chip: EvidenceLevel;
  chipNote?: string;
}

export const ANATOMY_HOTSPOTS: AnatomyHotspot[] = [
  {
    id: 'skull',
    label: 'Skull',
    xPercent: 18,
    yPercent: 60,
    description: 'Small, wide and triangular, with a short snout (S. liangae). About 8–9% of body length.',
    chip: 'CONFIRMED',
  },
  {
    id: 'jaws-teeth',
    label: 'Jaws and teeth',
    xPercent: 10,
    yPercent: 67,
    description: 'Toothless, with no tooth groove, even in juveniles (S. liangae).',
    chip: 'CONFIRMED',
  },
  {
    id: 'hyoid',
    label: 'Hyoid bones',
    xPercent: 25,
    yPercent: 66,
    description: 'The throat bones are short and narrow, which weakens the case for suction feeding.',
    chip: 'DEBATED',
  },
  {
    id: 'breathing',
    label: 'Breathing',
    xPercent: 21,
    yPercent: 52,
    description: 'Ichthyosaurs breathed air and had to surface.',
    chip: 'ichthyosaur group trait',
  },
  {
    id: 'body',
    label: 'Body',
    xPercent: 48,
    yPercent: 34,
    description: 'Long and slender in profile, very different from the deep-bodied "tuna" shape of later ichthyosaurs.',
    chip: 'CONFIRMED',
  },
  {
    id: 'dorsal-fin',
    label: 'Dorsal fin',
    xPercent: 54,
    yPercent: 15,
    description: 'Unknown. Many old reconstructions show a shark-like fin, but that is speculation. The oldest known dorsal fin in any ichthyosaur is in the smaller Mixosaurus.',
    chip: 'DEBATED',
    chipNote: 'unknown',
  },
  {
    id: 'skin-metabolism',
    label: 'Skin and metabolism',
    xPercent: 63,
    yPercent: 24,
    description: 'No soft tissue is known for Shastasaurus. A related Jurassic ichthyosaur, Stenopterygius, shows blubber and dark skin, suggesting warm-blooded animals (Lindgren et al., 2018).',
    chip: 'INFERRED',
    chipNote: 'from a relative',
  },
  {
    id: 'flippers',
    label: 'Flippers',
    xPercent: 44,
    yPercent: 72,
    description: 'Four paddle-shaped flippers with extra finger bones (hyperphalangy).',
    chip: 'ichthyosaur group trait',
  },
  {
    id: 'tail',
    label: 'Tail',
    xPercent: 90,
    yPercent: 18,
    description: 'The upper lobe of the tail fin was probably less developed than the shark-like tails of later ichthyosaurs.',
    chip: 'INFERRED',
  },
];

export interface SizeComparisonItem {
  id: string;
  name: string;
  lengthLabel: string;
  lengthMeters: number;
  category: 'reference' | 'confirmed' | 'relative';
  chip?: EvidenceLevel;
  note?: string;
}

export const SIZE_COMPARISON_ITEMS: SizeComparisonItem[] = [
  {
    id: 'human',
    name: 'Human diver',
    lengthLabel: '1.7 m',
    lengthMeters: 1.7,
    category: 'reference',
    note: 'Standard adult reference scale',
  },
  {
    id: 'great-white',
    name: 'Great white shark',
    lengthLabel: 'about 5–6 m',
    lengthMeters: 5.5,
    category: 'reference',
    note: 'Modern apex predatory fish (Carcharodon carcharias)',
  },
  {
    id: 'orca',
    name: 'Orca',
    lengthLabel: '6–8 m',
    lengthMeters: 7.0,
    category: 'reference',
    note: 'Modern oceanic dolphin (Orcinus orca)',
  },
  {
    id: 's-pacificus',
    name: 'Shastasaurus pacificus',
    lengthLabel: 'over 7 m',
    lengthMeters: 7.2,
    category: 'confirmed',
    chip: 'ESTIMATE',
    note: 'Type species from late Carnian of northern California; known from fragmentary remains; short, blunt snout profile',
  },
  {
    id: 's-liangae',
    name: 'Shastasaurus liangae',
    lengthLabel: '8.3 m',
    lengthMeters: 8.3,
    category: 'confirmed',
    chip: 'ESTIMATE',
    note: 'Largest complete specimen (juvenile measured 3.74 m); tiny skull (~8.3% of length) with short toothless snout',
  },
  {
    id: 'city-bus',
    name: 'City bus (single)',
    lengthLabel: 'about 12 m',
    lengthMeters: 12.0,
    category: 'reference',
    note: 'Standard transit bus benchmark',
  },
  {
    id: 'shonisaurus-sikanniensis',
    name: 'Shonisaurus sikanniensis',
    lengthLabel: 'up to about 21 m (estimate)',
    lengthMeters: 21.0,
    category: 'relative',
    chip: 'DEBATED',
    note: 'British Columbia giant; classification debated (moved to Shastasaurus in 2011, returned to Shonisaurus in 2013 & 2021)',
  },
  {
    id: 'two-city-buses',
    name: 'Two city buses end to end',
    lengthLabel: 'about 24 m',
    lengthMeters: 24.0,
    category: 'relative',
    note: '2 × 12 m transit buses placed end to end',
  },
  {
    id: 'ichthyotitan',
    name: 'Ichthyotitan severnensis',
    lengthLabel: 'up to about 25 m (estimate)',
    lengthMeters: 25.0,
    category: 'relative',
    chip: 'ESTIMATE',
    note: 'Named by Lomax et al. (2024) from the latest Triassic of England',
  },
];

export interface FossilLocality {
  id: string;
  title: string;
  region: string;
  species: string;
  age: string;
  formation: string;
  chip: EvidenceLevel;
  chipSublabel?: string;
  modernCoords: { x: number; y: number }; // SVG 0..1000 x 0..500
  triassicCoords: { x: number; y: number }; // Schematic Pangaea/Panthalassa 0..1000 x 0..500
  summary: string;
}

export const FOSSIL_LOCALITIES: FossilLocality[] = [
  {
    id: 'california',
    title: 'Northern California, USA',
    region: 'Shasta County, California',
    species: 'Shastasaurus pacificus (type species)',
    age: 'Late Carnian, Late Triassic',
    formation: 'Hosselkus Limestone',
    chip: 'CONFIRMED',
    modernCoords: { x: 185, y: 175 },
    triassicCoords: { x: 335, y: 215 },
    summary: 'Type locality where John C. Merriam described S. pacificus in 1895 (and S. alexandrae and S. osmonti in 1902, now regarded as synonyms of S. pacificus).',
  },
  {
    id: 'china',
    title: 'Guanling, Guizhou Province, China',
    region: 'Southwestern China',
    species: 'S. liangae (originally Guanlingsaurus liangae)',
    age: 'Early Carnian, Late Triassic',
    formation: 'Wayao Member of the Falang Formation (also called the Xiaowa Formation)',
    chip: 'CONFIRMED',
    modernCoords: { x: 765, y: 215 },
    triassicCoords: { x: 645, y: 225 },
    summary: 'Exceptional marine black shales yielding complete adult (up to 8.3 m) and juvenile (3.74 m) skeletons with well-preserved toothless skulls.',
  },
  {
    id: 'british-columbia',
    title: 'Northeastern British Columbia, Canada',
    region: 'Sikanni Chief River',
    species: 'Giant "S. sikanniensis" (Shonisaurus sikanniensis)',
    age: 'Mid-Norian, about 210 million years ago',
    formation: 'Pardonet Formation',
    chip: 'DEBATED',
    chipSublabel: 'classification debated',
    modernCoords: { x: 175, y: 125 },
    triassicCoords: { x: 345, y: 165 },
    summary: 'Excavated 1997–2000; described as Shonisaurus sikanniensis (up to ~21 m estimate) in 2004, moved to Shastasaurus in 2011, and returned closer to Shonisaurus in 2013 and 2021.',
  },
];

export const GUANLING_BIOTA_FAUNA = [
  {
    group: 'Other Ichthyosaurs',
    taxa: 'Qianichthyosaurus, Guizhouichthyosaurus',
    detail: 'Co-occurring Carnian ichthyosaurs occupying distinct trophic niches.',
  },
  {
    group: 'Actinopterygian Fishes',
    taxa: 'Diverse Late Triassic bony fishes',
    detail: 'Candidate nektonic prey across upper water columns.',
  },
  {
    group: 'Cephalopods (Ammonites)',
    taxa: 'Abundant coiled ammonoids',
    detail: 'Key biostratigraphic markers and soft-bodied/shelled pelagic fauna.',
  },
  {
    group: 'Bivalves',
    taxa: 'Thin-shelled pseudoplanktonic & benthic bivalves',
    detail: 'Frequently preserved alongside pelagic remains.',
  },
  {
    group: 'Pelagic Crinoids',
    taxa: 'Traumatocrinus (pseudoplanktonic sea lilies)',
    detail: 'Attached to floating driftwood logs in oxygenated upper waters (Wang et al., 2008).',
  },
];

export interface SpeciesStatusCard {
  id: string;
  taxon: string;
  ageAndLocation: string;
  sizeText: string;
  summary: string;
  chip: EvidenceLevel;
}

export const SPECIES_STATUS_CARDS: SpeciesStatusCard[] = [
  {
    id: 's-pacificus',
    taxon: 'S. pacificus',
    ageAndLocation: 'Type species · Late Carnian · Northern California',
    sizeText: 'Over about 7 m',
    summary: 'Fragmentary. Once treated as a "doubtful name" because the remains are incomplete.',
    chip: 'DEBATED',
  },
  {
    id: 's-liangae',
    taxon: 'S. liangae (originally Guanlingsaurus liangae)',
    ageAndLocation: 'Early Carnian · Guizhou Province, China',
    sizeText: 'Up to 8.3 m',
    summary: 'Moved into Shastasaurus in 2011, then treated as its own genus again after 2013.',
    chip: 'DEBATED',
  },
  {
    id: 's-sikanniensis',
    taxon: '“S. sikanniensis”',
    ageAndLocation: 'Mid-Norian · British Columbia, Canada',
    sizeText: 'Up to about 21 m (estimate)',
    summary: 'Described as Shonisaurus in 2004, moved to Shastasaurus in 2011, then placed closer to Shonisaurus again in 2013 and 2021 analyses.',
    chip: 'DEBATED',
  },
  {
    id: 's-tangae',
    taxon: 'S. tangae (formerly Guizhouichthyosaurus tangae)',
    ageAndLocation: 'Carnian · Southwestern China',
    sizeText: 'Large predatory ichthyosaur',
    summary: 'Proposed in 2009, but later analysis placed the animal closer to more advanced ichthyosaurs, so it is not a Shastasaurus.',
    chip: 'REJECTED',
  },
  {
    id: 'synonyms',
    taxon: 'Synonyms & Dubious Names',
    ageAndLocation: 'California, Austria & Germany',
    sizeText: 'Historical referrals',
    summary: 'S. alexandrae and S. osmonti are synonyms of S. pacificus; S. carinthiacus (Austria) is dubious; S. neubigi was moved to its own genus, Phantomosaurus.',
    chip: 'DEBATED',
  },
];

export type ClassificationYear = 2004 | 2011 | 2013 | 2021;

export interface ClassificationYearSnapshot {
  year: ClassificationYear;
  studyLabel: string;
  headline: string;
  californiaType: {
    genusAssignment: string;
    status: string;
  };
  chineseSpecies: {
    genusAssignment: string;
    status: string;
  };
  canadianGiant: {
    genusAssignment: string;
    status: string;
  };
}

export const CLASSIFICATION_SLIDER_YEARS: ClassificationYearSnapshot[] = [
  {
    year: 2004,
    studyLabel: 'Nicholls & Manabe (2004); Yin et al. (2000)',
    headline: 'Three Separate Genera Recognised',
    californiaType: {
      genusAssignment: 'Shastasaurus pacificus',
      status: 'Type species in California (over ~7 m)',
    },
    chineseSpecies: {
      genusAssignment: 'Guanlingsaurus liangae',
      status: 'Separate Chinese genus named in 2000 (up to 8.3 m)',
    },
    canadianGiant: {
      genusAssignment: 'Shonisaurus sikanniensis',
      status: 'Described as a new species of Shonisaurus (up to ~21 m estimate)',
    },
  },
  {
    year: 2011,
    studyLabel: 'Sander et al. (2011)',
    headline: 'Broad Lumping into Shastasaurus',
    californiaType: {
      genusAssignment: 'Shastasaurus pacificus',
      status: 'Retained as type species of expanded genus',
    },
    chineseSpecies: {
      genusAssignment: 'Shastasaurus liangae',
      status: 'Moved from Guanlingsaurus into Shastasaurus',
    },
    canadianGiant: {
      genusAssignment: 'Shastasaurus sikanniensis',
      status: 'Moved from Shonisaurus into Shastasaurus alongside suction-feeding hypothesis',
    },
  },
  {
    year: 2013,
    studyLabel: 'Ji et al. (2013); Motani et al. (2013)',
    headline: 'Juvenile Skull Revives Guanlingsaurus; Shonisaurus Restored',
    californiaType: {
      genusAssignment: 'Shastasaurus pacificus',
      status: 'Restricted back toward North American type material',
    },
    chineseSpecies: {
      genusAssignment: 'Guanlingsaurus liangae',
      status: 'Genus Guanlingsaurus revived after juvenile specimen shows distinct cranial traits',
    },
    canadianGiant: {
      genusAssignment: 'Shonisaurus sikanniensis',
      status: 'Returned closer to Shonisaurus in revised phylogenetic matrices',
    },
  },
  {
    year: 2021,
    studyLabel: 'Bindellini et al. (2021); Sander et al. (2021)',
    headline: 'Modern Consensus Separates the 21 m Giant from Shastasaurus',
    californiaType: {
      genusAssignment: 'Shastasaurus pacificus',
      status: 'Valid Carnian type species (~7+ m)',
    },
    chineseSpecies: {
      genusAssignment: 'Guanlingsaurus / Shastasaurus liangae',
      status: 'Often treated in its own genus Guanlingsaurus, closely allied to Shastasaurus',
    },
    canadianGiant: {
      genusAssignment: 'Shonisaurus sikanniensis',
      status: 'Placed closer to Shonisaurus; the 21 m animal is usually treated as Shonisaurus today',
    },
  },
];

export const SHASTASAURID_RELATIVES = [
  {
    name: 'Shonisaurus',
    summary: 'Giant, toothed Late Triassic shastasaurid with robust jaws and vertebrate/mollusc gut contents.',
  },
  {
    name: 'Besanosaurus',
    summary: 'Middle Triassic (Monte San Giorgio) long-bodied relative illuminating early shastasaurid evolution.',
  },
  {
    name: 'Himalayasaurus',
    summary: 'Large Late Triassic ichthyosaur from Tibet armed with cutting teeth.',
  },
  {
    name: 'Guizhouichthyosaurus',
    summary: 'Carnian predatory ichthyosaur from the Guanling Biota (once briefly referred to as S. tangae).',
  },
  {
    name: 'Callawayia',
    summary: 'Late Triassic marine reptile showing transitional traits toward more derived ichthyosaurs.',
  },
  {
    name: 'Ichthyotitan',
    summary: 'Possible last giant shastasaurid from the latest Triassic of England, estimated at up to ~25 m (Lomax et al., 2024).',
  },
];

export interface GeologicalStage {
  id: string;
  era: string;
  ageMa: string;
  title: string;
  description: string;
}

export const GEOLOGICAL_TIMELINE: GeologicalStage[] = [
  {
    id: 'early-triassic',
    era: 'Early Triassic',
    ageMa: 'About 250 Ma',
    title: 'First Ichthyosaurs Appear',
    description: 'Ichthyosaurs first appeared in Early Triassic seas soon after the end-Permian mass extinction and diversified rapidly.',
  },
  {
    id: 'carnian',
    era: 'Late Triassic · Carnian',
    ageMa: '237–227 Ma',
    title: 'Age of Shastasaurus',
    description: 'S. liangae (early Carnian, China) and S. pacificus (late Carnian, California) swim Panthalassa and Tethyan shelves.',
  },
  {
    id: 'norian',
    era: 'Late Triassic · Norian–Rhaetian',
    ageMa: '~210–202 Ma',
    title: 'Giant Relatives',
    description: 'Colossal shastasaurids such as Shonisaurus sikanniensis (~21 m estimate) and Ichthyotitan severnensis (~25 m estimate) reach whale-like dimensions.',
  },
  {
    id: 'end-triassic',
    era: 'Triassic–Jurassic Boundary',
    ageMa: 'About 201.4 Ma',
    title: 'Triassic–Jurassic Mass Extinction',
    description: 'Hit many marine groups; giant shastasaurids disappear around then, though a Welsh limb bone (Martin et al., 2015) suggests one may have lingered into the earliest Jurassic.',
  },
  {
    id: 'cretaceous-end',
    era: 'Early Late Cretaceous',
    ageMa: 'About 90 Ma',
    title: 'Last Ichthyosaurs',
    description: 'Smaller, more dolphin-like ichthyosaurs survived the Triassic–Jurassic boundary and persisted until about 90 million years ago—more than 100 million years after Shastasaurus.',
  },
];

export interface MythRealityCard {
  id: string;
  mythNumber: string;
  myth: string;
  verdict: string;
  reality: string;
  chip: EvidenceLevel;
}

export const MYTH_REALITY_CARDS: MythRealityCard[] = [
  {
    id: 'dinosaur',
    mythNumber: 'MYTH 01',
    myth: '“Shastasaurus was a dinosaur.”',
    verdict: 'No.',
    reality: 'It was an ichthyosaur, a marine reptile that lived entirely in the sea—not a dinosaur, a plesiosaur, or a lizard.',
    chip: 'CONFIRMED',
  },
  {
    id: '21m-giant',
    mythNumber: 'MYTH 02',
    myth: '“It was a 21 m giant.”',
    verdict: 'Misattributed.',
    reality: 'The 21 m figure belongs to a Canadian giant that is now usually treated as Shonisaurus. Confirmed Shastasaurus species were about 7–8.3 m.',
    chip: 'DEBATED',
  },
  {
    id: 'toothy-dolphin',
    mythNumber: 'MYTH 03',
    myth: '“It looked like a toothy dolphin.”',
    verdict: 'Not this one.',
    reality: 'Shastasaurus had a tiny head (only ~8–9% of body length), a slender body, and a short, toothless snout.',
    chip: 'CONFIRMED',
  },
  {
    id: 'gills',
    mythNumber: 'MYTH 04',
    myth: '“It breathed through gills.”',
    verdict: 'No.',
    reality: 'It breathed air and had to surface.',
    chip: 'ichthyosaur group trait',
  },
  {
    id: 'dorsal-fin',
    mythNumber: 'MYTH 05',
    myth: '“It had a shark-like dorsal fin.”',
    verdict: 'Unknown.',
    reality: 'Old reconstructions assumed one, but there is no direct evidence. The oldest known dorsal fin in any ichthyosaur is in the smaller Mixosaurus.',
    chip: 'DEBATED',
  },
  {
    id: 'feeding-settled',
    mythNumber: 'MYTH 06',
    myth: '“Scientists know how it fed.”',
    verdict: 'Not yet.',
    reality: 'Suction feeding was proposed in 2011, but it is debated because its throat (hyoid) bones are short and narrow.',
    chip: 'DEBATED',
  },
];

export interface GalleryPlate {
  id: string;
  plateNumber: string;
  src: string;
  title: string;
  caption: string;
  specimenCode: string;
  diagramType: 'cranial' | 'axial' | 'ontogeny' | 'biota' | 'hyoid' | 'stratigraphy';
}

export const GALLERY_PLATES: GalleryPlate[] = [
  {
    id: 'gallery-01',
    plateNumber: 'PLATE I',
    src: '/assets/gallery-01.jpg',
    title: 'Cranial Proportion & Toothless Rostrum (S. liangae)',
    caption: 'Dorsal and lateral cranial diagram of S. liangae showing the wide, triangular skull (~8.3% of adult length) and short, edentulous snout lacking a dental groove.',
    specimenCode: 'YIGMR SPCV03109 · EARLY CARNIAN',
    diagramType: 'cranial',
  },
  {
    id: 'gallery-02',
    plateNumber: 'PLATE II',
    src: '/assets/gallery-02.jpg',
    title: 'Elongate Axial Skeleton & Presacral Vertebrae',
    caption: 'Slender torso profile contrasting Shastasaurus against the deep-bodied thunniform ("tuna-shaped") bauplan of later Jurassic ichthyosaurs.',
    specimenCode: 'FALANG FORMATION · GUIZHOU',
    diagramType: 'axial',
  },
  {
    id: 'gallery-03',
    plateNumber: 'PLATE III',
    src: '/assets/gallery-03.jpg',
    title: 'Ontogenetic Scaling: Juvenile (3.74 m) vs Adult (8.3 m)',
    caption: 'Comparison of the 3.74 m juvenile specimen described by Ji et al. (2013) with the 8.3 m adult, demonstrating toothlessness across growth stages.',
    specimenCode: 'ONT. SERIES · 9.3% VS 8.3% SKULL',
    diagramType: 'ontogeny',
  },
  {
    id: 'gallery-04',
    plateNumber: 'PLATE IV',
    src: '/assets/gallery-04.jpg',
    title: 'Guanling Biota Pelagic Assemblage',
    caption: 'Taphonomic association of S. liangae with pseudoplanktonic crinoids (Traumatocrinus), ammonoids, bivalves, and actinopterygian fishes (Wang et al., 2008).',
    specimenCode: 'WAYAO MEMBER · CARNIAN STAGE',
    diagramType: 'biota',
  },
  {
    id: 'gallery-05',
    plateNumber: 'PLATE V',
    src: '/assets/gallery-05.jpg',
    title: 'Hyoid Apparatus & Biomechanical Constraints',
    caption: 'Slender, rod-like hyoid elements analysed by Motani et al. (2013), challenging the hypothesis of high-pressure ram-suction feeding.',
    specimenCode: 'BIOMECHANICS · MOTANI ET AL. 2013',
    diagramType: 'hyoid',
  },
  {
    id: 'gallery-06',
    plateNumber: 'PLATE VI',
    src: '/assets/gallery-06.jpg',
    title: 'Hosselkus Limestone Type Material (S. pacificus)',
    caption: 'Fragmentary dorsal vertebrae, ribs, and pelvic elements from Shasta County, northern California, described by John C. Merriam in 1895.',
    specimenCode: 'UCMP TYPE SERIES · 1895',
    diagramType: 'stratigraphy',
  },
];

export const DID_YOU_KNOW_FACTS: string[] = [
  'It was an ichthyosaur, not a dinosaur.',
  'S. liangae had no teeth, even as a juvenile.',
  'Its head was only about 8% of its body length.',
  'The genus has been rebuilt several times, with species moved in and out.',
  'It was named for the Shasta region of northern California.',
  'The Guanling Biota in China preserved marine reptiles, fishes, ammonites and sea lilies in exceptional condition.',
  'Its giant relatives reached 20 m or more (estimates), as large as many whales.',
  'Ichthyosaurs outlived Shastasaurus by more than 100 million years.',
];

export const SCIENTIFIC_SOURCES: string[] = [
  'Merriam (1895)',
  'Yin et al. (2000)',
  'Nicholls and Manabe (2004)',
  'Wang et al. (2008)',
  'Shang and Li (2009)',
  'Sander et al. (2011)',
  'Ji et al. (2013)',
  'Motani et al. (2013)',
  'Druckenmiller et al. (2014)',
  'Martin et al. (2015)',
  'Lindgren et al. (2018)',
  'Bindellini et al. (2021)',
  'Sander et al. (2021)',
  'Kelley et al. (2022)',
  'Lomax et al. (2024)',
  'Royal Tyrrell Museum',
  'Natural History Museum (London)',
  'Smithsonian Magazine (2011)',
];

/**
 * Pure helper functions for Depth Gauge, Size Chart, and Classification Slider
 */
export function calculateDepthFromScroll(scrollProgress: number): number {
  const clamped = Math.max(0, Math.min(1, Number.isFinite(scrollProgress) ? scrollProgress : 0));
  return Math.round(clamped * 4000);
}

export function getDepthZoneLabel(depthMeters: number): 'SURFACE GLOW' | 'TWILIGHT ZONE' | 'MIDNIGHT ZONE' | 'ABYSS' {
  if (depthMeters >= 4000) return 'ABYSS';
  if (depthMeters >= 1000) return 'MIDNIGHT ZONE';
  if (depthMeters >= 200) return 'TWILIGHT ZONE';
  return 'SURFACE GLOW';
}

export function getSizeComparisonItems(includeRelatives: boolean): {
  items: SizeComparisonItem[];
  maxScaleMeters: number;
} {
  const items = SIZE_COMPARISON_ITEMS.filter((item) =>
    includeRelatives ? true : item.category !== 'relative'
  );
  const maxScaleMeters = includeRelatives ? 25 : 12;
  return { items, maxScaleMeters };
}

export function getClassificationAtYear(year: ClassificationYear): ClassificationYearSnapshot {
  const found = CLASSIFICATION_SLIDER_YEARS.find((item) => item.year === year);
  return found ?? CLASSIFICATION_SLIDER_YEARS[0];
}

export function computeSkullMetrics(totalLengthMeters: number, skullPercent: number): {
  skullLengthMeters: number;
  remainingBodyMeters: number;
} {
  const skullLengthMeters = Number(((totalLengthMeters * skullPercent) / 100).toFixed(2));
  const remainingBodyMeters = Number((totalLengthMeters - skullLengthMeters).toFixed(2));
  return { skullLengthMeters, remainingBodyMeters };
}
