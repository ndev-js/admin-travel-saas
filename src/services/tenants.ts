import { api } from "src/api/axios.client"
import { ENDPOINTS } from "src/constants/endpoints"
import { ApiResponse } from "./auth";
export enum tenantStatus {
    ACTIVE ='active',
    SUSPENDED ='suspended',
    CANCELLED ='cancelled'
}
export interface Pagination {
       hasNextPage:boolean,
       hasPreviousPage:boolean,
       total:number,
       page:number,
       limit:number
       totalPages:number 
    } 

export interface Tenants {
    id:string
    name:string
    subDomain:string
    status:tenantStatus
}
export const getTenants = async():Promise<Tenants[]> => {
    try {
        const tenants = await api.get<ApiResponse<Tenants[]>>(ENDPOINTS.ADMIN.TENANTS.GET_TENANTS);
         return tenants.data.data

    } catch (error) {
        throw error
    }
}