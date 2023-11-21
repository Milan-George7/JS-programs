class Bank{
    accountDetails= {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
    }

    //validate account number function
    validateAcno(acno){
        return acno in this.accountDetails?true:false
    }
    //authenticate account(acno,password)
    authenticAccount(acno,password){
        if(this.validateAcno(acno)){
            if(password==this.accountDetails[acno].password){
                console.log("Authentication successful");
            }else{
                console.log("Authentication failed!! Wrong password");
            }
        }else{
            console.log("Authentication failed!! Wrong Account");
        }
    }
    //balance enquiry function
    balanceEnquiry(acno){
        if(this.validateAcno(acno)){
            console.log(`Balance of acno: ${acno} is ${this.accountDetails[acno].balance}`);
        }else{
            console.log("Authentication failed!! Wrong Account");
        }
    }
    //function for fund transfer
    fundTransfer(fromAcno,toAcno,amount){
        if(this.validateAcno(fromAcno) && this.validateAcno(toAcno)){
            console.log(`initially, debit account ${fromAcno} balance: ${this.accountDetails[fromAcno].balance} , initially, credit account ${toAcno} balance: ${this.accountDetails[toAcno].balance}`);
            if(this.accountDetails[fromAcno].balance>amount){
                    this.accountDetails[fromAcno].balance -= amount
                    this.accountDetails[toAcno].balance += amount
                    console.log("fund transfer successful");
                    console.log(`After fund transfer, debit account ${fromAcno} balance: ${this.accountDetails[fromAcno].balance} , After fund transfer, credit account ${toAcno} balance: ${this.accountDetails[toAcno].balance}`);
            }else{
                console.log("insufficient balance");
            }
        }else{
            console.log("invalid account");
        }

    }
}

// object
const user = new Bank()
user.validateAcno(1000)?console.log(`valid account`):console.log(`Not a valid account`)
user.authenticAccount(1000,"userone")
user.balanceEnquiry(1000)
user.fundTransfer(1000,1001,5000)