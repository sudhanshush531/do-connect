package com.hcl.Q.ACapstone.DAO;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.Q.ACapstone.Entity.UserQuesAns;

@Repository
public interface UserQADao extends CrudRepository<UserQuesAns, Integer>{
	
 List<UserQuesAns> findAll();
}

