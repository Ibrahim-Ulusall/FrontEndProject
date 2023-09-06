import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

export const loginGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const toastrService = inject(ToastrService)
  const authService = inject(AuthService)
  const router= inject(Router)

  if(authService.isAuthenticated()){
    return true;
  }
  else{
    toastrService.info('Sisteme Giriş Yapmalısınız.');
    router.navigate(['accounts/login']);
    return false;
  }

};



