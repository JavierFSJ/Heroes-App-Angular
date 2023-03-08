import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressBarService } from '../../services/progress-bar.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  imports: [
    MatProgressBarModule,
    CommonModule,
  ],
})
export class ProgressBarComponent implements OnInit {

  constructor(public progressBarService: ProgressBarService) { }
  ngOnInit(): void {

  }

}
