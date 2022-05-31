var bookedOption = document.getElementById("selectedBooking")
var serviceDescription = document.querySelector(".serviceDescription")



updateDescription(bookedOption.value)


bookedOption.addEventListener('change', function () {
    console.log(this.value)
    serviceDescription.innerHTML = ""

    updateDescription(this.value)


})

function updateDescription(optionValue) {
    const option = getOption(optionValue)
    option.descriptions.forEach(addParagraphToDescription)
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
                descriptions: ["Grundig vask af cykel", "Gennemgang af cykel", "Opspænding af alle bolte", "Opretning af hjul", "Justering af gear", "Justering af bremser", "Smørelse af bevægelige dele"]
            }
            break
        case ("stortServiceHardtail"):
            return option = {
                title: "Stort Service (Hardtail)",
                descriptions: ["Grundig vask af cykel", "Komplet adskillelse af cykel", "Rengøring/opsmøring af dele", "Opretning af hjul", "Samling samt justering", "Bike Protect fra Muc-Off"]
            }
            break
        case ("stortServiceFullSuspension"):
            return option = {
                title: "Stort Service (Full Suspension)",
                descriptions: ["Grundig vask af cykel", "Komplet adskillelse af cykel", "Rengøring/opsmøring af dele", "Opretning af hjul", "Samling samt justering", "Bike Protect fra Muc-Off"]
            }
            break
            case ("kompletServiceHardtail"):
                return option = {
                    title: "Stort Service (Full Suspension)",
                    descriptions: ["Stort Service Plus", "Air Can Service", "Lower Leg Service", "Udskiftning af gearkabler", "Opsætning af forgaffel", "Opsætning af bagdæmper"]
                }
                break
            case ("kompletServiceFullSuspension"):
                return option = {
                    title: "Stort Service (Full Suspension)",
                    descriptions: ["Stort Service Plus", "Air Can Service", "Lower Leg Service", "Udskiftning af gearkabler", "Opsætning af forgaffel", "Opsætning af bagdæmper"]
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
      modal.style.display = "none"}, 2500)
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
