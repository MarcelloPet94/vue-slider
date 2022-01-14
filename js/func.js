let app = new Vue ({
    el: "#vueApp",
    data:
    {
        attiva: 0,
        items : [  
            'img/01.jpg',
            'img/02.jpg',
            'img/03.jpg',
            'img/04.jpg',
            'img/05.jpg'
        ]
    },
    methods:
    {
        attivaClasse : function(indiceImg)
        {
            if(indiceImg == this.attiva)
            {
                return "active";
            }
            return "";
        },
        nextImg : function()
        {
            this.attiva++;
            if(this.attiva == this.items.length)
            {
                this.attiva = 0
            }
        },
        prevImg : function()
        {
            this.attiva--;
            if(this.attiva < 0)
            {
                this.attiva = this.items.length - 1;
                console.log(this.attiva = this.items.length - 1)
            }
        }
    }
});
