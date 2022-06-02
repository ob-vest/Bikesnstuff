var bookedOption = document.getElementById("selectedBooking")
var serviceDescription = document.querySelector(".serviceDescription")
var priceAmount = document.querySelector(".priceAmount")


initialDescription()


bookedOption.addEventListener('change', function () {
    console.log(this.value)
    serviceDescription.innerHTML = ""

    updateDescription(this.value)

})
function initialDescription() {
    let urlString = document.URL
    console.log(window.location.href)
    if (urlString.includes("#book1")) {
        document.getElementById("selectedBooking").value = "lilleService"
        // bookedOption = "stortServiceHardtail"
        // updateDescription("stortServiceHardtail")
        updateDescription(bookedOption.value)
    }
    else if (urlString.includes("#book2")) {
        document.getElementById("selectedBooking").value = "stortServiceHardtail"
        // bookedOption = "stortServiceHardtail"
        // updateDescription("stortServiceHardtail")
        updateDescription(bookedOption.value)
    }
    else if (urlString.includes("#book3")) {
        document.getElementById("selectedBooking").value = "kompletServiceHardtail"
        // bookedOption = "stortServiceHardtail"
        // updateDescription("stortServiceHardtail")
        updateDescription(bookedOption.value)
    }
    else { 
        updateDescription(bookedOption.value)
    }

}
function updateDescription(optionValue) {
    const option = getOption(optionValue)
    option.descriptions.forEach(addParagraphToDescription)
    priceAmount.innerHTML = option.price
}

function addParagraphToDescription(text) {
    console.log(serviceDescription)
    console.log(text)
    var paragraph = document.createElement("p")
    var textNode = document.createTextNode(text)
    console.log(textNode)
    paragraph.appendChild(textNode)
    serviceDescription.appendChild(paragraph)

}

function getOption(optionText) {
    switch (optionText) {
        case ("lilleService"):
            return option = {
                title: "Stort Service (Hardtail)",
                descriptions: ["Grundig vask af cykel", "Gennemgang af cykel", "Opspænding af alle bolte", "Opretning af hjul", "Justering af gear", "Justering af bremser", "Smørelse af bevægelige dele"],
                price: "499,-"
            }
            break
        case ("stortServiceHardtail"):
            return option = {
                title: "Stort Service (Hardtail)",
                descriptions: ["Grundig vask af cykel", "Komplet adskillelse af cykel", "Rengøring/opsmøring af dele", "Opretning af hjul", "Samling samt justering", "Bike Protect fra Muc-Off"],
                price: "999,-"
            }
            break
        case ("stortServiceFullSuspension"):
            return option = {
                title: "Stort Service (Full Suspension)",
                descriptions: ["Grundig vask af cykel", "Komplet adskillelse af cykel", "Rengøring/opsmøring af dele", "Opretning af hjul", "Samling samt justering", "Bike Protect fra Muc-Off"],
                price: "1499,-"
            }
            break
            case ("kompletServiceHardtail"):
                return option = {
                    title: "Stort Service (Full Suspension)",
                    descriptions: ["Stort Service Plus", "Air Can Service", "Lower Leg Service", "Udskiftning af gearkabler", "Opsætning af forgaffel", "Opsætning af bagdæmper"],
                    price: "1599,-"
                }
                break
            case ("kompletServiceFullSuspension"):
                return option = {
                    title: "Stort Service (Full Suspension)",
                    descriptions: ["Stort Service Plus", "Air Can Service", "Lower Leg Service", "Udskiftning af gearkabler", "Opsætning af forgaffel", "Opsætning af bagdæmper"],
                    price: "2499,-"
                }
                break
     
    }

}

/* Taken from https://www.w3schools.com/howto/howto_css_modals.asp */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(function() {
      modal.style.display = "none"}, 2000)
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
