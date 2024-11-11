using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

using { RiskManagement as my } from '../db/schema';

@path : '/service/riskmanagmentSvcs'
service RiskManagementService
{
    annotate Mitigations with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'any' ] }
    ];

    annotate Risks with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'any' ] }
    ];

    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;
}

annotate RiskManagementService with @requires :
[
    'authenticated-user',
    'any'
];
