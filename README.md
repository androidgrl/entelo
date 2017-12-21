This is an email sending app, that accepts a POST request with an example JSON request payload of:

```
{ to: ‘myemail@example.com’, subject: “hello”, body: “world” }
```

And sends an email using Sendgrid.  This code is hosted on Webtask.io, a function-as-a-service serverless platform.
To use, send a POST request with the above payload to: https://wt-ef1076c433904629e7e6e8ff788f9711-0.run.webtask.io/email
