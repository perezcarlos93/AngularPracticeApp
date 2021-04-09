import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

    user: User

    ngOnInit() {
        this.user = {
            firstName: 'carlos',
            lastName: 'perez',
            activity: {
                lastLogin: 10,
                activeStatus: true,
            },
            userInfo: {
                age: 27,
                sex: 'male',
                position: 'web developer'
            }
        }
    }
    
    constructor () {
    }
}
