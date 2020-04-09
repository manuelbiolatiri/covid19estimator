const covid19ImpactEstimator = ({covidDataTypes}) => {

  const covidDataTypes = {
    data: {
      region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
      periodType: "days",
      timeToElapse: 58,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614
    },
    impact: {
      currentlyInfected:'covidDataTypes.data.reportedCases * 10',
      infectionsByRequestedTime: 'currentlyInfected * 512'
    },
    severeImpact: {
      currentlyInfected: 'covidDataTypes.data.reportedCases * 50',
      infectionsByRequestedTime: 'currentlyInfected * 512'
    }
  }

  return {
          data: {},
          impact: {},
          severeImpact: {}
        } 
};

export default covid19ImpactEstimator;