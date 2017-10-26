module.exports = class Job {
    constructor(position, salary){
        this.position = position;
        this.salary = salary;
    }

    changeSalary(newSalary){
        this.salary = newSalary;
    }

    changePosition(newPosition){
        this.position = newPosition;
    }
};
