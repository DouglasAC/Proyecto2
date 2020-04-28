class ReturnAlto {
    constructor(valor, fila, columna) {
        this.valor = valor;
        this.fila = fila;
        this.columna = columna;
    }
    analizar(tabla) {
        if (this.valor == null) {
            if (tabla.tipoFuncion[0] != "void") {
                let err = new ErrorAlto("Semantico", "El retorno de la funcion no es void, el return debe estar acompañado", this.fila, this.columna);
                tabla.errores.push(err);
                return err;
            }
        } else {
            let tipoVal = this.valor.analizar(tabla);
            if (tipoVal instanceof ErrorAlto) {
                return tipoVal;
            }
            if (tabla.tipoFuncion[0] == tipoVal[0]) {
                // otras comparacione como arreglo y struct
            }
            else {
                //falta arreglos struct
                if (!((tabla.tipoFuncion[0] == "int" && val[0] == "char") || (tabla.tipoFuncion[0] == "double" && val[0] == "int") || (tabla.tipoFuncion[0] == "double" && val[0] == "char"))) {
                    let err = new ErrorAlto("Semantico", "El la funcion es de tipo " + tabla.tipoFuncion + " el retorno es de tipo " + val, this.fila, this.columna);
                    tabla.errores.push(err);
                    return err;
                }
            }
        }
    }
    get3D(tabla) {
        let codigo = "# Inicion Return fila " + this.fila + " columna " + this.columna+"\n";

        if (this.valor != null) {
            codigo += this.valor.get3D(tabla);
            let tempR = tabla.getTemporalActual();
            tabla.quitarNoUsados(tempR);
            let temp = tabla.getTemporal();
            codigo += temp + " = p + 0;\n";
            codigo += "Stack[" + temp + "] = " + tempR + ";\n";

        } else {
            let temp = tabla.getTemporal();
            codigo += temp + " = p + 0;\n";
            codigo += "Stack[" + temp + "] = -1;\n";
        }
        codigo += "# Fin Return\n"
        return codigo;
    }
}
exports.ReturnAlto = ReturnAlto;