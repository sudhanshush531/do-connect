package com.hcl.AdminCapstone.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


	@Entity
	@Table (name="admin")
	public class Admin {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int id;
		private String userName;
		private String password;
		private String email;
		private String phone;
		 
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		@Override
		public String toString() {
			return "User [id=" + id + ", userName=" + userName + ", password=" + password + ", email=" + email + ", phone="
					+ phone + "]";
		}
		 
	}
