
(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        new WOW().init();
      
        
        $(".navbar").sticky({topSpacing:0});
        
        
        $('#quote-carousel').carousel({
            pause: true, interval: 10000,
          });
        

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        
        $(".staff-meta").owlCarousel({
            items: 3,
            autoplay:true,
            dots:false,
            nav:true,
            loop:true,
            
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        });
        
        
        
        
        // external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

    $('.count').counterUp({
    delay: 10,
    time: 1000
});


    });
    
    
    
    
    //dfdfdsa afjadfjds afjdafjds fafjdasfjs f
    


    jQuery(window).load(function(){
        
		
		
		
        
    });


}(jQuery));