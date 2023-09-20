// Cart

// Bookings

// Search button: <button type="button" id="btn-search" class="element-travel-search">

console.log("---");

document.querySelector("#btn-search").addEventListener("click", function () {
  fetch("http://localhost:3000/trips")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("---");
      if (data) {
        let htmlData = "";
        data.forEach((item) => {
          htmlData += `
            <div class="element-travel-book">
              <div id="voyage">${item.departure} > ${item.arrival}</div>
              <div id="heure">${item.date}</div>
              <div id="prix">${item.price}</div>
              <button type="button" class="btn-book">Book</button>
            </div>
        `;
        });
        document.querySelector("#display-search").innerHTML = htmlData;
      } else {
        document.querySelector("#display-search").innerHTML = `
                <img class="picto" src="images/notfound.png" />
                <hr class="ligne-verte" />
                <p class="quote-train">No trip found.</p> `;
      }
    });
});

// --> Du coup, il faut faire un addEventListener à btn-book
