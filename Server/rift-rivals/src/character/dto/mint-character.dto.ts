import {
    IsNotEmpty, IsNumber,
} from 'class-validator';
  
export class MintCharacterDto {
    @IsNumber({}, { message: 'mintcharacternumber' })
    @IsNotEmpty({ message: 'mintcharacterempty' })
    bannerId: number;
  }