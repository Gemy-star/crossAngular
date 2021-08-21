import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  facebookIcon:string = '../assets/images/facebook-light.svg';
  youtubeIcon:string = '../assets/images/youtube-light.svg';
  instagramIcon:string = '../assets/images/instagram-light.svg';
  googleIcon:string = '../assets/images/goole-light.svg';
  titterIcon:string = '../assets/images/twitter-light.svg';
  logo:string = '../assets/images/logo.png';
follow:string = 'تابعنا على السوشيال ميديا';
solgan:string = 'مبرمجين عابرين للحدود'
  constructor() { }

  ngOnInit(): void {
  }

}
