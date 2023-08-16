package backend.backend.projects.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity(name = "member")
@Table(name = "member")
public class MemberEntity {
	@Id
	private String id;
	private String nickname;
	private String name;
	private String number;
	private String password;
}
