function diaDeLaSetmana() {
    console.log("La funcion funciona")
    let date = document.getElementById("data") as HTMLInputElement;
    let regExp = new RegExp("[0-9]{2}\/[0-9]{2}\/[0-9]{4}")

    if(regExp.test(date.value)) {
        alert("El format es correcte")
    } else alert("El formato es incorrecto")

    let fecha: string[] = date.value.split("/")
    let day = parseInt(fecha[0])
    let month = parseInt(fecha[1]) -1
    let year = parseInt(fecha[2])

    let dateObject = new Date(year, month, day)

    alert("Dia: " + day + " Mes: " + (month + 1) + " Año: " + year)
    alert(dateObject)

    let weekDay: number = dateObject.getDay()
    alert(weekDay)

    let arrel: string = Math.sqrt(weekDay).toFixed(2);
    alert(arrel)
}