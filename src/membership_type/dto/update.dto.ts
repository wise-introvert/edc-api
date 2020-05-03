import { IsNotEmpty } from "class-validator";

export default class UpdateMembershipTypeDTO {
  @IsNotEmpty()
  name?: string;
}
