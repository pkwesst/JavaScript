// 객체 : 여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입
//      : Key&value로 저장
//      : 객체(서랍장), Key(파일철 이름), value(파일철 내용)
//      : 객체 내에는 기본 데이터 타입과 배열, 객체도 담을 수 있다.
// 객체 {} 중괄호
// 배열 [] 대괄호
    const Me = {
                name : '이름일',
                age : 50,
                alive : true,
                family : ['이름이', '이름삼'],
                pet : {
                    종류 : '동물',
                    색깔 : '회색',
                    나이 : 5
                },
            func : function () {
                return "인간";
            }   
    };

    console.log(Me);

// 객체 내의 데이터에 접근할 때는 마침표(.) 사용
    console.log("name : " + Me.name);
    console.log("age : " + Me.age);
    console.log("alive : " + Me.alive);
    console.log("family : " + Me.family);
    console.log("두 번째 : " + Me.family[0]); // Me객체 안에 family의 첫번째 호출
    console.log("세 번째 : " + Me.family[1]);
    console.log("pet.종류 : " + Me.pet.종류); // Me객체안에 pet객체에서 종류 호출
    console.log("pet.색깔 : " + Me.pet.색깔);
    console.log("pet.나이 : " + Me.pet.나이);
    console.log("func : " + Me.func()); // 메소드 호출시 () 꼭 필요함!
