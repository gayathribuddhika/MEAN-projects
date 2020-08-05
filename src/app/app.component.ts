import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample Angular Project';
  array = [10, 20, 30, 40, 50];
  name = ["gayathri", "buddhini", "dinithi"];
  student = {
    name: "gayathri",
    age: 26,
    address: "baddegama"
  };
  info= [
    {name: "gayathri", email: "gayathri@gmail.com"},
    {name: "tharushi", email: "tharushi@gmail.com"},
    {name: "ramya", email: "ramya@gmail.com"},
    {name: "jayalath", email: "jayalath@gmail.com"},
  ];
  color = "yellow";

  show(){
    alert("Hello Gayathri");
  }

  argfunction(x){
    alert(x);
  }

  onSubmit(data){
    console.warn(data);
  }
}
