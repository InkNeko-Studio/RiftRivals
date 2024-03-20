import {
    IsNotEmpty, IsNumber,
} from 'class-validator';
  
export class FindProfileDto {
    @IsNumber({}, { message: 'findprofilenumber' })
    @IsNotEmpty({ message: 'findprofileempty' })
    profileId: number;
  }