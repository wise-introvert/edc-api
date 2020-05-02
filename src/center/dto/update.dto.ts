import { IsNotEmpty } from "class-validator";

export default class UpdateCenterDTO {
  @IsNotEmpty()
  name: string;
}
