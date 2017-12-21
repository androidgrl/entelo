This is an email sending app.

Send an email by sending a POST request to:
```
https://wt-ef1076c433904629e7e6e8ff788f9711-0.run.webtask.io/email
```

With a JSON payload of:

```
{
  "to":"example@example.com",
  "subject":"Greetings",
  "body":"Hope you have a Happy Holiday season!"
}
```

This code is hosted on [Webtask.io](https://webtask.io/), which is a function-as-a-service "serverless" platform.
Therefore, I did not have to deploy to a server.

It uses the [Sendgrid API](https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html) to send the email.
I did not import Sendgrid's node.js library because it was a simple request and
the JSON could be composed easily without a library.
