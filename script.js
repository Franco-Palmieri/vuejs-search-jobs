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
            //funzione per collegare index a jobIndex
            selectIndex: function (index){
                this.jobIndex = index;
            },
            //Funzione per selezionare i preferiti
            getStarredClass: function (jobIndex){
                if (this.starred.includes(jobIndex)){
                    return "fas fa-star"
                }else{
                    return "far fa-star"
                }
            },
            //Funzione per aggiungere l'index
            //nell'array dei preferiti
            addStarred: function (jobIndex){
                this.starred.push(jobIndex);
            },
            //Funzione per candidarsi ritornando un'altra classe
            //quando sia selezionato e modificare il colore
            getAppliedClass: function(jobIndex){
                if(this.applied.includes(jobIndex)){
                    return "selected"
                }
            },
            //Funzione per candidarsi
            addApplied: function (jobIndex){
                this.applied.push(jobIndex);
                if (this.starred.includes(jobIndex)){
                    this.starred.splice(jobIndex, 1)
                }
            }
        },
    }
);