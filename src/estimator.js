const covid19ImpactEstimator = (data) => {
  const {reportedCases, timeToElapse, periodType, totalHospitalBeds, region} = data;
  const {impactCurrentlyInfected, impactInfectionsByRequestedTime, casesByRequestedTime, ImpactHospitalBedByRequestedTime, impactCasesForICUByRequestedTime, 
    impactCasesForVentillatorsByRequestedTime, impactDollarsInFlight} = impact;
  const {severeImpactCurrentlyInfected, severeImpactInfectionsByRequestedTime, severeCasesByRequestedTime, severeImpactHospitalBedByRequestedTime,
    severeImpactCasesForICUByRequestedTime, severeImpactCasesForVentillatorsByRequestedTime, severeImpactDollarsInFlight} = severeImpact;
  let factor;
  let period;

  if (periodType === 'days') {
    factor = Math.floor(timeToElapse / 3);
    period = timeToElapse;
  } else if (periodType === 'weeks') {
    factor = Math.floor((timeToElapse * 7) / 3);
    period = timeToElapse * 7;
  } else {
    factor = Math.floor((timeToElapse * 30)/ 3);
    period = timeToElapse * 30;
  }

  const impactCurrentlyInfected = reportedCases * 10;
  const impactInfectionsByRequestedTime = impactCurrentlyInfected *(2 ** factor);
  const casesByRequestedTime = impactInfectionsByRequestedTime * 0.15;
  const ImpactHospitalBedByRequestedTime = (totalHospitalBeds * 0.35) - casesByRequestedTime;
  const impactCasesForICUByRequestedTime = impactInfectionsByRequestedTime * 0.05;
  const impactCasesForVentillatorsByRequestedTime = impactInfectionsByRequestedTime * 0.02;
  const impactDollarsInFlight =  impactInfectionsByRequestedTime * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * period;

  const severeImpactCurrentlyInfected = reportedCases * 50;
  const severeImpactInfectionsByRequestedTime = severeImpactCurrentlyInfected *(2 ** factor);
  const severeCasesByRequestedTime = severeImpactInfectionsByRequestedTime * 0.35;
  const severeImpactHospitalBedByRequestedTime = (totalHospitalBeds * 0.35) - severeCasesByRequestedTime;
  const severeImpactCasesForICUByRequestedTime = severeImpactInfectionsByRequestedTime * 0.05;
  const severeImpactCasesForVentillatorsByRequestedTime = severeImpactInfectionsByRequestedTime * 0.02;
  const severeImpactDollarsInFlight =  severeImpactInfectionsByRequestedTime * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * period;

  return {
    data: {},
    impact: {},
    severeImpact: {}
    } 
};
export default covid19ImpactEstimator;
