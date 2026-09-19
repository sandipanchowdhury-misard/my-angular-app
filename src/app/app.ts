import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, CommonModule, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  divBGColor = 'lightgreen';

  divColor = 'blue';

  isSucces= true;
  divSuccessClass = "success";
  divFailureClass="failure";

  setSuccess(value:boolean){
    this.isSucces=value
  }
 

  isStudentPass = "Pass"


  Employees =["Jhon","Robert","Peter","Sandipan"];
  employeeDetails=[
  {
    Name : "Jhon",
    Salary : "12K"
  },
  {
    Name : "Robert",
    Salary : "24K"
  },
  {
    Name : "Peter",
    Salary : "32K"
  },
  {
    Name : "Sandipan",
    Salary : "55K"
  }
];



  customerID = 10;

  findCustomer(id:string){
    this.customerID = Number(id)
  }



  // weekDaysDetails =[
  //   {No: 1, Day: "Sunday"},
  //   {No: 2, Day: "Monday"},
  //   {No: 3, Day: "Tuesday"},
  //   {No: 4, Day: "Wednesday"},
  //   {No: 5, Day: "Thirsday"},
  //   {No: 6, Day: "Friday"},
  //   {No: 7 ,Day: "Saturday"}
  // ];

  // dayNo = 0;
  // selectedDay : any = null;

  // findDay(id:string){
  //   if(!id){
  //     this.selectedDay = null;
  //     return;
  //   }

  //   const num = Number(id);
  //   console.log("Searching for:", this.dayNo);
  //   this.selectedDay = this.weekDaysDetails.find(d => d.No === this.dayNo);
  //   console.log("Result:", this.selectedDay);
  // }



}
