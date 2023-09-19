package com.hcl.Q.ACapstone.DAO;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.hcl.Q.ACapstone.Entity.QuesAns;

@Repository
public interface QuesAnsDAO extends CrudRepository<QuesAns, Integer>{

			List<QuesAns> findAll();
}
