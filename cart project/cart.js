function  showdiv(){
    document.getElementById("myDiv").style.display = "";
}


// var elements = document.getElementsByClassName("productcart");

// function listView() {
//     for (i = 0; i < elements.length; i++) {
//       elements[i].style.width = "100%";
//     }
//   }

// function gridView() {
//     for (i = 0; i < elements.length; i++) {
//       elements[i].style.width = "30%";
//     }
//   }
  
//   var container = document.getElementById("btnContainer");
//   var btns = container.getElementsByClassName("btn");
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }


var elements = document.querySelectorAll(".productcart");
   function listView() {
      Array.from(elements).forEach(item => {
         item.style.width = "100%";
      });
      Array.from(document.querySelectorAll(".btn")).forEach((item, index) => {
         if (index === 0) item.classList.add("active");
         else item.classList.remove("active");
      });
   }
   function gridView() {
      Array.from(elements).forEach(item => {
         item.style.width = "50%";
      });
      Array.from(document.querySelectorAll(".btn")).forEach((item, index) => {
         if (index === 1) item.classList.add("active");
         else item.classList.remove("active");
      });
   }

   // for viewcart button
   // function myFunction() {
   //    var popup = document.getElementById("myPopup");
   //    popup.classList.toggle("show");
   //  }


    // popup card
    function myFunction() {
      document.getElementById('popup').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
    }
    
    function hidePopup() {
      document.getElementById('popup').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
    }


   //  shopping cart : 

   var priceId=document.getElementById('price_');
   currentPrice = parseInt(priceId.innerText);

   // incremant function
   function incrementValue() {
      console.log(priceId.innerText);
      var inputElement = document.getElementById("quantity");
      var currentValue = parseInt(inputElement.value);
      inputElement.value = currentValue + 1;
      priceId.innerText = currentPrice*inputElement.value;
    }

    // decrement function
    function decrementValue() {
      var inputElement = document.getElementById("quantity");
      var currentValue = parseInt(inputElement.value);
      if (currentValue > 0) {
        inputElement.value = currentValue - 1;
      }
      priceId.innerText = currentPrice-(currentPrice*inputElement.value);
    }


    // remove item from list
    function remove() {
      var shoppingCartId = document.getElementById("input-group");
      shoppingCartId.style.display="none";
    }

    // display OR view cart
    function view(){
      var cartItemId = document.getElementById('cartitem');
      cartItemId.style.display="none";
      cartItemId.style.height="1px";

      var shoppingCartId = document.getElementById('shopping_cart');
      shoppingCartId.style.display="block";

    }

    // add to cart button functionality
      var item_image_Id = document.getElementById('item_image');
      var itemNameId = document.getElementById('itemName');
      var itemColorId = document.getElementById('color');
      var itemQtyId = document.getElementById('quantity');
      var itemPriceId = document.getElementById('itemPrice');
    function addItem(){
       
    }