const app = new Vue(
    {
        el: '#app',
        data: {
            jobs: [
                {
                  id: 1,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                },  
                {
                    id: 2,
                    company: 'Azienda Due',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Milano',
                    contract: 'Full Time'
                },  
                {
                    id: 3,
                    company: 'Azienda 3',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Genova',
                    contract: 'Full Time'
                }, 
                {
                    id: 4,
                    company: 'Azienda 4',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Frosinone',
                    contract: 'Full Time'
                }, 
                {
                    id: 5,
                    company: 'Azienda 5',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Torino',
                    contract: 'Full Time'
                }, 
            ],
            starred: [1, 2, 3],
            applied: [4, 5],
            jobIndex: 0,
        },
        methods: {
            //Funzione per selezionare i preferiti
            getStarredClass: function (jobid){
                if (this.starred.includes(jobid)){
                    return "fas fa-star"
                }else{
                    return "far fa-star"
                }
            },
            //Funzione per aggiungere l'id
            //nell'array dei preferiti
            addStarred: function (jobid){                
                if(this.starred.includes(jobid)){
                    this.starred = this.starred.filter(e=> e !== jobid);
                }else{
                    this.starred.push(jobid);
                }
            },
            //Funzione per candidarsi ritornando un'altra classe
            //quando sia selezionato e modificare il colore
            getAppliedClass: function(jobid){
                if(this.applied.includes(jobid)){
                    return "selected"
                }
            },
            //Funzione per candidarsi
            addApplied: function (jobid){
                if (this.applied.includes(jobid)){
                    this.starred = this.starred.filter(e => e !== jobid);
                    this.applied = this.applied.filter(e => e !== jobid);
                }else{
                    this.applied.push(jobid);
                    alert("ti sei candidato correttamente");
                    this.starred = this.starred.filter(e => e !== jobid);
                }
                
                
            },
        },
    }
);