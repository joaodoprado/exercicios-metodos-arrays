const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let agendar = [];
let atender = [];
let veioAgendar = false


    
   


function organizarFila(pacientes, veioAgendar) {
    for (let paciente of pacientes) {
        if (veioAgendar == true) {
            
            agendar.push(paciente);
            agendar = agendar.join(", ")
    
        } else if (atender.length > 4) {
    
            atender.shift()
            atender.push(paciente)
    
        } else {
            
            atender.push(paciente)
    
        }
}
atender = atender.join(", ")
agendar = agendar.join(", ")
console.log(atender)
console.log(agendar)
}


organizarFila(pacientes, veioAgendar)