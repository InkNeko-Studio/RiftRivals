import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @MinLength(3, { message: 'usernameshort' })
  @IsAlphanumeric('en-US', { message: 'usernamealphanum', })
  @IsNotEmpty({ message: 'usernameempty' })
  username: string;

  @IsEmail({}, { message: 'emailinvalid' })
  @IsNotEmpty({ message: 'emailempty' })
  email: string;

  @MinLength(8, { message: 'passwordshort' })
  @IsNotEmpty({ message: 'passwordempty' })
  password: string;
}