import API from "./api.js"
import assignmentHTML from "./factory.js";
import renderToDom from "./dom.js";

const message = "Employees List with Departments and Computer Assignments"

document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

API.getData()
.then(employees => {
    employees.forEach(employee => {
        const name = employee.name
        const department = employee.department.departmentName
        const computer = employee.computer.computerSerialNumber
        const HTMLRepresentation = assignmentHTML(name, department, computer)
        renderToDom(HTMLRepresentation)
    })
})