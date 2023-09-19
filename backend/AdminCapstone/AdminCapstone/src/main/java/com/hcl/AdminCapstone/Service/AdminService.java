package com.hcl.AdminCapstone.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.AdminCapstone.DAO.AdminDAO;
import com.hcl.AdminCapstone.Entity.Admin;

@Service
public class AdminService {
	
	@Autowired
	private AdminDAO adminDao;
	
	public boolean loginAdmin(Admin admin) {
		List<Admin> admindetail =adminDao.findAll();
		System.out.println(admin);
		for(Admin admins:admindetail) {
			if(admins.getUserName().equals(admin.getUserName())&& admins.getPassword().equals(admin.getPassword())) {
				return true;
			}
		}
		return false;	
	}
	
	public boolean registerAdmin(Admin admin) {
		this.adminDao.save(admin);
		return true;
	}
}
