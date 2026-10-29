export interface StatCardItem {
  id: string;
  label: string;
  value: string;
  detail: string;
  qualifier?: string;
}

export const HERO_ASSET_PRIMARY = '/assets/shastasaurus-hero.png';
export const HERO_ASSET_ALT = '/assets/aistudio/Blue_Marine_Reptile_with_Curled_Tail_0aad539d.png';
export const SIDE_ASSET_PRIMARY = '/assets/shastasaurus-side.png';

export const OVERVIEW_STATS: StatCardItem[] = [
  {
    id: 'name-meaning',
    label: 'Name meaning',
    value: '“Mount Shasta lizard”',
    detail:
      'Named for the Shasta region of northern California where the first fossils were found (Greek sauros, lizard).',
  },
  {
    id: 'lived',
    label: 'Lived',
    value: 'Late Triassic, Carnian stage (~237–227 Ma)',
    detail:
      'About 237 to 227 million years ago (S. liangae: early Carnian; S. pacificus: late Carnian).',
    qualifier: 'estimates',
  },
  {
    id: 'length',
    label: 'Length',
    value: 'Over ~7 m (S. pacificus) · Up to 8.3 m (S. liangae)',
    detail:
      'S. pacificus over about 7 m (23 ft), known from fragmentary remains; S. liangae up to 8.3 m (27 ft) for the largest specimen; a juvenile measured 3.74 m (estimates).',
    qualifier: 'estimates',
  },
  {
    id: 'skull',
    label: 'Skull',
    value: 'Only about 8–9% of total body length',
    detail:
      'Only about 8–9% of total body length in S. liangae (8.3% adult, 9.3% juvenile), a very small head.',
  },
  {
    id: 'teeth',
    label: 'Teeth',
    value: 'None in adult or juvenile S. liangae',
    detail:
      'None in adult or juvenile S. liangae, with no tooth groove; S. pacificus probably similar, but its skull is incomplete.',
    qualifier: 'confirmed in S. liangae · inferred in S. pacificus',
  },
  {
    id: 'diet',
    label: 'Diet',
    value: 'Unresolved feeding mechanism',
    detail:
      'Unresolved; soft-bodied prey such as cephalopods and fish has been suggested (debated).',
    qualifier: 'debated',
  },
  {
    id: 'habitat',
    label: 'Habitat',
    value: 'Late Triassic seas',
    detail:
      'Late Triassic seas, with fossils from northern California and southwestern China.',
  },
  {
    id: 'group',
    label: 'Group',
    value: 'Ichthyosauria, family Shastasauridae',
    detail:
      'Pelagic marine reptiles that lived entirely in the sea, distinct from dinosaurs, plesiosaurs, and lizards.',
  },
  {
    id: 'status',
    label: 'Status',
    value: 'Extinct',
    detail:
      'Disappeared during the Late Triassic turnover prior to the Jurassic radiation of neoichthyosaurs.',
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  citation?: string;
  qualifier?: string;
}

export const DISCOVERY_TIMELINE: TimelineEvent[] = [
  {
    year: '1895',
    title: 'Genus Named in Northern California',
    description:
      'John C. Merriam names Shastasaurus pacificus from Triassic remains in northern California.',
    citation: 'Merriam (1895)',
  },
  {
    year: '1902',
    title: 'Additional California Species Described',
    description:
      'Merriam names two more species, S. alexandrae and S. osmonti; both are now regarded as the same animal as S. pacificus.',
    citation: 'Merriam (1902)',
  },
  {
    year: '1997–2000',
    title: 'British Columbia Giant Excavated',
    description:
      'A giant ichthyosaur is excavated from the Pardonet Formation of northeastern British Columbia (now in the Royal Tyrrell Museum).',
    citation: 'Royal Tyrrell Museum',
  },
  {
    year: '2000',
    title: 'Guanlingsaurus liangae Named in China',
    description:
      'Yin et al. name Guanlingsaurus liangae from Guizhou Province, China.',
    citation: 'Yin et al. (2000)',
  },
  {
    year: '2004',
    title: 'Canadian Giant Described as Shonisaurus sikanniensis',
    description:
      'Nicholls and Manabe describe the Canadian giant as Shonisaurus sikanniensis, up to about 21 m long (estimate).',
    citation: 'Nicholls and Manabe (2004)',
    qualifier: 'estimate',
  },
  {
    year: '2008',
    title: 'Guanling Biota Reviewed',
    description:
      'Wang et al. review the Guanling Biota, a Late Triassic fossil site of exceptional preservation with marine reptiles, fishes, ammonites and pelagic crinoids.',
    citation: 'Wang et al. (2008)',
  },
  {
    year: '2011',
    title: 'Reassignment & Suction-Feeding Proposal',
    description:
      'Sander et al. move the Chinese species and the Canadian giant into Shastasaurus and propose that it was a toothless suction feeder.',
    citation: 'Sander et al. (2011)',
    qualifier: 'debated',
  },
  {
    year: '2013',
    title: 'Guanlingsaurus Revived & Suction Model Challenged',
    description:
      'A juvenile Guanlingsaurus specimen (Ji et al.) shows features that make it distinct from Shastasaurus, and the genus name is revived. The same year, Motani et al. argue that shastasaurid ichthyosaurs do not fit a suction-feeding design.',
    citation: 'Ji et al. (2013); Motani et al. (2013)',
    qualifier: 'debated',
  },
  {
    year: '2015',
    title: 'Lower Jurassic Welsh Limb Bone',
    description:
      'Martin et al. describe a huge shastasaurid-type limb bone from the Lower Jurassic of Wales, estimated at 12–15 m body length.',
    citation: 'Martin et al. (2015)',
    qualifier: 'estimate',
  },
  {
    year: '2024',
    title: 'Ichthyotitan severnensis Named',
    description:
      'Lomax et al. name the giant Ichthyotitan severnensis from England, with an estimated length of up to about 25 m.',
    citation: 'Lomax et al. (2024)',
    qualifier: 'estimate',
  },
  {
    year: 'Today',
    title: 'Ongoing Reclassification',
    description: 'The genus is still being reclassified.',
    qualifier: 'debated',
  },
];

export interface AnatomyHotspot {
  id: string;
  label: string;
  xPercent: number;
  yPercent: number;
  description: string;
  qualifier: string;
}

export const ANATOMY_HOTSPOTS: AnatomyHotspot[] = [
  {
    id: 'skull',
    label: 'Skull',
    xPercent: 18,
    yPercent: 60,
    description:
      'Small, wide and triangular, with a short snout (S. liangae). About 8–9% of body length.',
    qualifier: 'confirmed (S. liangae)',
  },
  {
    id: 'jaws-teeth',
    label: 'Jaws and teeth',
    xPercent: 11,
    yPercent: 67,
    description:
      'Toothless, with no tooth groove, even in juveniles (S. liangae).',
    qualifier: 'confirmed (S. liangae)',
  },
  {
    id: 'hyoid',
    label: 'Hyoid bones',
    xPercent: 25,
    yPercent: 66,
    description:
      'The throat bones are short and narrow, which weakens the case for suction feeding (debated).',
    qualifier: 'debated',
  },
  {
    id: 'body',
    label: 'Body',
    xPercent: 48,
    yPercent: 34,
    description:
      'Long and slender in profile, very different from the deep-bodied "tuna" shape of later ichthyosaurs.',
    qualifier: 'confirmed',
  },
  {
    id: 'flippers',
    label: 'Flippers',
    xPercent: 44,
    yPercent: 72,
    description:
      'Four paddle-shaped flippers with extra finger bones (hyperphalangy) (ichthyosaur group trait).',
    qualifier: 'ichthyosaur group trait',
  },
  {
    id: 'tail',
    label: 'Tail',
    xPercent: 90,
    yPercent: 18,
    description:
      'The upper lobe of the tail fin was probably less developed than the shark-like tails of later ichthyosaurs (inferred).',
    qualifier: 'inferred',
  },
  {
    id: 'dorsal-fin',
    label: 'Dorsal fin',
    xPercent: 54,
    yPercent: 15,
    description:
      'Unknown. Many old reconstructions show a shark-like fin, but that is speculation. The oldest known dorsal fin in any ichthyosaur is in the smaller Mixosaurus.',
    qualifier: 'unknown · debated',
  },
  {
    id: 'skin-metabolism',
    label: 'Skin and metabolism',
    xPercent: 63,
    yPercent: 24,
    description:
      'No soft tissue is known for Shastasaurus. A related Jurassic ichthyosaur, Stenopterygius, preserves blubber and dark skin, suggesting warm-blooded animals (Lindgren et al., 2018) (inferred from a relative).',
    qualifier: 'inferred from a relative',
  },
  {
    id: 'breathing',
    label: 'Breathing',
    xPercent: 21,
    yPercent: 52,
    description:
      'Ichthyosaurs breathed air and had to surface regularly (ichthyosaur group trait).',
    qualifier: 'ichthyosaur group trait',
  },
];

export interface SizeComparisonItem {
  id: string;
  name: string;
  lengthLabel: string;
  lengthMeters: number;
  category: 'reference' | 'confirmed' | 'relative';
  qualifier?: string;
  note?: string;
}

export const SIZE_COMPARISON_ITEMS: SizeComparisonItem[] = [
  {
    id: 'human',
    name: 'Human',
    lengthLabel: '1.7 m',
    lengthMeters: 1.7,
    category: 'reference',
    note: 'Adult human diver scale reference',
  },
  {
    id: 'great-white',
    name: 'Great white shark',
    lengthLabel: 'about 5–6 m',
    lengthMeters: 5.5,
    category: 'reference',
    note: 'Modern pelagic predatory shark',
  },
  {
    id: 'orca',
    name: 'Orca',
    lengthLabel: '6–8 m',
    lengthMeters: 7.0,
    category: 'reference',
    note: 'Modern oceanic delphinid',
  },
  {
    id: 's-pacificus',
    name: 'Shastasaurus pacificus',
    lengthLabel: 'over 7 m',
    lengthMeters: 7.2,
    category: 'confirmed',
    qualifier: 'estimate',
    note: 'Type species from northern California; known from fragmentary remains; slender profile with short snout',
  },
  {
    id: 's-liangae',
    name: 'Shastasaurus liangae',
    lengthLabel: '8.3 m',
    lengthMeters: 8.3,
    category: 'confirmed',
    qualifier: 'estimate',
    note: 'Largest specimen from China (juvenile measured 3.74 m); tiny skull (~8.3% of body length) and short toothless snout',
  },
  {
    id: 'city-bus',
    name: 'City bus',
    lengthLabel: 'about 12 m',
    lengthMeters: 12.0,
    category: 'reference',
    note: 'Single transit bus benchmark',
  },
  {
    id: 'shonisaurus-sikanniensis',
    name: 'Shonisaurus sikanniensis',
    lengthLabel: 'up to about 21 m (estimate; classification debated)',
    lengthMeters: 21.0,
    category: 'relative',
    qualifier: 'estimate · classification debated',
    note: 'Canadian giant excavated in British Columbia; moved to Shastasaurus in 2011, usually treated as Shonisaurus today',
  },
  {
    id: 'two-city-buses',
    name: 'Two city buses end to end',
    lengthLabel: 'about 24 m',
    lengthMeters: 24.0,
    category: 'relative',
    note: 'Two 12 m transit buses placed end to end',
  },
  {
    id: 'ichthyotitan',
    name: 'Ichthyotitan',
    lengthLabel: 'up to about 25 m (estimate)',
    lengthMeters: 25.0,
    category: 'relative',
    qualifier: 'estimate',
    note: 'Ichthyotitan severnensis named from the latest Triassic of England (Lomax et al., 2024)',
  },
];

export interface FossilLocality {
  id: string;
  title: string;
  region: string;
  species: string;
  age: string;
  formation: string;
  qualifier: string;
  modernCoords: { x: number; y: number };
  triassicCoords: { x: number; y: number };
  summary: string;
}

export const FOSSIL_LOCALITIES: FossilLocality[] = [
  {
    id: 'california',
    title: 'Northern California, USA',
    region: 'Shasta County, California',
    species: 'S. pacificus (late Carnian)',
    age: 'Late Carnian, Late Triassic',
    formation: 'Hosselkus Limestone',
    qualifier: 'type locality',
    modernCoords: { x: 185, y: 175 },
    triassicCoords: { x: 335, y: 215 },
    summary:
      'Type locality where John C. Merriam named Shastasaurus pacificus in 1895 (and S. alexandrae and S. osmonti in 1902, both now regarded as S. pacificus).',
  },
  {
    id: 'china',
    title: 'Guanling, Guizhou Province, China',
    region: 'Southwestern China',
    species: 'S. liangae (early Carnian)',
    age: 'Early Carnian, Late Triassic',
    formation: 'Wayao Member of the Falang Formation (also called the Xiaowa Formation)',
    qualifier: 'confirmed',
    modernCoords: { x: 765, y: 215 },
    triassicCoords: { x: 645, y: 225 },
    summary:
      'Preserved complete adult (up to 8.3 m) and juvenile (3.74 m) skeletons with small, toothless skulls in the Guanling Biota.',
  },
  {
    id: 'british-columbia',
    title: 'Northeastern British Columbia, Canada',
    region: 'Sikanni Chief River',
    species: 'The giant "S. sikanniensis"',
    age: 'Mid-Norian, about 210 million years ago',
    formation: 'Pardonet Formation',
    qualifier: 'classification debated',
    modernCoords: { x: 175, y: 125 },
    triassicCoords: { x: 345, y: 165 },
    summary:
      'Excavated 1997–2000; described as Shonisaurus sikanniensis (up to ~21 m estimate) in 2004, moved to Shastasaurus in 2011, and returned closer to Shonisaurus in 2013 and 2021.',
  },
];

export const GUANLING_BIOTA_FAUNA = [
  {
    group: 'Other Ichthyosaurs',
    taxa: 'Qianichthyosaurus, Guizhouichthyosaurus',
    detail: 'Found alongside S. liangae in the Wayao Member.',
  },
  {
    group: 'Fishes',
    taxa: 'Late Triassic actinopterygian fishes',
    detail: 'Articulated marine bony fishes preserved in black shales.',
  },
  {
    group: 'Ammonites',
    taxa: 'Pelagic coiled ammonoids',
    detail: 'Abundant cephalopod shells indexing Carnian strata.',
  },
  {
    group: 'Bivalves',
    taxa: 'Thin-shelled marine bivalves',
    detail: 'Associated benthic and pseudoplanktonic bivalve fauna.',
  },
  {
    group: 'Pelagic Crinoids',
    taxa: 'Pseudoplanktonic sea lilies',
    detail: 'Exceptional crinoid colonies attached to floating logs (Wang et al., 2008).',
  },
];

export interface SpeciesStatusCard {
  id: string;
  taxon: string;
  statusLine: string;
  ageAndLocation: string;
  summary: string;
}

export const SPECIES_STATUS_CARDS: SpeciesStatusCard[] = [
  {
    id: 's-pacificus',
    taxon: 'S. pacificus',
    statusLine: 'STATUS: TYPE SPECIES · NOMENCLATURE HISTORICALLY DEBATED',
    ageAndLocation: 'Late Carnian · Northern California · Over about 7 m',
    summary:
      'Type species, late Carnian, California. Fragmentary, over about 7 m. Once treated as a "doubtful name" because the remains are incomplete.',
  },
  {
    id: 's-liangae',
    taxon: 'S. liangae (originally Guanlingsaurus liangae)',
    statusLine: 'STATUS: GENUS ASSIGNMENT DEBATED (SHASTASAURUS VS GUANLINGSAURUS)',
    ageAndLocation: 'Early Carnian · China · Up to 8.3 m',
    summary:
      'Early Carnian, China. Up to 8.3 m. Moved into Shastasaurus in 2011, then treated as its own genus again after 2013.',
  },
  {
    id: 's-sikanniensis',
    taxon: '“S. sikanniensis”',
    statusLine: 'STATUS: DEBATED · USUALLY PLACED IN SHONISAURUS TODAY',
    ageAndLocation: 'Mid-Norian · British Columbia · Up to about 21 m (estimate)',
    summary:
      'Mid-Norian, British Columbia. Up to about 21 m (estimate). Described as Shonisaurus in 2004, moved to Shastasaurus in 2011, then placed closer to Shonisaurus again in 2013 and 2021 analyses.',
  },
  {
    id: 's-tangae',
    taxon: 'S. tangae (formerly Guizhouichthyosaurus tangae)',
    statusLine: 'STATUS: REJECTED FROM SHASTASAURUS',
    ageAndLocation: 'Carnian · Southwestern China',
    summary:
      'Proposed in 2009, but later analysis placed it closer to more advanced ichthyosaurs, so it is not a Shastasaurus.',
  },
  {
    id: 'synonyms',
    taxon: 'Synonyms and dubious names',
    statusLine: 'STATUS: JUNIOR SYNONYMS, DUBIOUS & REASSIGNED TAXA',
    ageAndLocation: 'California, Austria & Germany',
    summary:
      'S. alexandrae and S. osmonti are synonyms of S. pacificus; S. carinthiacus (Austria) is dubious; S. neubigi was moved to its own genus, Phantomosaurus.',
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
    headline: 'Chinese Species & Canadian Giant Moved into Shastasaurus',
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
      status: 'Moved from Shonisaurus into Shastasaurus alongside suction-feeding proposal',
    },
  },
  {
    year: 2013,
    studyLabel: 'Ji et al. (2013); Motani et al. (2013)',
    headline: 'Guanlingsaurus Revived & Canadian Giant Returned Closer to Shonisaurus',
    californiaType: {
      genusAssignment: 'Shastasaurus pacificus',
      status: 'Restricted back toward North American type material',
    },
    chineseSpecies: {
      genusAssignment: 'Guanlingsaurus liangae',
      status: 'Juvenile specimen shows distinct features; genus Guanlingsaurus revived',
    },
    canadianGiant: {
      genusAssignment: 'Shonisaurus sikanniensis',
      status: 'Placed closer to Shonisaurus again',
    },
  },
  {
    year: 2021,
    studyLabel: 'Bindellini et al. (2021); Sander et al. (2021)',
    headline: 'Subsequent Analyses Keep Canadian Giant Closer to Shonisaurus',
    californiaType: {
      genusAssignment: 'Shastasaurus pacificus',
      status: 'Valid Carnian type species (over ~7 m)',
    },
    chineseSpecies: {
      genusAssignment: 'Guanlingsaurus / Shastasaurus liangae',
      status: 'Treated as Guanlingsaurus or debated sister species',
    },
    canadianGiant: {
      genusAssignment: 'Shonisaurus sikanniensis',
      status: 'Placed closer to Shonisaurus in 2021 phylogenetic analyses',
    },
  },
];

