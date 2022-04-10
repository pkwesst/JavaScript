// 1. 입력받기, 형변환, 변수에 담기
    const num = parseInt(prompt("숫자를 입력하세요");

// 2. 연산(백의 자리 이하 버리기)
    const result = num -(num % 100); // parseInt(num / 100) * 100;

// 3. 출력하기 
    console.log("백의 자리 이하를 버린 결과 >> "+ result);
