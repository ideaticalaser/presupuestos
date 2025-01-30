// Configura tus tarifas aquí
const TARIFA_POR_MINUTO = 1.5; // $1.5 por minuto de máquina
const COSTO_POR_CM2 = 0.02;    // $0.02 por cm² de material

function calcular() {
    // Obtener valores
    const tiempo = parseFloat(document.getElementById('tiempo').value) || 0;
    const superficie = parseFloat(document.getElementById('superficie').value) || 0;
    const adicional = parseFloat(document.getElementById('adicional').value) || 0;

    // Calcular
    const costoTotal = 
        (tiempo * TARIFA_POR_MINUTO) + 
        (superficie * COSTO_POR_CM2) + 
        adicional;

    // Mostrar resultado
    document.getElementById('resultado').textContent = 
        `Total: $${costoTotal.toFixed(2)}`;
}
