import { ApiProperty } from "@nestjs/swagger";

export class CreateExperienceDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  company_name: string;

  @ApiProperty()
  start_date: Date;

  @ApiProperty()
  end_date: Date;

  @ApiProperty()
  is_current_job: boolean;

  @ApiProperty()
  position: string;
}
