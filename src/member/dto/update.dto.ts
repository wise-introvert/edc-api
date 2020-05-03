import { IsNotEmpty, IsInt } from "class-validator";
import { LOA } from "../model";

export default class UpdateMemberDTO {
  @IsNotEmpty()
  username?: string;

  @IsInt()
  loa?: LOA;
}
