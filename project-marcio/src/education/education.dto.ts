import { ApiProperty } from "@nestjs/swagger";

export class CreateEducationDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  institution_name: string;

  @ApiProperty()
  course_name: string;

  @ApiProperty()
  graduation_year: number;
}
