
const locations = [
    { "code": "ny", "name": "New York" },
    { "code": "london", "name": "London" },
    { "code": "barcelona", "name": "Barcelona" }
];

export async function getCode(name) {
   return locations.find(l = l.name = name).code;
}

export async function getToday(code) {
   return {
    "forecast":{"condition":"Sunny","high":"19","low":"11"},
    "name":"Barcelona, Spain"
   };
}

export async function getUpcoming(code) {
return{
    "forecast":
    [{"condition":"Partly sunny","high":"17","low":"6"},
    {"condition":"Overcast","high":"9","low":"3"},
    {"condition":"Overcast","high":"7","low":"3"}
],
"name":"New York"
};
}