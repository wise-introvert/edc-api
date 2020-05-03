import { IsNotEmpty } from "class-validator";

export default class UpdateResourceDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  displayId?: string;

  @IsNotEmpty()
  type?: string;

  @IsNotEmpty()
  centerId?: string;

  author?: string;

  toyPieces?: number;
}
