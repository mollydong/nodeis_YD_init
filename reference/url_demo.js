const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello/html?id=100&status=active');

// Seiralize URL
console.log('seiralize url ' + myUrl.href);
console.log('seiralize url ' + myUrl.toString());

// Host(root domain)
console.log('host ' + myUrl.host);

// Hostname(does not get port)
console.log('host name ' + myUrl.hostname);

// Pathname
console.log('path name' + myUrl.pathname);

// Seiralized query
console.log('serialized query ' + myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(name + ':' + value));


// Add params
myUrl.searchParams.append('abs', '123');
console.log(myUrl.searchParams);
