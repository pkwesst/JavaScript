package Model;

public class DTO {
	private String name;	//음식점 이름
	private String address;	//음식점 주소
	private String tell;	// 음식점 번호
	
	//생성자 생성
	public DTO(String name, String address, String tell) {
		super();
		this.name = name;
		this.address = address;
		this.tell = tell;
	}
	
	//getters 생성
	public String getName() {
		return name;
	}
	public String getAddress() {
		return address;
	}
	public String getTell() {
		return tell;
	}
		
}
