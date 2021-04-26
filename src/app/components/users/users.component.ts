import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: Boolean = true
  loaded: boolean = false
  enableAdd: boolean = false
  currentClasses = {}
  currentStyles = {}

  constructor() { }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentStyles () {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

  setCurrentClasses () {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'large-text': this.showExtended
    }
  };
  
  
  ngOnInit() {

    this.enableAdd = true
    
    this.setCurrentClasses()
    this.setCurrentStyles()

    console.log(this.currentClasses);
    console.log(this.currentStyles);

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
          image: 'https://picsum.photos/id/237/600',
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
          image: 'https://picsum.photos/id/236/600',
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
          image: 'https://picsum.photos/id/235/600',
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
        image: 'https://picsum.photos/id/234/600'
      }),
    ], 4000)
  }
}