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
import com.google.gson.GsonBuilder;

import Model.DAO;
import Model.DTO;

@WebServlet("/Foodshop_info")
public class Foodshop_info extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//JDBC => C:\oraclexe\app\oracle\product\11.2.0\server\jdbc\lib
				
		System.out.println("Controller : Foodshop_info");
		
		// DAO를 통해서 DB에서 음식점 정보 list 가져오기
		// 메소드 호출
		DAO dao = new DAO();
		ArrayList<DTO> foodshop_list = dao.showInfo(); 
		
		// ArrayList<DTO> => json 형태로 변환
		// GSON : Java에서 Json 파일을 파싱하고 생성하기 위해 구글에서 만든 오픈소스(라이브러리)
		// WebContent > Web-INF > lib에 넣어주기
		
		// new Gson() : null 값 포함하지 않음
		// GsonBuilder().serializeNulls().create() : null 값도 포함
		Gson gson = new GsonBuilder().serializeNulls().create(); 
		
		// GSON을 사용해서 ArrayList -> JSON으로 변환
		// gson.toJson(변환할 대상)
		String foodshop_json = gson.toJson(foodshop_list); //toJson()메소드 실행 => json 형태로 변환
		
		// 응답하기 전에 인코딩 진행(한글)
		response.setCharacterEncoding("utf-8");
		
		// 출력스트림을 이용해 KaKaoMap.jsp로 json파일 보내주기
		PrintWriter out = response.getWriter(); //PrintWriter : 출력스트림 
		
		// json파일 출력하기
		out.print(foodshop_json);	
		
		
		
		
	}

}
