import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/core/user/user.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  constructor(private userService: UserService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  logout() {

    console.log("sair")

    this.userService.logout();
    this.router.navigate(['publico/usuario/acesso']);
  }
}
