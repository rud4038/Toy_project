package backend.backend.projects.dto;

import org.hibernate.internal.build.AllowSysOut;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllowSysOut
@Data
public class FindPasswordDto {
	private String id;
	private String name;
	private String number;
}
