
var settime1 = 0;
var settime2 = 0;
var settime3 = 0;
var countdown1 = "00:00";
var countdown2 = "00:00";
var countdown3 = "00:00";
var p_countdown1 = 0;
var p_countdown2 = 0;
var p_countdown3 = 0;

colocar_ceros();
function colocar_ceros(){

    // accedo al valor del input (id=countdown1,2,3) con getElementById
    // y le asigno a la variable countdown1, 2, 3
    // ojo que countdown1, 2, 3 le habiamos asignado "0" arriba
    document.getElementById("countdown1").innerText = countdown1;
    document.getElementById("countdown2").innerText = countdown2;
    document.getElementById("countdown3").innerText = countdown3;

    settime1 = document.getElementById("settime1").innerHTML;
    settime2 = document.getElementById("settime2").innerHTML;
    settime3 = document.getElementById("settime3").innerHTML;
}


function  capture(){
    // accedo al valor del input (id=settime1,2,3) con getElementById
    // y lo asigno a la variable
    var p_countdown1 = parseInt(document.getElementById("settime1").value);
    var p_countdown2 = parseInt(document.getElementById("settime2").value);
    var p_countdown3 = parseInt(document.getElementById("settime3").value);

    //tomo ese valor de p_countdown1,2,3 y lo introdusco(lo asigno) y
    //lo muestro en pantalla con innerText
    document.getElementById("countdown1").innerText = p_countdown1+":00";
    document.getElementById("countdown2").innerText = p_countdown2+":00";
    document.getElementById("countdown3").innerText = p_countdown3+":00";
}

function resettimes(){
    // accedo al valor del input (id=settime1,2,3) con getElementById
    // y le asigno el valor cero
    document.getElementById("settime1").value = "00:00";
    document.getElementById("settime2").value = "00:00";
    document.getElementById("settime3").value = "00:00";
    // accedo al valor del countdown1, 2 y 3 con getElementById
    // y le asigno (e imprimo en pantalla con innerHTML) el valor
    // a cada uno de ellos
    document.getElementById("countdown1").innerText = "00:00";
    document.getElementById("countdown2").innerText = "00:00";
    document.getElementById("countdown3").innerText = "00:00";
}

