module.exports = {
    login : function (user) {
        console.log('li.login');
    },

    getProfile : function(user) {
        this.login(user);
        console.log('li.getProfile');
    },

    getFriends : function(user) {
        this.login(user);
        console.log('li.getFriends');
    },

    getJobs : function(user, userprefs) {
        this.login(user);
        console.log('li.getJobs');
    },

    process : function(op, input) {
        if(op == 'login') { this.login(input);
        } else if(op == 'getProfile') { this.getProfile(input);
        } else if(op == 'getFriends') { this.getFriends(input);
        } else if(op == 'getJobs') { this.getJobs(input);
        } else { console.log('li: Invalid operation')
        }
    }
};