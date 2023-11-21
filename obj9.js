accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts - length
console.log('--------- total number of accounts--------------');
console.log(accounts.length);


//2. print account number whose ac_type is savings - filter
console.log('--------- account number whose ac_type is savings--------------');
accounts.filter(item=>item.ac_type==='savings').forEach(item=>console.log(item.acno))


//3.print the balance of accnount number 1000 - find
console.log('--------- balance of accnount number 1000--------------');
console.log(accounts.find(item=>item.acno===1000).balance);


//4. print all gpay transactions
console.log('--------- all gpay transactions--------------');
console.log(accounts.map(item=>item.transaction).flat(Infinity).filter(item=>item.mode==='gpay'))


//5. print all transaction whose amount > 5000
console.log('--------- all transaction whose amount > 5000--------------');
console.log(accounts.map(item=>item.transaction).flat(Infinity).filter(item=>item.amount>5000));


//6. print credit transaction of account 1002
console.log('---------  credit transaction of account 1002--------------');
creditTran1002 = accounts.map(item=>item.transaction).flat(Infinity).filter(item=>item.to===1002)
console.log(creditTran1002);


//print total credited amount to 1002
console.log('---------total credited amount to 1002--------------');
creditamount = creditTran1002.map(item=>item.amount).reduce((a,b)=>a+b)
console.log(creditamount);


//7. Print debit transaction of account 1002
console.log('-------------debit transaction of account 1002-------------');
debitTrans1002 = accounts.find(item=>item.acno==1002).transaction
console.log(debitTrans1002);


// print total amount debitted from 1002
console.log('---------total amount debitted from 1002--------------');
debitamount = debitTrans1002.map(item=>item.amount).reduce((a,b)=>a+b)
console.log(debitamount);


// print current account balance of 1002
console.log('------------------current account balance of 1002------------------');
console.log(accounts.find(item=>item.acno===1002).balance+creditamount-debitamount);


//8. print transaction history of 1002
console.log('----------transaction history of 1002 : using object--------------');
transactionHistory = {
    credit:creditTran1002,
    debit:debitTrans1002
}
console.log(transactionHistory);
console.log('----------transaction history of 1002 : using array--------------');
transactionHistory = [...creditTran1002,...debitTrans1002]//(...) is the spread operator
console.log(transactionHistory);
//9. print highest balance account details
console.log('-----------------highest balance account details----------------');
highest = accounts.reduce((a,b)=>a.balance>b.balance?a:b)
console.log(`Account ${highest.acno} has a balance of ${highest.balance}`);