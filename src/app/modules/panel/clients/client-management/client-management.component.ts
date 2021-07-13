import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/interfaces/clients/Client';
import { ClientManagementService } from './client-management.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientForm } from 'src/app/shared/interfaces/clients/ClientForm';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent implements OnInit {

  clientForm: FormGroup;
  isUpdate: boolean = false;
  idUpdateUser: number;
  loadRequest: boolean = false;
  clientAttemp: boolean = false;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
              private clientManagementService: ClientManagementService) {}

  ngOnInit(): void {

      this.route.params.subscribe((params) => {

        if (params.id != undefined) {
          this.isUpdate = true;  
          this.idUpdateUser = params.id;
          this.getClient(params.id);
        }
      });

      this.buildForm();
  }

  buildForm() {

    this.clientForm = this.formBuilder.group({
      name: ['',
              [
                Validators.required,
                Validators.maxLength(100)
              ]],
      profession: ['', 
              [
                Validators.required,
                Validators.maxLength(100)
              ]]
    });
  }

  setFormData(client: Client) {

    const clientName = 
      `${client.first_name} ${client.last_name}`;

    this.clientForm.get('name').setValue(clientName);
    this.clientForm.get('profession').setValue(client.job); // get da API não retorna a profissão.
  }

  getClient(clientId: number) {
    
    this.loadRequest = true;
    this.clientManagementService
      .getClient(clientId)
      .subscribe(res => {
        this.loadRequest = false;
        this.setFormData(res['data']);
      },
      err => {
        this.loadRequest = false;
      });
  }

  validForm() {

    if (this.clientForm.get('name').value == '' || 
        this.clientForm.get('profession').value == '') {
          return false;
    }
    return true;
  }

  submitForm() {

    this.clientAttemp = true;

    if (this.validForm() == false) {
      return;
    }

    const name = this.clientForm.get('profession').value;
    const job = this.clientForm.get('profession').value;
    const clientFormObject: ClientForm = {name, job};

    if (this.isUpdate) {
      this.updateClient(clientFormObject);
    } else {
      this.createClient(clientFormObject);
    }
  }

  updateClient(clientForm: ClientForm) {

    this.clientManagementService
      .updateClient(this.idUpdateUser, clientForm)
      .subscribe(res => {
        this.showSubmitMessage("Cliente atualizado com sucesso!");
        this.returnToList();
      },
      err => {
        console.log(err, "error");
      });
  }

  createClient(clientForm: ClientForm) {

    this.clientManagementService
      .createClient(clientForm)
      .subscribe(res => {
        this.showSubmitMessage("Cliente cadastrado com sucesso!");
        this.returnToList();
      },
      err => {
        console.log(err, "error");
      });
  }

  returnToList() {
    this.router.navigate(
      ['/painel/clientes/lista-de-clientes']);
  }

  showSubmitMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 2 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}