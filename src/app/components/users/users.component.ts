import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'; 

const extendedBtn = document.getElementById('extendedBtn')


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  loaded: boolean = false
  enableAdd: boolean = false

  constructor() { }

  addUser(user: User) {
    this.users.push(user);
  }

  ngOnInit() {

    this.enableAdd = true

    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2021 08:30:00'),
          extendedInfo: false
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('05/07/2020 06:14:00'),
          extendedInfo: false
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },          
          isActive: true,
          registered: new Date('11/02/2020 12:30:00'),
          extendedInfo: false
        }
      ]

      this.loaded = true
    }, 2000)
  }
}