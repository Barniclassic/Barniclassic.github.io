window.onload = function() {
  
    let course = localStorage.getItem('myCourses');
    let parsedCourse = JSON.parse(course);
    for(let i=0;i<parsedCourse.length;i++){
        for(let j=0; j<parsedCourse[i].length; j++){
            let tBody1 = document.getElementById("tbody4");
            tBody1.innerHTML += `<tr></tr><td class="text-warning">${parsedCourse[i][j].CourseID}</td>
            <td class="text-light">${parsedCourse[i][j].courseDate}</td><td class="text-warning">${parsedCourse[i][j].CourseName}</td>
            <td><a class="text-light text-decoration-none" href=${parsedCourse[i][j].Link}>${parsedCourse[i][j].Discreption}</a></td>
            <td><input type="button" class="btn btn-danger" value="Delete" onclick="deleteCourse(this)"/></td></tr>`;
        }
    }
    
    
    document.getElementById("myAddButton1").addEventListener("click", function(){
        let courseId = document.getElementById("courseId").value;
        let courseName = document.getElementById("courseName").value;
        let courseDate = document.getElementById("courseDate").value;
        let discreption = document.getElementById("discreption").value;
        let semester = document.getElementById("semester").value;
        let link = document.getElementById("clink").value;
    
        
        if(semester.toLowerCase() === "spring"){
            let obj = {
                CourseID: `${courseId}`, 
                CourseName: `${courseName}`, 
                courseDate: `${courseDate}`, 
                Discreption:` ${discreption}`, 
                Link:`${link}`
            }
            parsedCourse[0].push(obj);
            console.log(parsedCourse);
            localStorage.setItem("myCourses", JSON.stringify(parsedCourse));
            document.getElementById("courseId").value = "";
            document.getElementById("courseName").value = "";
            document.getElementById("courseDate").value = "";
            document.getElementById("discreption").value = "";
            document.getElementById("semester").value = "";
            document.getElementById("clink").value = "";
        }
        
        else if(semester.toLowerCase() === "fall"){
            let obj = {
                CourseID: `${courseId}`, 
                CourseName: `${courseName}`, 
                courseDate: `${courseDate}`, 
                Discreption:` ${discreption}`, 
                Link:`${link}`
            }
            parsedCourse[1].push(obj);
            localStorage.setItem("myCourses", JSON.stringify(parsedCourse));
            document.getElementById("courseId").value = "";
            document.getElementById("courseName").value = "";
            document.getElementById("courseDate").value = "";
            document.getElementById("discreption").value = "";
            document.getElementById("semester").value = "";
            document.getElementById("clink").value = "";
        }
        else{
            alert("Please enter a correct semester");
            document.getElementById("courseId").value = "";
            document.getElementById("courseName").value = "";
            document.getElementById("courseDate").value = "";
            document.getElementById("discreption").value = "";
            document.getElementById("semester").value = "";
            document.getElementById("clink").value = "";
        }
    });
     
    let project = localStorage.getItem('myProjects');
        let parsedProject = JSON.parse(project);
        for(const element of parsedProject){
            const table = document.getElementById("tbody5");
            table.innerHTML += `<tr><td class="text-warning">${element.projectID}</td><td class="text-light">${element.projectDate}</td>
            <td class="text-warning"><a class="text-warning text-decoration-none" href=${element.link}>${element.projectName}</a></td>
            <td class="text-light">${element.difficulty}</td><td><input type="button" class="btn btn-danger" value="Delete" onclick="deleteProject(this)"/></td></tr>`;
        }
    document.getElementById("myAddButton2").addEventListener("click", function(){
        let projectId = document.getElementById("projectId").value;
        let projectName = document.getElementById("projectName").value;
        let projectDate = document.getElementById("projectDate").value;
        let difficulty = document.getElementById("difficulty").value;
        let plink = document.getElementById("plink").value;
    
        let obj = {
            projectID: `${projectId}`, 
            projectDate: `${projectName}`, 
            projectDate: `${projectDate}`,  
            difficulty:` ${difficulty}`,  
            link:`${plink}`
        }
            parsedProject.push(obj);
            localStorage.setItem("myProjects", JSON.stringify(parsedProject));
            document.getElementById("projectId").value = "";
            document.getElementById("projectName").value = "";
            document.getElementById("projectDate").value = "";
            document.getElementById("difficulty").value = "";
            document.getElementById("plink").value = "";
    });

    let messages = localStorage.getItem('messages');
    let myMessage = JSON.parse(messages);
    for(const element of myMessage){
        const table = document.getElementById("tbody6");
        table.innerHTML += `<tr><td class="text-warning">${element.email}</td><td class="text-light">${element.fName}</td><td class="text-warning">${element.lName}</td>
        <td class="text-light"><td class="text-light">${element.gender}</td></td><td class="text-warning">${element.comment}</td><td><button class="btn btn-danger" onclick="deleteMessage(this)">Delete</button></td></tr>`;
    }
}
function deleteCourse(btn) {
    var row = btn.parentNode.parentNode;
    let course = localStorage.getItem('myCourses');
    let parsedCourse = JSON.parse(course);
    for(let i=0; i<parsedProject.length; i++){
            if(parsedProject[i].projectID === row.childNodes[0].innerHTML){
                parsedProject.splice(i, 1);
                    break;
            }
    }
    row.remove();
    localStorage.setItem('myCourses', JSON.stringify(parsedCourse));
}

function deleteProject(btn) {
    var row = btn.parentNode.parentNode;
    let project = localStorage.getItem('myProjects');
    let parsedProject = JSON.parse(project);
    for(let i=0; i<parsedProject.length; i++){
        if(parsedProject[i].projectID === row.childNodes[0].innerHTML){
            console.log(parsedProject[i].projectID)
            parsedProject.splice(i, 1);
            break;
        }
    }
    row.remove();
    localStorage.setItem('myProjects', JSON.stringify(parsedProject));
}

function deleteMessage(btn){
    var row = btn.parentNode.parentNode;
    console.log(row.childNodes[0].innerHTML)
    let message = localStorage.getItem('messages');
    let parsedMessage = JSON.parse(message);
    // console.log(parsedMessage)
    for(let i=0; i<parsedMessage.length; i++){
        // console.log(parsedProject[i])
        if(parsedMessage[i].email === row.childNodes[0].innerHTML){
            // console.log(parsedProject[i].projectID)
            parsedMessage.splice(i, 1);
            break;
        }
    }
    row.remove();
    localStorage.setItem('messages', JSON.stringify(parsedMessage));
}