
let stations = [
    {id: "CB0Ps3V0miG518CyogAfhg1u", name: "A駅", pos: [20,100], writingMode: "tb"}, 
    {id: "myvQgKLK52YIHNok0I2IGEeO", name: "B駅", writingMode: "tb"}, 
    {id: "DTmW0q1DsR0X+iZ879AGD5Ro", name: "C駅", pos: [180,100], writingMode: "tb"},
];

let trains = [{
    id: "CXXfARIr5QyzHmadozGpo+it", 
    name: "運転系統1", 
    stops:[
        {stationId: "CB0Ps3V0miG518CyogAfhg1u"},
        {stationId: "myvQgKLK52YIHNok0I2IGEeO"},
        {stationId: "DTmW0q1DsR0X+iZ879AGD5Ro"},
    ],
    strokeWidth: 2,
    strokeColor: "#000000",
    lineOffset: 0,
    pointSize: 10,
    pointStrokeColor: 0,
    pointFillColor: 0,
}];

export let routeMap = {stations: stations, trains: trains};

/*
形式
routeMap = {stations: [station], trains: [train]};
station = {
    id: String,
    name: string,
    pos: [x(int), y(int)], // 座標固定点のみ
    writingMode: "tb" or "lr" or "rl",
}

*/
