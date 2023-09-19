package com.hcl.UserCapstone.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.hcl.UserCapstone.Entity.Chat;
import com.hcl.UserCapstone.Service.ChatService;	

@RestController

@CrossOrigin
public class ChatController {

	@Autowired
	private ChatService chatService;
   
	
	
	//get all chats
	@GetMapping("/getchats")
	public List<Chat> getAllChats() {
		return chatService.getChat();
	}
	
	
	
	
	//create chat
	@PostMapping("/addchat")
	public boolean addNewChat(@RequestBody Chat chat) {
		
	return	chatService.addChat(chat);
	
	}
	
	
}
