import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    firstName = 'Joe';
    lastName = 'Schmo';
    activity = {
        lastLogin: '4/7/21',
        activeStatus: 'active',
    };
    userInfo = {
        age: '27',
        sex: 'male',
        position: 'web developer'
    }

    constructor () {
        console.log(`${this.firstName} ${this.lastName} has logged in`)
    }
}
