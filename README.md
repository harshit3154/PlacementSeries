<!-- # PlacementSeries
All the notes related to placement

HTML stands for Hyper Text Markup Language is the standard language for making website.

CSS stands for Cascading Style Sheets is used for handling presentation of webpage.It make our website colorful and stylish
selector{
    property : value;
}

group of selector{
 group of property : value;
}

inline css is added to the element directly using style attribute
internal css is kept inside the head tag in <Style> tag
external css is kept inside seprate file xyz.css and is include in head tag using <link rel="stylesheet" src="xyz.css">

priority : inline css>(external css,internal css)
!important increases the precedence.

css selector is used to find the element in markup or target element it can be 
any tag name css element selector eg p,h1,h2 etc or 
.class_name class selector or 
#id_name id selector

Javascript/backend is the brain of the website.It is used for performing the logical task in website such as performing the password validation check.It handle clicking typing and all the event action.
website work on client-server architecture,
In this html give structure to the request,
CSS beautify the content and
backand apply logic (javascript,php,nodejs,python,react)
all the three can be embeded in the single file,
or it can be segregated int different file known as internal
and external css.


server respone 404 mean not found error


Basic structure of webpage.
<!DOCTYPE html>
<html lang="eng">
<head>

<meta charset="UTF-8">
 it describe type of encoding 
<meta name="view-port" content="width=device-width, initial-scale=1.0">
<meta name="description" content="This is description">
<meta name="keywords" content="html,how to create html page,web development">
<meta name="robots" content="INDEX,FOLLOW">

<p></p> this is a pargraph tag
<strong></strong> or<b></b>This is a strong tag used for making text bold.
<em></em> or <i></i>This tag is used for making tag italic.
<br> or <br/>This tag is used for giving the line break.
<hr> this line introduces horizotal tag.

list tag are of two type 
orderedlist and unordered list
<ul><li></li>...</ul>
<ol><li></li>..<ol>
with attribute type having value 
A, a, i, I,1 for ol
and disc,sqare and circle for ul.

table tag <table></table>
has row with tag <tr></tr> and column with <td></td> also representing
table data and attribute such as border and padding can be adjusted with css
also border has attribute border-collapse which has value collapse and seprate.


<a href="#"></a>
<a href="#" target="_blank"></a>
anchor tag is used to take the user to desired website with the 
attribute href having the site link and target having value "_blank"
to open the website in the new webpage

form tag is the most basic thing in html
we uses input tag in the form to take input
with attribute that can be
text
submit
reset
textarea
radio  we can click only one radio button with samename
checkbox has option checked so that it can be checked automatically 
email
password text become invisible
date  we can select date
datetime provide box to fill datetime
number only accept number
select option has option tag for multiple option
<select><option></option><option selected></option>....</select>


block element occupy the whole width eg: paragraph, heading, ul ,ol,div and it start from new row
inlie element occupy the required width eg: span,strong,em,a,img


there is difference between id and class though both of them of them are use to represent 
object but class may represent a group of object but id is used to represent a specific object.

&nbsp(non breakable space) is used to print spaces in html.
&lt is used for <
&gt is used for >
&pound is used for symobl of pound
&copyright is used for symobol of copy
adding external css in html
<link rel="stylesheet" href="harshit.css">

adding external javascript 
<script src="harry.js"></script>
<title>document</tilte>
<body>
this is a body.
</body>
</html> -->