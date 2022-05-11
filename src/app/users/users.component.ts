import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
currentUserId=1;
  constructor(private activatedRoute:ActivatedRoute) { 
    this.currentUserId = this.activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
  }

}