function plays(){
        
        var minutes1 = parseInt(document.getElementById("settime1").value);
        var minutes2 = parseInt(document.getElementById("settime2").value);
        var minutes3 = parseInt(document.getElementById("settime3").value);
        
        // function pauses(){
        //     console.log('pauses function activated');
        // }
        
        function alarm(){
            var audio = new Audio(src='https://res.cloudinary.com/sergiomurybenedetti/video/upload/v1652191906/mixkit-classic-alarm-995_wolceq.wav');
            audio.play();
        }

        function tktkalarm(){
            var audio = new Audio(src='https://res.cloudinary.com/sergiomurybenedetti/video/upload/v1652211730/mixkit-system-beep-buzzer-fail-2964_lxzzem.wav');
            audio.play();
        }
        function finish(){
            var audio = new Audio(src='https://res.cloudinary.com/sergiomurybenedetti/video/upload/v1652193771/finish_p0aytd.wav');
            audio.play();

        }
        function tictac(){
            var audio = new Audio(src='https://res.cloudinary.com/sergiomurybenedetti/video/upload/v1652211214/reloj_3_a1owo3.mp3');
            audio.play();
        }
        

        plays_1();    
        function plays_1(){
                    var start1 = function(){
                        minutes1--;
                        seconds1=59;

                        // imprime en pantalla
                        if(seconds1<10){
                            minutes1_text= minutes1+":"+"0"+seconds1;
                            }else{
                                minutes1_text= minutes1+":"+seconds1;
                            }
                            
                            document.getElementById("countdown1").innerText = minutes1_text;
                            setTimeout(1000);
                    }
                    start1();

                    let contadorSegundos1; 
                    // inicio primer contador
                    function repetirCadaSegundo1(){
                        contadorSegundos1 = setInterval(countdowner1,1000);
                        
                    }
                    repetirCadaSegundo1();
                    function countdowner1(){
                        function detener_reloj1(){
                            clearInterval(contadorSegundos1);
                        }
                        seconds1--;
                        if(seconds1<0){
                            minutes1--;
                            seconds1=59;
                        }
                        
                        let pausebuttons = document.getElementById('pausebuttons');
                        pausebuttons.onclick = detener_reloj1;
            

                        // let playbuttons = document.getElementById('playbutton');
                        // playbuttons.onclick = repetirCadaSegundo1;
                        
                        if(minutes1>=1 && seconds1>=0){
                            tictac();
                        }
                        if(seconds1<10){
                            minutes1_text= minutes1+":"+"0"+seconds1;
                            }else{
                                minutes1_text= minutes1+":"+seconds1;
                            }           
                        document.getElementById("countdown1").innerText = minutes1_text;
                        
                        if(minutes1==0 && seconds1 <60){
                            var tktk_time = tktkalarm();
                        }
                        // setInterval(tktk_time,9000);

                        if(minutes1 == 0 && seconds1 == 0){
                           alarm();
                           detener_reloj1();
                           setTimeout(plays_2,10000);//10 segundos entre proceso y proceso
                        } 
                        
                    }//fin del primer contador
                    
                                     
          //inicio segundo contador
        }
   
       function plays_2(){

                var start2 = function(){
                    minutes2--;
                    seconds2=59;
                  
                    // imprime en pantalla
                    if(seconds2<10){
                        minutes2_text= minutes2+":"+"0"+seconds2;
                        }else{
                            minutes2_text= minutes2+":"+seconds2;
                        }
                        
                        document.getElementById("countdown2").innerText = minutes2_text;
                        setTimeout(1000);
                }
                start2();
        
                let contadorSegundos2; 
                // inicio segundo contador
                function repetirCadaSegundo2(){
                    contadorSegundos2 = setInterval(countdowner2,1000);
                }
                repetirCadaSegundo2();
                function countdowner2(){
                    function detener_reloj2(){
                        clearInterval(contadorSegundos2);
                    }
                  
                        seconds2--;
        
                        if(seconds2<0){
                            minutes2--;
                            seconds2=59;
                        }
                        if(minutes2>=1 && seconds2>=0){
                            tictac();
                        }
                        if(minutes2>=1 && seconds2>60){tictac();}
                        if(seconds2<10){
                            minutes2_text= minutes2+":"+"0"+seconds2;
                            }else{
                                minutes2_text= minutes2+":"+seconds2;
                            }           
                           
                        document.getElementById("countdown2").innerText = minutes2_text;
                        if(minutes2==0 && seconds2 <60){
                            tktkalarm();
                        }
                        if(minutes2 == 0 && seconds2 == 0){
                            alarm();
                            detener_reloj2();
                            setTimeout(plays_3,10000);

                        } 
                }//fin del segundo contador
                 
        }          
       function plays_3(){

            var start3 = function(){
                minutes3--;
                seconds3=59;

                // imprime en pantalla
                if(seconds3<10){
                    minutes3_text= minutes3+":"+"0"+seconds3;
                    }else{
                        minutes3_text= minutes3+":"+seconds3;
                    }
                    
                    document.getElementById("countdown3").innerText = minutes3_text;
                    setTimeout(1000);
                }
                start3();
                //inicio tercer contador
                let contadorSegundos3; 
                function repetirCadaSegundo3(){
                    contadorSegundos3 = setInterval(countdowner3,1000);
                }
                repetirCadaSegundo3();
                function countdowner3(){
                    function detener_reloj3(){
                        clearInterval(contadorSegundos3);
                    }
            
                    seconds3--;

                    if(seconds3<0){
                        minutes3--;
                        seconds3=59;
                    }
                    if(minutes3>=1 && seconds3>=0){
                        tictac();
                    }
                    if(minutes3>=1 && seconds3>60){tictac();}
                    if(seconds3<10){
                        minutes3_text= minutes3+":"+"0"+seconds3;
                        }else{
                            minutes3_text= minutes3+":"+seconds3;
                        }           
                    
                    document.getElementById("countdown3").innerText = minutes3_text;
                    if(minutes3==0 && seconds3 <60){
                        tktkalarm();
                    }
                    if(minutes3 == 0 && seconds3 == 0){
                            alarm();
                            detener_reloj3();
                            finish();
                    } 
                }//fin del tercer contador                    
            }
        
}//el fin de function plays()

relojdia();
function relojdia(){
    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
        
        var pHoras = document.getElementById('horas'),
            pAMPM =document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if (horas >= 12) {
            horas = horas - 12;
            ampm='PM';
        } else {
            ampm='AM';
        }
        if (horas == 0){
            horas == 12;
        }
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if (minutos < 10){ minutos = "0" + minutos};
        if (segundos < 10){ segundos = "0" + segundos};

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

    };
    actualizarHora();

    var intervalo = setInterval(actualizarHora, 1000);
}

    
    