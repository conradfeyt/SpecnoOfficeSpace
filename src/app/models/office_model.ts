import { StaffMember } from "./staff_model";

export interface OfficeInterface {
    id: string,
    name: string,
    address: string,
    email: string,
    contactNumber: string,
    capacity: number,
    color: string,
    order?: number,
    members?: StaffMember[],
}

export class Office {
    // protected static instance: Office | null = null;

    public id: string;
    public name: string | undefined;
    public address: string | undefined;
    public email: string | undefined;
    public contactNumber: string | undefined;
    public capacity: number | undefined;
    public color: string;
    public members?: StaffMember[] | undefined;
    public order: number | undefined

    constructor(
        public data: OfficeInterface
    ){
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.email = data.email;
        this.contactNumber = data.contactNumber;
        this.capacity = data.capacity;
        this.color = data.color;
        this.members = data.members;
        this.order = data.order;
        return this;
     }

}