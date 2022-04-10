// 1. 1부터 100까지의 난수 구하기
// 난수 구하기 : Math.random() -> 0과 1 사이의 실수 
    const ran_num = Math.floor(Math.random() * 100) + 1;
    console.log(ran_num);

// 2. while 반복문
    while(true){
        const input_num = parseInt(prompt("숫자를 입력해주세요!"));    // 사용자에게 입력 받은 stirng을 number data type으로 변환(parseInt)

        if (input_num == num_random){   
            alert("정답입니다!! 축하합니다!");
            break;
        }else if( ran_num > input_num){
            alert("입력한 숫자보다 큰 수 입니다.");
        }else {
            alert("입력한 숫자보다 작은 수 입니다.");
        }
    }
