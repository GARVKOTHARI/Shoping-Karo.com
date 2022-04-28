var firebaseConfig = {
    apiKey: "AIzaSyC6UCyc6Meb_p5kFPp7aEeHc8eOY9tNbUg",
    authDomain: "shoping-karo-com.firebaseapp.com",
    projectId: "shoping-karo-com",
    storageBucket: "shoping-karo-com.appspot.com",
    messagingSenderId: "305338467277",
    appId: "1:305338467277:web:ecb938fe5fa2e8d6fe3a84"
  };


  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();



  const submitBtn = document.querySelector('#submit');


  let userName = document.querySelector('#userFullName');
  let userNumber = document.querySelector('#userNumber');
  let userAddress = document.querySelector('#userAddress');
  let userSize = document.querySelector('#userSize');
  let userQuantity = document.querySelector('#userQuantity');

  const db = firestore.collection("Ordering Data");

  submitBtn.addEventListener("click" , function() {
      let userNameInput = userName.value;
      let userNumberInput = userNumber.value;
      let userAddressInput = userAddress.value;
      let userSizeInput = userSize.value;
      let userQuantityInput = userQuantity.value;

      db.doc().set ({
          name : userNameInput,
          number : userNumberInput,
          address : userAddressInput,
          size : userSizeInput,
          quantity : userQuantityInput

      })

      .then(function() {
          console.log("Data Saved");
      })

      .catch(function(error) {
          console.log(error);
      });
  });


  function pay() {
      window.location = "https://payu.in/invoice/F532A936B85F3EA497B69B39E3364E987E7188F585220534625FAFB9C5BA7A91/53039F01717FA0ECF74E5A31030F9E00"
  }