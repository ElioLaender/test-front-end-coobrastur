import { Client } from "./Client";

export interface ClientPagingObject {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Client[];
}