//funciones nuevas push sirve para subir algo a una cadena , pop elimina el ultimo elemento de un array
class articulo {
    constructor(tabla, llave) 
    {
        this._articulo = 0;
        this._tabla = tabla;
        this._llave = llave;
        this._contador = 0;
        
    }
    agregar(ubicacion, nombre, precio, cantidad, descripcion, llave, siguiente = undefined) 
    {   
        if(this._articulo < 20)
            { 
                let aux = 0;
                if (ubicacion === '' || ubicacion === (this._contador + 1).toString()) 
                {
                    this._llave = llave;
                    aux = this._articulo;
                    if(this._contador === 0)
                    {
                        this._articulo = new producto(this._llave, nombre, precio, cantidad, descripcion);
                    }
                    while(aux._siguiente != undefined)
                    {
                        aux = aux._siguiente;
                    }
                    aux._siguiente = new producto(this._llave, nombre, precio, cantidad, descripcion);
                    this._contador++;
                    this._llave++;
                    alert('articulo agregado');
                } 
                else if (Number(ubicacion) > 0 && Number(ubicacion) < this._contador) 
                {
                    aux = this._articulo;
                    let auxc = 0;
                    while(llave > auxc)
                    {
                        aux = aux._siguiente;
                        auxc++;
                    }
                    aux.siguiente = aux;
                    aux = new producto(this._llave, nombre, precio, cantidad, descripcion, aux.siguiente);
                    this._llave++;
                    alert('articulo agregado correctamente');
                } 
                else
                {
                    alert('Posicion no válida');
                }
                this.impresion();
            }
        else
        {
            alert('inventario lleno');
        }
    }
    buscar(codigo) 
    {
        codigo = Number(codigo);
        let revisor = -1;
        let aux = this._articulo;
            if (this._articulo._codigo === codigo) 
                {
                    buscador = this._articulo;
                    revisor = 1;
                    alert('Articulo encontrado. ');
                }
            else
                {
                    while(aux._codigo != codigo)
                    {
                        aux = aux._siguiente;
                    }
                    if(aux._codigo === codigo)
                    {
                        buscador = aux;
                        revisor = 1;
                        alert('Articulo encontrado. ');
                    }
                    else
                    {
                        alert('Articulo no encontrado. ');
                    }
                }
            return buscador;
    }
    eliminar(codigo) 
    {
        codigo = Number(codigo);
        if (this.revision(codigo) === 1) 
        {
            let aux = this._articulo;
            if(aux._codigo === codigo)
            {
                this._articulo = aux._siguiente;
            }
            else
            {
                while(aux._siguiente != undefined)
                {
                    if(aux.siguiente._codigo === codigo)
                        {
                            aux = aux._siguiente;
                        }
                }
            }
            alert('Se ha eliminado el articulo correctamente');
        } 
        else 
        {
            alert('El código ingresado no existe, por favor verifique de nuevo');
        }
        this.impresion();
    }
    revision(codigo) {
        codigo = Number(codigo);
        let revisor = -1;
        let aux = this._articulo;
            if (this._articulo._codigo === codigo) 
                {
                    revisor = 1;
                }
            else
                {
                    while(aux._codigo != codigo)
                    {
                        aux = aux._siguiente;
                    }
                    if(aux._codigo === codigo)
                    {
                        revisor = 1;
                    }
                }
            return revisor;
    }
    impresion() {
        this._tabla.innerHTML = '';
        let etiquetaP = [];
        this.ordenado();
        for (let i = 0; i < this._contador; i++) 
        {
            etiquetaP[i] = document.createElement('p');
        }
        for (let i = 0; i < this._contador; i++) 
        {
            etiquetaP[i].innerHTML = this._articulo[i].toString();
            this._tabla.appendChild(etiquetaP[i]);
        }
        While(aux._siguiente)
{
String= (aux + aux.siguiente + string);
Aux = aux.siguiente;
}
    }
    ordenado()
    {
        let auxiliar = [];
        for (let i = 0; i < this._contador; i++) 
        {
            for (let j = 0; j < this._contador; j++) 
                {
                    if(this._articulo[i]._codigo < this._articulo[j]._codigo)
                    {
                        auxiliar = this._articulo[i]; 
                        this._articulo[i] = this._articulo[j];
                        this._articulo[j] = auxiliar;
                    }
                }
        }
    }
    get articulo() 
    {
        return this._articulo;
    }
    get llave() 
    {
        return this._llave;
    }
}
//impreciones
class producto{
    constructor(codigo, nombre, precio, cantidad, descripcion, siguiente = undefined)
    {
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
        this._siguiente;
    }
    get codigo()
    {
        return this._codigo;
    }
    toString()
    {
        return 'Código: ' + this._codigo + ' Nombre: ' + this._nombre + ' Precio: $' + this._precio + ' Cantidad: ' + this._cantidad + ' Descripción: ' + this._descripcion ;
    }
}
//botones
var almacen = new articulo(document.querySelector('#tablaArticulos'), Number(document.querySelector('#codigo').value));
document.querySelector('#agregar').addEventListener('click', () => {
    let llave = Number(document.querySelector('#codigo').value);
    let ubicacion = document.querySelector('#ubicacion').value;
    let nombre = document.querySelector('#nombre').value;
    let precio = document.querySelector('#precio').value;
    let cantidad = document.querySelector('#cantidad').value;
    let descripcion = document.querySelector('#descripcion').value;

    almacen.agregar(ubicacion, nombre, precio, cantidad, descripcion, llave);
    document.querySelector('#codigo').value = almacen.llave;
});
document.querySelector('#buscar').addEventListener('click', () => {
    let buscarArticulo = almacen.buscar(document.querySelector('#buscarCodigo').value);
    document.querySelector('#tablaBuscar').innerHTML = buscarArticulo;
});
document.querySelector('#eliminar').addEventListener('click', () => {
    almacen.eliminar(document.querySelector('#eliminarCodigo').value);
    document.querySelector('#codigo').value = almacen.llave;
});