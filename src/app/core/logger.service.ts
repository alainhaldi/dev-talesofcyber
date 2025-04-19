import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(message: any) {
    if (!environment.production) console.log(message);
  }

  // Log Errors also in Production
  error(message: any) {
    console.error(message);
  }
}
