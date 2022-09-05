let poorCountry = ["bd", "shrilanka"];
let richCountry = ["Canada", "Italy"];

let newCountry = ["China",...richCountry, "India", ...poorCountry];

console.log("NewCountry =", newCountry);

// spread operator diye sudho ekta list er item golo k newa hoi . tai nreCountry array moddhe sobgolo item ache! Push operator er belai ai bisoy ta vinno.

let newCountry2 = ["Uk", "USA"];
newCountry2.push(richCountry);

console.log("NewCountry2 =", newCountry2);

// push korar fole porCountry namok poro array ta k e push kore d se newCountry2 te
// aita e difference