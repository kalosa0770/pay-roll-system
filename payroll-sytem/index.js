document.getElementById('calculateButton').addEventListener('click', function () {
    const employeeName = document.getElementById('employeeName').value;
    const salary = parseFloat(document.getElementById('salary').value);
    
    const taxRate = 0.15;
    const taxAmount = salary * taxRate;
    const netSalary = salary - taxAmount;
    
    const result = `${employeeName}'s Net Salary: $${netSalary.toFixed(2)}`;
    document.getElementById('result').textContent = result;
});

document.getElementById('submitLeave').addEventListener('click', function () {
    const requestedLeave = parseInt(document.getElementById('leaveDays').value);
    const availableLeave = 20; // Available leave days
    
    if (requestedLeave <= availableLeave) {
        availableLeave -= requestedLeave;
        document.getElementById('leaveResult').textContent = `Leave request approved. Available leave: ${availableLeave} days`;
    } else {
        document.getElementById('leaveResult').textContent = 'Insufficient leave balance.';
    }
});


const employeeList = document.getElementById('employee-list');
const employeeNameInput = document.getElementById('employee-name');
const employeeSalaryInput = document.getElementById('employee-salary');

const employees = [];

function addEmployee() {
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

