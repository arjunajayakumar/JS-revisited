// console.log('Before');
// console.log(getUser(1))
// console.log('After')

// function getUser(id, callback) {
//     setTimeout(()=> {
//         console.log('Reading a user from a database');
//         return {id: id, gutHubUsername: 'Arjun'};
//     }, 2000)
// }

// In this case we will not get the user object because the data is not available when we call the function

// There are three patterns to deal with asynchronus code

// 1. Callbacks
// 2. Promises
// 3. Async/Await

// Callback
// console.log('Before');
// getUser(1, function (user) {
//     console.log(user);
//     // Get Repositories
//     getRepositories('Arjun', repo => {
//         getCommits(repo, (commits) => {

//         })
//     })
// })
// console.log('After');

// // Synchronus
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUserName);
// const commits = getomits(repos[0]);
// console.log('After')

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading a user from a database');
//         callback({ id: id, gutHubUsername: 'Arjun' });
//     }, 2000)

// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log('Here is the repositories of', username);
//         callback(['repo1', 'repo2', 'repo3'])
//     }, 2500)

// }

// In Asynchronus code nested callbacks makes weired structure & this is called callback hell

// Named functions

console.log('Before');
getUser(1, getUser)
    getRepositories('Arjun', getRepositories)
        getCommits(repo, displayCommits)
console.log('After');

function displayCommits(commits) {
    console.log(commits);
}

function getUser(user) {
    console.log(User, user);
}

function displayComits(commits) {
    console.log(commits);
}

