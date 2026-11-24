let names = ["Burger", "Fries", "Juice", "Sandwich", "Donut"];
    let price = [50, 30, 20, 40, 54];
    let discounts = [2.5, 0, 0.4, 4, 1.25];

    let total = 0;
    let totalDiscount = 0;

    function Pagkain(index) {
      let itemName = names[index];
      let itemPrice = price[index];
      let off = discounts[index];

      total = total + itemPrice;
      totalDiscount = totalDiscount + off;
      let finalPrice = total - totalDiscount;

      document.getElementById("items").innerHTML += itemName + " - " + itemPrice + "<br>";
      document.getElementById("total").innerHTML = total;
      document.getElementById("discount").innerHTML = totalDiscount;
      document.getElementById("final").innerHTML = finalPrice;

      if (finalPrice >= 100) {
        document.getElementById("suii").innerHTML = "you spent more than 100!";
      } else {
        document.getElementById("suii").innerHTML = "you should spend more!";
      }
    }

    function clearAll() {
      total = 0;
      totalDiscount = 0;
      document.getElementById("items").innerHTML = "";
      document.getElementById("total").innerHTML = 0;
      document.getElementById("discount").innerHTML = 0;
      document.getElementById("final").innerHTML = 0;
      document.getElementById("suii").innerHTML = "";
    }