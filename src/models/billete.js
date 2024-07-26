class Billete {
    
    constructor(moneda, imagen){
        this.denominacion = '$' + moneda
        this.moneda = moneda;
        this.imagen = imagen;
        this.subtotal = 0;
    }

   calcularSubTotal(cantidadBilletes){
        this.actualizarSubtotal(cantidadBilletes * this.moneda);
        return this.subtotal;
   }

   obtenerDenominacion(){
    return this.denominacion;
   }

   obtenerImagen(){
    return this.imagen
   }

   obtenerMoneda(){
    return this.moneda
   }

   actualizarSubtotal(valor) {
    this.subtotal = valor;
   }

   obtenerSubTotal(){
    return this.subtotal;
   }
}

export default Billete