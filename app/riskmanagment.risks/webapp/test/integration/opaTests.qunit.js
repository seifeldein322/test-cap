sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagment/risks/test/integration/FirstJourney',
		'riskmanagment/risks/test/integration/pages/RisksList',
		'riskmanagment/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagment/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);