// 1. 입력창을 통해 데이터 입력(String형으로 반환)
    prompt();

    // 첫 번째 매개변수 : 출력되는 부분
    // 두 번째 매개변수 : 입력되는 부분의 기본 값
        prompt("당신의 이름은?", "홍길동");

// 2. 확인 및 취소를 통한 입력(boolean형)
    confirm("삭제하시겠습니까?");
      
    // 응용
        const name = prompt("이름을 입력하세요");  // 입력창으로 받은 값 => 변수 name
        console.log("어서오세요"); // 콘솔창에 출력
        console.log(name+"님,환영합니다."); //콘솔창에 입력받은 값 포함 출력
    
