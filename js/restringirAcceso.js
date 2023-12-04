var contraseñaIngre = '';
var contraseñaOriginal = codificar('edison');
while (true) {
    contraseñaIngre = prompt("ingresa contraseña para ver el contenido !!!");
    var contraseñaIngressada = codificar(contraseñaIngre);

    if (contraseñaOriginal == contraseñaIngressada) {
        break;
    } else {
        alert("CONTRASEÑA INCORRECTA !!!")
    }
}

function codificar(contraseña) {
    var codificado = '';
    for (var i = 0; i < contraseña.length; i++) {
        var valor = contraseña.charCodeAt(i) - 96;
        codificado += valor.toString();
    }
    return codificado;
}