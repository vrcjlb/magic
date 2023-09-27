import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DashboardModule,
  StorageModule,
  AuthModule,
  ClientsModule,
  ProductsModule,
  PurchasesModule,
  SalesModule,
} from './features';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    StorageModule,
    AuthModule,
    ClientsModule,
    ProductsModule,
    PurchasesModule,
    SalesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
