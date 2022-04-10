// 두 개의 배열 합치기 concat()
    let list1 = [1, 2, 3];
    let list2 = [4, 5, 6];
    let list3 = list1.concat(list2);
    console.log('배열 합치기 : '+ list3);
        
// 배열의 구분자를 변경 join() -> 문자열로 리턴
    list3 = list3.join('-');
    console.log('배열의 구분자(-)으로 변경'+ list3);
    console.log(typeof list3);

// 배열의 요소를 삭제하고 새로운 내용을 추가
// splice(시작순서, 제거 개수, 넣을 값)
    list1.splice(0, 2, 7, 8, 9, 10);
    console.log('원하는 배열 요소개수 삭제 : '+ list1);
