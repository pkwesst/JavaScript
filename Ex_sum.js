// 1. 두 개의 숫자 입력 받기
    var num1 = parseInt(prompt("시작할 숫자를 입력해주세요."));
    var num2 = parseInt(prompt("마지막 숫자를 입력해주세요 ."));

// 2. 변수 선언 및 초기화
    var sum = 0;
       
// 3. 반복문
    for(var i = num1; i <= num2; i++){ //num1부터 num2까지 1씩 증가하며 반복
        sum += i;   //sum = sum + i
    }

    console.log(num1+"부터 "+ num2+"까지의 합>>"+sum);
