import { Component, input } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {

  constructor(){
    setTimeout(() =>{
      this.customInputType ="checkbox";
    },3000);
  }

  /*String Interpolation*/
  ProjectName = "Angular";
  title       = "Basic App";
  
  getCustomerName(){
    return "Robert Jr.";
  }

  //Poperty Data Binding
  customerRole = "Admin";

  message = "Login hours 10 am to 11 am";

  //customInputType ="checkbox";
  customInputType ="radio";

  btnClick(){
    console.log("Btn Clicked");

    console.log(this.Empname);
    
  }


  placeholderMessage = "Please Enter your name";

  Empname = "";
  
  captureData(evtDetails : KeyboardEvent){
    //console.log("you enter some char.");
    const inputEl = evtDetails.target as HTMLInputElement
    
    //console.log(inputEl.value);

    //console.dir(inputEl);
    this.Empname = inputEl.value;
    
  }

}
