# twitterclone-w-comments

For my first project, I was tasked with creating a basic clone of twitter. The clone had to match a twitter template that was given, and allow the user to make tweets that posted on the page when a tweet button was pressed. The first action that I took was to build the HTML framework and style it with CSS, to look like a twitter page. While doing this I learned some useful tips to help speed up or ease this process for my next major project. The first one is moving elements in the page with CSS. Instead of trying to position them with CSS, one can go into their console, and find out the exact measurements that are needed, instead of running several tests that slightly alter the position of something, such as a picture. The second thing I learned was to give every single element on my HTML a class or id. While it may not be necessary at first, adding javascript and a server may change the styling of the page, so it is better to have it to start with, so if one needs to manipulate something, it is easily done. Finally, I learned that the human mind can always find something wrong. There is such a thing as spending too much time, especially on styling, and it is important to know when to stop working, and be satisfied with your product. 

The second part of my project was creating a back end to the website, by using a server, and creating a database in Mongo to store information about my tweets. It seemed really intimidating at first, but alot of creating a server is repeatable, and ends being almost identical for almost all servers that you will create. The only things that really change are the specific schemas that are created, and the different requirements for those schemas. The names of the routes will change based on the project, as will the html routes, depending on how large the scale is for your project. For this one, I only had 1 HTML route, and my schema only had two parameters, a username and a password. One of the challenges for this project, was to create a delete route, that would delete tweets from the database and the page when it was used. One of the most important takeaways from this project is how much resource is already out there. The route I used was 

app.delete('/api/tweet/:id', function (req, res, next) {
        db.Tweet.findByIdAndRemove({
                _id: req.params.id
            }),
            
  which is a mongoose method, that targets a database entry by its unique ID and then deletes it. It is really important to remember to use the internet as much as possible, and especially when you get stuck, as someone may have had the same problem and already solved it.
  
  Once I was able to get the routes working, it was time to connect the front end and back end with javascript. I used Jquery extensively, to create functions that allowed me to manipulate the HTML elements that I had already created. In particular, I created a render function that simply appended my HTML styling for each tweet, as each tweet was created. For the delete route, I was able to use the render functionality to repeatedly create a delete button on each tweet, and then run a delete method with ajax to delete tweets by their unique ID. 
  
  
  $('.center-feed').on('click', '#delete', function () {
    const id = $(this).data('id')
    $.ajax({
            method: 'delete',
            url: `/api/tweet/${id}`

        })
        
  That is a sunmary of my project, and what I had to do to build it. Special Thanks to all my insttructors, who helped me along the way.
