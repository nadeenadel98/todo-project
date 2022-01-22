alert("Hello user");
var UserName =prompt ("enter your name ");
alert("hello "+ UserName);

var Usergender =prompt ("enter your gender ");
switch (Usergender){
      case "Female":
       break;
       case "Male":
           break;
           default :
           alert ("Invalid enter ,you must enter Female or Male .");
           var Usergender =prompt ("enter your gender ");
           switch(Usergender){
               case "Female" :
                   break;
                   case "Male" :
                       break;
           }
}
var UserAge =prompt(" please enter your Age ");
if(UserAge <= 0){
    alert("invalid enter");

}
var confirm=prompt("are you want to skip the welcoming message ? ");
   switch(confirm){
       case "Yes" :
           break;
           case "No" :
              switch(Usergender){
                  case "Female" :
                      alert ("Welcome Ms "+UserName);
                      break;
                      case "Male" :
                          alert ("Welcome Mr "+UserName);
                          break;
                          default :
                          alert ("welcome");
              }
              break;
              default :
              alert("invalid value please enter Yes or No");
   }

