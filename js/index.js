document.addEventListener("touchstart", function(){}, true);

// Place raw HTML of each version into appropriate containers
function updateHtmlSigRaw() {

get_html_signature = $("#standard-target").clone(true);
$(get_html_signature).find('*[style*="display: none"]').remove();
$(get_html_signature).html();

$("#html code").text($(get_html_signature).html());
  $("#html code").prepend('&lt;style&gt; @import url(overpass-30e2.kxcdn.com/overpass.css); &lt;/style&gt;').text;
}





$(".promo").hide();

$(".promo-selector input[type=radio]").on("change", function(){
  if(document.getElementById('promo-1').checked) {   $(".promo").show();$(".promo-1").show();$(".promo-2").hide();$(".promo-3").hide();}
  if(document.getElementById('promo-2').checked) {   $(".promo").show();$(".promo-2").show();$(".promo-1").hide();$(".promo-3").hide();}
  if(document.getElementById('promo-3').checked) {   $(".promo").show();$(".promo-3").show();$(".promo-1").hide();$(".promo-2").hide();}
  if(document.getElementById('nopromo').checked) {   $(".promo").hide();$(".promo-1").hide();$(".promo-2").hide();$(".promo-3").hide();}

  updateHtmlSigRaw()
});




// SOCIAL
$(".social").hide();
$(".social-selector input[type=radio]").on("change", function(){
  if(document.getElementById('social-1').checked) {   $(".social").show();$(".social-1").show();$(".social-2").hide();$(".social-3").hide();}
  if(document.getElementById('social-2').checked) {   $(".social").show();$(".social-2").show();$(".social-1").hide();$(".social-3").hide(); }
  if(document.getElementById('social-3').checked) {   $(".social").show();$(".social-3").show();$(".social-1").hide();$(".social-2").hide();}
  if(document.getElementById('nosocial').checked) {   $(".social").hide();$(".social-1").hide();$(".social-2").hide();$(".social-3").hide();}

  updateHtmlSigRaw()
});





//
// address
$(".address-container").hide();
$("input.address").on("change keyup paste", function(){
  var address = $(this).val();
  if(address) {
    $(".address-container").show();
    $(".address-container p").html(address);
  }
else {$(".address-container").hide();
}

  updateHtmlSigRaw()
});



//
// address
$(".address2-container").hide();
$("input.address2").on("change keyup paste", function(){
  var address2 = $(this).val();
  if(address2) {
    $(".address2-container").show();
    $(".address2-container p").html(address2);
  }
else {$(".address2-container").hide();
}
  updateHtmlSigRaw()
});



//
// certifications
$(".cert").hide();
$("input.certs").on("change keyup paste", function(){
  var cert = $(this).val();
  if(cert) {

    $(".position-container").show();
    $(".cert").show();
    $(".cert span").html(cert);
  }
else {$(".cert").hide();
}
  updateHtmlSigRaw()
});




$(".contact-container").hide();

//
// telephone
$(".telephone-container").hide();

$("input.telephone").on("change keyup paste", function(){
  var telephone = $(this).val().split(" ").join("-").toUpperCase();
  if(telephone) {
    $(".contact-container").show();
    $(".telephone-container").show();
    $(".telephone-container a").html(telephone)

        $(".telephone-container").attr("href", "tel:"+telephone);


  }
else {$(".telephone-container").hide();
}

  updateHtmlSigRaw()
});


//
// mobile
$(".mobile-container").hide();

$("input.mobile").on("change keyup paste", function(){
  var mobile = $(this).val().split(" ").join("-").toUpperCase();
  if(mobile) {
    $(".mobile-container").show();
    $(".contact-container").show();
    $(".mobile-container a").html(mobile);
        $(".mobile-container").attr("href", "tel:"+mobile);
  }
else {$(".mobile-container").hide();
}

  updateHtmlSigRaw()
});



//
// fax
$(".fax-container").hide();

$("input.fax").on("change keyup paste", function(){
  var fax = $(this).val().split(" ").join("-").toUpperCase();
  if(fax) {
    $(".fax-container").show();
    $(".contact-container").show();
    $(".fax-container a").html(fax);
    $(".fax-container").attr("href", "tel:"+fax);

  }
else {$(".fax-container").hide();
}

  updateHtmlSigRaw()
});




//
// fullname

$("input.firstname").on("change keyup paste", function(){
  var firstname = $(this).val();
  if(firstname) {
    $(".fullname-container").show();
    $(".firstname-container").show();
    $(".firstname-container").html(firstname);
  }
else {
}

  updateHtmlSigRaw()
});



//
// im
$(".im-container").hide();

$("input.im").on("change keyup paste", function(){
  var im = $(this).val();
  if(im) {

    $(".contact-container").show();
    $(".im-container").show();
    $(".im-container span").html(im);
  }
else {
  $(".im-container").hide();

}

  updateHtmlSigRaw()
});




//
// lastname

$("input.lastname").on("change keyup paste", function(){
  var lastname = $(this).val();
  if(lastname) {
    $(".fullname-container").show();
    $(".lastname-container").show();
    $(".lastname-container").html(lastname);
  }
else {

}

  updateHtmlSigRaw()
});

//
// legal entity

$("input.legal").on("change keyup paste", function(){
  var legal = $(this).val();
  if(legal) {
    $(".legal-container").show();
    $(".legal-container span").html(legal);
  }
else {
  $(".legal-container").hide();

}

  updateHtmlSigRaw()
});


//
// Position
$(".position-container").hide();

$("input.position").on("change keyup paste", function(){
  var fullname = $(this).val();
  if(fullname) {
    $(".position-container").show();
    $(".position-container .position").html(fullname);
  }
else {$(".position-container").hide();
}

  updateHtmlSigRaw()
});
















//
// Email address
// Check input field for data
$(".email-container").hide();

$(".email").on("change keyup paste", function(){
  var email = $(this).val();
  if(email) {
        $(".email-container").show();
        $(".contact-container").show();

    $(".email-anchor").html(email);
    $(".email-anchor").attr("href", "mailto:"+email);
  } else {
  }
  updateHtmlSigRaw()
});




















//// clipboard time

new Clipboard('.btn', {
  text: function (trigger) {

    var targetId = trigger.getAttribute('standard-target');
    $(get_html_signature).find('*[style*="display: none"]').remove();
    $(get_html_signature).html();

    var signature = document.querySelector(targetId).innerHTML;
    signature =  signature.replace(/class="[^"]*"/g, '')
                          .replace(/id="[^"]*"/g, '');
      return signature;
  }
});
