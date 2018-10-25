//shows modal container
const showModal = function (e) {
    e.preventDefault();
    $('.modal-container').show();
}
//hides modal container
const hideModal = function (e) {
    e.preventDefault();
    $('.modal-container').hide();
}
//saves value of the textarea when tweet button is pressed, and hides modal container
const saveTweet = function (e) {
    e.preventDefault();
    const inputTweet = $('#tweetmaker').val();
    $('#tweetmaker').val('')
    hideModal(e);
    // renders data saved with save tweet function, as well as username of tweeter
    const tweetData = {
        tweet: inputTweet,
        userName: 'Prince Zuko',
    }
    $.post('/api/tweet', tweetData)
        .then(function (data) {
            render(data)
        })

}
// copied the html structure of each tweet, and re-renders it each time the tweet button is pressed. Also saves the database id
//of each tweet for later use
const render = function (tweetText) {
    $('.center-feed').append(` <div> <div class=tweetmain>
        <img id="profile2" src="https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142"
            alt="picture of me" height="50px" width="50px" />
            <i data-id=${tweetText._id} id='delete' class="fas fa-trash-alt"></i>
        <h1 class='identity2'>Prince Zuko</h1> <span class='tag'> @Zuko Oct 2018</span>

        <p class='tweets'>${tweetText.tweet} </p> 
        </div>

    </div>`)
}
// using the database id, creates a delete route that targets a tweet by an ID and deletes it if a button is pressed. Delete method is used because there is no .delete. Then re-renders the tweets from database
//without the one that was deleted
$('.center-feed').on('click', '#delete', function () {
    const id = $(this).data('id')
    $.ajax({
            method: 'delete',
            url: `/api/tweet/${id}`

        })
        .then(getTweet());
})
//targets tweet button on homepage to show modal window when pressed
$('#newTweet').on('click', showModal);
//closes modal window when x button is pressed on that window
$('.close-modal').on('click', hideModal);
//closes modal window when tweet is made
$('#tweetpost').on('click', saveTweet);


//get route, that pulls the tweet data from database, and renders it to the page as individual tweets. Creates a timeline of tweets by looping through all the tweets in database.
const getTweet = function () {
    $('.center-feed').empty()
    $.get('/api/tweet')
        .then(function (serverData) {
            for (let i = 0; i < serverData.length; i++) {
                render(serverData[i]);
            }
        })
}
getTweet();