// let input = document.getElementById("input");

// let submitbtn = document.getElementById("submitbtn");

// submitbtn.addEventListener('click',function())
//  console.log(input.value)
// ))


let registerForm = document.getElementById("register-form")

let name = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpass");
//humne yha sbki value get krli .ab js ka code linewise execute hota hai to humne yha sare ele ki value get nhi kri sirf ele ko get kera hai. kiuki starting mai input k ander koi value haihi nhi isliye sirf yha humn elements get kra 

// Form ke liye submit event use karte hain.Button ke liye click event
//Submit button pe hi event laga dete.Ye kaam hi nahi karega.Button ke paas submit event hota hi nahi. submit event sirf <form> pe trigger hota hai
registerForm.addEventListener('submit', function (event) {
    event.preventDefault(); //Form reload hone se rokta hai.warna validation check hone se pehle page refresh ho jata

    let nameValue = name.value; //name naam ka jo var hai uske ander jo value hai
    let emailValue = email.value;
    let phoneValue = phone.value;
    let passwordValue = password.value;
    let confirmpassValue = confirmpassword.value;


    if (nameValue === "" || nameValue.length < 3) {
        alert("invalid name")
    }

    if (passwordValue === "" || passwordValue.length < 8 || !(/[0-9]/.test(passwordValue)) ||
        !(/[a-z]/.test(passwordValue)) || !(/[A-Z]/.test(passwordValue)) || !(/[@#$%!&?]/.test(passwordValue))) {
        alert("password must contain uppercase, lowercase, digit and special character")
    }

    if (passwordValue !== confirmpassValue) {
        alert("password do not match!! ")
    }

    if (!emailValue.includes('@')) {
        alert("email ")
    }
    
})

// form ka default action - means data ko submit kr dena immeadiatly usko humko rokna hai becoz uss value ko humko check krna hai then submit krna hai

//ab humne ek event pass kiya taki hum uss submit ko rok sake ..event ka naam hum kuch bhi rakh skte hai
//ab hum sari input ki value lege and validate karege. means check krege then submit
// hum sb element ki value get kr rhe hai nd var mai store kera diya . ab sari val store ho gyi
//kiuki val tbhi get hoti jb user ne sari value fill krdi hai .
// humne ab validation lagayi
//html vali validation hata k js laganai kiuki html value sirf ye check krti ki form ki value empty na ho

//pass k liye regular expression use kre jate hai / / k ander. and .test() = check karta hai string me wo pattern hai ya nahi
// !(/[0-9]/.test(password)) bracket k ander ki value true return karegi isliye humne agge not laga diya. so hyumne kya kiya agr inmai se ekbhi false hua to alert show kr dena.
//ab confirm k liye validation lagayi

//submit ki btn pr sarei ki value get krni hai