const config = require('config.json');
const jwt = require('jsonwebtoken');

/*
// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' },
               { id: 2, username: 'prateek1106', password: 'prateek123', firstName: 'Prateek', lastName: 'Sharma' },
               { id: 3, username: 'krishna69', password: 'krishna123', firstName: 'Krishna', lastName: 'Kishore' },
                ];
*/

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password },users) {

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {
        ...omitPassword(user),
        token
    };
    
}

async function signup({ username, password },users) {

    const user = users.find(u => u.username === username && u.password === password);
    //console.log("ok");
    const userProfile = require("../models/user");

    if (!user) {
        const u = new userProfile( {
                id: 7,
                username: username,
                password: password,
                firstName: 'Prateek',
                lastName: 'Sharma',
                wallet: 100,
                email: 'prateeksharma7599@gmail.com',
                stocks:[]
            });
            u.save((err,us) => {
                if(err)
                    console.log(err);
                else{
                    console.log("New User added!");
                }
            });

            return u;
    } else {
        return user;
    }

}


async function getAll(users) {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
