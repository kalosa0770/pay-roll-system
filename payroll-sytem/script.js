const employeeList = document.getElementById('employee-list');
const employeeNameInput = document.getElementById('employee-name');
const employeeSalaryInput = document.getElementById('employee-salary');

const employees = [];

function addEmployee() {
    console.log('addEmployee function is called.');
    const name = employeeNameInput.value;
    const salary = parseFloat(employeeSalaryInput.value);

    if (name.trim() === '' || isNaN(salary) || salary <= 0) {
        alert('Please enter a valid name and salary.');
        return;
    }

    employees.push({ name, salary });
    updateEmployeeList();
    clearInputs();
}

function updateEmployeeList() {
    employeeList.innerHTML = '';
    employees.forEach((employee) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${employee.name}: $${employee.salary.toFixed(2)}`;
        employeeList.appendChild(listItem);
    });
}

function clearInputs() {
    employeeNameInput.value = '';
    employeeSalaryInput.value = '';
}

// Initial display
updateEmployeeList();