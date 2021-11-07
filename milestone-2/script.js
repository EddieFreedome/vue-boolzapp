/*Milestone 1

● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse

● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

Milestone 2

● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione

● Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3

● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde

● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4

● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina) */

const vm = new Vue({
    el: '#root',
    data:{
        contacts: [
            {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
        ],
        activeChat: {},
        newMessage: "",
        filterText: "",
    },
    methods: {
        
        createImgPath(avatar) {
            return `img/avatar${avatar}.jpg`;
          },

        getFilteredData() {
            if (!this.filterText) {
              return this.contacts;
            }
            return this.contacts.filter((contact) => {
                // nome dell'utente attuale contiene il testo ricercato
                return contact.name
                  .toLowerCase()
                  .includes(this.filterText.toLowerCase().trim());
              });
        },

        //serve per richiamare i dati coririspondenti agli ultimi messaggi in una volta
        //sola, potendo unire sia il primo ciclo v-for nelle anteprime, sia il riquadro a dx
        getLastMessage(messages) {
            // esistono messaggi?
            if (messages.length === 0) {
              return "";
            }
            const message = messages[messages.length - 1].text;

        return message; //.slice(0, 20)
        },

        
        //funzione per attivare la chat in focus
        onChatClick(chatDaAttivare) {
            this.activeChat = chatDaAttivare;
            this.scrollToBottom();
          },
    
        
          //funzione per impostare la chat attiva predefinita
        created() {
            this.activeChat = this.chatList[0];
          },
    
    
    }

  })