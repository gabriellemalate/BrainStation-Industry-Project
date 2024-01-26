import lingoImage from '../assets/images/cruise_lingo.png';
import packImage from '../assets/images/what_pack.png';
import layoutImage from '../assets/images/ship_layout.png';
import activitiesImage from '../assets/images/activities.png';
import foodImage from '../assets/images/food.png';
import amenitiesImage from '../assets/images/amenities.png';

const modals = [
    {name: "Cruise Lingo 101", 
    img: lingoImage, 
    details:[
        {word: "Muster drill:", def: "Mandatory safety drill before sailing, showing you your emergency station."},
        {word: "Sea sickness:", def: "Nausea and dizziness caused by ship movement."},
        {word: "Formal night:", def: "Night with a dress code for the main dining room and some shows."},
        {word: "Tender:", def: "Small boat used to ferry passengers between cruise ship and port when docking is impossible."},
        {word: "Pier runner:", def: "Passenger rushing back to the ship just before departure. Don't be one!"}
    ]},
    {name: "What do I pack?",
    img:packImage,
    details:[
        {word: "Passport:", def: "Even if your cruise doesn't technically require a passport, it's always a good idea to bring one in case of emergencies."},
        {word: "Pack light and bring versatile clothing that can easily be mixed and matched.", def: ""},
        {word: "Don't forget to pack for both formal and casual nights.", def: ""},
        {word: "Be sure to pack comfortable shoes for exploring ashore.", def: ""},
        {word: "Pack sunscreen, a hat, and sunglasses to protect yourself from the sun.", def: ""}
    ],
},
{
    name: "Ship and layout",
    img: layoutImage,
    details: [{}]
},
{
    name: "Activies and entertainment",
    img: activitiesImage,
    details: [{}]
},
{
    name: "Food",
    img: foodImage,
    details: [{}]
},
{
    name: "What's included in my trip?",
    img: amenitiesImage,
    details: [{}]
}
]

export default modals;