package backend.backend.projects.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor(staticName = "set")
@Data
public class MemberResponsDto<D> {
	private boolean result;
	private D data;
	private String message;
	
	public static <D> MemberResponsDto<D> setSucces(D data, String message){
		return MemberResponsDto.set(true, data, message);
	}
	public static <D> MemberResponsDto<D> setFailed(String message){
		return MemberResponsDto.set(false, null, message);
	}
	
}
