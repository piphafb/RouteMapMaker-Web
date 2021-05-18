
export var routeMap = 
{stations: [
    {name: "A駅", pos: [20,100], writingMode: "tb"}, 
    {name: "B駅", writingMode: "tb"}, 
    {name: "C駅", pos: [180,100], writingMode: "tb"}
]};

/*
形式
routeMap = {stations: [station]};
station = {
    name: string,
    pos: [x(int), y(int)],
    writingMode: "tb" or "lr" or "rl",
}

*/
