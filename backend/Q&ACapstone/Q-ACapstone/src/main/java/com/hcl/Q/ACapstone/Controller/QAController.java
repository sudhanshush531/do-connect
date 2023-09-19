package com.hcl.Q.ACapstone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.Q.ACapstone.Entity.QuesAns;
import com.hcl.Q.ACapstone.Entity.UserQuesAns;
import com.hcl.Q.ACapstone.Service.QuesAnsService;
import com.hcl.Q.ACapstone.Service.UserQAService;


@RestController
@RequestMapping("Q&A")
@CrossOrigin
public class QAController {
	
@Autowired
private QuesAnsService qaService;

@Autowired
private UserQAService qAService;

//user Q&A display
@GetMapping("/userQ&A")
public List<UserQuesAns> getAllQA() {
	return qAService.getUserQuesAns();
}
@GetMapping("/getUserQ&A/{id}")
public UserQuesAns findAllUserQAById(@PathVariable int id){
	return  qAService.getUserQuesAnsById(id);
}


//admin Q&A display
@GetMapping("/adminQ&A")
public List<QuesAns> getAllQa() {
	return qaService.getQuesAns();
}
//user Q&A add
@PostMapping("/addUserQ&A")
public UserQuesAns addNewQA(@RequestBody UserQuesAns QA) {
	return qAService.addUserQuesAns(QA);
}

//Admin Q&A add
@PostMapping("/addAdminQ&A")
public QuesAns addNewQa(@RequestBody QuesAns QA) {
	return qaService.addQuesAns(QA);
}

//delete que for admin page
@DeleteMapping("/deleteQuesById/{id}")
public String deleteUserById(@PathVariable int id) {
	return qaService.deleteQuesAns(id);
}
}
