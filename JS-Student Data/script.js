const studentForm = document.getElementById('studentForms');
const studentList = document.getElementById('studentList');
const errorDiv = document.getElementById('error');
const Students = [];

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const studentId = document.getElementById('studentId').value.trim();
    const studentName = document.getElementById('studentName').value.trim();
    const studentAge = document.getElementById('studentAge').value.trim();

    try {
        addStudent(studentId, studentName, studentAge);
        displayStudents();
        errorDiv.textContent = '';
        studentForm.reset();
    } catch (error) {
        errorDiv.textContent = error.message;
    }
});

function addStudent(id, name, age) {
    if (!id || !name || !age) {
        throw new Error('All Fields Are Required.');
    }
    if (Students.some(student => student.id === id)) {
        throw new Error('Student ID must be unique.');
    }
    if (isNaN(age) || age <= 0) {
        throw new Error('Age must be a positive number.');
    }

    Students.push({ id, name, age: Number(age) });
}

function displayStudents() {
    studentList.innerHTML = '';

    Students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`;
        studentList.appendChild(li);
    });
}

