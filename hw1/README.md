# HW1
## Name: Aditya Bhardwaj	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;	UNITY ID: ABHARDW2


## REST - [60 POINTS]

### There is need to update the username and token number in order for code to run. Apart from that, please run: ```npm install``` to run the node modules which are supported by the script.
I have added the command line arguments in order to ease the testing of code.

* **List the *branches* in a repository:**
	* To run the code in JavaScript:
		* ```node script.js list-branches <repo-name>```
* **Create a *new* repository:**	
	* To run the code in JavaScript:
		* ```node script.js create-repo <repo-name>```
* **Creating an *issue* in repository:**
	* To run the code in JavaScript:
		* ```node script.js create-issue <repo-name>```
* **Code for *Editing* in repository:**
	* To run the code in JavaScript:
		* ```node script.js edit-repo <repo-name>```
* **Code for *listing reactions* in an issue in repository:**
	* To run the code in JavaScript:
		* ```node script.js list-react <repo-name> <issue-number>```

		
## About ME - [20 POINTS]
### [Click on this link to open the About Me Page.](https://pages.github.ncsu.edu/abhardw2/HW1/AboutMe.html)



## CONCEPTS - [20 POINTS]

|**1. Explain some additional concerns related to using REST apis.**|
|:----------------|
|**Answer:**|
|**1. Little Agreement on exact meaning of RESTful API:** There is different format being followed by different companies. For example, for a company X, they have Status Code 200 OK for certain request and company Y will send Status Code 201 Created for the request. There is lot of **ambiguity** around sending HTTP status code. |
|**2. REST Vocabulary not fully supported:** Due to the freedom which comes with REST API's, some companies might have limited usage of Vocabulary or no usage of certain response codes. For example, company X only needs GET, PUT and DELETE so it doesn't have need for the POST, PATCH and other vocabulary. Similarly, some company Y might have some restrictions on the use of PUT and DELETE.|
|**3. RESTful API are hard to debug:** They are very hard to debug due involvement of various factors in debugging a REST API. Such factors includes:	* HTTP request method,  	*	Request Address, 	* Response code, 		* Message, etc.|
|**4. RESTful API are usually tied to HTTP protocol:** Moving RESTful API from HTTP to some other transmission method requires disentangling and restructuringg information from different locations which are used to encode the full meaning of RESTful APIs.|
|***Read and answered with the help from the following resource [link](https://mmikowski.github.io/the_lie/).|


|**2. Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language. See http://graphql.org/ for details.**|
|:-----------------|
|**Answer:**|
|*** Referred to this [link](https://www.wisdomgeek.com/web-development/hello-graphql-using-express/) for answering the question.|
<table>
	<tbody>
		<tr align="center">
			<th>API'S</th>
			<th>Differences</th>
		</tr>
		<tr>
		<td align="center">RESTful API</td>
		<td>
		<ul>
			<b>ShortComings:</b>
			<li>While adding a new model to the API, there is need to add multiple methods to fetch the corresponding data. </li>
			<li>To fetch complex data, REST api needs to talk to multiple endpoints.  </li>
			<li>Sometimes API sends unneccessary information along with the needed information due to it's endopoints. </li>
			<b>Advantages over Graph QL:</b>
			<li>There is no need to know the structure beforehand unlike Graph QL which is strongly typed.</li>
			<li>It doesn't need any library or extension to interpret the code structure whereas there are libraries for Graph QL to be interpreted in the languages which it supports.</li>
		</ul>
		</td>
		</tr>
		<tr>
		<td align="center">Graph QL</td>
		<td>
		<ul>
			<b>Advantages over RESTful APIs:</b>
			<li>It ensures that a person is not over-fetching or under-fetching the data from the server. It means you are always fetching the needed data not all the data being returned by the Endpoints.</li>
			<li>It saves network bandwidth, hence, becoming key factor for developing application for low bandwidth areas.</li>
			<li>The strong type system and declarative ways to fetch data helps in understanding what data is being fetched using the API.</li>
		</ul>
		</td>
		</tr>
		<tr>
		</tr>
	</tbody>
</table>