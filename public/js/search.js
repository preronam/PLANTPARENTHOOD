(function(window, $, Handlebars) {

    // Custom Validator
    (function(a){function c(a){this.data=a||{},this.rules=[]}var b=function(){return{notEmpty:function(a){return-1===[null,!1,""].indexOf(a)},isEmail:function(a){return/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(a)}}}();c.prototype.rule=function(a,c,d){("string"!=typeof c||(c=b[c],void 0!==c))&&"function"==typeof c&&this.rules.push({key:a,tester:c,message:d||"invalid"})},c.prototype.check=function(){var a={};return this.rules.forEach(function(b){var c=b.tester(this.data[b.key]);c||void 0!==a[b.key]||(a[b.key]=b.message)}.bind(this)),0!==Object.keys(a).length?a:null},a.Validator=c})("object"==typeof exports?exports:window);

    // Convert form data to JSON
    $.fn.serializeObject=function(){var a={},b=this.serializeArray();return $.each(b,function(){void 0!==a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a};

    var formData = {
        // An example person model which we'll use to populate the form
        // fields and validate against.
        person: {
            exposure: 'indirect',
            children: 'yes',
            pets: 'no'

        },
        errors: false,
        submitted: false
    };

    var searchForm = {
        init: function() {
            this.data = formData;
            this.compile();
            this.render();
            this.bindEvents();
        },
        bindEvents: function() {
            $('#form-container').on('submit', $.proxy(this.onFormSubmit, this));
        },
        compile: function() {

            // Register the form helpers
            HandlebarsFormHelpers.register(Handlebars);

            // Pre-compile the template
            this.source = $('#form-template').html();
            this.template = Handlebars.compile(this.source);
        },
        render: function() {
            $('#form-container').html(this.template(this.data));
        },
        validate: function(data) {

            var validator = new Validator(data);

            validator.rule('exposure', 'notEmpty', 'Exposure must not be empty');
            validator.rule('children', 'notEmpty', 'Children must not be empty');
            validator.rule('pets', 'notEmpty', 'pets must not be empty');
         
            this.data.errors = validator.check();
        },
        onFormSubmit: function(e) {

            e.preventDefault();
            this.data.submitted = true;

            // Update the person model with user input data
            this.data.person = $(e.target).serializeObject();

            // Validate the model
            this.validate(this.data.person);

            // Re-render the template
            this.render();

            $(window).scrollTop(0);
            $('.validation-error:first').focus();
        }
    };
    
Form.init();
}(this, jQuery, Handlebars));

