import { Avatar } from "../enums/avatar";
export class StaffMember {
    constructor(
        public firstName: String,
        public LastName: String,
        public avatar: Avatar,
    ){ }
}