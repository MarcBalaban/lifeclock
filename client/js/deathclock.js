function checkAge() {

    var birthday = new Date(document.getElementById("userBirthday").value);
    var deathDay =  birthday.getDate() + 365 * 80;
    var deathDayOutput = new Date(birthday)


    deathDayOutput.setDate(new Date().getDate() + deathDay);
    deathDayOutput = deathDayOutput.toDateString();

    document.querySelector(".demo").innerHTML = '<div>you will die on ' + deathDayOutput + '</div>';
}
