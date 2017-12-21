const request = require('request');

const formatPostOptions = (context) => {
  return new Promise (function (fulfill, reject) {
    to = context.body.to;
    subject = context.body.subject;
    body = context.body.body;

    postBody = {
      "personalizations": [{
        "to": [{"email": `${to}`}],
        "subject": `${subject}`
      }],
      "from": {"email": "jamiekaw@comcast.net"},
      "content": [{
        "type": "text/plain",
        "value": `${body}`
      }]
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

    fulfill(postOptions);
  });
};

const postRequest = (postOptions) => {
  return new Promise (function (fulfill, reject) {
    request.post(postOptions, function (err, res, body) {
    });
  });
};

module.exports = function(context, cb) {
  formatPostOptions(context)
    .then(postRequest)
    .then(cb("Email sent"));
};
