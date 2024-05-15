let sla = [prompt("Digite um nome para armazená-lo:")]

let z = prompt("Quer armazenar outro nome?(sim/não)")

if (z == "sim") {
    while (z == "sim") {
        let y = sla.push(prompt("Digite um nome para armazená-lo:"))
        z = prompt("Quer armazenar outro nome?(sim/não)")
    }
}
alert(sla)