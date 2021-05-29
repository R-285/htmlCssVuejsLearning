/*це глобальный фильтр*/
Vue.filter ('capitalize', function(value){
    if (!value) return ''       /*Если value пустое*/
    value = value.toString()    /*конвертируем в строку*/
    return value.replace(/\b\w/g, function (l) {return l.toUpperCase()})
    /* /\b\w/g - regex на взятие каждого первого символа которая отправляет его в функцию ,которая возвращает его в верхнем регистре*/
})

Vue.component ('app-car', {
    data: function (){
        return {
            cars: [
                {model: "BMW"},
                {model: "Volvo"},
                {model: "Mercedes-Benz"},
                {model: "Ford"},
                {model: "Audi"},
                {model: "Siat"},
                {model: "Fiat"},
            ]
        }
    },
    template: '<div><div class="car" v-for="car in cars"> <p>{{car.model}}</p> </div></div>'
});

new Vue({
    el: '#app',
    data: {
        title: "Hello World!",
        styleCSS: ''
    },
    methods: {
        changeText(){
            this.title='Какой либо новый текст'
        }
    }
});

new Vue({
    el: '#anotherApp',
    data: {
        value: 1,
    },
    methods: {
        increment (value) {
            this.value = value;
            if (value == 25)        /*Когда ввели 25*/
                alert("Число 25 - выигрышное")
        }
    },
    computed: {
        doubleValue() {
            return this.value*2;
        }
    }
});

new Vue({
    el: '#oneMoreApp',
    data: {
        show: true,
        message: 'Hello world, hello',
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "Audi", speed: 240.21},
            {model: "Mercedes-Benz AMG", speed: 350.4},
            {model: "Ford", speed: 160.5},
        ]
    },
    computed: {
        showMess(){
            return this.message.toUpperCase();
        }
    },
    filters: {
        lowercase (value){
            return value.toLowerCase();
        }
    }
});

new Vue({
    el: '#someComponents',
    data: {

    }
})