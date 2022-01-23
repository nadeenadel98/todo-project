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

   var additional_question_1=prompt("are you in university ?");
       Answer(additional_question_1);

    var additional_question_2=prompt("are you single ? ");
        Answer(additional_question_2);

    var additional_question_3=prompt("are you from jordan ? ") ;
       Answer(additional_question_3); 
       
       var Answering =[additional_question_1 ,additional_question_2 , additional_question_3];

       for(var x=0 ; x <=3 ; x++) { //(0 1 2 )
           console.log(Answering[x]); 
       }
      
    function Answer(c){
    switch(c){
        case "yes" :
        case "Yes" :
            break;
            case "No" :
            case "no" :
                break;
                    default:
                        alert("invalied value 'Hint :please enter Yes ,yes or No ,no '");
    
    }
    }

