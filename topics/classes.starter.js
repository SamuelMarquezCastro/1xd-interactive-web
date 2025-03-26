class Student {
    constructor(firstname, name) { 
        this.firstname = firstname;
        this.name = name;
    }

    getFullName() {
        return `${this.firstname} ${this.name}`; 
    }

    printStudentCard() {
        const card = document.createElement("div");
        card.innerHTML = `${this.firstname} ${this.name}`; 
        
        const container = document.querySelector("#studentCard"); 
        if (container) {
            container.appendChild(card);
        } else {
            console.error("#studentCard container not found");
        }
    }
}

// Create a new instance of Student
const student = new Student("John", "Smith");

// Log the full student name
console.log(student.getFullName());

// Call printStudentCard to display the student's name
student.printStudentCard();