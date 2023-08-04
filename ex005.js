const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let pacienteParaAgendar;
let pacienteParaAtender;
let cancelamento = pacientes.indexOf('Ana')
let filaAtualizadaAgendar;
let filaAtualizadaAtender;

function agendarPaciente(pacientes,pacienteParaAgendar) {
    if (pacienteParaAgendar !== undefined) {   
    
        pacientes.push(pacienteParaAgendar)
        filaAtualizadaAgendar = pacientes.join(', ')

        console.log(filaAtualizadaAgendar)
    }
}

function atenderPaciente(pacientes,pacienteParaAtender) {
    if (pacienteParaAtender !== undefined) {
        pacientes.push(pacienteParaAtender)
        pacientes.shift()
        filaAtualizadaAtender = pacientes.join(', ')

        console.log(filaAtualizadaAtender)}
}

function cancelarAtendimento(pacientes, cancelamento) {
    pacientes.splice(cancelamento, 1)
    console.log(pacientes)
    
}

cancelarAtendimento(pacientes, cancelamento)
agendarPaciente(pacientes, pacienteParaAgendar)
atenderPaciente(pacientes, pacienteParaAtender)

