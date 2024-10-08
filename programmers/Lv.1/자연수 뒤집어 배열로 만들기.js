/* 
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.
*/

function solution(n) {
  var answer = [];
  let arr = n.toString().split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    answer.push(Number(arr[i]));
  }
  return answer;
}

///// 다른사람 풀이 궁금해서 찾아본 코드

function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((o) => (o = parseInt(o)));
}

function solution(n) {
  return String(n).split("").reverse().map(Number);
}
