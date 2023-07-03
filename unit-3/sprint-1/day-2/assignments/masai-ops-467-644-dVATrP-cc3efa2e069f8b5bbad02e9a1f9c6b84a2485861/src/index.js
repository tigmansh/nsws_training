function studentData(firstName, lastName, age, marksArray, ...hobbies){
  return{
    fullName: `${firstName} ${lastName}`,
    age: age,
    hobbies: hobbies,
    getInfo: () => {
      return `${firstName} ${lastName}'s age is ${age}.`;
    },
    getResult: () => {
      let sum = 0;
      for(let i=0; i<marksArray.length; i++){
        sum+=marksArray[i];
      }
      let avg = sum/marksArray.length;
      if (avg < 50){
        return 'Result: FAIL';
      }
      else{
        return 'Result: PASS';
      }
    }
  }
}

export {
  studentData
}

