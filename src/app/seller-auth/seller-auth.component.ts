import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit{
  constructor(private seller: SellerService, private router:Router){}
  showLogin=false
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  signUp(data:signup):void{
  this.seller.userSignup(data)
  console.warn(data);
  }
  login(data:signup):void{
    //console.warn(data)
    this.seller.userLogin(data)
  }
  openLogin(){
   this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
