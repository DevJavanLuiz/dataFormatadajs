const date = new Date ();
const dateCurrent = date;
const dateDay = formattedDayWeek(date.getDay());
const dateDate = date.getDate();
const dateMonth = formattedMonth(date.getMonth()+1);
const dateYear = date.getFullYear();
const dateHours = formattedHours(date.getHours());
const dateMinutes = formattedHours(date.getMinutes());

const result = document.querySelector('.result');
result.innerHTML = formattedDateFull();

function formattedDayWeek (dayWeek){
let dateText;

if (dayWeek === 0){
    dateText = 'Domingo'
}
else if (dayWeek === 1){
    dateText = 'Segunda-feira'
}
else if (dayWeek === 2){
    dateText = 'Terça-feira'
}
else if (dayWeek === 3){
    dateText = 'Quarta-feira'
}
else if (dayWeek === 4){
    dateText = 'Quinta-feira'
}
else if (dayWeek === 5){
    dateText = 'Sexta-feira'
}
else if (dayWeek === 6){
    dateText = 'Sabádo'
}
else{
    dateText = 'Erro(989)'
}

return dateText;
}

function formattedMonth (month) {
    let dateText;
    
    if (month === 1){
    dateText = 'Janeiro'
}
else if (month === 2){
dateText = 'Fevereiro'
}
else if (month === 3){
dateText = 'Março'
}
else if (month === 4){
dateText = 'Abril'
}
else if (month === 5){
dateText = 'Maio'
}
else if (month === 6){
dateText = 'Junho'
}
else if (month === 7){
dateText = 'Julho'
}
else if (month === 8){
    dateText = 'Agosto'
}
else if (month === 9){
    dateText = 'Setembro'
}
else if (month === 10){
    dateText = 'Outrubro'
}
else if (month === 11){
    dateText = 'Novembro'
}
else if (month === 12){
    dateText = 'Dezembro'
}
else{
    dateText = 'Erro(989)'
}

return dateText;
}


function formattedDateFull (){

const formatted = `${dateDay}, ${dateDate} de ${dateMonth} de ${dateYear} às ${dateHours}:${dateMinutes}` ;

return formatted

}

console.log(formattedDateFull())

function formattedHours (num){
    if (num < 10){
        return `0${num}`
    }
    else{
        return `${num}`
    }
}