package com.hcl.Q.ACapstone.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.Q.ACapstone.DAO.QuesAnsDAO;
import com.hcl.Q.ACapstone.Entity.QuesAns;


@Service
public class QuesAnsService {
	
	@Autowired
	private QuesAnsDAO quesAnsDao;
	
	public List<QuesAns> getQuesAns() {
		return (List<QuesAns>) quesAnsDao.findAll();
	}
	
	public QuesAns addQuesAns(QuesAns qa) {
		return quesAnsDao.save(qa);
	}
	
	//delete ques by Id
	public String deleteQuesAns(int id) {
		 quesAnsDao.deleteById(id);
		return "Item is removed!!"+id; 
		
	}
	
   }
