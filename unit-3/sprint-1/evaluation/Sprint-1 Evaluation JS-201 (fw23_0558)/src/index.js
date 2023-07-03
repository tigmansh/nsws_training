// Problem 1. complete the below function
function school(schoolName, location, established, ...subjects){
return{
  name: `${schoolName}`,
  // "ABC School was established in 1991 at New Delhi."
  getGeneralInfo: ()=>{
    return `${schoolName} was established in ${established} at ${location}.`
  },
  // "At ABC School we teach English, Hindi, Mathematics."
  getSubjectsInfo: ()=>{

    return `At ${schoolName} we teach ${subjects[0]}, ${subjects[1]}, ${subjects[2]}, ${subjects[3]}, ${subjects[4]}.`
  }
}
}

// Problem 2.
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let inputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
  }
];

// Required Output
// [
//   { productId:"52768", productTitle:"Apple Frangipan Tart", Category:"Dessert", Area:"British" }, 
//   { productId:"53049", productTitle:"Apam balik", Category:"Dessert", Area:"Malaysian" },
//   { productId:"52767", productTitle:"Bakewell tart", Category:"Dessert", Area:"British" }
// ]

let outputArray = inputArray.reduce((acc,item)=>{
let obj = {};
obj.productId = item.idMeal;
obj.productTitle = item.strMeal;
obj.Category = categoriesDirectory[item.Category];
obj.Area = areasDirectory[item.Area];

acc.push(obj);
return acc;
},[])
console.log(outputArray);

export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };
