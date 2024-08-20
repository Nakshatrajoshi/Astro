package registerationlogin.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String password;

    @ManyToMany(fetch=FetchType.EAGER, cascade = CascadeType.ALL) //This FetchType.Eager is to ensure that hibernate loads All the jpa entities associates with main jpa entitiy while initiating them.
    @JoinTable(
            name="user_roles",
            joinColumns = {@JoinColumn(name="user_id",referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name="role_id",referencedColumnName = "id")} //For 3rd table to have 2 tables primary keys.
    )
    private List<Role> roles = new ArrayList<>();   //Cascading is the option whenver we are changing any record of user, then respective record for role
//will also be changed.

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
}
