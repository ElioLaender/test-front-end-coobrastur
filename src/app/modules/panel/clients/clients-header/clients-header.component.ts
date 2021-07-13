import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-header',
  templateUrl: './clients-header.component.html',
  styleUrls: ['./clients-header.component.scss']
})
export class ClientsHeaderComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
