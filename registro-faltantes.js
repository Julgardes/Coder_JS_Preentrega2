
class Articulo{
    constructor(codigo, nombre, proveedor, codProv, cantPedido, imgArt){
        this.codigo = codigo;
        this.nombre = nombre;
        this.proveedor = proveedor;
        this.codProv = codProv;
        this.cantPedido = cantPedido;
        this.imgArt = imgArt;
    }
}

// array de productos dinámico
// Array de productos base
const baseArticulos = [
    {
        codigo: "001"
        nombre: "Bandera Argentina 90x144", 
        proveedor: "Nuevo Milenio", 
        codProv:1211, 
        cantPedido:0, 
        imgArt:"🇦🇷"
    },
    {codigo:"002", nombre:"Bandera Buenos Aires 90x144", proveedor:"Nuevo Milenio", codProv:"4001", cantPedido: 0, imgArt:"🏳️"},
    {codigo:"003", nombre:"Bandas elasticas x100grs", proveedor:"Ezco", codProv:"608100", cantPedido: 0, imgArt:"♾️"},
    {codigo:"004", nombre:"Crayones x12 colores", proveedor:"Ezco", codProv:"403900", cantPedido: 0, imgArt:"🖍️"},
    {codigo:"005", nombre:"Lapiz corrector GTS 7ml", proveedor:"Ezco", codProv:"306008", cantPedido: 0, imgArt:"🖊️"},
    {codigo:"006", nombre:"Cuaderno Rivadavia TF 48 hojas rayado", proveedor:"Bari", codProv:"122006", cantPedido: 0, imgArt:"📙"},
    {codigo:"007", nombre:"Resma Autor A4 x100hs", proveedor:"Bari", codProv:"125803", cantPedido: 0, imgArt:"📄"},
    {codigo:"008", nombre:"Bolígrafo Bic opaco grueso", proveedor:"Bari", codProv:"120503", cantPedido: 0, imgArt:"✍️"},
    {codigo:"009", nombre:"Clips Sifap Nro 3 x100", proveedor:"Bari", codProv:"166110", cantPedido: 0, imgArt:"📎"},
    {codigo:"010", nombre:"Señaladores neon 12x44 x5colores", proveedor:"Ezco", codProv:"980602", cantPedido: 0, imgArt:"🪀"},
    
]

const mostrarArticulos = (arrayArticulos)=>{
    const contenedorArticulos = document.getElementById("contenedorArticulos")
    contenedorArticulos.innerHTML = ""
    arrayArticulos.forEach(({codigo, nombre, proveedor, codProv, cantPedido, imgArt}) => {
        const artCard = document.createElement("div") 
        artCard.classList.add("col-xs") 
        artCard.style = "width: 270px; height: 550px; margin: 3px"
        artCard.cod = codigo
        artCard.innerHTML = 
        <div class="card_articulo">
                    <h5 class="card_nombre">${nombre}</h5>
                    <h6>${proveedor}</h6>
                    <p class="card_img">${imgArt}</p>
                    <span>Cantidad pedida: ${cantPedido}</span>
                    <form codigo="form${codigo}">
                        <label for="contador${codigo}">Cantidad</label>
                        <input type="number" placeholder="0" codigo="contador${codigo}">
                        <button class="btn btn-primary" id="botonProd${codigo}">Agregar</button>
                    </form>
        </div>            
    }
)
