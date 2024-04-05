import { CanActivateFn } from '@angular/router';
import { read } from 'fs';

export const authGuardGuard: CanActivateFn = (route, state) => {


 return true;
};
