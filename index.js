function handleSubmit(event) {
   event.preventDefault();
   const userDetails = {
     username: event.target.userName.value,
     email: event.target.email.value,
     phone: event.target.phoneNo.value,
     msg: event.target.msg.value,
   };
   if(!userDetails.username || !userDetails.email || !userDetails.phone || !userDetails.msg){
    alert("Please Fill all Details");
    return;
   }
   localStorage.setItem("user", JSON.stringify(userDetails));

  //  showUserDataOnScreen(userDetails);

  //reset input field

   event.target.userName.value = "";
   event.target.email.value = "";
   event.target.phoneNo.value = "";
   event.target.msg.value = "";

   alert("Your query has been submitted.");
 }
 


 