//----------------------task-1-------------------------
class CreateUser {
    static userCount = 0;
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.userID = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        CreateUser.userCount++;
    }
    
    numberCount() {
      return  CreateUser.userCount;
    }
    
    updateUser(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    displayDetails() {
        return `Username: ${this.username}  email: ${this.email} password: ${this.password}  userID: ${this.userID}`;
    }
}

let john = new CreateUser("veena", "veena@gmail.com", "1233");
let smith = new CreateUser("veena", "veena@gmail.com", "1233");
let david = new CreateUser("veena", "veena@gmail.com", "1233");
let dass = new CreateUser("veena", "veena@gmail.com", "1233");
let alice = new CreateUser("veena", "veena@gmail.com", "1233");
console.log(alice.displayDetails());
alice.updateUser("Anna","anna@gmail.com","0987")
john.updateUser("Akil", "akil@gmail.com", "0987");
console.log(john.numberCount())
console.log(alice.displayDetails());


// ------------------task-2------------------------------

class Rapido {
    constructor(driver,customer,distance,location,destination) {
        this.driver = prompt("Enter driver name:");
        this.customer = prompt("Enter customer name:");
        this.distance = prompt("Enter distance in km:");
        this.location = prompt("Enter current location:");
        this.destination = prompt("Enter destination:");
    }
    
    fareCalculation() {
        const costPerKm = 10;
        
        const distanceNumber = parseFloat(this.distance);
        if (isNaN(distanceNumber)) {
            console.log("Invalid distance provided");
            return 0; 
        }
        
        const totalCost = distanceNumber * costPerKm;
        return totalCost; 
    }

    driverRating(value) {
        console.log(`Driver rating: ${value}`);
    }

    rideDetails() {
        const fare = this.fareCalculation(); 
        const driverRating = parseFloat(prompt("Enter driver rating:"));
        this.driverRating(driverRating);
        console.log(`Driver: ${this.driver}, Customer: ${this.customer}, Price: ${fare}rs, Location: ${this.location}, Destination: ${this.destination},Driver Rating : ${driverRating}`);
    }
}

let fare = new Rapido(); 
fare.rideDetails();


// -------------------------task-3---------------------------------


class Swiggy {
    static priceList = {
        poori: 20,
        idly: 10,
        sandwich: 50
    };

    constructor(orderID, items, deliveryAddress) {
        this.orderID = orderID;
        this.items = items;
        this.deliveryAddress = deliveryAddress;
        this.status = 'ordered';
    }

    updateItem(itemName, quantity) {
        if (this.items[itemName]) {
            this.items[itemName] += quantity;
        } else {
            this.items[itemName] = quantity;
        }
    }

    removeItem(itemName) {
        delete this.items[itemName];
    }

    updateStatus(currentStatus) {
        this.status = currentStatus;
    }

    totalAmount() {
        let total = 0;
        for (const [item, quantity] of Object.entries(this.items)) {
            total += Swiggy.priceList[item] * quantity;
        }
        return total;
    }

    displayOrderDetails() {
        let orderDetails = "";
        orderDetails += "Order ID: " + this.orderID + "\n";
        orderDetails += "Items: " + JSON.stringify(this.items) + "\n";
        orderDetails += "Delivery Address: " + this.deliveryAddress + "\n";
        orderDetails += "Status: " + this.status + "\n";
        orderDetails += "Total Amount: " + this.totalAmount() + "\n";
        return orderDetails;
    }
}


const order1 = new Swiggy(1234, { poori: 2, idly: 4 }, "123 Street, City");

const order2 = new Swiggy(1234, { sandwich: 2, idly: 4 }, "123 Street, City");
console.log(order1.displayOrderDetails());
order1.updateStatus('Order is rejected');
console.log(order1.displayOrderDetails());
order1.updateItem('poori', 3);
console.log(order1.displayOrderDetails());
order1.removeItem('idly');
console.log(order1.displayOrderDetails());

console.log(order2.displayOrderDetails());
order1.updateStatus('Order is rejected');
console.log(order2.displayOrderDetails());
order1.updateItem('poori', 3);
console.log(order2.displayOrderDetails());
order1.removeItem('idly');
console.log(order2.displayOrderDetails());


// -----------------------------task-4----------------------
class Student {
    constructor(name, rollNumber, mark) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.mark = mark;
        Student.studentList.push(this);
    }

    static studentList = [];

    totalMark() {
        let totalMarks = 0;
        for (let subject in this.mark) {
            totalMarks += this.mark[subject];
        }
        // console.log(totalMarks)
        return totalMarks;
    }

    averageMarks() { 
        let total = this.totalMark();
        let average = total / Object.keys(this.mark).length; 
        let outputAverage=Math.round(average)
        // console.log(outputAverage)
         return outputAverage; 
    }

     updateStudentDetails(name, rollNumber, mark) {
        this.name= name;
        this.rollNumber = rollNumber;
        this.mark =mark;
    }

    displayDetails(){
        let averageOfMark=this.averageMarks()
        let sumMark=this.totalMark()
    
        return `Student name: ${this.name}, RollNumber : ${this.rollNumber}, total : ${sumMark}, AverageMark :${averageOfMark}`;
      
    }
}


let studentOne = new Student("veena", "1013", {"tamil": 10, "english": 10, "maths": 10, "science": 15, "social": 10});
let studentTwo = new Student("Guna", "1014", {"tamil": 80, "english": 59, "maths": 40, "science": 95, "social": 78});
// studentTwo.updateStudentDetails("lakshmi","1011",{"tamil": 78, "english": 80, "maths": 79, "science": 89, "social": 60})
// studentTwo.averageMarks()
// console.log(studentTwo)

console.log(studentOne.displayDetails())