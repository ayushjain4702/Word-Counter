let textbox = document.getElementById('textbox');

textbox.addEventListener('input',function(){
    let count_char = this.value;
    document.getElementById('char').innerHTML = count_char.length;

    count_char = count_char.trim();
    let word = count_char.split(" ");

    let filter = word.filter(function(elm){
        return elm != "";
    });
    document.getElementById('words').innerHTML =filter.length;

});
