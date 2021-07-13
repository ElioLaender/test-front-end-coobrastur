import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "src/app/shared/interfaces/clients/Client";
import { ClientForm } from "src/app/shared/interfaces/clients/ClientForm";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root'})
export class ClientManagementService {
    
    private serverUrl = environment.baseUrl;
    
    constructor(private http: HttpClient) {}

    updateClient(patientId: number, clientForm: ClientForm) {

        let updateClientUrl = 
            `${this.serverUrl}/users/${patientId}`;

        return this.http.put<any>(updateClientUrl, clientForm);
    }

    createClient(clientForm: ClientForm) {

        let createClientUrl = 
            `${this.serverUrl}/users`;

        return this.http.post<any>(createClientUrl, clientForm);
    }

    getClient(clientId: number) {
        
        let getClientsUrl = 
            `${this.serverUrl}/users/${clientId}`;

        return this.http.get<Client>(getClientsUrl, {});
    }
}