export const SHASTASAURID_RELATIVES = [
  {
    name: 'Shonisaurus',
    summary: 'Giant, toothed Late Triassic shastasaurid.',
  },
  {
    name: 'Besanosaurus',
    summary: 'Middle Triassic, Monte San Giorgio.',
  },
  {
    name: 'Himalayasaurus',
    summary: 'Large Late Triassic ichthyosaur from Tibet.',
  },
  {
    name: 'Guizhouichthyosaurus',
    summary: 'Carnian marine reptile from the Guanling Biota.',
  },
  {
    name: 'Callawayia',
    summary: 'Late Triassic relative from North America.',
  },
  {
    name: 'Ichthyotitan',
    summary: 'Possible last giant (up to about 25 m, estimate; Lomax et al., 2024).',
  },
];

export interface GeologicalStage {
  id: string;
  era: string;
  ageMa: string;
  title: string;
  description: string;
  isExtinctionBoundary?: boolean;
}

export const GEOLOGICAL_TIMELINE: GeologicalStage[] = [
  {
    id: 'early-triassic',
    era: 'Early Triassic',
    ageMa: 'About 250 Ma',
    title: 'First Ichthyosaurs',
    description:
      'Ichthyosaurs first appeared in Early Triassic seas soon after the end-Permian mass extinction and diversified rapidly.',
  },
  {
    id: 'carnian',
    era: 'Carnian Stage',
    ageMa: '237–227 Ma',
    title: 'Shastasaurus',
    description:
      'S. liangae (early Carnian) and S. pacificus (late Carnian) inhabit Late Triassic seas.',
  },
  {
    id: 'norian',
    era: 'Norian–Rhaetian',
    ageMa: '~210–202 Ma',
    title: 'Giant Relatives',
    description:
      'Giant shastasaurids such as Shonisaurus sikanniensis (~21 m, estimate) and Ichthyotitan (~25 m, estimate) patrol Late Triassic oceans.',
  },
  {
    id: 'end-triassic',
    era: 'Triassic–Jurassic Boundary Marker',
    ageMa: 'About 201.4 Ma',
    title: 'Triassic–Jurassic Extinction',
    description:
      'Hit many marine groups; giant shastasaurids seem to disappear around then, though a Welsh limb bone suggests one may have lingered into the earliest Jurassic.',
    isExtinctionBoundary: true,
  },
  {
    id: 'cretaceous-end',
    era: 'Mid-Cretaceous',
    ageMa: 'About 90 Ma',
    title: 'Last Ichthyosaurs',
    description:
      'Smaller, more dolphin-like ichthyosaurs survived and persisted until about 90 million years ago, more than 100 million years after Shastasaurus.',
  },
];

