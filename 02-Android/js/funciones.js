 $(function(){
                    var num=2;
                    var func;
                    $('#slider-cont1 div:gt(0)').hide();
                    func = setInterval(function(){
                        $('#slider-cont1 div:first-child').fadeOut(800)
                        .next('div').fadeIn(800)
                        .end().appendTo('#slider-cont1');	
                        num++;
                        $('#s2').attr("class","slider-divc");
                        $('#s3').attr("class","slider-divc");
                        $('#s4').attr("class","slider-divc");
                        $('#s5').attr("class","slider-divc");
                        $('#s'+num).attr("class","slider-divc2");
                        if(num==5){
                            num=1;
                        }
                    },5000);
                    
                    $('#s2').click(function(){
                        $('#s2').attr("class","slider-divc2" );
                        $('#s3').attr("class","slider-divc" );
                        $('#s4').attr("class","slider-divc" );
                        $('#s5').attr("class","slider-divc" );
                        $('#slider1-div').fadeIn(0)
                        .end().appendTo('#slider-cont1');	
                        clearInterval(func);
                        
                    });
                    
                    $('#s3').click(function(){
                        $('#s3').attr("class","slider-divc2" );
                        $('#s2').attr("class","slider-divc" );
                        $('#s4').attr("class","slider-divc" );
                        $('#s5').attr("class","slider-divc" );
                        $('#slider2-div').fadeIn(0)
                        .end().appendTo('#slider-cont1');	
                        clearInterval(func);
                    });
                    
                    $('#s4').click(function(){
                        $('#s4').attr("class","slider-divc2" );
                        $('#s2').attr("class","slider-divc" );
                        $('#s3').attr("class","slider-divc" );
                        $('#s5').attr("class","slider-divc" );
                        $('#slider3-div').fadeIn(0)
                        .end().appendTo('#slider-cont1');	
                        clearInterval(func);
                    });
                    
                    $('#s5').click(function(){
                        $('#s5').attr("class","slider-divc2" );
                        $('#s2').attr("class","slider-divc" );
                        $('#s3').attr("class","slider-divc" );
                        $('#s4').attr("class","slider-divc" );
                        $('#slider4-div').fadeIn(0).appendTo('#slider-cont1');	
                        clearInterval(func);
                    });
                    $('#s-2').click(function(){
                        $('#s-2').attr("class","slider-divc2" );
                        $('#s-1').attr("class","slider-divc" );
                        $('#div-more2').appendTo('#conten-more');	
                    });
                    $('#s-1').click(function(){
                        $('#s-1').attr("class","slider-divc2" );
                        $('#s-2').attr("class","slider-divc" );
                        $('#div-more1').appendTo('#conten-more');	
                    });
                    $('#discovermenu').click(function(){
                        var visi=$('#discover').css("visibility");
                        if(visi=="visible"){
                            $('#discover').css("visibility","hidden" );    
                        }else{
                            $('#discover').css("visibility","visible" );
                        }
                    });
                });