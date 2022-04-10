// 배열 메소드
	var list = [1, 2, 3, 4];

// 배열의 마지막 요소 추가 push()
        list.push(5);
        console.log('마지막 요소 추가 : '+list);

// 배열의 마지막 요소 삭제 pop()
        list.pop();
        console.log('마지막 요소 삭제 : '+ list);

// 배열의 첫번째 요소 추가 unshift()
        list.unshift(0);
        console.log('첫 번째 요소 추가: '+ list);

//배열의 첫번째 요소 삭제 shift()
        list.shift();
        console.log('첫 번째 요소 삭제 : '+ list);

// 배열 요소를 반대로 정렬 reverse()
        list.reverse();
        console.log('배열을 반대로 정렬 : '+ list);

// 배열 요소를 문자로 만든 후 아스키코드 순서로 정렬 sort()
        list.sort();
        console.log('배열을 아스키코드 순서로 정렬 : '+ list);

        const list = [1, 2, 3, 11, 22, 33]
        list.sort();
        console.log('배열을 아스키코드 순서로 정렬 : '+ list);

// 오름차순 정렬 sort(compareFunc)
        list.sort(function(a,b){
            return a-b;
        });
        console.log('배열 오름차순 정렬 : '+ list);

// 내림차순 정렬 sort(compareFunc)
        list.sort(function(a,b){
            return b-a;
        });
        console.log('배열 내림차순 정렬 : '+ list);
