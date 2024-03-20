import {
    IsNotEmpty,
} from 'class-validator';

export class SendFriendRequestDto {
    @IsNotEmpty()
    profileId: number;
}