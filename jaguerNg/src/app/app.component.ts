import { Component } from '@angular/core';
import { User } from './models/user'
import '@angular/forms';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	title = 'app works!';

	public user:User;
	public identity ;
	public token;

	constructor () {
		this.user = new User('','','','','','','');
	}

	public onSubmit () {
		console.log('Vamos a mostrar el usuario.');
		console.log(this.user)
	}

}
