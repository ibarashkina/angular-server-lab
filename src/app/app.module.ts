import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartServiceComponent } from './CartService/cartService.component';
import {Api} from './services/api.service';
import { HttpClientModule } from '@angular/common/http';


// const appRoutes: Routes = [
//   {path: 'cart-items', component: CartServiceComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    CartServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
