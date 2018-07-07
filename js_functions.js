function countLetters (s){
    var coun=1;
    var result = s[0];
    for (var i=1; i<s.length; i++)
    {
        if (s[i]==result[result.length-1])
        {coun++;}
        else{
            result = result + coun+s[i];
            coun=1;
        }
    }
    result = result + coun;
    return alert(s+' '+result);
}