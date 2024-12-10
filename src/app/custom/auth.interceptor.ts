import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("interceptor");
  debugger;
  const token = localStorage.getItem("Token");
  const clonRequest = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}` 
    }
  })
  return next(clonRequest);
};