(function () {
    const Coin = {
        state: 0,
        flip: function () {
            // 1. Randomly set your coin object's "state" property to be either 
            //    0 or 1: use "this.state" to access the "state" property on this object.
            if (Math.random() >= 0.5) {
                this.state = 1; // Tails
            } else {
                this.state = 0; // Heads
            }
        },
        toString: function () {
            // 2. Return the string "Heads" or "Tails", depending on whether
            //    "this.state" is 0 or 1.
            if(this.state) {
                return "Tails";
            } else {
                return "Heads";
            }
        },
        toHTML: function () {
            const image = document.createElement('img');
            // 3. Set the properties of this image element to show either face-up
            //    or face-down, depending on whether this.state is 0 or 1.
           /* */
            if (this.state) {
                image.src = "./assets/images/tails.jpeg"; //assets\images\heads.jpeg
                image.setAttribute('id', 'heads-down');
                image.style.height = '35px';
            } else {
                image.src = "./assets/images/heads.jpeg";
                image.setAttribute('id', 'heads-up');
                image.style.height = '35px';
            }
            //document.body.appendChild(image);
            return image;
            
        }
    };
    function display20Flips() {
        const results = [];
        // 4. Use a loop to flip the coin 20 times, each time displaying the result 
        // of the flip as a string on the page.  After your loop completes, return an array with 
        // the result of each flip.
        for(let i = 0; i < 20; i++) {
            Coin.flip();
            results.push(Coin.toString());
        }
        let newDiv = document.createElement('div');
        newDiv.textContent = results;
        newDiv.setAttribute('id', 'flip-result');
        document.body.appendChild(newDiv);
        return;
    }

    function display20Images() {
        const results = [];
        // 5. Use a loop to flip the coin 20 times, and display the results of each 
        // flip as an image on the page.  After your loop completes, return an array with result 
        // of each flip.
        for (let i = 0; i < 20; i++) {
            Coin.flip();
            results.push(Coin.toString());
            document.body.appendChild(Coin.toHTML());
        }

        let newDiv = document.createElement('div');
        newDiv.textContent = results;
        newDiv.setAttribute('id', 'flip-result');
        document.body.appendChild(newDiv);

        return;
    }

    //let newDiv = document.createElement("div");
    //newDiv.innerHTML = "Hello";
    //let containerElement = document.querySelector("#container");
    //containerElement.innerHTML = ".././images/heads.jpeg";
    //containerElement
    //Coin.flip();
    //console.log(Coin.state);
    //console.log(Coin.toString());
    //display20Flips();
    //Coin.toHTML();
    display20Images();

    
})();