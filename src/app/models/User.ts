export interface User {
    firstName: string,
    lastName: string,
    activity: {
        lastLogin: number,
        activeStatus: boolean,
    },
    userInfo: {
        age: number,
        sex: string,
        position: string,
    }
}
