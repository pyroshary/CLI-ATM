#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let mypin = 1245;

let pinanswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Type your pin number",
    type: "number",
  },
]);

if (pinanswer.pin === mypin) {
  console.log("CORRECT PIN CODE");

  let opertionsanswer = await inquirer.prompt([
    {
      name: "OPERATION",
      message: "PLEASE SELECT AN OPTION",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (opertionsanswer.OPERATION === "withdraw") {
    let amountanswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Select withdrawl amount or select custom amount",
        type: "list",
        choices: ["1000", "2000", "3000", "Enter custom amount"],
      },
    ]);
    let withdrawlamount = 0;
    if (amountanswer.amount === "Enter custom amount") {
      let customamountanswer = await inquirer.prompt([
        {
          name: "customamount",
          message: "Enter custom amount ",
          type: "number",
        },
      ]);
      withdrawlamount = customamountanswer.customamount;
    } else {
      withdrawlamount = parseInt(amountanswer.amount);
    }
    if (withdrawlamount > myBalance) {
      console.log("Insufficent funds.");
    } else {
      myBalance -= withdrawlamount;
      console.log("Successfully withdraw" + withdrawlamount);
      console.log("Your remaining balance is" + myBalance);
    }
  } else if (opertionsanswer.OPERATION === "check balance") {
    console.log("Your balance is:" + myBalance);
  }
} else {
  console.log("INVALID PIN CODE");
}
