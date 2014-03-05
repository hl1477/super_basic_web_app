//console.log("hello,world");

//d3.select("h1").text("hi");
//d3.select("h1").remove();
//d3.selectAll("h1").text("hi");
//d3.selectAll("h1").style("opacity","0.5");
//d3.selectAll("h1").style("font-size","100px");

//d3.select(".page-header").insert("p").text("aaaaa");
//d3.select(".page-header").insert("img").attr("src","https://www.google.com/images/srpr/logo11w.png");

//d3.select("svg").insert("circle").attr("r","10").attr("fill","lightblue").attr("class","mycircle");

//function makeStage(width,height,callback) {
//    var stage = d3.select(".container") // selection: .(class) or /(id) or just the name
//    .insert("center")
//    .insert("svg")
//    .attr("width",width)
//    .attr("height",height);
//    callback(stage);
//    console.log("i'm here") // check if it works
//}

function makeStage(width,height) {
    var stage = d3.select(".container") // selection: .(class) or /(id) or just the name
    .insert("center")
    .insert("svg")
    .attr("width",width)
    .attr("height",height);
    return stage;
}

function clearStimulus(stage) {
    stage.selectAll("circle").remove();   // select all circles in the stage
}

function drawStimulus(stage,cx,cy,radius,fillcolor) {    
    stage.insert("circle")
    .attr("cx",cx)
    .attr("cy",cy)
    .attr("r",radius)
    .style("fill",fillcolor)
    .style("stroke","lightblue")
    .style("stroke-width","10px");
    //.attr("class","mycirclestim")
}

function clearButton() {
    d3.select(".container")
    .selectAll("button")
    .remove();
}

function makeButton(text,callback) {
    d3.select(".container")
    .insert("button")
    .attr("type","button")
    .attr("class","btn btn-primary btn-lg")
    .text(text)
    .on("click",function(d) { console.log("clicked"); callback(); } );
}

function doTrial(stage, stim_array) {
    if (stim_array.length > 0 ) {
        var stim = stim_array.shift();
        clearStimulus(stage);
        clearButton();
        drawStimulus(mystage,800/2.,600/2.,stim["radius"],stim["color"]);
//        makeButton("A", function () {doTrial(stage, stim_array); });
//        makeButton("B", function () {doTrial(stage, stim_array); });
        makeButton("Next trial", function () {doTrial(stage, stim_array); });

    } else {
        alert("game over");   
    }
}

var mystage = makeStage(800,600);//,
//                        function (mystage) {
//                            drawStimulus(mystage,40,"steelblue");
//                        }
//                       );

var trials = [{"color": "lightblue", "radius": 20}, 
              {"color": "lightgreen", "radius": 20},
              {"color": "yellow", "radius": 30},
              {"color": "red", "radius": 40}
             ];


doTrial(mystage, trials);

