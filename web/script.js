//hellow javascript
// <----1.0---->
        // var user=window.prompt("enter your name: ");
        // document.getElementById("h1").innerHTML = "hellow "+ user+" u r in a js programe";

// <----2.0---->
        // var s=prompt("enter a non 0 num if u want to a++");
        // if(s!=0){

        //     let a=2;
        //     a++;
        //     document.getElementById("h1").innerHTML= "a was 2 so a++ is "+a;
        // }
        // else{
            
//             document.getElementById("h1").innerHTML= "u are not interested`";
// }

// <----3.0----> user input
        //easy way
            // let a= prompt("enter your name") ;
            // console.log("hellow!",a,"nice to meet u😄");
        //adv🙂 way
        // document.getElementById("mybutton").onclick=function(){
        // let username;
        // username=document.getElementById("myname").value;
        // console.log("hello "+username);
        // document.getElementById("h1").innerHTML="hellow "+ username ;
        // }
// <----4.0----> type conversion
  //<----tip----> when taking in put that's always a string;
    // ex 1->
        //let age = prompt("enter your age➡ ");
                // after tc
                        // console.log("now age is" ,typeof age);
                        // age+=1;
                        // console.log("your age is ",age);
                        // console.log(age);
                // before type conversion
                        // age=Number(age);
                        // console.log("now age is" ,typeof age);
                        // age++;
                        // console.log("your age is ",age);
     
    // ex 2-> 
                        //     let x ;
                        //     let y ;
                        //     let z ;
                        //     x = Number ( " 3.14 " ) ;
                        //     y = String ( 3.14 ) ;
                        //     z = Boolean ( " pizza " ) ;
                        //     console.log ( x , typeof x ) ;
                        //     console.log ( y , typeof y ) ;
                        //     console.log ( z , typeof z ) ;
                 
// <----5.0----> constant (circumference--> 2*pi*R)
                // const PI=3.14;
                // let r=window.prompt("enter the value: ");
                // let ans = 2*PI*r;
                // console.log("the circumference is: ",ans);

// <----6.0-----> MATH
                //let x = 3.14 ;
                // let y = 5 ;
                // let z = 9 ;
                // let maximum ;
                // let minimum ;
                // maximum =Math.max ( x , y , z ) ;
                // minimum =Math.min ( x , y , z ) ;
                // console.log ( "the min: ",minimum ) ;
                // console.log ( "the max: ",maximum ) ;
                  // other maths stuff
                        // x = Math.round ( x ) ;
                        // console.log(x);
                        // x = Math.floor ( x ) ;
                        // console.log(x);
                        // x = Math.ceil ( x ) ;
                        // console.log(x);
                        // x=Math.pow(x , 2 ) ;
                        // console.log(x);
                        // x=Math.sqrt ( x ) ;
                        // console.log(x);
                        // x=Math.abs ( x ) ;
                        // console.log(x);
        
// <----7.0----->  //hypotenuse calc practice program with maths 
          //basic
                //     let a,b;
                //     a=prompt("enter a: ");
                //     a=Number(a);    
                //     b=prompt("enter b: ");    
                //     b=Number(b);
                //     let ans;
                //     ans= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
                //     console.log("the ans is 😁",ans);
           //adv programe
                //         let ss;
                //         document.getElementById("sumbmitButton").onclick= function(){
                //         let a = document.getElementById("atext").value;
                //         let b = document.getElementById("btext").value;
                //         let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
                //         ss=c;
                //         document.getElementById("ans").innerHTML="😎"+c;
                //    }
                //    //xtra to print it on console
                //         document.getElementById("consoleButton").onclick=function(){
                //         console.log("😎",ss);     
                //         }
//<----8.0---->counter program #️⃣
                // let a=0;
                // document.getElementById("--").onclick=function(){
                // a--;
                // document.getElementById("ans").innerHTML=a;
                // }
                // document.getElementById("0").onclick=function(){
                // a=0;
                // document.getElementById("ans").innerHTML=a;
                // }
                // document.getElementById("++").onclick=function(){
                // a++;
                // document.getElementById("ans").innerHTML=a;
                // }
