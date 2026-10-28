import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateDepthFromScroll,
  getDepthZoneLabel,
  getSizeComparisonItems,
  getClassificationAtYear,
  computeSkullMetrics,
  OVERVIEW_STATS,
  ANATOMY_HOTSPOTS,
  MYTH_REALITY_CARDS,
  DID_YOU_KNOW_FACTS,
  SCIENTIFIC_SOURCES,
} from './shastasaurusData';

test('calculateDepthFromScroll clamps between 0 m and 4,000 m', () => {
  assert.equal(calculateDepthFromScroll(0), 0);
  assert.equal(calculateDepthFromScroll(0.05), 200);
  assert.equal(calculateDepthFromScroll(0.25), 1000);
  assert.equal(calculateDepthFromScroll(1), 4000);
  assert.equal(calculateDepthFromScroll(-0.5), 0);
  assert.equal(calculateDepthFromScroll(1.4), 4000);
});

test('getDepthZoneLabel transitions at 200 m, 1,000 m, and 4,000 m', () => {
  assert.equal(getDepthZoneLabel(0), 'SURFACE GLOW');
  assert.equal(getDepthZoneLabel(199), 'SURFACE GLOW');
  assert.equal(getDepthZoneLabel(200), 'TWILIGHT ZONE');
  assert.equal(getDepthZoneLabel(999), 'TWILIGHT ZONE');
  assert.equal(getDepthZoneLabel(1000), 'MIDNIGHT ZONE');
  assert.equal(getDepthZoneLabel(3999), 'MIDNIGHT ZONE');
  assert.equal(getDepthZoneLabel(4000), 'ABYSS');
});

test('getSizeComparisonItems separates confirmed Shastasaurus species from 21–25 m giant relatives', () => {
  const confirmedView = getSizeComparisonItems(false);
  assert.equal(confirmedView.maxScaleMeters, 12);
  assert.equal(
    confirmedView.items.some((i) => i.id === 'shonisaurus-sikanniensis'),
    false
  );
  assert.equal(
    confirmedView.items.some((i) => i.id === 's-liangae' && i.lengthMeters === 8.3),
    true
  );

  const relativesView = getSizeComparisonItems(true);
  assert.equal(relativesView.maxScaleMeters, 25);
  assert.equal(
    relativesView.items.some((i) => i.id === 'shonisaurus-sikanniensis' && i.lengthMeters === 21),
    true
  );
  assert.equal(
    relativesView.items.some((i) => i.id === 'ichthyotitan' && i.lengthMeters === 25),
    true
  );
});

test('getClassificationAtYear tracks historical shifts for 2004, 2011, 2013, and 2021', () => {
  const y2004 = getClassificationAtYear(2004);
  assert.equal(y2004.chineseSpecies.genusAssignment, 'Guanlingsaurus liangae');
  assert.equal(y2004.canadianGiant.genusAssignment, 'Shonisaurus sikanniensis');

  const y2011 = getClassificationAtYear(2011);
  assert.equal(y2011.chineseSpecies.genusAssignment, 'Shastasaurus liangae');
  assert.equal(y2011.canadianGiant.genusAssignment, 'Shastasaurus sikanniensis');

  const y2013 = getClassificationAtYear(2013);
  assert.equal(y2013.chineseSpecies.genusAssignment, 'Guanlingsaurus liangae');
  assert.equal(y2013.canadianGiant.genusAssignment, 'Shonisaurus sikanniensis');

  const y2021 = getClassificationAtYear(2021);
  assert.equal(y2021.canadianGiant.genusAssignment, 'Shonisaurus sikanniensis');
});

test('computeSkullMetrics accurately computes adult (8.3 m, 8.3%) and juvenile (3.74 m, 9.3%) proportions', () => {
  const adult = computeSkullMetrics(8.3, 8.3);
  assert.equal(adult.skullLengthMeters, 0.69);
  assert.equal(adult.remainingBodyMeters, 7.61);

  const juvenile = computeSkullMetrics(3.74, 9.3);
  assert.equal(juvenile.skullLengthMeters, 0.35);
  assert.equal(juvenile.remainingBodyMeters, 3.39);
});

test('scientific dataset integrity: 9 overview stats, 9 anatomy hotspots, 6 myths, 8 facts, 18 sources', () => {
  assert.equal(OVERVIEW_STATS.length, 9);
  assert.equal(ANATOMY_HOTSPOTS.length, 9);
  assert.equal(MYTH_REALITY_CARDS.length, 6);
  assert.equal(DID_YOU_KNOW_FACTS.length, 8);
  assert.equal(SCIENTIFIC_SOURCES.length, 18);
});
