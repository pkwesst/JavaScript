//1. Java, Web, Python 점수 입력 받기
    const java = parseInt(prompt("java점수를 입력하세요."));
    const web = parseInt(prompt("Web점수를 입력하세요."));
    const python = parseInt(prompt("Python점수를 입력하세요."));

//2. 평균 구하기
    const avg = (java + web + python) / 3;

    const grade ;

    if(avg >= 90){  // 평균이 90점 이상이면
        grade = "A"; 
    }else if(avg >=80){ // 평균이 80점 이상이면
        grade = "B";
    }else if(avg >=70){ // 평균이 70점 이상이면
        grade = "C";
    }else{  // 평균이 70점 미만이면
        grade = "F";
    }

//3. 출력
    console.log("당신의 평균은 "+ avg +"이고, 학점은 "+grade+"입니다.")
