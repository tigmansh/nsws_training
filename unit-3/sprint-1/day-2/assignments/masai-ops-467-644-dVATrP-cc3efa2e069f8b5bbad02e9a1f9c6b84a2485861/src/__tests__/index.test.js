

import { studentData } from '../index';
global.score = 1

describe('Object properties and expected return', function(){
  let data = studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');

  // marks: 1
  test('to be of type object', function(){
    expect(data && typeof data === 'object').toBe(true)
  })

  // marks: 1
  test('to have fullName', function(){
    expect(data).toHaveProperty('fullName');
  })

  // marks: 1
  test('to have age', function(){
    expect(data).toHaveProperty('age');
  })

  //marks: 1
  test('to have hobbies', function(){
    expect(data).toHaveProperty('hobbies');
  })

  //marks: 2
  test('to have getInfo', function(){
    expect(data).toHaveProperty('getInfo');
  })

  // marks: 2
  test('getResult', function(){
    expect(data).toHaveProperty('getResult');
  })

  //marks: 2
  test('getInfo to be of type function', function(){
    expect(typeof data.getInfo).toBe('function');
  })

  //marks: 2
  test('getResult to be of type function', function(){
    expect(typeof data.getResult).toBe('function');
  })

  //marks: 2
  test('output of getInfo', function(){
    expect(data.getInfo()).toBe("Vivek Agarwal's age is 38.");
  })

  //marks: 2
  test('output of getResult', function(){
    expect(data.getResult()).toBe('Result: PASS');
  })

  let data2 = studentData('Will', 'Smith', 54, [48,49,50] , 'A', 'B', 'C');

  //marks: 2
  test('output of getInfo with Will Smith 54', function(){
    expect(data2.getInfo()).toBe("Will Smith's age is 54.");
  })
  
  //marks: 2
  test('output of getResult with marks 48 49 and 50', function(){
    expect(data2.getResult()).toBe('Result: FAIL');
  })
})

afterAll(() => {
  console.log("Final Score is", global.score);
});
