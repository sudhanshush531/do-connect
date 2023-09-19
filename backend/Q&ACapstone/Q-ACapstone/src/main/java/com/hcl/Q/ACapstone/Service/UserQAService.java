package com.hcl.Q.ACapstone.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.Q.ACapstone.DAO.UserQADao;
import com.hcl.Q.ACapstone.Entity.UserQuesAns;


@Service
public class UserQAService {
	
	@Autowired
	private UserQADao userDao;
	
	//display the list
	public List<UserQuesAns> getUserQuesAns() {
		return (List<UserQuesAns>) userDao.findAll();
	}
	//add Q&A
	public UserQuesAns addUserQuesAns(UserQuesAns qa) {
		return userDao.save(qa);
	}
	//get userQA by id
		public UserQuesAns getUserQuesAnsById(int id) {
			return  userDao.findById(id).orElse(null);
		}

	
   }