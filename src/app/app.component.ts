import { Component } from '@angular/core';

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
  }

  show(){
    alert("Hello Gayathri");
  }

  argfunction(x){
    alert(x);
  }
}
