class Student {
    static idCounter = 10000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = ++Student.idCounter;
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    enroll(course) {
        this.courses.push(course);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Payment of $${amount} received from ${this.name}.`);
        this.viewBalance();
    }
    showStatus() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        this.viewBalance();
    }
}
// Create student objects
const student1 = new Student("John Doe");
const student2 = new Student("Alice Smith");
const student3 = new Student("Bob Johnson");
const student4 = new Student("Emily Davis");
const student5 = new Student("Michael Brown");
// Enroll students in courses
student1.enroll("Math");
student1.enroll("Science");
student2.enroll("English");
student3.enroll("History");
student3.enroll("Geography");
student4.enroll("Art");
student5.enroll("Physics");
student5.enroll("Chemistry");
// Pay tuition fees
student1.payTuition(1000);
student2.payTuition(800);
student3.payTuition(1200);
student4.payTuition(900);
student5.payTuition(1100);
// Show status for all students
console.log("\nStudent Status:");
student1.showStatus();
student2.showStatus();
student3.showStatus();
student4.showStatus();
student5.showStatus();
export {};
