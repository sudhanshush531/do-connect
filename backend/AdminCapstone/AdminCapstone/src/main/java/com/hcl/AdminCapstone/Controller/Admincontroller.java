package com.hcl.AdminCapstone.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.AdminCapstone.Entity.Admin;
import com.hcl.AdminCapstone.Service.AdminService;


	@RestController
	@RequestMapping("admin")
	@CrossOrigin

	public class Admincontroller {
		
		@Autowired
		private AdminService adminService;
	   
		@PostMapping("/login")
		public boolean login(@RequestBody Admin admin) {
			System.out.println("Admin = "+admin);		
			return adminService.loginAdmin(admin);
		}

		@PostMapping("/register")
		public boolean regitser(@RequestBody Admin admin) {
			System.out.println("Admin = "+admin);		
			return adminService.registerAdmin(admin);
		}
		
	}
