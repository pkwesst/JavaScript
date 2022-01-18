package Controller;

import java.io.IOException;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import Model.CalendarDTO;


@WebServlet("/ex03sendJson")
public class ex03sendJson extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		request.setCharacterEncoding("utf-8"); // json data에 한글 포함 가능하므로 => 인코딩
		String json = request.getParameter("json"); //사용자로부터 값 수집 => json 데이터		
		
		// Gson 객체 생성
		Gson gson = new Gson();
		
		// String => 객체 형태로 분리 필요
		// gson.fromJson(json데이터, 저장할 변수의 클래스(.class) 정보)
		CalendarDTO[] list = gson.fromJson(json, CalendarDTO[].class); // 복수개 => 배열형태 => CalendarDTO[]
		
		for (int i = 0; i < list.length; i++) {
			System.out.println(list[i].getTitle()); //list의 i번째에 들어있는 title 정보를 getter 이용해 가져옴 => getTitle()
			System.out.println(list[i].getStart());
			System.out.println(list[i].getEnd());
			System.out.println("=========================");
			
		}
		
	}

}
