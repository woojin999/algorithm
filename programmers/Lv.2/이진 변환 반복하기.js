function solution(s) {
    var answer = [0,0];
    let sLenth = 0;

    while (s.length > 1){
        sLenth = s.length;
        s = s.split("0").join("");
        answer[0]++;
        answer[1] += (sLenth - s.length);
        s = s.length.toString(2);
    }
    return answer;
}