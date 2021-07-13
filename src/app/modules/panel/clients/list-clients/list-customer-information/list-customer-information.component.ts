import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/interfaces/clients/Client';
import { ClientPagingObject } from 'src/app/shared/interfaces/clients/ClientPagingObject';
import { ListCustomerInformationService } from './list-customer-information.service';

@Component({
  selector: 'app-list-customer-information',
  templateUrl: './list-customer-information.component.html',
  styleUrls: ['./list-customer-information.component.scss']
})
export class ListCustomerInformationComponent implements OnInit {

  listClients: ClientPagingObject;
  pageListingNumber: number;
  constructor(private listCustomerService: ListCustomerInformationService,
              private router: Router) { }

  ngOnInit(): void {

    this.pageListingNumber = 1;
    this.getCustomers(this.pageListingNumber);
  }

  getCustomers(page: number) {
    
    this.listCustomerService
      .getClients(page)
      .subscribe(res => {
        this.listClients = res;
      },
      err => {
        console.log(err, "error")
      });
  }

  pagingForward() {

    if (this.pageListingNumber === this.listClients.total_pages) {
      return;
    }

    this.pageListingNumber++;
    this.getCustomers(this.pageListingNumber);
  }

  paginationReturn() {

    if (this.pageListingNumber <= 1) {
      return;
    }

    this.pageListingNumber--;
    this.getCustomers(this.pageListingNumber);
  }

  editClient(client: Client) {
    this.router.navigate(
      ['/painel/clientes/atualizar-cliente', client.id]);
  }
}
