function lengthOfLastWord(s: string): number {
    let word:string = '';
    let count: number = 0;
    let lastcount:number =0 ;


for (let i = 0; i < s.length; ++i) {
    if(s[i]!==" "){
        word += s[i];
        count++;
    }else {
        lastcount = count
        count=0
        word=''

    }
}

return count==0?lastcount:count;

};