//<----9.0----->random num
      // Math.random(),floor();
                // let r;
                // document.getElementById("buton").onclick=function(){
                //         //float random num ~0
                //         r=Math.random();
                //         //float random num ~10
                //         r=Math.random()*10+1;
                //         //float random num ~100
                //         r=(Math.random()*100+1);
                //                 //to make it int
                //                 r=Math.floor(r);
                //         document.getElementById("random").innerHTML="so your random num is 🙂"+r;
                //         }
// <------10.0----->useful string properties & methods
        // properties
                // let coursename = "js-in-one-file ";
                // console.log(coursename);
                // console.log(coursename.repeat(3));
                // console.log("the length of the string is ➡",coursename.length);
                // console.log(coursename.charAt(2));
                // console.log(coursename.indexOf("e"));
                // console.log(coursename.lastIndexOf("e"));
                // console.log(coursename.replaceAll("-","_"));
                // if(coursename=="js-in-one-file ")
                // console.log("yse same string ");
                // console.log(coursename.toUpperCase());
                // // useing ternary op.
                // coursename.endsWith(" ")?console.log("yes ends with a sapce"):console.log("nop");
        //  method

        // slice (with out hearminf the fullname)
                // let fullName ="java script";
                // let firstName;
                // let lastName;
                // //basic
                //         // firstName=fullName.slice(0,5);
                //         // lastName=fullName.slice(5);
                //         // console.log(firstName);
                //         // console.log(lastName);
                // // bro
                //         firstName=fullName.slice(fullName.indexOf("j"),fullName.indexOf("s"));
                //         console.log(firstName);
                //         lastName=fullName.slice(fullName.indexOf("s"),fullName.indexOf("t")+1);
                //         //or
                //         lastName=fullName.slice(fullName.indexOf("s"));
                //         console.log(lastName);
// <------11.0----->method chaining             
                // let userName="ijavascript";
                // let letter;
                // //without method chaining
                // letter= userName.charAt(0);
                // console.log(letter.toUpperCase());
                // //with method chaining
                //  letter=userName.charAt(0).toUpperCase();
                // console.log(letter);
// <------12.0----->if-else
                // let  a= prompt("enter y0ur age 📩 ");
                // a=Number(a);// type casting
                // if(a>=18)
                // {alert("you r adoult");
                //  let b= prompt("enter your sex🏹💘");
                //  if(b=="boy")alert("hellow "+a+" years old 👦");
                //  else alert("hellow "+a+" years old 🦒👧");
                // }
                // else alert("y r not bad ");
        // <------12.1----->checked property
                // document.getElementById("btn").onclick=function(){
                // document.getElementById("btn").innerHTML="submited";
                
                // if(document.getElementById("chkbx").checked){
                //         alert("y r done ");
                // }
                // else {alert("plz rld at do yr jb");
                
                // }
                
                // }

// <------12.0----->switch-case
                // let grade= prompt("enter the grade: ");
                // switch(true){
                // case grade>=90:
                //    console.log("You did great!");
                //    break;
                // case grade>=80:
                //    console.log("You did good!");
                //    break;
                // case grade>=70:
                //    console.log("You did okay!");
                //    break;
                // case grade>=60:
                //    console.log("You passed ... barely");
                //    break;
                // case grade>60:
                //    console.log("You FAILED!");
                //    break;
                // default:
                //    console.log(grade,"is not a num grade!");
                //     }

// <------13.0----->AMD OR logical op
                // let tem= prompt("enter the tempareture: ");
                // // let me know about day and light
                // var today= new Date();
                // let time = today.getHours();
                // if (tem>=-5 && tem<=10){
                //         if(time>12)
                //         alert("y r enjoying frkn cold PM");
                //         else {alert("y r enjoying frkn cold PM");
                //         }
                // }
                // else if (tem<34) {alert("ok temp");}
