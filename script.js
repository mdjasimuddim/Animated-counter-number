// client start here 
let client_title = document.getElementById('client-title');
var count = 0;
var client = setInterval(client,10);
function client(){
    count++;
    client_title.innerHTML= count;
    if(count == 200){
        clearInterval(client);
    }
}
// client end here 

// project start here 
let project_title = document.getElementById('project-title');
var counter = 0;
var project = setInterval(project,10);
function project(){
    counter++;
    project_title.innerHTML= counter;
    if(counter == 500){
        clearInterval(project);
    }
}
// project end here 


// project start here 
let archieve_title = document.getElementById('achive-title');
var counter = 0;
var achieve = setInterval(achieve,10);
function achieve(){
    counter++;
    archieve_title.innerHTML= counter;
    if(counter == 300){
        clearInterval(achieve);
    }
}
// project end here 