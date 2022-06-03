jQuery(".error").hide(),jQuery("#submit1").click(function() {
        jQuery(".error").hide();
        var a = jQuery("input#d_name").val();
        if ("Name*" == a || "" == a) return jQuery("span#name1_error").show(), jQuery("input#d_name").focus(), !1;
        var i = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
        if (!i.test(a)) return jQuery("span#name1_error2").show(), jQuery("input#d_name").focus(), !1;

        var n = jQuery("input#d_email").val();
        if ("Email ID*" == n || "" == n) return jQuery("span#email1_error").show(), jQuery("input#d_email").focus(), !1;
        var t = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!t.test(n)) return jQuery("span#email1_error2").show(), jQuery("input#d_email").focus(), !1;

        var o = jQuery("input#d_mobile_no").val();
        if ("Mobile No.*" == o || "" == o) return jQuery("span#mobile1_error").show(), jQuery("input#d_mobile_no").focus(), !1;
        var s = /^\d{10}$/;
        if (!s.test(o)) return jQuery("span#mobile1_error2").show(), jQuery("input#d_mobile_no").focus(), !1;

        jQuery.ajax({
			         url:jQuery('#in_conForm').attr('action'),
			         data:jQuery("#in_conForm").serialize(),
			         type:'POST',
			         success: function(res)
				    {
					   jQuery("#in_conForm").replaceWith(res);
				}
        });
    return false;
	}),


/*Career Form*/
    function() {
        "use strict";
        jQuery(function() {
            jQuery(".error").hide(), jQuery("#careerBtn").click(function() {
                jQuery(".error").hide();
                var r = jQuery("input#career_name").val();
                if ("Name*" == r || "" == r) return jQuery("span#name2_error").show(), jQuery("input#career_name").focus(), !1;
                var e = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
                if (!e.test(r)) return jQuery("span#name2_error2").show(), jQuery("input#career_name").focus(), !1;

                var n = jQuery("input#career_email").val();
                if ("Email ID*" == n || "" == n) return jQuery("span#email2_error").show(), jQuery("input#career_email").focus(), !1;
                var t = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!t.test(n)) return jQuery("span#email2_error2").show(), jQuery("input#career_email").focus(), !1;

                var a = jQuery("input#career_contact_no").val();
                if ("Mobile No.*" == a || "" == a) return jQuery("span#mobile2_error").show(), jQuery("input#career_contact_no").focus(), !1;
                var i = /^\d{10}$/;
                if (!i.test(a)) return jQuery("span#mobile2_error2").show(), jQuery("input#career_contact_no").focus(), !1;

                /*resume validation*/
                var Q = jQuery("input#resume").val();
                if ("" == Q) return jQuery("span#upload_error").show(), jQuery("input#resume").focus(), !1;
                var b=/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf)$/;
                if (!b.test(Q)) return jQuery("span#upload_error2").show(), jQuery("input#resume").focus(), !1;


            })
        })
    }(jQuery),

		//Contact Form
    function() {
        "use strict";
        jQuery(function() {
        jQuery(".error").hide(), jQuery("#conBtns").click(function() {
            jQuery(".error").hide();
                var b = jQuery("input#c_name").val();
		        if ("YOUR NAME *" == b || "" == b) return jQuery("span#name_error").show(), jQuery("input#c_name").focus(), !1;
		        var d = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
		        if (!d.test(b)) return jQuery("span#name_error2").show(), jQuery("input#c_name").focus(), !1;

		        var c = jQuery("input#c_email").val();
		        if ("YOUR EMAIL *" == c || "" == c) return jQuery("span#email_error").show(), jQuery("input#c_email").focus(), !1;
		        var f = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		        if (!f.test(c)) return jQuery("span#email_error2").show(), jQuery("input#c_email").focus(), !1;

		        var p = jQuery("input#c_mobile_no").val();
		        if ("PHONE *" == p || "" == p) return jQuery("span#mobile_error").show(), jQuery("input#c_mobile_no").focus(), !1;
		        var h = /^\d{10}$/;
		        if (!h.test(p)) return jQuery("span#mobile_error2").show(), jQuery("input#c_mobile_no").focus(), !1;

		        jQuery.ajax({
					         url:jQuery('#contact-formss').attr('action'),
					         data:jQuery("#contact-formss").serialize(),
					         type:'POST',
					         success: function(res)
						    	{
							   		jQuery("#contact-formss").replaceWith(res);
                  }
                });
            return false;
        })
    })
}(jQuery),



//Business Association Form
function() {
    "use strict";
    jQuery(function() {
    jQuery(".error").hide(), jQuery("#BusinessAssociation").click(function() {
        jQuery(".error").hide();

        var f = jQuery("input#b_firstname").val();
        if ("YOUR firstname *" == f || "" == f) return jQuery("span#firstname_error").show(), jQuery("input#b_firstname").focus(), !1;
        var d = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
        if (!d.test(f)) return jQuery("span#firstname_error3").show(), jQuery("input#b_firstname").focus(), !1;


        var s = jQuery("input#b_streetadd1").val();
        if ("" == s) return jQuery("span#streetadd1_error").show(), jQuery("input#b_streetadd1").focus(), !1;



        var m = jQuery("input#b_phoneno").val();
        if ("PHONE *" == m || "" == m) return jQuery("span#phoneno_error").show(), jQuery("input#b_phoneno").focus(), !1;
        var h = /^\d{10}$/;
        if (!h.test(m)) return jQuery("span#phoneno_error3").show(), jQuery("input#b_phoneno").focus(), !1;

        var st = jQuery("input#b_servicetax").val();
        if ("Service Tax Number *" == st || "" == st) return jQuery("span#servicetax_error").show(), jQuery("input#b_servicetax").focus(), !1;
        var h = /^\d{15}$/;
        if (!h.test(st)) return jQuery("span#servicetax_error3").show(), jQuery("input#b_servicetax").focus(), !1;

        var pn = jQuery("input#b_pan").val();
        if ("PAN Number *" == pn || "" == pn) return jQuery("span#pan_error").show(), jQuery("input#b_pan").focus(), !1;
        var h = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (!h.test(pn)) return jQuery("span#pan_error3").show(), jQuery("input#b_pan").focus(), !1;

      var b = jQuery("input#b_name").val();
        if ("YOUR NAME *" == b || "" == b) return jQuery("span#name_error").show(), jQuery("input#b_name").focus(), !1;
        var d = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
        if (!d.test(b)) return jQuery("span#name_error3").show(), jQuery("input#b_name").focus(), !1;




       var c = jQuery("input#b_email").val();
        if ("YOUR EMAIL *" == c || "" == c) return jQuery("span#email_error").show(), jQuery("input#b_email").focus(), !1;
        var f = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!f.test(c)) return jQuery("span#email_error3").show(), jQuery("input#b_email").focus(), !1;

        var p = jQuery("input#b_mobile_no").val();
        if ("PHONE *" == p || "" == p) return jQuery("span#mobile_error").show(), jQuery("input#b_mobile_no").focus(), !1;
        var h = /^\d{10}$/;
        if (!h.test(p)) return jQuery("span#mobile_error3").show(), jQuery("input#b_mobile_no").focus(), !1;

        jQuery.ajax({
               url:jQuery('#business-association-formss').attr('action'),
               data:jQuery("#business-association-formss").serialize(),
               type:'POST',
               success: function(res)
              {
                jQuery("#business-association-formss").replaceWith(res);
              }
            });
        return false;
    })
})
}(jQuery);
