TinyTurtle.apply(window, [undefined, 400, 400]);

function rectangle(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}


// Type your function call below


function triangle(size){
    right(45);
    forward(size);
    right(90);
    forward(size);
    right(135);
    forward(size);
}


function shape(type, size) {
    if (type==='triangle'){
   triangle(size);
}
}


shape('triangle',70);
shape('rectangle',80);

stamp();