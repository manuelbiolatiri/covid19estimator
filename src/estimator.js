const covid19ImpactEstimator = (data) => {
    data: {
        reportedCases: 674
    },
    impact: {
      currentlyInfected:'data.reportedCases * 10',
      infectionsByRequestedTime: 'currentlyInfected * 512'
    },
    severeImpact: {
      currentlyInfected: 'data.reportedCases * 50',
      infectionsByRequestedTime: 'currentlyInfected * 512'
    }
  
  return {
    data: {},
    impact: {},
    severeImpact: {}
    } 
};
export default covid19ImpactEstimator;
