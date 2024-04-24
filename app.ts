#!/usr/bin/env node

class Student {
    private static idCounter: number = 10000;
    private id: number;
    private name: string;
    private courses: string[];
    private balance: number;

    constructor(name: string) {
        this.id = ++Student.idCounter;
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }

    enroll(course: string): void {
        this.courses.push(course);
    }

    viewBalance(): void {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }

    payTuition(amount: number): void {
        this.balance -= amount;
        console.log(`Payment of $${amount} received from ${this.name}.`);
        this.viewBalance();
    }

    showStatus(): void {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        this.viewBalance();
    }
}

// Example usage
const student1 = new Student("John Doe");
student1.enroll("Math");
student1.enroll("Science");
student1.viewBalance();
student1.payTuition(1000);
student1.showStatus();
