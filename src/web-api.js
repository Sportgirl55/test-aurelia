// const response = {
//   "name": "Luke Skywalker",
//   "height": "172",
//   "mass": "77",
//   "hair_color": "blond",
//   "skin_color": "fair",
//   "eye_color": "blue",
//   "birth_year": "19BBY",
//   "gender": "male",
//   "homeworld": "https://swapi.dev/api/planets/1/",
//   "films": [
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/2/",
//       "https://swapi.dev/api/films/3/",
//       "https://swapi.dev/api/films/6/"
//   ],
//   "species": [],
//   "vehicles": [
//       "https://swapi.dev/api/vehicles/14/",
//       "https://swapi.dev/api/vehicles/30/"
//   ],
//   "starships": [
//       "https://swapi.dev/api/starships/12/",
//       "https://swapi.dev/api/starships/22/"
//   ],
//   "created": "2014-12-09T13:50:51.644000Z",
//   "edited": "2014-12-20T21:17:56.891000Z",
//   "url": "https://swapi.dev/api/people/1/"
// }

const resp = {
  _embedded: {
    orgUnits: [
      {
        availableForCalculation: false,
        name: "Почта России",
        active: false,
        _links: {
          self: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946",
          },
          tableEditSettings: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/table-edit/175946",
          },
          tags: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/tags/175946",
          },
          children: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/children{?only-active}",
            templated: true,
          },
          childrenStaffNumberAppByGroup: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/children/staff-number-app/org-unit-group{?only-active,group-id}",
            templated: true,
          },
          childrenStaffNumberApp: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/children/staff-number-app{?only-active,org-unit-types,org-unit-classes,tsoul,tsvp}",
            templated: true,
          },
          forecastBatch: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/forecast-batch{?from,to,algorithm,month-sum-coefficient,sum-prediction-method,min-hour-value,max-hour-value,history-organization-unit-id,history-from,history-to}",
            templated: true,
          },
          rosteringBatch: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/rostering-batch{?from,to,rerostering,with-min-deviation,ignore-noe}",
            templated: true,
          },
          calculateNumberOfEmployeesBatch: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/calculate-noe-batch{?from,use-math-param,user-traffic,strategy,constant-noe-requirement,max-positive-change,max-negative-change}",
            templated: true,
          },
          calculateFteBatch: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/calculate-fte-batch{?from,to,use-math-param,recalculate-staff-number,method}",
            templated: true,
          },
          kpiForecastDiagnosticsValues: {
            href: "https://wfm-dev.t.goodt.me/api/v1/kpi-forecast-correction-sessions/kpi-forecast-diagnostics-values/175946{?kpi-id,from,to}",
            templated: true,
          },
          records: {
            href: "https://wfm-dev.t.goodt.me/api/v1/bio/records/org-unit/175946?from={from}&to={to}",
            templated: true,
          },
          employeeStatuses: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/employee-statuses-list{?from,to}",
            templated: true,
          },
          orgUnitPossibleParents: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/possible-parents",
          },
          workedOrPublishedRoster: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/worked-or-published{?date,priority}",
            templated: true,
          },
          relModeConfirmNames: {
            href: "https://wfm-dev.t.goodt.me/api/v1/search/mode-confirm-names",
          },
          employeePositionNorm: {
            href: "https://wfm-dev.t.goodt.me/api/v1/employee-position-norm/org-unit/175946{?from,to}",
            templated: true,
          },
          phones: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/phones{?include-parent}",
            templated: true,
          },
          addresses: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/addresses{?include-parent}",
            templated: true,
          },
          orgUnitType: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-unit-types",
          },
          entityProperties: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/entity-properties",
          },
          chief: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/chief",
          },
          positions: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/positions{?include-chief,include-old}",
          },
          positionGroupsCurrent: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/fte-position-group-current?from={from}&to={to}",
            templated: true,
          },
          employeePositions: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/employee-positions{?include-chief,from,to}",
          },
          unattachedEmployees: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/unattached-employees",
          },
          chiefsChain: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/chiefs-chain",
          },
          vacancies: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/vacancies{?from,to}",
            templated: true,
          },
          substitutionals: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/substitutionals{?from,to}",
            templated: true,
          },
          businessHours: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/business-hours",
          },
          mathParameterValues: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/math-parameter-values",
          },
          druidKpiValues: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/kpi/{kpiId}/druid-kpi-value-history{?kpiId,from,to,time-unit}",
            templated: true,
          },
          kpiValues: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/kpi/{kpiId}/kpi-values{?kpiId,from,to,level}",
            templated: true,
          },
          kpiForecastValues: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/kpi/{kpiId}/kpi-forecast-values{?kpiId,from,to,level}",
            templated: true,
          },
          mathParametersGroups: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/math-parameters",
          },
          fteOperationValues: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/fte-operation-values{?from,to,event-ids,kpi-ids,position-group-ids}",
            templated: true,
          },
          indicators: {
            href: "https://wfm-dev.t.goodt.me/api/v1/org-units/175946/indicators{?from,to,kpi-category-id,kpi-category-value-id,time-unit}",
            templated: true,
          },
          availableHiringReason: {
            href: "https://wfm-dev.t.goodt.me/api/v1/shift-hiring-reason/for-org-unit/175946",
          },
        },
        id: 175946,
      },
    ],
  },
};


export class WebAPI {
  isRequesting = false;

  // getList() {
  //   this.isRequesting = true;
  //   fetch("https://wfm-dev.t.goodt.me/api/v1/org-units/main", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Basic ${btoa("superuser:qweqwe")}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then(console.log);
  // }

  getList() {
    this.isRequesting = true;
   
    fetch("https://wfm-dev.t.goodt.me/api/v1/org-units/main", {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa("superuser:qweqwe")}`,
      },
    })
      // .then((response) => response.json())
      // .then(console.log)

       .then((response) => response.json())
       .then(response => console.log(response.statusText))
      

      // .then(resp => {return resp.json()})
      //.then(resBody => {console.log(resBody)})
     
  }

  // console.log(response.status);  
  // console.log(response.statusText);  
  // console.log(response.type);  
  // console.log(response.url);  

  // getList() {
  //   this.isRequesting = true;
  //   fetch("https://swapi.dev/api/people/1", {
  //     method: "GET"

  //   })
  //     .then((response) => response.json())
  //     .then(console.log(response.films));
  // }
}
