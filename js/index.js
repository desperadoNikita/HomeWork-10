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
    console.log("Вітаю Nikita Khaitul, ваш вік 15, ваш ріст 170, ваша вага 64, ваше хоббі programming, ваша локація: Ukraine, Kyiv.");
}

hello(user);