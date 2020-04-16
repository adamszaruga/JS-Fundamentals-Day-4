let playingCard = {
    suit: 'hearts',
    number: 5,
    isFlipped: false
}

// Make this line console log the number 5 (using the playingCard object above)
console.log()

// Make this line console log the words "The 5 of hearts" (using the playingCard object above)
console.log()


let superNestedObject = {
    first: 'hi',
    second: {
        third: 'hola',
        fourth: {
            fifth: 'sup'
        }
    }
}

// Make this line console log "hi" (using the superNestedObject object above)
console.log()
// Make this line console log "hola" (using the superNestedObject object above)
console.log()
// Make this line console log "sup" (using the superNestedObject object above)
console.log()


let blog = {
    title: 'Why Spring Jumping Wins Games',
    author: 'ill justice lli',
    comments: [
        {
            user: 'frosty',
            text: 'plz join TOX, we need you'
        },
        {
            user: 'brooks',
            text: 'Delete this post now'
        }
    ]
}

// Make this line console log "Delete this post now" (using the blog object above)
console.log()


let rectangle = {
    sideOne: 5,
    sideTwo: 10,
    perimeter: function() {
        return 2*this.sideOne + 2*this.sideTwo
    },
    area: function() {
        // Finish this method so that it returns the area of the rectangle
    }
}

console.log(rectangle.area())