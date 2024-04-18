import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {AngularFireModule} from "@angular/fire/compat";
import {DateFormatPipe} from "./shared/pipes/date-format.pipe";
import { FooterComponent } from './shared/footer/footer.component';
import { PaymentComponent } from './pages/payment/payment.component';
import {MatFormField} from "@angular/material/form-field";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import {MatInput} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DateFormatPipe,
    FooterComponent,
    PaymentComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp({
      "projectId": "webker-2024",
      "appId": "1:609794910909:web:6be197f2d62d80f3a265d4",
      "storageBucket": "webker-2024.appspot.com",
      "apiKey": "AIzaSyCj3Gog_2qyXxBSp2eb_lksu3C6uH3LPSI",
      "authDomain": "webker-2024.firebaseapp.com",
      "messagingSenderId": "609794910909",
      "measurementId": "G-FC2QR4C1HT"
    }),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    MatFormField,
    MatCardActions,
    MatCardTitle,
    MatCard,
    MatCardContent,
    MatInput,
    //provideFirebaseApp(() => initializeApp({"projectId":"webker-2024","appId":"1:609794910909:web:6be197f2d62d80f3a265d4","storageBucket":"webker-2024.appspot.com","apiKey":"AIzaSyCj3Gog_2qyXxBSp2eb_lksu3C6uH3LPSI","authDomain":"webker-2024.firebaseapp.com","messagingSenderId":"609794910909","measurementId":"G-FC2QR4C1HT"})),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
