import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css'],
})
export class SizerComponent implements OnInit {
  constructor() {}

  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(-1);
  }

  asc() {
    this.resize(1);
  }

  resize(delta: number) {
    // this.size = Number(this.size) + delta;
    this.sizeChange.emit(Number(this.size) + delta);
  }

  ngOnInit(): void {}
}
