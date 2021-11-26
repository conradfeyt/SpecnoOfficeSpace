import { colorOption } from "../enums/color_option";
import { StaffMember } from "./staff_model";
export class Office {
    constructor(
        public name: String,
        public address: String,
        public email: String,
        public contactNumber: String,
        public capacity: Number,
        public color: colorOption,
        public members: StaffMember[],
    ){ }
}