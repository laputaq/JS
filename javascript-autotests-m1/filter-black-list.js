let allEmail = ['good1@mail.com', 'good2@mail.com', 'bad1@mail.com', 'bad2@mail.com']
let blackListEmail = ['bad1@mail.com', 'bad2@mail.com']

function filter(allE, black) {
  let validAll = [];
  for (let indexAll in allE) {
    if (!black.includes(allE[indexAll])) {
        validAll.push(allE[indexAll]);
    }
  }
return validAll;
}
let validEmails = filter(allEmail, blackListEmail);
console.log(validEmails);

export default filter;
