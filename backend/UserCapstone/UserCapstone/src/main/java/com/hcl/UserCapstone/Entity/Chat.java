package com.hcl.UserCapstone.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="chat")
public class Chat {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cid;
	private String email;
	private String message;
	public Chat() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Chat(int cid, String email, String message) {
		super();
		this.cid = cid;
		this.email = email;
		this.message = message;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
}

