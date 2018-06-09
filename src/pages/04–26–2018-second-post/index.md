---
path: "/second-post"
date: "2018-04-26"
title: "The fall of the Melo empire"
---
<br />
<br />

![alt text](https://ojsbasketballthoughts.co.uk/wp-content/uploads/2018/04/Melo-Thunder-Struggle-768x461.jpg)

There was a time when I would hear the name Melo and thought of the 10X NBA all star Melo; the scoring champ
Melo; the 2010 - 2013 New York Melo; the 4X Olypmic gold medalist Melo,the all time team US scorer ; the team
US record holder for 3 points made and single points scored in a game Melo. <br/><br/>
Unfortunately , that time has passed. <br/><br/>
Now when I hear the name Melo, I think of the OKC Melo who's struggling to get pass the first round of playoff
against the Jazz. Looking at the past season's performance, it's clear that he is no longer the dangerous Melo 
that drove fear into the opponents. For the first time in his career he was not invited to the team US tryouts,
he wasn't selected as an all star, etc. But how bad is Melo this year? How big of a change did he experience and 
is he the reason why the Thunder are struggling even though with such a flashy roster? <br/><br/>
Now let's jump right in the data analytics, first I imported the 2017-2018 season player data for Melo from 
[baskerball reference](https://www.basketball-reference.com/), a public site where there's an abundance of player
and team data available for you and can be exported to csv files which makes it so much easier to collect and analyze.

![alt](https://i.imgur.com/OSi6GMz.png)

Whenever I receive a raw dataset it's probably a good idea to clean the data of NaN values or other insufficient 
data. First I wanted to convert the dataset into a python `DataFrame` object for ease of manipulation.Next I want to
check the games that he didn't play, so I removed the games that was shown as `Inactive` or shown as `Did not dress`
 and rename the `DataFrame` object into the name `played`.

![alt](https://i.imgur.com/dpVB7io.png)

Then visualizing the data can be really important and helpful for understanding the data and makes it easier to
analyze it. Here I converted all the dates from the dataframe into `DateTime` objects, so that we can use the 
matplotlib `plot_time` function. Also notice that I mapped all the points into a integers so that the plotting 
function is able to recognize it.

![Imgur](https://i.imgur.com/HXQ1S8G.png)

Using similar methods I have plotted several different graphs to compare Melo's points scored in thunder loss 
or win. 

![Imgur](https://i.imgur.com/pBcJntw.png)
![Imgur](https://i.imgur.com/PWk8FW6.png)
![Imgur](https://i.imgur.com/5I4a20D.png)

Once comparing the points Melo scored when he won and when he lost. Where the blue is where the thunder has won 
and green is where the thunder has lost.

![Imgur](https://i.imgur.com/YtaJAuj.png)

It is not hard to see that the green line has more spots on the bottom or lower compared to the blue one. 









