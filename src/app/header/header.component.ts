import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private requiredTab :String;

  constructor(private router: Router) {
   }

  ngOnInit() {
   
  }

  showTabs(){
    // this.router.events.subscribe((event) =>{
    //   if(event instanceof NavigationEnd ){
    //     if(this.router.url === '/login'){
    //       this.requiredTab = 'register';
    //     } else if(this.router.url === '/register' || this.router.url === '/forgotpwd'){
    //       this.requiredTab = 'login'
    //     } else {
    //       this.requiredTab = 'dashboard';
    //     }
    //   }
    // });
    // console.log(this.requiredTab);
  }

}
