import { ApiProperty } from "@nestjs/swagger";

export class CreateExtracurricularDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  activity_name: string;

  @ApiProperty()
  details: string;
}
