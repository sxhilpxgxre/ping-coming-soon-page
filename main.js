let mail=document.querySelector("#email");
let msg=document.querySelector("#msg");
let mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function designChanges(a,b,c){
    msg.textContent=a;
    msg.style.color=b;
    mail.style.borderColor=c;
};

function checkMail(){
    msg.style.display="block";
    if (mail.value.match(mailFormat)){
        designChanges("Done!","green","hsl(223, 100%, 88%)");
    }else{
        designChanges("Please provide a valid email","hsl(0, 93%, 68%)","hsl(354, 100%, 66%)");
    }
};