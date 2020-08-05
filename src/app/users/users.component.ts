import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = "data Binding example";
  name = "Gayathri";
  condition = true;

  constructor() { }

  ngOnInit(): void {
  }

}
