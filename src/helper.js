export function obtenerDiferencia(year) {
    return new Date().getFullYear() - year
}
export function obtenerMarca(marca) {

    let incremento;

    if (marca === "americano") {

        incremento = 1.15
        
    } else if (marca === "europeo") {
        incremento = 1.30
    } else {

        incremento = 1.05
       
    };


    return incremento

    }

    export function obtenerPlan(plan) {
        let planes;

        if (plan === "basico") {
            planes = 1.20
        } else {
            planes = 1.5
        }
        return planes
    }