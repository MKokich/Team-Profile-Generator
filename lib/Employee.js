
class Employee {
    
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
    }
    
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
  }

module.exports = Employee


