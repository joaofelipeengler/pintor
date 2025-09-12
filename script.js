// Função para mostrar/ocultar campos de dimensões
function toggleDimensions(inputId, containerId) {
    const inputElement = document.getElementById(inputId);
    const containerElement = document.getElementById(containerId);
    
    if (parseInt(inputElement.value) > 0) {
        containerElement.style.display = 'block';
    } else {
        containerElement.style.display = 'none';
    }
}

// Função para calcular a quantidade de tinta necessária
function calcularTinta() {
    // Obter valores dos inputs
    const largura = parseFloat(document.getElementById('largura').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value) || 0;
    const portas = parseInt(document.getElementById('portas').value) || 0;
    const janelas = parseInt(document.getElementById('janelas').value) || 0;
    const demao = parseInt(document.getElementById('demao').value) || 2;
    const rendimento = parseFloat(document.getElementById('rendimento').value) || 10;
    
    // Obter dimensões das portas, se aplicável
    let areaPortas = 0;
    if (portas > 0) {
        const portaLargura = parseFloat(document.getElementById('porta-largura').value) || 0.8;
        const portaAltura = parseFloat(document.getElementById('porta-altura').value) || 2.1;
        areaPortas = portas * portaLargura * portaAltura;
    }
    
    // Obter dimensões das janelas, se aplicável
    let areaJanelas = 0;
    if (janelas > 0) {
        const janelaLargura = parseFloat(document.getElementById('janela-largura').value) || 1.2;
        const janelaAltura = parseFloat(document.getElementById('janela-altura').value) || 1.0;
        areaJanelas = janelas * janelaLargura * janelaAltura;
    }
    
    // Calcular área total da parede
    const areaParede = largura * altura;
    
    // Área total a ser pintada
    const areaTotal = areaParede - areaPortas - areaJanelas;
    
    // Calcular litros de tinta necessários
    const litrosNecessarios = (areaTotal * demao) / rendimento;
    
    // Exibir resultado
    const resultadoDiv = document.getElementById('resultado');
    
    if (areaTotal <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos para largura e altura.";
        resultadoDiv.style.color = "#e74c3c";
    } else {
        resultadoDiv.innerHTML = `
            <p>Área total a ser pintada: <strong>${areaTotal.toFixed(2)} m²</strong></p>
            <p>Tinta necessária: <strong>${litrosNecessarios.toFixed(2)} litros</strong></p>
            <p>Latas de 3.6L: <strong>${Math.ceil(litrosNecessarios / 3.6)}</strong></p>
            <p>Latas de 18L: <strong>${Math.ceil(litrosNecessarios / 18)}</strong></p>
        `;
        resultadoDiv.style.color = "#27ae60";
    }
}

// Adicionar evento de clique ao botão de calcular
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcular-btn').addEventListener('click', calcularTinta);
});