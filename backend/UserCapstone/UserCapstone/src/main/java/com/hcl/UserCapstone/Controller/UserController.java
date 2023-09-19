package com.hcl.UserCapstone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.UserCapstone.Entity.User;
import com.hcl.UserCapstone.Service.UserService;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;
   
	@PostMapping("/login")
	public boolean loginUser(@RequestBody User user) {
		System.out.println("user = "+user);		
		return userService.login(user);
	}

	@PostMapping("/register")
	public boolean regitserUser(@RequestBody User user) {
		System.out.println("user = "+user);		
		return userService.register(user);
	}
	
	//get all Users
	@GetMapping("/getusers")
	public List<User> getAllUser() {
		return userService.getUsers();
	}
	
	//delete user by Id
	@DeleteMapping("/deleteUserById/{id}")
	public String deleteUserById(@PathVariable int id) {
		return userService.deleteUser(id);
	}
	
	//create the userdetails
	@PostMapping("/adduser")
	public User addNewUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	
	//update the user
	@PutMapping("/updateuser")
	public User updateUserDetails(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
}
