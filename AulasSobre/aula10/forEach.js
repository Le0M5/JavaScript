let emails = ["asdniosd1@gmail.combr", "asdniosd2@gmail.combr", "asdniosd3@gmail.combr", "asdniosd4@gmail.combr", "asdniosd5@gmail.combr"]

for (let i = 0; i < emails.length; i++) {
    console.log(`Email enviado para ${emails[i]}`);
}

// valor do array, index do array(aonde ta posicionado), array completo

console.log("----------------------------------------------------");

emails.forEach((emails) => {
    console.log(`Email enviado para ${emails}`)
})

console.log("----------------------------------------------------");

emails.forEach((emails, index, chamada) => {
    console.log(`Email enviado para ${emails}`)
    console.log(`Você é o número: ${index} da lista`)
    console.log(`Lista de chamada: ${chamada.join(" || ")}`)
    console.log("----------------------------------------------------");
})