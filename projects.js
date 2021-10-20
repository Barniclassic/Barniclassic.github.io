let projects = [
  {projectID: 'CS-203', projectName: 'Library Project', projectDate: '5/16/2021', difficulty:`6`, link: `./project1.html`},
  {projectID: 'CS-203', projectName: 'Payroll Management System', projectDate: '5/10/2021', difficulty:`7`, link: `./project2.html`},
  {projectID: 'CS-315', projectName: 'Mini Projects', projectDate: '10/05/2021', difficulty:`4`, link: `./project3.html`},
  {projectID: 'CS-315', projectName: 'Movie Page', projectDate: '10/12/2021', difficulty:`6`, link: `./project4.html`}
  ]

localStorage.setItem("myProjects", JSON.stringify(projects));
window.onload = function(){
  let project = localStorage.getItem('myProjects');
  let parsedProject = JSON.parse(project);

  for(const element of parsedProject){
    const table = document.getElementById("tbody3");
    table.innerHTML += `<tr><td class="text-warning">${element.projectID}</td><td class="text-light">${element.projectDate}</td>
    <td class="text-warning"><a class="text-warning text-decoration-none" href=${element.link}>${element.projectName}</a></td><td class="text-light">${element.difficulty}</td></tr>`;
  }
    document.getElementById("sort").addEventListener("click", function(){
        var table, rows, counter, colDiff, colDate, boolean, i, x, y, reArrange;
        table = document.getElementById("tbody3");
        colDiff = document.getElementById("sortByDifficulty");
        colDate = document.getElementById("sortByDate");
        if (colDate.checked) {
          counter = 1;
        }
        if (colDiff.checked) {
            counter = 3;
        }
        boolean = true;
        while (boolean) {
          boolean = false;
          rows = table.rows;
          for (i = 0; i < rows.length - 1; i++) {
            reArrange = false;
            x = rows[i].getElementsByTagName("td")[counter].innerHTML;
            y = rows[i + 1].getElementsByTagName("td")[counter].innerHTML;
            if(counter == 3){
                if (x.toLowerCase() > y.toLowerCase()) {
                reArrange = true;
                break;}
            }
            if(counter == 1){
              let valueX = x.split("/").join('');
              let valueY = y.split("/").join('');
              console.log(valueX, valueY);
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