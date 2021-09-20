"use strict";

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(student => {
//             console.log(this.title + ": " + student);
//         });
//     }
// };
// group.showList();


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
      let obj = this;
    this.students.forEach(function(student) {
      console.log(obj.title + ": " + student);
    });
    }
     
   };
   let bound = group.showList.bind(group);
   bound();