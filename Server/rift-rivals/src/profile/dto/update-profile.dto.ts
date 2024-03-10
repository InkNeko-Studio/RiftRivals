import {
    IsAlphanumeric,
    IsNotEmpty,
    MinLength,
  } from 'class-validator';
  
  export class UpdateProfileDto {
    @IsNotEmpty()
    @MinLength(3, { message: 'Display name must have atleast 3 characters.' })
    @IsAlphanumeric('en-US', {
      message: 'Display name does not allow other than alpha numeric chars.',
    })
    displayName: string;
  }