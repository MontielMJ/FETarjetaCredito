import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("Guard")
  debugger;
  const token =localStorage.getItem("Token") || "";
  const router = inject(Router);

  if(token!="")
  {
    return true;
  }
  else{
    const url=router.createUrlTree(["login"]);
    return url;
  }
  
};
