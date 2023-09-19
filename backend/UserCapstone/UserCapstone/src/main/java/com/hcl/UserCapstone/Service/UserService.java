package com.hcl.UserCapstone.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.UserCapstone.DAO.UserDAO;
import com.hcl.UserCapstone.Entity.User;

@Service
public class UserService {
	@Autowired
	private UserDAO userDao;
	
	
	public boolean login(User user) {
		System.out.println("login service");
		int counter = 0;
		
		List<User> users = (List<User>)userDao.findAll();
		for(User myUser:users) {
			if(myUser.getUserName().equals(user.getUserName()) 
					&& myUser.getPassword().equals(user.getPassword())){
				counter++;
				break;
			}
		}
		if(counter>0) {
			return true ;
		}
		else {
			return false;
		}
	}

	public boolean register(User user) {
		User myUser = userDao.save(user);
		if(myUser.getEmail().equals(user.getEmail())) {
			return true;
		}
		else {
			return false;
		}
	  }
	
	//get all users
	public List<User> getUsers() {
		return (List<User>) userDao.findAll();
	}
	
	//delete users by Id
	public String deleteUser(int id) {
		userDao.deleteById(id);
		return "Item is removed!!"+id; 
		
	}
	//create user
	public User createUser(User user) {
		return userDao.save(user);
	}
	
	//update user
	public User updateUser(User user) {
		User existingUser=userDao.findById(user.getId()).orElse(null);
			existingUser.setId(user.getId());
			existingUser.setUserName(user.getUserName());
			existingUser.setPassword(user.getPassword());
			existingUser.setEmail(user.getEmail());
			existingUser.setPassword(user.getPassword());
			return userDao.save(existingUser);
	}
}
