var menuBtn = document.getElementById('menu');
var informationField = document.getElementById('infoField');
var closeBtn = document.getElementById('close');
var myProjects = document.getElementById('myprojects');
var btn = document.getElementById('btn');



menuBtn.addEventListener('click', handleClick);
closeBtn.addEventListener('click', closemenu);
myProjects.addEventListener('click', handleLinks);
btn.addEventListener('click', handleLinks);

function handleClick(){

    if(informationField.classList.contains('active') == false){
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'block';
        informationField.style.display = 'flex';
        informationField.classList.add('active');
    } 
}


function closemenu(){
    if (informationField.classList.contains('active') == true){
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none';
        informationField.style.display = 'none';
        informationField.classList.remove('active');
    }

}

function handleLinks(){
    if(informationField.classList.contains('active') == true){
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none';
        informationField.style.display = 'none';
        informationField.classList.remove('active');
    }
}