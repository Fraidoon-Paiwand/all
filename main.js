// let in11 = document.getElementById("in-1").checked;
let score;

document.getElementById("btn").addEventListener("click", BtnClicked);
c = "Correct" ;
inc = "Incorrect";

function BtnClicked() {
let in11 = document.getElementById('in-1').checked;
let in23 = document.getElementById("in2-3").checked;
let in33 = document.getElementById("in3-3").checked;
let in41 = document.getElementById("in4-1").checked;
let in51 = document.getElementById("in5-1").checked;
let in62 = document.getElementById("in6-2").checked;
let in74 = document.getElementById("in7-4").checked;
let in83 = document.getElementById("in8-3").checked;
let in93 = document.getElementById("in9-3").checked;
let in101 = document.getElementById("in10-1").checked;
let in112 = document.getElementById("in11-3").checked;
let in124 = document.getElementById("in12-4").checked;
let in131 = document.getElementById("in13-1").checked;
let in141 = document.getElementById("in14-1").checked;
let in153 = document.getElementById("in15-3").checked;
let in161 = document.getElementById("in16-1").checked;
let in173 = document.getElementById("in17-3").checked;
let in183 = document.getElementById("in18-3").checked;
let in193 = document.getElementById("in19-3").checked;
let in203 = document.getElementById("in20-3").checked;
let in214 = document.getElementById("in21-4").checked;
let in224 = document.getElementById("in22-4").checked;
let in232 = document.getElementById("in23-2").checked;
let in241 = document.getElementById("in24-1").checked;
let in253 = document.getElementById("in25-3").checked;
let in263 = document.getElementById("in26-3").checked;
let in273 = document.getElementById("in27-3").checked;
let in282 = document.getElementById("in28-2").checked;
let in292 = document.getElementById("in29-2").checked;
let in301 = document.getElementById("in30-1").checked;
let in313 = document.getElementById("in31-3").checked;
let in322 = document.getElementById("in32-2").checked;
let in334 = document.getElementById("in33-4").checked;
let in344 = document.getElementById("in34-4").checked;
let in354 = document.getElementById("in35-4").checked;
let in363 = document.getElementById("in36-4").checked;
let in373 = document.getElementById("in37-4").checked;
let in381 = document.getElementById("in38-4").checked;
let in391 = document.getElementById("in39-4").checked;
let in404 = document.getElementById("in40-4").checked;
let in412 = document.getElementById("in41-4").checked;
let in422 = document.getElementById("in42-4").checked;
let in432 = document.getElementById("in43-4").checked;
let in441 = document.getElementById("in44-4").checked;
let in452 = document.getElementById("in45-4").checked;
let in461 = document.getElementById("in46-4").checked;
let in472 = document.getElementById("in47-4").checked;
let in483 = document.getElementById("in48-4").checked;
let in491 = document.getElementById("in49-4").checked;
let in501 = document.getElementById("in50-4").checked;
let in512 = document.getElementById("in51-4").checked;
let in523 = document.getElementById("in52-4").checked;
let in532 = document.getElementById("in53-4").checked;
let in541 = document.getElementById("in54-4").checked;
let in551 = document.getElementById("in55-4").checked;
let in561 = document.getElementById("in56-4").checked;
let in571 = document.getElementById("in57-4").checked;
let in581 = document.getElementById("in58-4").checked;
let in591 = document.getElementById("in59-4").checked;
let in601 = document.getElementById("in60-4").checked;
let in611 = document.getElementById("in61-4").checked;
let in621 = document.getElementById("in62-4").checked;
let in631 = document.getElementById("in63-4").checked;
let in641 = document.getElementById("in64-4").checked;
let in651 = document.getElementById("in65-4").checked;
let in661 = document.getElementById("in66-4").checked;
let in671 = document.getElementById("in67-4").checked;
let in681 = document.getElementById("in68-4").checked;
let in691 = document.getElementById("in69-4").checked;
let in701 = document.getElementById("in70-4").checked;
let in711 = document.getElementById("in71-4").checked;
let in721 = document.getElementById("in72-4").checked;
let in731 = document.getElementById("in73-4").checked;
let in741 = document.getElementById("in74-4").checked;
let in751 = document.getElementById("in75-4").checked;
let in761 = document.getElementById("in76-4").checked;
let in771 = document.getElementById("in77-4").checked;
let in781 = document.getElementById("in78-4").checked;
let in791 = document.getElementById("in79-4").checked;
let in801 = document.getElementById("in80-4").checked;
let in811 = document.getElementById("in81-4").checked;
let in821 = document.getElementById("in82-4").checked;
let in831 = document.getElementById("in83-4").checked;
let in841 = document.getElementById("in84-4").checked;
let in851 = document.getElementById("in85-4").checked;
// let in861 = document.getElementById("in86-4").checked;
// let in871 = document.getElementById("in87-4").checked;
// let in881 = document.getElementById("in88-4").checked;
// let in891 = document.getElementById("in89-4").checked;
// let in901 = document.getElementById("in90-4").checked;
// let in911 = document.getElementById("in91-4").checked;
// let in921 = document.getElementById("in92-4").checked;
// let in931 = document.getElementById("in93-4").checked;
// let in941 = document.getElementById("in94-4").checked;
let in951 = document.getElementById("in95-1").checked;
let in961 = document.getElementById("in96-1").checked;
let in971 = document.getElementById("in97-4").checked;
let in981 = document.getElementById("in98-4").checked;
let in991 = document.getElementById("in99-4").checked;
let in1001 = document.getElementById("in100-4").checked;
let in1011 = document.getElementById("in101-4").checked;
let in1021 = document.getElementById("in102-4").checked;
let in1031 = document.getElementById("in103-4").checked;
let in1041 = document.getElementById("in104-4").checked;
let in1051 = document.getElementById("in105-4").checked;
let in1061 = document.getElementById("in106-4").checked;
let in1071 = document.getElementById("in107-4").checked;
let in1081 = document.getElementById("in108-4").checked;


  let o1 = document.getElementById('o-1');
  let o2 = document.getElementById("o-2");
  let o3 = document.getElementById("o-3");
  let o4 = document.getElementById("o-4");
  let o5 = document.getElementById("o-5");
  let o6 = document.getElementById("o-6");
  let o7 = document.getElementById("o-7");
  let o8 = document.getElementById("o-8");
  let o9 = document.getElementById("o-9");
  let o10 = document.getElementById("o-10");
  let o11 = document.getElementById("o-11");
  let o12 = document.getElementById("o-12");
  let o13 = document.getElementById("o-13");
  let o14 = document.getElementById("o-14");
  let o15 = document.getElementById("o-15");
  let o16 = document.getElementById("o-16");
  let o17 = document.getElementById("o-17");
  let o18 = document.getElementById("o-18");
  let o19 = document.getElementById("o-19");
  let o20 = document.getElementById("o-20");
  let o21 = document.getElementById("o-21");
  let o22 = document.getElementById("o-22");
  let o23 = document.getElementById("o-23");
  let o24 = document.getElementById("o-24");
  let o25 = document.getElementById("o-25");
  let o26 = document.getElementById("o-26");
  let o27 = document.getElementById("o-27");
  let o28 = document.getElementById("o-28");
  let o29 = document.getElementById("o-29");
  let o30 = document.getElementById("o-30");
  let o31 = document.getElementById("o-31");
  let o32 = document.getElementById("o-32");
  let o33 = document.getElementById("o-33");
  let o34 = document.getElementById("o-34");
  let o35 = document.getElementById("o-35");
  let o36 = document.getElementById("o-36");
  let o37 = document.getElementById("o-37");
  let o38 = document.getElementById("o-38");
  let o39 = document.getElementById("o-39");
  let o40 = document.getElementById("o-40");
  let o41 = document.getElementById("o-41");
  let o42 = document.getElementById("o-42");
  let o43 = document.getElementById("o-43");
  let o44 = document.getElementById("o-44");
  let o45 = document.getElementById("o-45");
  let o46 = document.getElementById("o-46");
  let o47 = document.getElementById("o-47");
  let o48 = document.getElementById("o-48");
  let o49 = document.getElementById("o-49");
  let o50 = document.getElementById("o-50");


score = 0;
  if (in11) {
      o1.innerHTML = c ;
      o1.style.color = "green";
      score++;
  } else {
      o1.innerHTML = inc;
      o1.style.color = 'red';
  } 
  
  
   if (in23){
    o2.innerHTML = c;
    o2.style.color = "green";
   } else {
      o1.innerHTML = inc;
      o1.style.color = 'red';
  } 

    if (in33) {
    o3.innerHTML = c ;
    o3.style.color = "green";
    score++;
    } else {
      o1.innerHTML = inc;
      o1.style.color = 'red';
  } 
   if (in41) {
    o4.innerHTML = c ;
    o4.style.color = "green";
    score++;
  } else {
    o1.innerHTML = inc;
    o1.style.color = 'red';
} 
    if (in51) {
    o5.innerHTML = c ;
    o5.style.color = "green";
    score++;
  } else {
    o5.innerHTML = inc;
    o5.style.color = 'red';
} 
   if (in62) {
    o6.innerHTML = c ;
    o6.style.color = "green";
    score++;
  } else {
    o6.innerHTML = inc;
    o6.style.color = 'red';
} 
   if (in74) {
    o7.innerHTML = c ;
    o7.style.color = "green";
    score++;
  } else {
    o7.innerHTML = inc;
    o7.style.color = 'red';
} 
   if (in83) {
    o8.innerHTML = c ;
    o8.style.color = "green";
    score++;
  } else {
    o8.innerHTML = inc;
    o8.style.color = 'red';
} 
   if (in93) {
    o9.innerHTML = c ;
    o9.style.color = "green";
    score++;
  } else {
    o9.innerHTML = inc;
    o9.style.color = 'red';
} 
   if (in101) {
    o10.innerHTML = c ;
    o10.style.color = "green";
    score++;
  } else {
    o10.innerHTML = inc;
    o10.style.color = 'red';
} 
   if (in112) {
    o11.innerHTML = c ;
    o11.style.color = "green";
    score++;
  } else {
    o11.innerHTML = inc;
    o11.style.color = 'red';
} 
   if (in124) {
    o12.innerHTML = c ;
    o12.style.color = "green";
    score++;
  } else {
    o12.innerHTML = inc;
    o12.style.color = 'red';
} 
   if (in131) {
    o13.innerHTML = c ;
    o13.style.color = "green";
    score++;
  } else {
    o13.innerHTML = inc;
    o13.style.color = 'red';
} 
    if (in141) {
    o14.innerHTML = c ;
    o14.style.color = "green";
    score++;
  } else {
    o14.innerHTML = inc;
    o14.style.color = 'red';
} 
    if (in153) {
    o15.innerHTML = c ;
    o15.style.color = "green";
    score++;
  } else {
    o15.innerHTML = inc;
    o15.style.color = 'red';
} 
    if (in161) {
    o16.innerHTML = c ;
    o16.style.color = "green";
    score++;
  } else {
    o16.innerHTML = inc;
    o16.style.color = 'red';
} 
    if (in173) {
    o17.innerHTML = c ;
    o17.style.color = "green";
    score++;
  } else {
    o17.innerHTML = inc;
    o17.style.color = 'red';
} 
    if (in183) {
    o18.innerHTML = c ;
    o18.style.color = "green";
    score++;
  } else {
    o18.innerHTML = inc;
    o18.style.color = 'red';
} 
    if (in193) {
    o19.innerHTML = c ;
    o19.style.color = "green";
    score++;
  } else {
    o19.innerHTML = inc;
    o19.style.color = 'red';
} 
    if (in203) {
    o20.innerHTML = c ;
    o20.style.color = "green";
    score++;
  } else {
    o20.innerHTML = inc;
    o20.style.color = 'red';
} 
if (in214) {
  o21.innerHTML = c ;
  o21.style.color = "green";
  score++;
} else {
  o21.innerHTML = inc;
  o21.style.color = 'red';
} 
if (in224) {
  o22.innerHTML = c ;
  o22.style.color = "green";
  score++;
} else {
  o22.innerHTML = inc;
  o22.style.color = 'red';
} 
if (in232) {
  o23.innerHTML = c ;
  o23.style.color = "green";
  score++;
} else {
  o23.innerHTML = inc;
  o23.style.color = 'red';
} 
if (in241) {
  o24.innerHTML = c ;
  o24.style.color = "green";
  score++;
} else {
  o24.innerHTML = inc;
  o24.style.color = 'red';
} 
if (in253) {
  o25.innerHTML = c ;
  o25.style.color = "green";
  score++;
} else {
  o25.innerHTML = inc;
  o25.style.color = 'red';
} 
if (in263) {
  o26.innerHTML = c ;
  o26.style.color = "green";
  score++;
} else {
  o26.innerHTML = inc;
  o26.style.color = 'red';
} 
if (in273) {
  o27.innerHTML = c ;
  o27.style.color = "green";
  score++;
} else {
  o27.innerHTML = inc;
  o27.style.color = 'red';
} 
if (in282) {
  o28.innerHTML = c ;
  o28.style.color = "green";
  score++;
} else {
  o28.innerHTML = inc;
  o28.style.color = 'red';
} 
 if (in292) {
    o29.innerHTML = c ;
    o29.style.color = "green";
    score++;
  } else {
    o29.innerHTML = inc;
    o29.style.color = 'red';
} 
 if (in301) {
    o30.innerHTML = c ;
    o30.style.color = "green";
    score++;
  } else {
    o30.innerHTML = inc;
    o30.style.color = 'red';
} 
if (in313) {
  o31.innerHTML = c ;
  o31.style.color = "green";
  score++;
} else {
  o31.innerHTML = inc;
  o31.style.color = 'red';
}  if (in322) {
  o32.innerHTML = c ;
  o32.style.color = "green";
  score++;
} else {
  o32.innerHTML = inc;
  o32.style.color = 'red';
} 
if (in334) {
  o33.innerHTML = c ;
  o33.style.color = "green";
  score++;
} else {
  o33.innerHTML = inc;
  o33.style.color = 'red';
} 
if (in344) {
  o34.innerHTML = c ;
  o34.style.color = "green";
  score++;
} else {
  o34.innerHTML = inc;
  o34.style.color = 'red';
} 
if (in354) {
  o35.innerHTML = c ;
  o35.style.color = "green";
  score++;
} else {
  o35.innerHTML = inc;
  o35.style.color = 'red';
} 
if (in363) {
  o36.innerHTML = c ;
  o36.style.color = "green";
  score++;
} else {
  o36.innerHTML = inc;
  o36.style.color = 'red';
} 
if (in373) {
  o37.innerHTML = c ;
  o37.style.color = "green";
  score++;
} else {
  o37.innerHTML = inc;
  o37.style.color = 'red';
} 
if (in381) {
  o38.innerHTML = c ;
  o38.style.color = "green";
  score++;
} else {
  o38.innerHTML = inc;
  o38.style.color = 'red';
} 
if (in391) {
  o39.innerHTML = c ;
  o39.style.color = "green";
  score++;
} else {
  o39.innerHTML = inc;
  o39.style.color = 'red';
} 
if (in404) {
  o40.innerHTML = c ;
  o40.style.color = "green";
  score++;
} else {
  o40.innerHTML = inc;
  o40.style.color = 'red';
} if (in412) {
  o41.innerHTML = c ;
  o41.style.color = "green";
  score++;
} else {
  o41.innerHTML = inc;
  o41.style.color = 'red';
} 
if (in422) {
  o42.innerHTML = c ;
  o42.style.color = "green";
  score++;
} else {
  o42.innerHTML = inc;
  o42.style.color = 'red';
} 
if (in432) {
  o43.innerHTML = c ;
  o43.style.color = "green";
  score++;
} else {
  o43.innerHTML = inc;
  o43.style.color = 'red';
} 
if (in441) {
  o44.innerHTML = c ;
  o44.style.color = "green";
  score++;
} else {
  o44.innerHTML = inc;
  o44.style.color = 'red';
} 
if (in452) {
  o45.innerHTML = c ;
  o45.style.color = "green";
  score++;
} else {
  o45.innerHTML = inc;
  o45.style.color = 'red';
} 
if (in461) {
  o46.innerHTML = c ;
  o46.style.color = "green";
  score++;
} else {
  o46.innerHTML = inc;
  o46.style.color = 'red';
} 
if (in472) {
  o47.innerHTML = c ;
  o47.style.color = "green";
  score++;
} else {
  o47.innerHTML = inc;
  o47.style.color = 'red';
} 
if (in483) {
  o48.innerHTML = c ;
  o48.style.color = "green";
  score++;
} else {
  o48.innerHTML = inc;
  o48.style.color = 'red';
} 
if (in491) {
  o49.innerHTML = c ;
  o49.style.color = "green";
  score++;
} else {
  o49.innerHTML = inc;
  o49.style.color = 'red';
} 

if (in501) {
  o50.innerHTML = c ;
  o50.style.color = "green";
  score++;
} else {
  o50.innerHTML = inc;
  o50.style.color = 'red';
} 
if (in512) {
  o51.innerHTML = c ;
  o51.style.color = "green";
  score++;
} else {
  o51.innerHTML = inc;
  o51.style.color = 'red';
} 
if (in523) {
  o52.innerHTML = c ;
  o52.style.color = "green";
  score++;
} else {
  o52.innerHTML = inc;
  o52.style.color = 'red';
} 
if (in532) {
  o53.innerHTML = c ;
  o53.style.color = "green";
  score++;
} else {
  o53.innerHTML = inc;
  o53.style.color = 'red';
} 
if (in541) {
  o54.innerHTML = c ;
  o54.style.color = "green";
  score++;
} else {
  o54.innerHTML = inc;
  o54.style.color = 'red';
} 
if (in551) {
  o55.innerHTML = c ;
  o55.style.color = "green";
  score++;
} else {
  o55.innerHTML = inc;
  o55.style.color = 'red';
} 
if (in561) {
  o56.innerHTML = c ;
  o56.style.color = "green";
  score++;
} else {
  o56.innerHTML = inc;
  o56.style.color = 'red';
} 
if (in571) {
  o57.innerHTML = c ;
  o57.style.color = "green";
  score++;
} else {
  o57.innerHTML = inc;
  o57.style.color = 'red';
} 
if (in581) {
  o58.innerHTML = c ;
  o58.style.color = "green";
  score++;
} else {
  o58.innerHTML = inc;
  o58.style.color = 'red';
} 
if (in591) {
  o59.innerHTML = c ;
  o59.style.color = "green";
  score++;
} else {
  o59.innerHTML = inc;
  o59.style.color = 'red';
} 
if (in601) {
  o60.innerHTML = c ;
  o60.style.color = "green";
  score++;
} else {
  o60.innerHTML = inc;
  o60.style.color = 'red';
} 
if (in611) {
  o61.innerHTML = c ;
  o61.style.color = "green";
  score++;
} else {
  o61.innerHTML = inc;
  o61.style.color = 'red';
} 
if (in621) {
  o62.innerHTML = c ;
  o62.style.color = "green";
  score++;
} else {
  o62.innerHTML = inc;
  o62.style.color = 'red';
} 
if (in631) {
  o63.innerHTML = c ;
  o63.style.color = "green";
  score++;
} else {
  o63.innerHTML = inc;
  o63.style.color = 'red';
} 
if (in641) {
  o64.innerHTML = c ;
  o64.style.color = "green";
  score++;
} else {
  o64.innerHTML = inc;
  o64.style.color = 'red';
} 
if (in651) {
  o65.innerHTML = c ;
  o65.style.color = "green";
  score++;
} else {
  o65.innerHTML = inc;
  o65.style.color = 'red';
}
 if (in661) {
  o66.innerHTML = c ;
  o66.style.color = "green";
  score++;
} else {
  o66.innerHTML = inc;
  o66.style.color = 'red';
} 
if (in671) {
  o67.innerHTML = c ;
  o67.style.color = "green";
  score++;
} else {
  o67.innerHTML = inc;
  o67.style.color = 'red';
} 
if (in681) {
  o68.innerHTML = c ;
  o68.style.color = "green";
  score++;
} else {
  o68.innerHTML = inc;
  o68.style.color = 'red';
} 
if (in691) {
  o69.innerHTML = c ;
  o69.style.color = "green";
  score++;
} else {
  o69.innerHTML = inc;
  o69.style.color = 'red';
} 
if (in701) {
  o70.innerHTML = c ;
  o70.style.color = "green";
  score++;
} else {
  o70.innerHTML = inc;
  o70.style.color = 'red';
} 
if (in711) {
  o71.innerHTML = c ;
  o71.style.color = "green";
  score++;
} else {
  o71.innerHTML = inc;
  o71.style.color = 'red';
} 
if (in721) {
  o72.innerHTML = c ;
  o72.style.color = "green";
  score++;
} else {
  o72.innerHTML = inc;
  o72.style.color = 'red';
} 
if (in731) {
  o73.innerHTML = c ;
  o73.style.color = "green";
  score++;
} else {
  o73.innerHTML = inc;
  o73.style.color = 'red';
} 
if (in741) {
  o74.innerHTML = c ;
  o74.style.color = "green";
  score++;
} else {
  o74.innerHTML = inc;
  o74.style.color = 'red';
} 
if (in751) {
  o75.innerHTML = c ;
  o75.style.color = "green";
  score++;
} else {
  o75.innerHTML = inc;
  o75.style.color = 'red';
} 
if (in761) {
  o76.innerHTML = c ;
  o76.style.color = "green";
  score++;
} else {
  o76.innerHTML = inc;
  o76.style.color = 'red';
} 
if (in771) {
  o77.innerHTML = c ;
  o77.style.color = "green";
  score++;
} else {
  o77.innerHTML = inc;
  o77.style.color = 'red';
} if (in781) {
  o78.innerHTML = c ;
  o78.style.color = "green";
  score++;
} else {
  o78.innerHTML = inc;
  o78.style.color = 'red';
} 
if (in791) {
  o79.innerHTML = c ;
  o79.style.color = "green";
  score++;
} else {
  o79.innerHTML = inc;
  o79.style.color = 'red';
} 
if (in801) {
  o80.innerHTML = c ;
  o80.style.color = "green";
  score++;
} else {
  o80.innerHTML = inc;
  o80.style.color = 'red';
} 
if (in811) {
  o81.innerHTML = c ;
  o81.style.color = "green";
  score++;
} else {
  o81.innerHTML = inc;
  o81.style.color = 'red';
} 
if (in821) {
  o82.innerHTML = c ;
  o82.style.color = "green";
  score++;
} else {
  o82.innerHTML = inc;
  o82.style.color = 'red';
} 
if (in831) {
  o83.innerHTML = c ;
  o83.style.color = "green";
  score++;
} else {
  o83.innerHTML = inc;
  o83.style.color = 'red';
} 
if (in841) {
  o84.innerHTML = c ;
  o84.style.color = "green";
  score++;
} else {
  o84.innerHTML = inc;
  o84.style.color = 'red';
} 
if (in851) {
  o85.innerHTML = c ;
  o85.style.color = "green";
  score++;
} else {
  o85.innerHTML = inc;
  o85.style.color = 'red';
} 
if (in861) {
  o86.innerHTML = c ;
  o86.style.color = "green";
  score++;
} else {
  o86.innerHTML = inc;
  o86.style.color = 'red';
} 
if (in871) {
  o87.innerHTML = c ;
  o87.style.color = "green";
  score++;
} else {
  o87.innerHTML = inc;
  o87.style.color = 'red';
} 
if (in881) {
  o88.innerHTML = c ;
  o88.style.color = "green";
  score++;
} else {
  o88.innerHTML = inc;
  o88.style.color = 'red';
} 
if (in891) {
  o89.innerHTML = c ;
  o89.style.color = "green";
  score++;
} else {
  o89.innerHTML = inc;
  o89.style.color = 'red';
} 
if (in901) {
  o90.innerHTML = c ;
  o90.style.color = "green";
  score++;
} else {
  o90.innerHTML = inc;
  o90.style.color = 'red';
} 
if (in911) {
  o91.innerHTML = c ;
  o91.style.color = "green";
  score++;
} else {
  o91.innerHTML = inc;
  o91.style.color = 'red';
} 
if (in921) {
  o92.innerHTML = c ;
  o92.style.color = "green";
  score++;
} else {
  o92.innerHTML = inc;
  o92.style.color = 'red';
} if (in931) {
  o93.innerHTML = c ;
  o93.style.color = "green";
  score++;
} else {
  o93.innerHTML = inc;
  o93.style.color = 'red';
} 

if (in941) {
  o94.innerHTML = c ;
  o94.style.color = "green";
  score++;
} else {
  o94.innerHTML = inc;
  o94.style.color = 'red';
} if (in951) {
  o95.innerHTML = c ;
  o95.style.color = "green";
  score++;
} else {
  o95.innerHTML = inc;
  o95.style.color = 'red';
} 
if (in961) {
  o96.innerHTML = c ;
  o96.style.color = "green";
  score++;
} else {
  o96.innerHTML = inc;
  o96.style.color = 'red';
} 
if (in971) {
  o97.innerHTML = c ;
  o97.style.color = "green";
  score++;
} else {
  o97.innerHTML = inc;
  o97.style.color = 'red';
} 
if (in981) {
  o98.innerHTML = c ;
  o98.style.color = "green";
  score++;
} else {
  o98.innerHTML = inc;
  o98.style.color = 'red';
} 

if (in991) {
  o99.innerHTML = c ;
  o99.style.color = "green";
  score++;
} else {
  o99.innerHTML = inc;
  o99.style.color = 'red';
} 
if (in1001) {
  o100.innerHTML = c ;
  o100.style.color = "green";
  score++;
} else {
  o100.innerHTML = inc;
  o100.style.color = 'red';
} 
if (in1011) {
  o101.innerHTML = c ;
  o101.style.color = "green";
  score++;
} else {
  o101.innerHTML = inc;
  o101.style.color = 'red';
} 
if (in1021) {
  o102.innerHTML = c ;
  o102.style.color = "green";
  score++;
} else {
  o102.innerHTML = inc;
  o102.style.color = 'red';
} 
if (in1031) {
  o103.innerHTML = c ;
  o103.style.color = "green";
  score++;
} else {
  o103.innerHTML = inc;
  o103.style.color = 'red';
} if (in1041) {
  o104.innerHTML = c ;
  o104.style.color = "green";
  score++;
} else {
  o104.innerHTML = inc;
  o104.style.color = 'red';
} 
if (in1051) {
  o105.innerHTML = c ;
  o105.style.color = "green";
  score++;
} else {
  o105.innerHTML = inc;
  o105.style.color = 'red';
} 
if (in1061) {
  o106.innerHTML = c ;
  o106.style.color = "green";
  score++;
} else {
  o106.innerHTML = inc;
  o106.style.color = 'red';
} 
if (in1071) {
  o107.innerHTML = c ;
  o107.style.color = "green";
  score++;
} else {
  o107.innerHTML = inc;
  o107.style.color = 'red';
} if (in1081) {
  o108.innerHTML = c ;
  o108.style.color = "green";
  score++;
} else {
  o108.innerHTML = inc;
  o108.style.color = 'red';
} 


}