// <------14.0----->nor 
                // let sunny = false;
                // if(!sunny) console.log("not sunny");
                // else console.log("sunny");
// <------15.0----->while-loop (making a smart unstopable name taker)
                // let user = "";
                // while(user==""||user==null)
                // {user=prompt("enter your name");}
                // console.log("hellow "+ user); 
// <------15.0----->d0-while-loop
                // let user="";
                // do{user=prompt("enter your name");console.log("hellow",user);}while(user==""||user==null)
// <------16.0----->for-loop
                // for(let i=3;i>0;i-=1){
                //         console.log(i);
                //     }
                //     console.log("HAPPY NEW YEAR!");
// <------17.0----->break and continue
                // console.log("we are printing 1 to 15 exept 7");
                // for(let i=1; ;i++)
                // {
                //         if(i==7) continue;
                //         console.log(i);
                //         if(i==15) break;
                // }
// <------18.0----->nested loop piramid pattern
                // // main tip ----> (creating the spaces) " &nbsp" for space.
                // let n=window.prompt("enter the number");
                // //n=Number(n);
                // let sym=window.prompt("enter the symbol");
                // for(let i=0;i<n;i++)
                // {       //creating the spaces
                //         for(let j =0;j<(n-i-1);j++)
                //         {document.getElementById("mypattern").innerHTML+=" &nbsp";}
                //         //creating the star
                //         for(let j=0;j<=i;j++)
                //         {document.getElementById("mypattern").innerHTML+=sym+"&nbsp ";}
                //         document.getElementById("mypattern").innerHTML+="<br>";
                // }
// <------19.0----->function    
                // let n=prompt("enter name: ");
                // let a=prompt("enter age: ");
                // fn1(n,a);
                // function fn1(name,age){
                //         alert("hellow "+age+" years old "+name);
                // }
        // <------19.1----->return statement in function
                // let area,a,b;
                // a=prompt("enter the hight: ");
                // b=prompt("enter the width: ");
                // alert("the area of the rectangle is: "+fn2(a,b));
                // function fn2(a,b){
                //         return (a*b);
                // }

// <------20.0----->ternary op
                // let bb=prompt("are u 🚹");
                // let aa=prompt("enter your age: ");
                // (aa>=18&&bb)?alert("you r a adult boy"):(aa>=18)?alert("you r a adult girl"):alert("u r not bad");
// <------21.0----->var vs let
        // let= limited to block scope{}
        // var= limited to a function(){}
        // global variable=is declared outside any function
        
        // for var
                // doSomething1();
                // function doSomething1(){
                //         for(var i=1;i<=3;i+=1)
                //         {
                //             //console.log(i);
                //         }
                //         console.log(i);
                // }
        // for let
                // doSomething();
                // function doSomething(){
                //         for(let i=1;i<=3;i+=1)
                //         {
                //             //console.log(i);
                //         }
                //         console.log(i);
                // }
        //( global,var will CHANGE browser's window properties)
        // do this with both var ,let bt restart the server -->(go console and type window,enter,see for var name property will changed bt not for let)
                //var  name="ara";
                //let name="ara";
// <------22.0----->template literals
                // let userName="jsc";
                // let items=8;
                // let total=50;
                // //lol
                //         console.log("Hello",userName);
                //         console.log("You have",items,"items in your cart");
                //         console.log("Your total is$",total);
                // // wiht (`)
                //         console.log(`Hello ${userName}`);
                //         console.log(`You have ${items} items in your cart`);
                //         console.log(`Your total is $${total}`); 
                // //or (best way to write in .innerhtml)
                //         let text=`Hello ${userName}
                //         You have ${items} items in your cart 
                //         Your total is $${total}`; 
                //         //console.log(text);
                //         document.getElementById("mylbl").innerHTML=text;
