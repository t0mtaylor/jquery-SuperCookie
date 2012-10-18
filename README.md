#jQuery-SuperCookie

A simple, jQuery plugin for reading, writing and deleting JSON values in cookies.

## Getting Started
Download the [minified version][min] or the [development version][max].

[min]: https://raw.github.com/tantau-horia/jquery-SuperCookie/master/jquery.SuperCookie.min.js
[max]: https://raw.github.com/tantau-horia/jquery-SuperCookie/master/jquery.SuperCookie.js
### Installation

Include script after the jQuery library (unless you are packaging scripts somehow else):
    
    <script src="/path/to/jquery.SuperCookie.min.js"></script>

### Dependencies

1. [jquey.cookie][jquery.cookie] - by Klaus Hartl

[jquery.cookie]: https://github.com/carhartl/jquery-cookie

2. [json3][json3] - by Kit Cambridge

[json3]: https://github.com/carhartl/jquery-cookie

## Usage

### Create Cookie

    // cookie name: name_of_the_cookie
    // cookie values: {name_field_1:"value1",name_field_2:"value2",name_field_3:"value3"}
    $.super_cookie().create("name_of_the_cookie",{name_field_1:"value1",name_field_2:"value2"});

### Set Cookie Options

See [jquey.cookie][cookie_options] official page for more options.

    // cookie options: {expires: 7,path: "/"}
    $.super_cookie({expires: 7,path: "/"}).create("name_of_the_cookie",{name_field_1:"value1",name_field_2:"value2"});

[cookie_options]: https://github.com/carhartl/jquery-cookie#cookie-options

### Check if cookie exists

    // console.log($.super_cookie().check("name_of_the_cookie"));
    $.super_cookie().check("name_of_the_cookie");


### Check if cookie value is a valid JSON

    // console.log($.super_cookie().verify("name_of_the_cookie"));
    $.super_cookie().verify("name_of_the_cookie");


### Read cookie values as string

    // console.log($.super_cookie().read_values("name_of_the_cookie"));
    $.super_cookie().read_values("name_of_the_cookie");


### Read cookie values as JSON object

    // console.log($.super_cookie().read_JSON("name_of_the_cookie"));
    $.super_cookie().read_JSON("name_of_the_cookie");

### Read a single value from the stored JSON

    // $.super_cookie().create("name_of_the_cookie",{name_field_1:"value1",name_field_2:"value2"});
    // console.log($.super_cookie().read_value("name_of_the_cookie","name_field_1"));
    $.super_cookie().read_value("name_of_the_cookie","name_of_the_index");

