var myjson = "./json/cv.json";
var app = new Vue({
    el: '#miapp',
    data: {
      jsonEsp: null,
      jsonEn: null,
      json: null,
      esp: true,
      show: true,
      cargado: false
    }, 
    mounted()
    {
        setTimeout(this.getJson, 3000);
    },

    methods:{
        getJson: function() {
            axios.get(myjson).then(response => {
                this.cargado=true;
                this.jsonEsp = response.data.cv[0];
                this.jsonEn = response.data.cv[1];
                this.json = this.jsonEsp;
            });
            
        },   

        jsonIdiomaEsp: function()
        {
            this.esp = true;
            this.json = this.jsonEsp;
        },

        jsonIdiomaEn: function()
        {
            this.esp = false;
            this.json = this.jsonEn;
        }


        

    },
    computed:{
        sobre: function()
        {
            var sobre= "";
            if (this.esp){
                sobre = "Sobre mi";
            } else{
                sobre = "About me";
            }
            return sobre;
        },

        basic: function(){
            var basic = "";
            if (this.esp){
                basic = "Información Básica";
            } else{
                basic = "Basic Information";
            }
            return basic;
        },

        skill: function(){
            var skill = "";
            if (this.esp){
                skill = "Habilidades";
            } else{
                skill = "Skills";
            }
            return skill;
        },

        project: function(){
            var project = "";
            if (this.esp){
                project = "Proyectos";
            } else{
                project = "Projects";
            }
            return project;
        },

        experience: function(){
            var experience = "";
            if (this.esp){
                experience = "Experiencia";
            } else{
                experience = "Experience";
            }
            return experience;
        },

        education: function(){
            var education = "";
            if (this.esp){
                education = "Educación";
            } else{
                education = "Education";
            }
            return education;
        },

        language: function(){
            var language = "";
            if (this.esp){
                language = "Idiomas";
            } else{
                language = "Languages";
            }
            return language;
        },

        reference: function(){
            var reference = "";
            if (this.esp){
                reference = "Referencias";
            } else{
                reference = "References";
            }
            return reference;
        },

        contact: function(){
            var contact = "";
            if (this.esp){
                contact = "Contáctame";
            } else{
                contact = "Contact Me";
            }
            return contact;
        },

           
    }
  })