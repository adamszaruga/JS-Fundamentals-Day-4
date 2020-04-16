
class LFGQueue {
    constructor() {
        this.queue = [];
    }

    addPlayer(player, time) {
        // This method should add the given player to the queue.
        // Then, it should call pruneQueue() (see below)
        // Then, it should call announceQueue() (see below)
        // HINT - maybe use an object to group the player with their LFG time before adding them to the queue

    }

    clearQueue() {
        // This method should remove everyone from the queue
    }

    pruneQueue(time) {
        // This method should remove everyone who has been waiting more than 60 minutes before the prune time
    }

    announceQueue() {
        // This method should console.log() a message that describes the current queue.
        // If there's no one in the queue, the message should say as much
        // If there are some players in the queue, it should mention everyone (prepended with an @, like in discord)
    }
    
}



// DON'T EDIT THE LINES BELOW! Read the comments to see if your code above is working properly


let myLFGQueue = new LFGQueue()

myLFGQueue.announceQueue(); // Should announce that there's no one in the queue

// Should add this player to the queue and announce the whole queue
myLFGQueue.addPlayer('ill justice lli', 900)// 900 minutes into the day, i.e. 3PM

// Should add this player to the queue and announce the whole queue (which should have two players in it)
myLFGQueue.addPlayer('shotzzy', 930)// 930 minutes into the day, i.e. 3:30PM

// Should add this player to the queue, boot Justice from the queue (because it's been more than an hour), and announce the whole queue
myLFGQueue.addPlayer('iimitz', 980)// 980 minutes into the day, i.e. 4:20PM

myLFGQueue.clearQueue(); // Should kick everyone out of the queue

myLFGQueue.announceQueue(); // Should announce that there's no one in the queue