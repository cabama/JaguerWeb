import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs'
import {Observable} from 'rxjs/Observable'
import {GLOBAL} from './global'

@Injectable()

export class UserService {


	public url:string;

	constructor (private __http:Http) {
		this.url = GLOBAL.url;
	}




}