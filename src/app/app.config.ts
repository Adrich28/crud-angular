import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(
    provideFirebaseApp(() =>
      initializeApp({
        "projectId": "saturdays-app",
        "appId": "1:670677231325:web:30a1f5f811648f32125d34",
        "storageBucket": "saturdays-app.appspot.com",
        "apiKey": "AIzaSyDTcsHMpXif0d3jeuOB1v5IpWZBQNMtxF4",
        "authDomain": "saturdays-app.firebaseapp.com",
        "messagingSenderId": "670677231325"
      }))),
  importProvidersFrom(provideFirestore(() => getFirestore()))]
};
