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
    fetch("https://swapi.dev/api/people/1", {
      method: "GET"
  
    })
      .then((response) => response.json())
      .then(console.log);
  }
}
