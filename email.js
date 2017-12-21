const request = require('request');

module.exports = function(context, cb) {
  to = context.body.to;
  subject = context.body.subject;
  body = context.body.body;

  postBody = {
    "personalizations": [
      {
        "to": [
          {
            "email": `${to}`
          }
        ],
        "subject": `${subject}`
      }
    ],
    "from": {
      "email": "jamiekaw@comcast.net"
    },
    "content": [
      {
        "type": "text/plain",
        "value": `${body}`
      }
    ]
  };

  postOptions = {
    method: 'post',
    json: true,
    body: postBody,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${context.secrets.SENDGRID_API_KEY}`
    },
    url: 'https://api.sendgrid.com/v3/mail/send'
  };

  request.post(postOptions, function (err, res, body) {
  });
};
