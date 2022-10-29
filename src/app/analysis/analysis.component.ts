import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})

export class AnalysisComponent implements OnInit {

  @ViewChild('An') An: ElementRef | undefined;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.addClass(this.An.nativeElement, 'active');
  }

}
