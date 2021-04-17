import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: Boolean = false
  loaded: Boolean = false
  enableAdd: Boolean = true
  currentClasses = {}

  constructor() { }

  addUser(user: User) {
    this.users.push(user);
  }
  
  ngOnInit() {


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
          image: 'http://lorempixel.com/600/600/people/4',
          isActive: true
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
          image: 'http://lorempixel.com/600/600/people/5',
          isActive: false
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
          image: 'http://lorempixel.com/600/600/people/6',
          isActive: true
        }
      ]

      this.loaded = true
    }, 2000)

    setTimeout(() => [
      this.addUser({
        firstName: 'David',
        lastName: 'Jackson',
        age: 44,
        address: {
          street: '12 Wake st',
          city: 'Miami',
          state: 'FL'
        },
        image: 'http://lorempixel.com/600/600/people/7'
      }),

      this.showExtended = true
    ], 4000)

    this.setCurrentClasses()

  }

  setCurrentClasses () {
    this.currentClasses = {
      'btn-success': this.enableAdd
    }
  }

}