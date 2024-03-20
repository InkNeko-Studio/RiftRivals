import { IsNotEmpty } from "class-validator";

export class UpdateUserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;
  
  @IsNotEmpty()
  displayName: string;
  
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  fans: number;

  @IsNotEmpty()
  coins: number;

  @IsNotEmpty()
  diamonds: number;
}