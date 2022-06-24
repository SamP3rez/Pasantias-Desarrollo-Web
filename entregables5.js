// Objeto THIS.
//Mas antigua.
var obj = {
    foo: function () { return 'foo'},
    bar: function () {
        var that = this;
        document.addEventListener('click', function (event) {
            that.foo()
        })
    }
}

//Despues asi.

var obj = {
    foo: function () { return 'foo'},
    bar: function () {
        document.addEventListener('click', function (event) {
            this.foo()
        }).bind(this)
    }
}

//Ahora se puede simplificar mucho mas.

var obj = {
    foo: function () { return 'foo'},
    bar: function () {
        var that = this;
        document.addEventListener('click', event => this.foo())
    }
}



