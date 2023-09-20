// Cart

// Bookings

// Search button: <button type="button" id="btn-search" class="element-travel-search">

document.querySelector("#btn-search").addEventListener("click", function () {
  fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        let htmlData = "";
        data.forEach((item) => {
          htmlData += `
        <div class="element-travel-book">
              <div id="voyage">${departure} > ${arrival}</div>
              <div id="heure">${date}</div>
              <div id="prix">${price}</div>
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
