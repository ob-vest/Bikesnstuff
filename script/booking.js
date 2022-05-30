var bookedOption = document.getElementById("selectedBooking")
var serviceDescription = document.querySelector(".serviceDescription")
bookedOption.addEventListener('change', function() {
   console.log(this.value)
   serviceDescription.innerHTML = ""
   if (this.value == "stortServiceHardtail") {
    //    const option = {
    //        title: "Stort Service (Hardtail)",
    //        descriptions: ["Grundig vask af cykel", "Komplet adskillelse af cykel", "Rengøring/opsmøring af dele", "Opretning af hjul", "Samling samt justering", "Bike Protect fra Muc-Off"]
    //    }
      const descriptions = ["Grundig vask af cykel", "Komplet adskillelse af cykel", "Rengøring/opsmøring af dele", "Opretning af hjul", "Samling samt justering", "Bike Protect fra Muc-Off"]
      descriptions.forEach(addParagraphToDescription)
   }

})

function addParagraphToDescription(text) {
    console.log(serviceDescription)
    console.log(text)
    var paragraph = document.createElement("p")
    var textNode = document.createTextNode(text)
    console.log(textNode)
    paragraph.appendChild(textNode)

    serviceDescription.appendChild(paragraph)
    // serviceDescription.appen
}