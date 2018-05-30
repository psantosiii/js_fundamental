
var tigger = { character: "Tigger" }; // start with just the character attribute

var pooh = { character: "Winnie the Pooh" };
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;
pooh.east = bees;
pooh.north = christopher;

var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
                                    // Assign that object's west attribute to piglet
var owl = { character: "Owl"};
owl.east = pooh.north;
owl.south = piglet;


var christopher = { character: "Cristopher Robin"};
christopher.west = owl;
christopher.south = pooh;
christopher.east = gopher;
christopher.north = kanga;


var rabbit = { character: "Rabbit"};
rabbit.west = christopher;
rabbit.east = gopher;
rabbit.south = bees;


var bees = { character: "bees" };
christopher.south.east = pooh.east;
tigger.north.east = gopher;
bees.west = tigger.north;


var gopher = { character: "Gopher" };
bees.north = christopher.east;
gopher.west = rabbit;

var kanga = { character: "Kanga" };
rabbit.west = kanga.south;
kanga.south = christopher;

var eeyore = { character: "Eeyore"};
eeyore.south = kanga;
eeyore.east = heffalumps;

var heffalumps = { character: " Heffalumps" };
heffalumps.west = eeyore;
eeyore.east = heffalumps;



console.log(christopher);

