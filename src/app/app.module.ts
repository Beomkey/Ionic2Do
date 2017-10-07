import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Dialogs } from '@ionic-native/dialogs';

export const firebaseConfig = {
apiKey: "AIzaSyBactQ8PrYlZOSVjgwr8i56cna0HxwZUIs",
authDomain: "ionic2do-a57ed.firebaseapp.com",
databaseURL: "https://ionic2do-a57ed.firebaseio.com",
projectId: "ionic2do-a57ed",
storageBucket: "ionic2do-a57ed.appspot.com",
messagingSenderId: "711561669698"
};

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

