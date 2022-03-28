const Construction = require('../utils/constructHTML');
const fs = require('fs');
// makes a class that contains the methods needed to dynamically generate the html page
class MakeFile {
    constructor(data) {
        this.data = data;
    }
    // dynamically creates cards that are added into the document based on responses
    employeeCards() {
        const madeCard = []
        for ( let i = 0 ; i < this.data.length ; i++ ) {
            let thisName = this.data[i].name;
            let thisId = this.data[i].id;
            let thisEmail = this.data[i].email;
            let thisRole = this.data[i].role;
            let thisRest = '';
            let thisIcon = '';
            if (this.data[i].github) {
                thisRest = `<a href="https://github.com/${this.data[i].github}?tab=repositories" target="_blank">Github: ${this.data[i].github}</a>`;
                thisIcon = `<span class="oi oi-beaker"></span>`
            } else if (this.data[i].school) {
                thisRest = `School: ${this.data[i].school}`;
                thisIcon = `<span class="oi oi-headphones"></span>`
            } else if (this.data[i].officeNum) {
                thisRest = `Office Number: ${this.data[i].officeNum}`;
                thisIcon = `<span class="oi oi-briefcase"></span>`
                
            }

            madeCard.push(`<div class="card" style="width: 15rem; min-height: 100px; margin: 7px;">
            <div class="card-body p-0" style="background-color: cornflowerblue; border-radius: 1%;">
              <div class="text-white">
                  <h5 class="card-title text-center">${thisName}</h5>
                  <h6 class="card-subtitle text-center mb-2">${thisIcon} ${thisRole}</h6>
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">ID: ${thisId}</li>
                <li class="list-group-item"><a href="mailto:${thisEmail}">Email: ${thisEmail}</a></li>
                <li class="list-group-item">${thisRest}</li>
              </ul>
            </div>
          </div>`)
        }

      return madeCard.join('\r\n');
    }
    // returns the full html page with any dynamic values inserted
    fullHTML() {
return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
        <title>My Workforce</title>
    </head>
    <body>
        <header class="d-flex align-items-center w-100 justify-content-center text-white" style="height: 100px; background-color: brown;">
            <h1>My Team</h1>
        </header>
        <main class="d-flex align-items-center justify-content-center" style="height: 600px;">
            <div class="d-flex align-items-center justify-content-center flex-wrap w-75">
            ${this.employeeCards()}
            </div>
        </main>   
    </body>
</html>`
    }
}

module.exports = MakeFile;