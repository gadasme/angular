import { PartialType } from '@nestjs/mapped-types';
import { CrateUserDto } from './create-user.dto';

export class UpdateAuthDto extends PartialType(CrateUserDto) {}
