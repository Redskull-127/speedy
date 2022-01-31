var file_size = 127,
    start = performance.now(),
    end = 0,
    time = 0,
    xmlhttp = new XMLHttpRequest(),
    totalmax = 62.45,
    totalmin = 0,
    totalper = 100,
    result = 0;

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
           end = performance.now();
           time =  (end - start)/1000;
           result = (file_size/time/1000*8).toFixed(2);
           var mobi = result * totalper / totalmax;
           var mobil = mobi.toFixed(2);
           $("#results").html(result+' MBit/s');
           $("#mobs").html('Vro... <br />' + 'You have surpassed\n' + mobil + '% (average) peoples in INDIA');
           if(mobi >= 100){
            $("#congo").html('Vaii Itni Sari Speed...<br />');
           }
        }
    }    
        
    xmlhttp.open('GET', 'https://codepen.io/infomiho/pen/CuGJI.html', true);
    xmlhttp.send();
    