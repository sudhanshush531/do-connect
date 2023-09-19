package com.hcl.UserCapstone.DAO;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.UserCapstone.Entity.Chat;

public interface ChatDAO extends  JpaRepository<Chat, Integer> {
//	List<Chat> findAll();
	}
