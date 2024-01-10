import { Injectable,inject } from '@angular/core';
import {CanActivateFn} from '@angular/router';
import { SellerService } from './services/seller.service';


Injectable({
 providedIn: 'root'
})

export const AuthGuard: CanActivateFn = (_route ,_state) =>  {
  const  sellerService: SellerService = inject(SellerService);

  
  //  if (localStorage.getItem('seller')) {
     // return true;
    //}
    return sellerService.isSellerLoggedIn;
    
  }




