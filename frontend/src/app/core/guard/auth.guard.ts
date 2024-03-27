import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router)
  let authService = inject(AuthService)

  if (!authService.isAuthenticated()) {
    router.navigate([''])
    return false
  }

  return true;
};
