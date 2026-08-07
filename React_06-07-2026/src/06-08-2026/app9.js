class Student {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log("Student Name:", this.name);
    }
}

const s1 = new Student("Mounika");
s1.display();