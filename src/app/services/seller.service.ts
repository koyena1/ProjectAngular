import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  userSignup(_data: signup) {
    throw new Error('Method not implemented.');
  }
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private Router: Router) { }
  usersignup(data: signup) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        console.warn(result)
        if(result){


          localStorage.setItem('seller', JSON.stringify(result.body))
          this.Router.navigate(['seller-home'])
        }
      });
  }
  reloadSeller() {
    console.log(localStorage.getItem('seller'))
    //if (localStorage.getItem('seller')) {
    this.isSellerLoggedIn.next(true);
    // this.Router.navigate(['seller-home']);
  }
  userLogin(_data: login) {
    console.warn(_data)
    this.http.get('http://localhost:3000/seller?email=${data.email}&password=${data.password}',
      { observe: 'response' }
    ).subscribe((result:any) => {
      console.warn(result)
      if(result && result.body &&result.body.length){
        console.warn("user logged in")
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.Router.navigate(['seller-home'])
      }else{
        console.warn("login failed");
      }
    })
  }
}


