class Bankaccount{
    constructor(name, amount , pin){
        this.name = name;
        this.amount = amount;
        // Make PIN private using closure
        let _pin = pin;
        this.accountNumber = Math.floor(Math.random()*600000 + 100000);
        this.balance = 0; // Initialize balance to 0
        
        // Method to validate PIN
        this.validatePin = function(inputPin) {
            return inputPin === _pin;
        };
        
        // Method to change PIN (requires old PIN)
        this.changePin = function(oldPin, newPin) {
            if (oldPin === _pin) {
                _pin = newPin;
                console.log("PIN changed successfully");
                return true;
            } else {
                console.log("Invalid old PIN");
                return false;
            }
        };
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited $${amount} to account ${this.accountNumber} and your new balance is $${this.balance}`);

        }else{
            console.log("deposit amount must be greater than 0");
        }
    }

    withdraw(amount, pin){
        if(!this.validatePin(pin)){
            console.log("Invalid PIN");
            return;
        }
        
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber} and your new balance is $${this.balance}`);
        }else{
            console.log("Please enter a valid amount");
        }
    }

    getalldetails(pin){
        if(this.validatePin(pin)){
            console.log(`Account details for ${this.accountNumber} :`);
            console.log(`Name : ${this.name}`);
            console.log(`Account Number : ${this.accountNumber}`);
            console.log(`Balance : $${this.balance}`);
        }else{
            console.log("Invalid pin");
        }
    }
    
    // Method to get account summary (without sensitive info)
    getAccountSummary() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Name: ${this.name}`);
        console.log(`Balance: $${this.balance}`);
    }
}


let c1 = new Bankaccount("keshav", "10000", "1234");

c1.deposit(100000);
c1.withdraw(40000, "1234"); // Now requires PIN
c1.getalldetails("1234");
c1.getAccountSummary(); // Public method that doesn't require PIN

// Try to change PIN
c1.changePin("1234", "5678");
c1.withdraw(10000, "5678"); // Use new PIN