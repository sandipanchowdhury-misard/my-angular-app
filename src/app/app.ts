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
}
