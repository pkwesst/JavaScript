package Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import Model.memberDTO;

@WebServlet("/ex02Gson")
public class ex02Gson extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		// VO(DTO) 객체를 ArrayList에 담고 -> JSON으로 변환
		
		// 1. 객체 생성
		memberDTO member1 = new memberDTO("email1", "010-1111-1111", "광주 서구");
		memberDTO member2 = new memberDTO("email2", "010-2111-1111", "광주 동구");
		memberDTO member3 = new memberDTO("email3", "010-3111-1111", "광주 남구");
		memberDTO member4 = new memberDTO("email4", "010-4111-1111", "광주 북구");
		
		ArrayList<memberDTO> list = new ArrayList<memberDTO>(); //여러 개의 객체를 담아줄 ArrayyList 형태로 list 생성
		
		list.add(member1); //list에 member1을 추가
		list.add(member2);
		list.add(member3);
		list.add(member4);
		
		// 2. 데이터 보내기
		// Gson 객체 생성
		Gson gson = new Gson();
		
		// java -> json()
		// gson의 toJson(객체이름) => String타입의 json으로 변환
		String json = gson.toJson(list); //(ArrayList 이름)
		
		// 인코딩
		response.setCharacterEncoding("utf-8"); //한글 깨짐 방지
		
		// 출력해줄 PrintWriter 객체 생성
		PrintWriter out = response.getWriter(); //사용자로부터 받아옴(response) => PrintWriter 객체로 출력
		
		//응답
		out.print(json); // PrintWriter 객체 out을 통해 json 출력
		
	}

}
