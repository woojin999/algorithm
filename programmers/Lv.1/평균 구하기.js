/* 문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다. */

// 내가 푼 방법

function solution(arr) {
    var answer = 0;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = num + arr[i]
    }
    answer = num/arr.length;
    return answer;
}

// 더 단축시키는 방법
// reduce() : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.
function solution(arr) {
    return arr.reduce((sum, current) => sum + current) / arr.length;
  }