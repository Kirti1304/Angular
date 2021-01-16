import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[] = [
    {
      userName: 'kirtisharma',
      name: 'Kirti Sharma',
      email: 'kirti@gmail.com'
    },
    {
      userName: 'sakshigarg',
      name: 'Sakshi Garg ',
      email: 'sakshi@gmail.com'
    },
    {
      userName: 'nitinrawat',
      name: 'Nitin Rawat',
      email: 'nitin@gmail.com'
    },
    {
      userName: 'simrankoul',
      name: 'Simran Koul',
      email: 'Simran@gmail.com'
    },
    {
      userName: 'sumitraj',
      name: 'Sumit Raj',
      email: 'Sumit@gmail.com'
    },
    {
      userName: 'akhilagarwal',
      name: 'Akhil Agarwal',
      email: 'Akhil@gmail.com'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  userDelete(index:number){
    this.users.splice(index,1)
  }


}
