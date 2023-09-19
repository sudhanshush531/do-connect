package com.hcl.UserCapstone.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.UserCapstone.DAO.ChatDAO;
import com.hcl.UserCapstone.Entity.Chat;

@Service
public class ChatService {
	@Autowired
	private ChatDAO chatDao;
	
	
		
	//get all chats
	public List<Chat> getChat() {
		return (List<Chat>) chatDao.findAll();
	}
	
	
	
	//create chat
	public boolean addChat(Chat chat) {
		try {
			chatDao.save(chat);
		return true;	
		}
		catch(Exception e)
		{
			return false;
		}
		
	}
	
	

}
