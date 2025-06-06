import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token =localStorage.getItem("token") || "";
  const router = inject(Router);

  if(token!="")
  {
    return true;
  }
  else{
    
    const url=router.createUrlTree([""]);
    console.log("No tiene token, redirigiendo a la página de inicio"+ url.toString());
    // Puedes redirigir a una página específica, como la página de inicio o de login
    //router.navigate(["/login"]);
    return url;
  }
  
};
