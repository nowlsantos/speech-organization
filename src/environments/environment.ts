// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
      apiKey: 'AIzaSyBEJoHYfQrOT2vmNt1cYJyVIvLxdhQ72Qo',
      authDomain: 'speech-organizer.firebaseapp.com',
      databaseURL: 'https://speech-organizer.firebaseio.com',
      projectId: 'speech-organizer',
      storageBucket: 'speech-organizer.appspot.com',
      messagingSenderId: '884187676126',
      appId: '1:884187676126:web:8e5fd38faa41326df8b14f'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
