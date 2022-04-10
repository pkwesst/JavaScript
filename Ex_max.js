    const num_list = [23, 54, 78, 13, 44];
    let max_num = num_list[0];    // num_list의 첫 번째 수를 max_num에 저장
        
    for(let i = 0; i <= num_list.length; i++){ // i = 0부터 num_list 개수(5개)까지 +1하며 반복
        if(max_num < num_list[i]){  // 23 < num_list[0] => 23 < 23 => false
            max_num = num_list[i];
        }
    }
    alert("최대값 >>"+max_num);
