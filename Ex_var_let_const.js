// 1. var 재선언O, 재할당O
    var name = "홍길동";
    var name = "임꺽정";  // 재선언
    name = "한석봉";  // 재할당
    console.log("이름 : "+name);  // 재할당 한 마지막 값 출력

    var name = "홍길동";  //type : String
    var age = 20; //type : number
    var alive = false;  //type : boolean
    var a;  //type : undefined
    var b = null;   //type : object

// 2. Let 재선언X, 재할당O
    let age = 1;
    let age = 2; 
    // 오류 : Uncaught SyntaxError: Identifier 'age' has already been declared
    // age 재선언 불가
    let num = 8;
    num = 30;
    console.log("숫자 : "+num); // 숫자 : 30출력

// 3. const 재선언x, 재할당x
    const alive = true;
    const alive = false; // 재선언 불가능
    alive = false; // 재할당 불가능

    console.log(name, typeof name);
    console.log(age, typeof age);
    console.log(alive, typeof alive);
    console.log(a, typeof a);
    console.log(b, typeof b);
