// const students = [
//     {
//       name: "Nurs",
//       age:13,
//       math: 90,
//       city: "Алматы",
//       country: "Қазақстан"
//     },
//     {
//       name: "Meir",
//       age:14,
//       math: 85,
//       city: "Нұр-Сұлтан"
      
//     }
//   ];
  

//   const [{ name: name1, math: math1, city: city1, country: country1 = "Қазақстан" }, 
//          { name: name2, math: math2, city: city2, country: country2 = "Қазақстан" }] = students;
  
 
//   console.log(`1-ші оқушы: ${name1}, ${math1} балл, қала: ${city1}, ел: ${country1}`);
//   console.log(`2-ші оқушы: ${name2}, ${math2} балл, қала: ${city2}, ел: ${country2}`);





const class1 = ["Nurs", "Meir"];
const class2 = ["Kaisar", "Asadbek", "Eldos bratan"];


let  Room= ["Директор", ...class1, ...class2, "Мұғалім"];


console.log(Room); 