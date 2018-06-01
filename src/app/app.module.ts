import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ForgotpwdComponent } from './signin/forgotpwd/forgotpwd.component';
import { UserregisterComponent } from './signin/userregister/userregister.component';
import { UserloginComponent } from './signin/userlogin/userlogin.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { DashboardheaderComponent } from './dashboard/dashboardheader/dashboardheader.component';
import { AlbumComponent } from './music-list/album/album.component';
import { TrackComponent } from './music-list/track/track.component';
import { UserService } from './signin/user.service';
import { MusicService } from './music-list/music.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/interceptors/jwtinterceptor';
import { HttpHeaderInterceptor } from "./shared/interceptors/httpheaderinterceptor";

@NgModule({
  declarations: [
    AppComponent,
    ForgotpwdComponent,
    UserregisterComponent,
    UserloginComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardheaderComponent,
    AlbumComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, UserService, MusicService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

