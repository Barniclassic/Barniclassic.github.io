// let spring =[
//   {CourseID: 'CS-105', CourseName: 'Introduction to Java', courseDate: '2/22/2021', Discreption:`An introduction to the fundamentals of computer programming through media computation. Students will
//   learn to write interactive graphical programs. Fundamental language concepts such as variables,
//   conditionals, loops, functions, and arrays.`, Link:'https://www.w3schools.com/java/java_intro.asp'}, 

//   {CourseID: 'CS-201', CourseName: 'Procedural Programming', courseDate: '3/22/2021', Discreption:`To introduce the fundamental concepts related to computer science; aiming to prepare students with the 
//   skills to create basic algorithms that solve specific problems.`, Link:'https://www.w3schools.com/Java/default.asp'},
  
//   {CourseID: 'CS-203', CourseName: 'Object Oriented Programming in Java', courseDate: '4/19/2021', Discreption:`This course covers programming in Java, specifically focusing on object-oriented concepts and
//   creating GUI applications. It include classes and objects, inheritance and polymorphism, interfaces and abstract classes, and exception handling.`, Link:'https://www.w3schools.com/java/java_oop.asp'},

//   {CourseID: 'CS-221', CourseName: 'Data Structures', courseDate: '5/17/2021', Discreption:`Students use computer programming laboratory problems to apply the principles of data
//   structure organization in a practical environment and develop advanced programming skills.`, Link:'https://www.geeksforgeeks.org/data-structures/'},

//   {CourseID: 'CS-272', CourseName: 'Discrete Mathematics', courseDate: '6/21/2021', Discreption:`Discrete mathematics provides the mathematical foundations for many computer science courses including data structures, 
//   algorithms, database theory, automata theory, formal languages, compiler theory, computer security, and operating systems.`, Link:'https://www.coursera.org/specializations/discrete-mathematicsDiscrete'},
// ]
// let fall = [
//   {CourseID: 'CS-305', CourseName: 'Object Oriented Programming in JavaScript', courseDate: '8/30/2021', Discreption:`In this course, you will gain proficiency in using JavaScript as a functional programming language. 
//     You will learn object-oriented programming principles and the nature of JavaScript’s loosely typed programs and dynamic object model.`, Link:'https://www.w3schools.com/js/js_objects.asp'},

//   {CourseID: 'CS-315', CourseName: 'Web Application Programming in JavaScript', courseDate: '9/27/2021', Discreption:`This course will teach you all the fundamentals of creating web applications, from using 
//   HTML to make a web page, to styling your content, to making your pages interactive.`, Link:'https://www.w3schools.com/html/html_attributes.asp'},

//   {CourseID: 'CS-445', CourseName: 'Modern Asynchronous Programming', courseDate: '10/25/2021', Discreption:`In this course you’ll learn techniques for managing your async code. Features like ES2021 Promise.any() allow you to 
//   safeguard your async code from external issues that are out of your control like server downtime.`, Link:'https://pragprog.com/titles/fkajs/modern-asynchronous-javascript/'},

//   {CourseID: 'CS-415', CourseName: 'Relational and Document-Based Databases', courseDate: '11/22/2021', Discreption:` To introduce the fundamental concepts related to computer science; aiming to prepare students with the 
//   skills to create basic algorithms that solve specific problems.`, Link:'https://www.coursera.org/lecture/nosql-databases/mongo-db-zdWwX'},
// ]

// let courses = [spring, fall];  
// localStorage.setItem("myCourses", JSON.stringify(courses));


window.onload = function(){
  let course = localStorage.getItem('myCourses');
  let parsedCourse = JSON.parse(course);
  for(let i=0; i<parsedCourse[0].length; i++) {
    let table = document.getElementById("tbody1");
    table.innerHTML += `<tr><td class="text-warning">${parsedCourse[0][i].CourseID}</td><td class="text-light">${parsedCourse[0][i].courseDate}</td><td class="text-warning">${parsedCourse[0][i].CourseName}</td><td><a class="text-light text-decoration-none" href=${parsedCourse[0][i].Link}>${parsedCourse[0][i].Discreption}</a></td></tr>`;
  }
  
  for(let i=0; i<parsedCourse[1].length; i++) {
    let table = document.getElementById("tbody2");
    table.innerHTML += `<tr><td class="text-warning">${parsedCourse[1][i].CourseID}</td><td class="text-light">${parsedCourse[1][i].courseDate}</td><td class="text-warning">${parsedCourse[1][i].CourseName}</td><td><a class="text-light text-decoration-none" href=${parsedCourse[1][i].Link}>${parsedCourse[1][i].Discreption}</a></td></tr>`;
  }
  
    document.getElementById("sort1").addEventListener("click", function(){
        var table, rows, counter, colName, colDate, boolean, i, x, y, reArrange;
        table = document.getElementById("tbody1");
        colName = document.getElementById("sortByName1");
        colDate = document.getElementById("sortByDate1");
        if (colName.checked) {
          counter = 2;
        }
        if (colDate.checked) {
          counter = 1;
        }
        boolean = true;
        while (boolean) {
          boolean = false;
          rows = table.rows;
          for (i = 0; i < rows.length - 1; i++) {
            reArrange = false;
            x = rows[i].getElementsByTagName("td")[counter].innerHTML;
            y = rows[i + 1].getElementsByTagName("td")[counter].innerHTML;
            if(counter == 2){
                if (x.toLowerCase() > y.toLowerCase()) {
                reArrange = true;
                break;}
            }
            if(counter == 1){
              let valueX = x.split("/").join();
              let valueY = y.split("/").join();
              if (parseInt(valueX) - parseInt(valueY) >0) {
              reArrange = true;
              break;}
            }
          }
          if (reArrange) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              boolean = true;
          }
        }
    })
    
    document.getElementById("sort2").addEventListener("click", function(){
        var table, rows, counter, colName, colDate, boolean, i, x, y, reArrange;
        table = document.getElementById("tbody2");
        colName = document.getElementById("sortByName2");
        colDate = document.getElementById("sortByDate2");
        if (colName.checked) {
          counter = 2;
        }
        if (colDate.checked) {
          counter = 1;
        }
        boolean = true;
        while (boolean) {
          boolean = false;
          rows = table.rows;
          for (i = 0; i < rows.length - 1; i++) {
            reArrange = false;
            x = rows[i].getElementsByTagName("td")[counter].innerHTML;
            y = rows[i + 1].getElementsByTagName("td")[counter].innerHTML;
            if(counter == 2){
                if (x.toLowerCase() > y.toLowerCase()) {
                reArrange = true;
                break;}
            }
            if(counter == 1){
              let valueX = x.split("/").join('');
              let valueY = y.split("/").join('');
              if (parseInt(valueX) - parseInt(valueY) >0) {
              reArrange = true;
              break;}
            }
          }
          if (reArrange) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              boolean = true;
          }
        }
    })
}

