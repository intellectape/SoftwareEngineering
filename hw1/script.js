/** 
 * This file is edited by:
 * Name: Aditya Bhardwaj
 * Unity ID: abhardw2
 * 
 * I am using github.com in this script file instead of github.ncsu.edu!
 */

var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS
/// Please fill the <token number> and <user name> details
var token = "token " + "<token number>";
var userId = "<user name>";

var urlRoot = "https://api.github.com";

// Receiving Command Line Argument to run the command
var args = process.argv.slice(2);
switch (args[0]) {
    case 'get-repo':
        getYourRepos(userId);
        break;
    case 'list-branches':
        listBranches(userId, args[1]);
        break;
    case 'create-repo':
        createRepo(args[1], 'Created New Repo using script.js');
        break;
    case 'create-issue':
        createIssue(userId, args[1], 'My New Test Issue', 'Yay! Testing Issue 101');
        break;
    case 'edit-repo':
        editRepo(userId, args[1]);
        break;
    case 'list-react':
        var numberValue = args[2];
        listReactions(userId, args[1], numberValue);
        break;
    default:
        console.log('Write right option!');
        break;
}

// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

/**
 * Function to get all the repository listed for a user
 * 
 */
function getYourRepos(userName) {

    var options = {
        url: urlRoot + '/users/' + userName + "/repos",
        method: 'GET',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        var obj = JSON.parse(body);
        console.log(obj);
        for (var i = 0; i < obj.length; i++) {
            var name = obj[i].name;
            console.log(name);
        }
    });

}

// Curl Code:
// curl --request GET -H "Authorization: token b695e1306cf7476905f7448fbeddc4bc6d5e8995" https://api.github.com/repos/intellectape/ng2-fundamentals
function listBranches(owner, repo) {
    var options = {
        url: urlRoot + '/repos/' + owner + '/' + repo + '/branches',
        method: 'GET',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        var obj = JSON.parse(body);
        //console.log(obj);
        for (var i = 0; i < obj.length; i++) {
            var name = obj[i].name;
            console.log(name);
        }
    });

}

/**
 * Function to create a new repository on GitHub
 * Curl Code:
 * curl -XPOST -H 'Authorization: token b695e1306cf7476905f7448fbeddc4bc6d5e8995' -d '{"name":"new-repo-test","description":"created new repo using curl"}' https://api.github.com/user/repos 
 */
function createRepo(user, name, description) {
    var options = {
        url: urlRoot + '/user/repos',
        method: 'POST',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "name": name,
            "description": description,
            "private": false
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        console.log(body.name, body.description);
    });

}

/**
 * Function to create issues in a repostiory given the issue support is activated in the repository
 * Curl Code:
 * curl -XPOST -H 'Authorization: token b695e1306cf7476905f7448fbeddc4bc6d5e8995' -d '{"title":"my first issue", "body":"created issue with curl"}' https://api.github.com/repos/intellectape/ng2-fundamentals/issues
 */

function createIssue(owner, repo, title, content) {
    var createIssue = {
        "name": title,
        "body": content
    };
    var options = {
        url: urlRoot + '/repos/' + owner + '/' + repo + '/issues',
        method: 'POST',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "title": title,
            "body": content,
            "assignee": owner,
            "labels": ['bug', 'testCase']
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        console.log(body.name, body.description);
        console.log(response.statusCode, response.statusMessage);
    });

}


/** Function to edit Repository to have wiki support
 * Curl Code:
 * curl --request PATCH -H "Authorization: token b695e1306cf7476905f7448fbeddc4bc6d5e8995" --data '{"name":"new-repo-test","has_issues":"false", has_wiki}' https://api.github.com/repos/intellectape/ng2-fundamentals
 */
function editRepo(owner, repo) {
    var options = {
        url: urlRoot + '/repos/' + owner + '/' + repo,
        method: 'PATCH',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "name": repo,
            "has_wiki": "true",
            "has_issues": "false"
        }
    };
    console.log(options);

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        console.log(body.name, body.description);
        console.log(response.statusCode, response.statusMessage);
    });

}


// Function to list all the reactions to an issue in repository
function listReactions(owner, repo, numbers) {
    var options = {
        url: urlRoot + '/repos/' + owner + '/' + repo + "/issues/" + numbers + "/reactions",
        method: 'GET',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Accept": "application/vnd.github.squirrel-girl-preview",
            "Authorization": token
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function(error, response, body) {
        var obj = JSON.parse(body);

        for (var i = 0; i < obj.length; i++) {
            var issueID = obj[i].id;
            var content = obj[i].content;
            console.log("Issue ID: " + issueID, "Reaction: " + content);
        }
    });

}