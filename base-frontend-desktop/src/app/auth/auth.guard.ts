import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const AuthGuard : CanActivateFn = (route, state) => {
  const router = inject(Router);
  console.log(state.url);


  const logado = false;
  if (state.url === '/login' && logado) {
    // já logado tentando ir pro login → manda pra home
    router.navigate(['/']);
    return true;
  }

  if (state.url !== '/login' && !logado) {
    // não logado tentando acessar feature → manda pro login
    router.navigate(['/login']);
    return false;
  }

  return true; // permite acessar login se não estiver logado
};
