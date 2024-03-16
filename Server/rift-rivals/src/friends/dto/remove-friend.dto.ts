import {
    IsNotEmpty,
} from 'class-validator';

export class RemoveFriendDto {
    @IsNotEmpty()
    friendsId: number;
}