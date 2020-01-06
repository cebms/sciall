(function(){
    var expanded = 0;
    $(document).on('click', '#expand', function(){
        if(expanded == 0) {
            $('#projects').animate({'height' : "1500px"});
            expanded = 1;
            document.querySelector('#expand').innerText = 'Show Less';
        }
        else{
            $('#projects').animate({'height' : "600px"});
            expanded = 0;
            document.querySelector('#expand').innerText = 'Show More';
        }
    });
})();