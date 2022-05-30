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