function length_Ch()

var s:integer; 
var i:integer; 
var ch:string; 

begin 
read(ch)
i:=0;
s:=0;
while(ch[i]!='.');
i:=i+1;
s:=s+1;
end_while;
return("length ch=",s);
end;

ALGORITHM nb_words
var s:integer; 
var i:integer; 
var ch:string; 

begin 
read(ch)
s:=1;
for(i=0,i<length_ch(ch),i++)
if ch[i]=" ";
s:=s+1;
end_for;
return("number of words=",s);
end;

ALGORITHM nb_words
var s:integer; 
var i:integer; 
var ch:string; 

begin 
read(ch)
s:=0;
for(i=0,i<length_ch(ch),i++)
if ch[i]in['a','o','u','e','y','i','A','O','U','E','Y','I'];
s:=s+1;
end_for;
return("number of vowels =",s);
end;

