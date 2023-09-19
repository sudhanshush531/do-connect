package com.hcl.UserCapstone.DAO;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.UserCapstone.Entity.User;


@Repository
public interface UserDAO extends CrudRepository<User, Integer>{

		List<User> findAll();
}
