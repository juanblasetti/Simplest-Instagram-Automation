// Unfollow Ig Accounts

{
//This getRandomInt function will generate a random pause between performing each action.
	function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

    let i = 0;
    const followInterval = setInterval(() => {
    // Here I set the max amount of followers to 200, you can change that number
        if (i >= 200) {
            clearInterval(followInterval);
            return;
        }
        const buttons = document.querySelectorAll('button');
        const nextButton = buttons[i];   // If You want to unfollow from the oldest followed = const nextButton = buttons[400-i];
        nextButton.click();
        document.querySelector('button.aOOlW.-Cab_').click()    // This line confirms that you want to unfollow an account
        i += 1;
    }, getRandomInt(45000,60000))
    // Here at the end ^^^^^^ we have the random miliseconds pause between each action. You can also play with those numbers
}


//  Do not let this running all day. Instagram knows you have to sleep at some point. 
//  If you want to let this run forever you can add a big pause at the end of the loop to simulate some hours of sleep.
//  I may be adding that later
// Or maybe doing a Google Chrome Extension so there is no need to copy and paste this.
