import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/core/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showNewClientAction: boolean = false;

  constructor(private userService: UserService,
              private router: Router) { 

      this.router.events.subscribe((event) => {
        this.setShowNewClientAction(event['url']);
      });
    }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['publico/usuario/acesso']);
  }

  setShowNewClientAction(path) {

    if (path != undefined && path === '/painel/clientes/lista-de-clientes') {
      this.showNewClientAction = true;
      return;
    } 

    this.showNewClientAction = false;
  }

}
