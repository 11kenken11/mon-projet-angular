import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {
    private users: User[] = [
        {
            firstName: 'Timmy',
            lastName: 'Timmy',
            mail: 'timmy@timmy.com',
            drinkPreference: 'Pepsi',
            hobbies: [
                'pêche à la mouche',
                'pétanque'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}