package com.hcl.AdminCapstone.DAO;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.AdminCapstone.Entity.Admin;


@Repository
public interface AdminDAO extends CrudRepository<Admin,Long>{
	List<Admin> findAll();
}
