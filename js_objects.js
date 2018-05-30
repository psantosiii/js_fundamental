let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function log_arr(arr){
    for(var i = 0;i < arr.length;i++){
        console.log("Name: " + arr[i].name + "," + " Cohort: " + arr[i].cohort);
    }
}
log_arr(students);


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 function i_like_caps(obj){


     for(let key in obj){
            console.log(key.toUpperCase());
            for(let i = 0; i<obj[key].length; i++){
                let num = i + 1;
                let fname = obj[key][i].first_name;
                let lname = obj[key][i].last_name;
                let length = fname.length + lname.length;
                console.log(`${num} - ${lname.toUpperCase()}, ${fname.toUpperCase()} - ${length}`);
            }
        };     
      }
      i_like_caps(users)