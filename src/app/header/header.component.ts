import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin()
  {
    this.router.navigate(['/login']);
  }
  ChangeScreen(idname: any)
  {
    this.renderer.addClass(idname, "active")
  }
}
