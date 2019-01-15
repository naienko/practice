// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const doc = {
    name: "Doctor Isadora Turbokitten",
    species: "cat",
    age: 7,
    nicknames: ["Doc", "Isadorable Doc", "Doclet", "Docling"],
    meow: function () {
        window.alert("*mouth opens wide* squeak");
    },
    color: "calico"
}

////

// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

//notes: order of variable definitions MATTERS (also stop skipping closing shit in your code it's annoying)

const restaurant = {
    name: "Bob's Burgers",
    // orders: [chickenComboMeal, cheeseburgerMeal, superBurgerMeal, hungryManCombo],
    // placeOrder: function (meal) {
    //     for (let i = 0; i < this.orders.length; i++) {
    //         const element = this.orders[i];
    //         if (element === meal) {
    //             console.log(this.orders[i])
    //         }
    //     }
    // },
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    getAllOrders: function () {
        return this.orders;
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "S"
}

const cheeseburgerMeal = {
    sandwichType: "single cheeseburger",
    fries: false,
    drinkSize: "S"
}

const superBurgerMeal = {
    sandwichType: "double loaded hamburger",
    fries: true,
    drinkSize: "M"
}

const hungryManCombo = {
    sandwichType: "triple loaded cheeseburger",
    fries: true,
    drinkSize: "L"
}

// Place an order
restaurant.placeOrder(hungryManCombo);

// Invoke the function to return the list of all orders
const AllOrders = restaurant.getAllOrders();
console.log(AllOrders);

// Output all orders to the console using console.table()
console.table(restaurant.orders)

////

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district (you can use yours here)
// Her platform statements for the following issues.
//      Taxes
//      Jobs
//      Infrastructure
//      Health care
//      Crime and enforcement
// URL for donation form
// Calendar of events
// Volunteer information
//      Name
//      Address
//      Email
//      Phone number
//      Availability
//      What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
// Biography
// Image gallery
//      Head shot
//      Picture of family
//      Picture of constituents
// Mission statement
// URL for registering to vote

const elizabethSanger = {
    district: "51st TN",
    platform: {
        taxes: "lower them for the poor",
        jobs: "we need more, stop people working two or three jobs",
        infrastructure: "more money for schools",
        healthcare: "socialized",
        crime: "reduce recidivism by community work"
    },
    donationURL: "http://www.elizabethsanger.org/donations/",
    calendar: [
        {
            date: "01/21/2019",
            location: "MTAC",
            event: "fundraiser"
        },
        {
            date: "01/26/2019",
            location: "MTSU",
            event: "speech"
        },
        {
            date: "01/31/2019",
            location: "Bridgestone Arena",
            event: "fundraiser"
        },
    ],
    volunteers: [
        {
            name: "Sandra",
            address: "5704 Bebird Dr Nashville TN",
            email: "sandraohhhh@gmail.com",
            phoneNumber: "615-345-2289",
            availability: ["MondayMorning", "TuesdayMorning", "ThursdayMorning", "FridayMorning"],
            activities: {
                phone: false,
                polling: true,
                doorToDoor: true,
                letters: true
            }
        },
    ],
    biography: "lipsum here, so much lipsum, this is a huge value, but it's all in quotes so yay",
    images: [
        {
            type: "headshot",
            URL: "url goes here"
        },
        {
            type: "family",
            URL: "url goes here"
        },
        {
            type: "constituents",
            URL: "url goes here"
        }
    ],
    mission: "I'm not a politician, i'm making shit up welcome to the uss make shit up",
    voteRegistrationURL: "url goes here too"
}

console.table(elizabethSanger);

function changePlatform (topic, newPlatformStatement) {
    Object.defineProperty(elizabethSanger.platform, `${topic}`, {value: `${newPlatformStatement}`});
}
console.table(elizabethSanger.platform);
changePlatform("mentalHealth", "put money into research");
console.table(elizabethSanger.platform);