// <------23.0----->format currency
                //let num= 1235425.53;
                // //for english
                // num=num.toLocaleString("en-US");
                // console.log(num);
                // //for hindi
                // num=num.toLocaleString("hi-IN");
                // console.log(num);
                // //for german
                // num=num.toLocaleString("de-DE");
                // console.log(num);
                
                ////fromatting
                ////for english
                // num=num.toLocaleString("en-US",{style:"currency", currency:"USD"});
                // console.log(num);
                ////for hindi
                // num=num.toLocaleString("hi-IN",{style:"currency", currency:"INR"});
                // console.log(num);
                
               // //for printing in % 
                //   let n=100;
                // n=n.toLocaleString(undefined,{style:"percent"});
                // console.log(n);

               // //for printing in degree celsius
               //let n=100;
               //n=n.toLocaleString(undefined,{style: "unit",unit:"celsius"});
               //console.log(n);
// <------24.0----->array
                // let names=["row","wor"];
                // names.pop();
                // names.push("wor");
                // names.push("wor");
                // names.unshift("arka");
                // console.log(names);
                // console.log(names[0]);
                // console.log(names.length);
                // console.log(names.indexOf("wor"));
                // console.log(names.lastIndexOf("wor"));
                // let ar=[1,2,3,6,3,1,3,5];
                // ar.sort();
                // console.log(ar);
         // <------24.1----->looping with arrays
                // let numbs=[1,3,56,7,4,3];
                //   //normal way
                // for(let i=0;i<numbs.length;++i){
                //         console.log(numbs[i]);
                // }
                // console.log("let num of nums: ");
                //   //using auto ytpe stuff
                //  for(let num of numbs){
                // console.log(num);
                //  }
        //<------24.2-----> sort the array of strings reverse
                // let fruits=["banana","apple","orange","mango","coconut"];
                // // fruits fruits.sort();
                // fruits=fruits.sort().reverse();
                // for(let fruit of fruits){
                // console.log(fruit);
                // }
        //<------24.3----->2D array
                // let fruits=["apples","oranges","bananas"];
                // let vegetables=["carrots","onions","potatoes"];
                // let meats=["eggs","chicken","fish"];
                // let groceryList=[fruits,vegetables,meats];
                // //console.log(groceryList[2][2]);
                // for(let list of groceryList){
                // for(let food of list){
                //      //   console.log(food);
                // }
                // }
        //<------24.4----->spread operator ...
                // let name1="javascript";
                // console.log(...name1);
                // let ar=[1,2,3,4,5,6];
                // console.log(ar);
                // console.log(...ar);
        // ... uses in array
        //example 1
                // let num=[1,2,3,4,56,76];
                // let max1=Math.max(num);//here all the elements are packed
                // console.log(max1);
                // let max=Math.max(...num);//here all the elements are unpacked
                // console.log(max);
        //example 2
                // let class1=["Spongebob","Mr.Krabs","Plankton"];
                // let class2=["Squidward","Patrick","Sandy"];
                // class1.push(... class2);// 6 ele
                // console.log(...class1);
                // class1.push(class2);// 3 ele and 1 array
                // console.log(...class1);
                                     
//<------25.0----->rest parameters ...(used when the arguments are not constant in function)
                // let a=1;
                // let b=2;
                // let c=3;
                // let d=4;
                // let e=5;
                //         // function sum(a,b){
                //         //         return a+b;
                //         // }
                // console.log(sum(a,b));// done by the above fn
                // console.log(sum(a,b,c));// no way by the above fn are args are over flowed
                // //so this ⤵⤵⤵ wiht the help of sprade op
                // function sum(...nums){
                //         let add=0;
                //         for (let num of nums){
                //                 add+=num;
                //         }
                //         return add;
                // }
//<------26.0----->call back---> pass a fn in terms of argument of another fn
                // sum(2,3,printinconsole);
                // function sum(a,b,fnstore){
                //         let result=a+b;
                //         fnstore(result);
                // }     
                // function printinconsole(a){
                //         console.log(`the summetion is ${a}`);
                // }


