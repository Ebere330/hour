function getGreeting(hour) {
    if (hour >= 7 && hour < 12) {
        return "Good Morning";
    }else if (hour >= 12 && hour < 16) {
        return "Good Afternoon";
    }else if (hour >= 16 && hour < 20) {
        return "Good Evening";
    } else {
        return "Good Night";
    }
}

// let currentHour = 9;
let greeting = getGreeting(10);
console.log(greeting);