export interface MythRealityCard {
  id: string;
  mythNumber: string;
  myth: string;
  reality: string;
}

export const MYTH_REALITY_CARDS: MythRealityCard[] = [
  {
    id: 'dinosaur',
    mythNumber: 'MYTH 01',
    myth: '“Shastasaurus was a dinosaur.”',
    reality: 'No, it was an ichthyosaur, a marine reptile.',
  },
  {
    id: '21m-giant',
    mythNumber: 'MYTH 02',
    myth: '“It was a 21 m giant.”',
    reality:
      'That figure belongs to a Canadian giant now usually treated as Shonisaurus. Confirmed Shastasaurus species were about 7–8.3 m.',
  },
  {
    id: 'toothy-dolphin',
    mythNumber: 'MYTH 03',
    myth: '“It looked like a toothy dolphin.”',
    reality:
      'Not this one. Shastasaurus had a tiny head and a short, toothless snout.',
  },
  {
    id: 'gills',
    mythNumber: 'MYTH 04',
    myth: '“It breathed through gills.”',
    reality: 'No, it was air-breathing.',
  },
  {
    id: 'dorsal-fin',
    mythNumber: 'MYTH 05',
    myth: '“It had a shark-like dorsal fin.”',
    reality:
      'Unknown. Old reconstructions assumed one, but there is no direct evidence.',
  },
  {
    id: 'feeding-settled',
    mythNumber: 'MYTH 06',
    myth: '“Scientists know how it fed.”',
    reality:
      'Not yet. Suction feeding was proposed, but it is debated.',
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
    caption:
      'Dorsal and lateral cranial diagram of S. liangae showing the wide, triangular skull (~8.3% of adult length) and short, toothless snout lacking a tooth groove.',
    specimenCode: 'YIGMR SPCV03109 · EARLY CARNIAN',
    diagramType: 'cranial',
  },
  {
    id: 'gallery-02',
    plateNumber: 'PLATE II',
    src: '/assets/gallery-02.jpg',
    title: 'Slender Axial Profile vs Deep-Bodied Ichthyosaurs',
    caption:
      'Long, slender body profile of Shastasaurus compared with the deep-bodied "tuna" shape of later Jurassic ichthyosaurs.',
    specimenCode: 'FALANG FORMATION · GUIZHOU',
    diagramType: 'axial',
  },
  {
    id: 'gallery-03',
    plateNumber: 'PLATE III',
    src: '/assets/gallery-03.jpg',
    title: 'Ontogenetic Scaling: Juvenile (3.74 m) vs Adult (8.3 m)',
    caption:
      'Comparison of the 3.74 m juvenile specimen (skull 9.3% of body length) with the 8.3 m adult (skull 8.3% of body length), both toothless.',
    specimenCode: 'JI ET AL. 2013 · ONTOGENY',
    diagramType: 'ontogeny',
  },
  {
    id: 'gallery-04',
    plateNumber: 'PLATE IV',
    src: '/assets/gallery-04.jpg',
    title: 'Guanling Biota Pelagic Assemblage',
    caption:
      'Co-occurring fauna from Guizhou Province: Qianichthyosaurus, Guizhouichthyosaurus, fishes, ammonites, bivalves, and pelagic crinoids (Wang et al., 2008).',
    specimenCode: 'WAYAO MEMBER · CARNIAN STAGE',
    diagramType: 'biota',
  },
  {
    id: 'gallery-05',
    plateNumber: 'PLATE V',
    src: '/assets/gallery-05.jpg',
    title: 'Hyoid Bones & Feeding Mechanics Debate',
    caption:
      'Short, narrow throat (hyoid) bones analyzed by Motani et al. (2013), challenging the 2011 suction-feeding hypothesis.',
    specimenCode: 'MOTANI ET AL. 2013 · HYOID',
    diagramType: 'hyoid',
  },
  {
    id: 'gallery-06',
    plateNumber: 'PLATE VI',
    src: '/assets/gallery-06.jpg',
    title: 'Northern California Type Material (S. pacificus)',
    caption:
      'Fragmentary Late Carnian skeletal elements from the Shasta region of northern California described by John C. Merriam in 1895.',
    specimenCode: 'MERRIAM 1895 · TYPE LOCALITY',
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
