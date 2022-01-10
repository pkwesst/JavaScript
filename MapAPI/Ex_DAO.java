package Model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class DAO {
	Connection conn = null;
	PreparedStatement psmt = null;
	ResultSet rs = null;

	public void conn() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			String db_url = "jdbc:oracle:thin:@localhost:1521:xe";
			String db_id = "hr";
			String db_pw = "hr";
			conn = DriverManager.getConnection(db_url, db_id, db_pw);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void close() { // close() 메소드 생성
		try {
			if (psmt != null) {
				psmt.close();
			}
			if (conn != null) {
				conn.close();
			}
			if (rs != null) {
				rs.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	// 음식점 정보를 담은 메소드 => showInfo()
	public ArrayList<DTO> showInfo() {	//return값이 ArrayList<DTO>타입이므로 void 대신 작성 
		
		ArrayList<DTO> foodshop_list = new ArrayList<DTO>(); //음식점 여러 개 => ArrayList 선언
		conn();
		
		try {
			String sql = "select * from food_shop";
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();	//조회 => executeQuery
			
			while(rs.next()) {
				String name = rs.getString("name");
				String address = rs.getString("address");
				String tell = rs.getString("tell");
				
				DTO dto = new DTO(name, address, tell); //DTO에 정보 넣을 수 있도록 DTO 생성 => 변수 dto에 저장
				foodshop_list.add(dto);	//ArrayList 타입인 foodshop_list에 dto 값을 추가해 저장
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			close();
		}return foodshop_list;	//return값
		
	}
	
}
