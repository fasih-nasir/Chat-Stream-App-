import { auth, getDocs, updateDoc,doc, deleteDoc ,signOut, collection, addDoc, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, provider, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "./assets/config.mjs";



function fn(){
var inp=document.querySelectorAll("input")
inp.forEach(element => {
    console.log(element.innerHTML);
    
    element.innerHTML=""
});
}

setTimeout(() => {
    // document.getElementById("main").innerHTML = "Wait, Content is Loading";
 document.getElementById("lo").style.display="none"
    
    
}, 2000);
var create0=document.getElementById("create0");
var login0=document.getElementById("login0");
// CREATE 0 FOR JUST PAGES
create0?.addEventListener("click",()=>{
    location.href = "files/create.html";
})
// LOGIN 0 FOR JUST PAGES

login0?.addEventListener("click",()=>{
    location.href = "../index.html";
    
})

// var date=new Date()
// console.log(date.toString().split(" ").slice(0,5));
// CREATE ACCOUNT BTN
var create1=document.getElementById("create1");
create1?.addEventListener("click",async ()=>{
// CREATE ACOUNT VAR
var email0=document.getElementById("email0").value;
var password0=document.getElementById("pass0").value;
var name0=document.getElementById("name0").value;
var dob0=document.getElementById("dob").value;
var gender0=document.getElementById("gender").value;
var age0=document.getElementById("age").value;
var country0=document.getElementById("country").value;
var profession0=document.getElementById("profession").value;
// var date=new Date()
// SIGN UP NEW USERS


try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name0,
      email:email0,
    dob:dob0,
    gender:gender0,
    age:age0,
    profession:profession0,
    country:country0,
    day:date.toString().split(" ").slice(0,5)

    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

createUserWithEmailAndPassword(auth, email0, password0)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // console.log(user);
   
    Swal.fire({
        title: `${name0} Your Account Is Created  `,
// text: `You clicked the button!`,
        icon: "success"
      });
      var inp=document.querySelectorAll("input")
      inp.forEach(element => {
          element.value=""
      });
    //   location.reload()
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });


})


// GOOGLE LOGIN 
var googlebtn=document.getElementById("google");
googlebtn?.addEventListener("click",()=>{
    

// Handle the result of the sign-in redirect
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    window.location.href="files/dashboard.html"
    // console.log(window.location.href="log.html");
    // const token = credential.accessToken;
    // The signed-in user info.
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert("wroung cred")
    // ...
  });


})


// LOGIN IN DASBOARD


var login1=document.getElementById("login1");
login1?.addEventListener("click",()=>{

    var email=document.getElementById("email").value;
    var password=document.getElementById("pass").value;

    signInWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      console.log(user);
      
      location.href = "files/dashboard.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Wrong" + errorMessage)
    });

})


var logout = document.getElementById("logout");
logout?.addEventListener("click", () => {
  
    signOut(auth)
    .then(() => {
        console.log("User signed out");
        location.href = "../index.html"; // Redirect to login page
      }).catch((error) => {
        location.href="files/dasboard.html"
        console.error("Sign out error:", error);
      });


});


// FIRESTORE

// document.getElementById("area").innerHTML = "";
var main=document.getElementById("main");

onAuthStateChanged(auth, (user)=>{
if(user){
  // console.log(user.email.split("@")[0]);
}
var postbtn=document.getElementById("postbtn");
postbtn?.addEventListener("click",async()=>{
    var area=document.getElementById("area").value;
// console.log(area);
var date=new Date()

try {
    const docRef =  addDoc(collection(db, "text"), {
   name123:user.email.split("@")[0],
     msg:area,
    day:date.toString().split(" ").slice(0,5)

});
alert("text add in feed")
// location.reload()
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})
//   main.innerHTML+=`
//      <div class="col-12 box2 my-2">
//                 <div class="d-flex flex-row align-items-center justify-content-between col-12">
//                 <h5><b> fasihnasir</b> <span style="font-size: 12px;"> (wed:0:2-34)</span> </h5>
              
//             </div>
//                 <span>my name is fasihnasir</span>

//             </div>
//   `;
var inp=document.querySelectorAll("textarea")
inp.forEach(element => {
    element.value=""
});

})
var showvr=await getDocs(collection(db, "text"))
// console.log(user);

// var nam=user.displayName;

showvr.forEach((element) => {
  
  // console.log(element.name);
  onAuthStateChanged(auth, (user)=>{

    main.innerHTML+=`
   <div class="col-12 box2 my-2">
    <div class="d-flex flex-row align-items-center justify-content-between col-12">
      <h5><b>${element.data().name123}</b> <span style="font-size: 12px;"> (${element.data().day.slice(1)}) </span></h5>
      <div>
        <button data-id="${element.id}" class="ed">edit</button>
        <button data-id="${element.id}" class="de">delete</button>
      </div>
    </div>
    <span>${element.data().msg}</span>
  </div>
    `;
    
    
    //  console.log(element.id);
    
    var dlbtb=document.querySelectorAll(".de");
    var edbtb=document.querySelectorAll(".ed");
    edbtb.forEach(element => {
      element.addEventListener("click",(e)=>{
        // console.log(element.parentElement.parentElement.nextElementSibling.innerHTML);
        const washingtonRef = doc(db, "text", element.getAttribute("data-id"));
        var newmsg=prompt("Enter New Msg",element.parentElement.parentElement.nextElementSibling.innerHTML)
        updateDoc(washingtonRef, {
          name:user.displayName,
          msg:newmsg,
          //    day:date.toString().split(" ").slice(0,5)
        });
        
      })
      
    });
    // console.log(dlbtb);
    dlbtb.forEach(element => {
      element.addEventListener("click",(e)=>{
        // console.log(element.getAttribute("data-id"));
        
        deleteDoc(doc(db, "text",element.getAttribute("data-id")));
        element.parentElement.parentElement.parentElement.remove()
        // console.log( element.parentElement.parentElement.parentElement.remove());
        
      });
      
    })
  })
  })


