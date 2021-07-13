import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ClientPagingObject } from "src/app/shared/interfaces/clients/ClientPagingObject";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root'})
export class ListCustomerInformationService {

    private serverUrl = environment.baseUrl;
    
    constructor(private http: HttpClient) {}

    getClients(page: number) {
        
        let getClientsUrl = 
            `${this.serverUrl}/users?page=${page}`;

        return this.http.get<ClientPagingObject>(getClientsUrl, {});
    }
}