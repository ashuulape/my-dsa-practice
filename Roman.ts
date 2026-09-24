var romanToInt = function(s:string):number {
    const map:Record<string, number>={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}


        let res:number=0
        let romanno:string=''
    let r:number=0
    for(let i:number=0;i<s.length;i++){
        romanno=s[i]
        if(map[(romanno)]){
            if(map[s[i]]<map[s[i+1]]){
                r=map[s[i+1]]-map[s[i]]
                i++
            }else {

            r=map[(romanno)]
            }
            res+=r
            romanno=''
            r=0
        }
        else {

        romanno+=s[i];
        }
    }

    return(res)
};

console.log(romanToInt('MCMXCIV'))