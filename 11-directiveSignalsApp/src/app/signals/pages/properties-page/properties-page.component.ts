import { Component, computed, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { User } from '../../interfaces/user-response.interface';

@Component({
    selector: 'app-properties-page',
    templateUrl: './properties-page.component.html'
})
export class PropertiesPageComponent implements OnDestroy, OnInit {    

    public user = signal<User>({
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg'
    });

    public counter = signal(10);

    public fullName = computed(() => `${ this.user().first_name } ${ this.user().last_name }`);

    public userChangedEffect = effect(() => {
       console.log(`${this.user().first_name} - ${this.counter()}`);
    });

    ngOnDestroy(): void {        
    }    

    ngOnInit(): void {
        setInterval(() => {
            this.counter.update( current => current + 1);
            if (this.counter() === 15) {
                this.userChangedEffect.destroy();
            }
        }, 1000);
    }    

    increaseBy(value: number) {
        this.counter.update(current => current + value);
    }

    onFieldUpdated(field: keyof User, value: string) {
        this.user.update(current => {
            switch(field) {
            case 'email':
                current.email = value;
                break;
            case 'avatar':
                current.avatar = value;
                break;
            case 'first_name':
                current.first_name = value;
                break;
            case 'last_name': 
                current.last_name = value;
                break;
            case 'id':
                current.id = Number(value);
                break;
            }
            return current;
        });
    }

}
