    // 1. 배열
    //      : 여러개의 데이터를 하나의 묶음으로 다루는 것
    //      : 인덱스와 인덱스에 대응하는 데이터로 공간을 추가해서 사용 가능
    //      : 처음에 크기를 지정하더라도 데이터 추가 가능
    //      : 배열에는 모든 데이터 타입 저장 가능(다른 타입끼리도 가능)
    //      : 인덱스는 0부터 시작

    // 2. 배열 선언
        var name_list = [];
        var name_list = new Array();
        
    // 3. 배열 생성
        var name_list = ["홍길동", "임꺽정", "한석봉"];
        var name_list = new Array("홍길동", "임꺽정", "한석봉");    //length: 3
        
        console.log(name_list);

    // 4. 배열의 길이
        console.log("배열의 길이 : "+name_list.length);

    // 5. 배열의 값 확인하기(인덱스)
        console.log(name_list[0]);
        console.log(name_list[1]);
        console.log(name_list[2]);
        
    // 6. 배열에 값 추가하기
        name_list[4] = "김삿갓"
        console.log(name_list);
