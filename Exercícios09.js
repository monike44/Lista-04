function saudarUsuario(nome, idioma = "pt") {
    switch (idioma) {
        case "en":
            return `Hello, ${nome}!`;
        case "es":
            return `¡Hola, ${nome}!`;
        case "pt":
        default:
            return `Olá, ${nome}!`;
    }
}

console.log(saudarUsuario("paula", "es"));

console.log(saudarUsuario("lay"));