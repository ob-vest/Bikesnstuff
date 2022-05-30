var bookedOption = document.getElementById("selectedBooking")
var serviceDescription = document.querySelector(".serviceDescription")
bookedOption.addEventListener('change', function () {
    console.log(this.value)
    serviceDescription.innerHTML = ""
    const option = getOption(this.value)
    option.descriptions.forEach(addParagraphToDescription)


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

// test = {
//     arr: ["hello", "goodbye"]
// }
// console.log(test.arr[1])

function getOption(optionText) {
    switch (optionText) {
        case ("stortServiceHardtail") || ("stortServiceFullSuspension"):
            return option = {
                title: "Stort Service (Hardtail)",
                descriptions: ["Grundig vask af cykel", "Komplet adskillelse af cykel", "Rengøring/opsmøring af dele", "Opretning af hjul", "Samling samt justering", "Bike Protect fra Muc-Off"]
            }
            break;
        // case ("stortServiceFullSuspension"):
        //     return option = {
        //         title: "Stort Service (Full Suspension)",
        //         descriptions: ["hello", "farewell"]
            // }
    }

}