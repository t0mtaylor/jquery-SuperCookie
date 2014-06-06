/*!
 * jQuery SuperCookie v1.2.1
 *
 *	Removed console guff and optimised code to reduce size further
 *	Tom Taylor - 19/05/14 - http://tommytaylor.co.uk
 * 
 * https://github.com/tantau-horia/jquery-SuperCookie
 *
 * Copyright 2012, Tantau Horia
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
;(function ($, window, document, undefined) {
        //golbal option for jquery.cookie
	var globalOptions = {
			expires: 7,
			path: "/"
	    },
	    methods = {
		//create cookie
		create: function (name, values, config) {
			var options = $.extend({}, globalOptions, config);
			$.cookie(name, JSON.stringify(values), options);
		},
		//verify if cookie exists
		check: function (name) {
			return (name !== null && name !== undefined ? ($.cookie(name) === null ? false : true) : false);
		},
		//verify cookie json and existence
		verify: function (name) {
			if (name !== null && name !== undefined) {
				var get_mc = $.cookie(name);
				
				if ( get_mc === null ) {
					return false;
				};
				if ( jQuery.isEmptyObject(get_mc) ) {
					return false;
				}
				
				try{
					JSON.parse(get_mc);
				} catch (e) {
					return false;
				}
				
				return true;
			} else {
				return false; 
			};
		},
		//verify index existence
		check_index: function (name, index_s) {
			var get_mc = $.super_cookie().read_JSON(name),
			    check = null;
			    
			$.each(get_mc, function(index,value){
				if ( index_s === index ) {
					check = "ok";
				};
			});
			
			return (check === null ? false : true)
		},
		//read all cookie values
		read_values: function (name) {
			return (!$.super_cookie().verify(name) ? false : $.cookie(name));
		},
		//read all JSON indexes as an array
		read_indexes: function (name) {
			var get_mc = $.super_cookie().read_JSON(name),
			    check = [];
			    
			$.each(get_mc, function(index,value){
				check.push(index);
			});
			
			return check;
		},
		//read cookie json
		read_JSON: function (name) {
			return (!$.super_cookie().verify(name) ? false : JSON.parse($.cookie(name)));
		},
		//read cookie value from field
		read_value: function (name, index_s) {
			var get_mc = $.super_cookie().read_JSON(name),
			    check = null;
			    
			$.each(get_mc, function(index,value){
				if (index_s === index) {
					check = value;
				};
			});
			
			return (check === null ? false : check);
		},
		//replace cookie value from field
		replace_value: function (name, index_s, new_value, config) {
			var get_mc = $.super_cookie().read_JSON(name),
			    check = [],ocheck = {},options = $.extend({}, globalOptions, config);

			$.each(get_mc, function(index,value){
				check.push("\"" + index + "\": \"" + (index_s === index ? new_value : value) + "\"");
			});
			
			check = "{" + check.join(", ") + "}";
			ocheck = JSON.stringify(check);
			
			$.removeCookie(name);
			$.cookie(name, JSON.parse(ocheck), options);
		},
		//add cookie field and value
		add_value: function (name, new_index, new_value, config) {
			var get_mc = $.super_cookie().read_JSON(name),
			    check = [],ocheck = {},options = $.extend({}, globalOptions, config);
			    
			$.each(get_mc, function(index,value){
				check.push("\"" + index + "\": \"" + value + "\"");
			});
			
			check.push("\"" + new_index + "\": \"" + new_value + "\"");
			
			check = "{" + check.join(", ") + "}";
			ocheck = JSON.stringify(check);
			
			$.removeCookie(name);
			$.cookie(name, JSON.parse(ocheck), options);
		},
		//remove cookie field and value
		remove_value: function (name, remove_index, config) {
			var get_mc = $.super_cookie().read_JSON(name),
			    check = [],ocheck = {},options = $.extend({}, globalOptions, config);
			    
			$.each(get_mc, function(index,value){
				if (remove_index !== index) {
					check.push("\"" + index + "\": \"" + value + "\"");
				};
			});
			
			check = "{" + check.join(", ") + "}";
			ocheck = JSON.stringify(check);
			
			$.removeCookie(name);
			$.cookie(name, JSON.parse(ocheck), options);
		}
	};
	
	$.super_cookie = function (globalConfig) {
		$.extend(globalOptions, globalConfig);
		$.extend(this, methods);

		return this;
	};

 })(jQuery, document);
