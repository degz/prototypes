var url  = require('url');
var qs = require('querystring')

module.exports = {
    process : function (req) {
        var userreq = {app: 'NA', op: 'NA'};

        if(req.method=='POST') {
            console.log('This is a POST');
            var body='';

            req.on('data', function (data) {
                body +=data;
            });

            req.on('end',function(){
                var POST =  qs.parse(body);
                console.log(POST);
            });
        } else if(req.method=='GET') {
            console.log('This is a GET');

            var url_parts = url.parse(req.url, true);
            var query = url_parts.query;
            console.log(query); //{Object} - All query params

            userreq.app = query.app;
            userreq.op = query.op;
        }

        return userreq;
    }
};
