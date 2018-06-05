class Card{
    constructor(value, suit){
        this.val = value
        this.suit = suit
    }
 }
 
 class Deck{
        constructor(){
            this.cards = []
            suits = ['clubs', 'hearts', 'spades', 'diamonds']
            values = [2, 3, 4, 5, 6, 7, 8, 9 ,10, 'Jack', 'Queen', 'King', 'Ace']
 
            for(let i = 0; i < suits.length; i++)
                for(let j = 0; j < values.length; j++){
                    card = new Card(values[j], suits[i])
                    this.cards.push(card)
                }
        }
 
        countCards(){
            for(let x = 0; x < this.cards.length; x++)
                console.log(this.cards[x].val + ' of ' + this.cards[x].suit)
            
            return this
        }
 }
 
 newdeck = new Deck()
 