import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {
  @ApiProperty({})
  user_id: number;

  @ApiProperty({})
  address: string;

  @ApiProperty({})
  phone: string;

  @ApiProperty({})
  instagram: string;

  @ApiProperty({})
  linkedin: string;
}
