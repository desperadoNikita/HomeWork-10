const user = {
    firstName: "Nikita",
    lastName: "Khaitul",
    age: 15,
    height: 170,
    weight: 64,
    hobby: "programming",
    location: {
        country: "Ukraine",
        city: "Kyiv",
    }


};
function hello (user) {
    const  {firstName, lastName, age, height, weight, hobby, location: {country, city}} = user;
    console.log(`Вітаю ${firstName} ${lastName}, ваш вік ${age}, ваш ріст ${170}, ваша вага ${weight}, ваше хоббі ${hobby}, ваша локація: ${country}, ${city}.`);
}

hello(user);
