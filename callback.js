function greeting(greetingHandler, name) {
    greetingHandler(name);
}
function greetingHandler(name) {
    console.log('Good Morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
function greetNight(name) {
    console.log('Good Night', name);
}
greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Rakibul Hassan');
greeting(greetNight, 'Hussain Muhammad Alif');