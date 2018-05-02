import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserloginComponent } from "./signin/userlogin/userlogin.component";
import { UserregisterComponent } from "./signin/userregister/userregister.component";
import { ForgotpwdComponent } from "./signin/forgotpwd/forgotpwd.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { AlbumComponent } from "./music-list/album/album.component";
import { TrackComponent } from "./music-list/track/track.component";

const appRoutes: Routes =  [
    {path:'', pathMatch: 'full', redirectTo: '/login'},
    {path:'login', component: UserloginComponent},
    {path:'register', component: UserregisterComponent},
    {path:'forgotpwd', component: ForgotpwdComponent},
    {path:'dashboard',component: DashboardComponent, canActivate: [AuthGuard], children: [
        {path:'album', component: AlbumComponent },
        {path:'track', component: TrackComponent }
    ]}
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}