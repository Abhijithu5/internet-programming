function myloadfunction() {
    var element = document.getElementById('pageheading');
    var elements = document.getElementById('pagecontent');
    element.firstChild.nodeValue = 'new heading'; 
    elements.firstChild.nodeValue = 'Booo';  
};
document.addEventListener('click',myloadfunction);


function print5(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    
};
print5();
print5();
