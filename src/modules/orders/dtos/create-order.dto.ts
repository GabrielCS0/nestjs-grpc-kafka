import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CreateOrderDTO {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class KafkaCreateOrderDTO {
  @Type(() => CreateOrderDTO)
  @ValidateNested()
  @IsNotEmpty()
  value: CreateOrderDTO;
}
