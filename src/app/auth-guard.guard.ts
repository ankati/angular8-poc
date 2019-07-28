import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';
import {MessageServiceService} from './message-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private UtilService: UtilService,private MessageServiceService:MessageServiceService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('Url:' + url);
    //this.authService.setRedirectUrl(url);
    // this.router.navigate([ this.authService.getLoginUrl() ]);
    
      
      return true;
      
  }

}
