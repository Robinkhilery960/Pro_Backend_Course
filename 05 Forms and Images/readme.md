# Forms and Image upload handling :
This readme files is made upon the notes that I have  taken while I  was learning all of this, to see the raw file please refer to Notes.text in this same repository. 

***

🎯 In this project I have learnt about:
1. How to handle `frontend form `on different request how they behave  
2. `Content-Type header `and its role in express middleware like `express.json() `and `express.urlencoded()` , `express-fileupload `.
3. `FileReader` wep api and its different methods like` FileReader.readAsDataUrl()` etc.
4. `API Vs SDK` what they mean and how they help?
5. `Cloudinary` SaaS 
6. Learn about express middleware like - `express.json() `, `express.urlencoded()`  and `express-fileupload ` how they work . 
7. About `template engine` what they are and how they work and how to configure them in express.js , specially learn about `ejs` template engine major features like how to render variable and use if-else , loops, how to include `sub-templates in ejs`  
8. And the last but not least ` HOW TO READ DOCUMENTATIONS EFFICIENTLY `


## Express.json(options):
This is an built-in middleware function.
express.json() will return you a middleware and that middleware will only parse the body of that request whose content type header have the data type as JSON  

What happen is that you get a request and then express.json() middleware see the content-type header and check that if content type is application/JSON then only i will parses the body of the request . Whatever Unicode  encoding you  have applied this will decode your data ,now a new body object is  created  with Object.create(null) and thus does not have a prototype and populated with the parsed data it may also return you an empty object if there was no data to parse  or the content type not matches or an error occurred
You can also passes the option to  this middleware as parameter [see Here](https://expressjs.com/en/4x/api.html#express.json)

## express.urlencoded(options):
Your post form send the data in this format username=robin&password=khilery an to to parse this data  we will be needing app.use(express.urlencoded({extended:false})).
What happen is that you get a request and then app.use(express.urlencoded({extended:false})) middleware see the content-type header and check that if content type is application/x-www-form-urlencoded then only i will parses the body of the request .  only works for utf=8 encoding  this will decode your data ,now a new body object is created  with Object.create(null) and thus does not have a prototype. and populated with the parsed data it may also return you an empty object if there was no data to parse  or the content type not matches or an error occurred
You can also passes the option to  this middleware as parameter [see Here](https://expressjs.com/en/4x/api.html#express.urlencoded)

## Option object keys of express.json(options) and express.urlencoded(options)
option object  keys :
1. extended: this value will decide that using which library you want to parse request body if false you will go for query string  library and if true you will go for qs library by default its value is true but using the default has been deprecated.The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
2. type: This is used to determine what media type the middleware will parse.
3. parameterLimit:This option controls the maximum number of parameters that are allowed in the URL-encoded data. If a request contains more parameters than this value, an error will be raised.
4. limit:Controls the maximum request body size
5.inflate:Enables or disables handling deflated (compressed) bodies; when disabled, deflated bodies are rejected.
6. verify : a function by default is  set to undefined


## express-fileupload middleware:
This is a 3rd party middleware .
Middleware parses request body with multipart/form-data content type and prepares an array of objects which represent every file which is sent in request.

Other multipart payload  parser for express:
 1. express-fileupload
 2. multer
 3. formidable 

 As of now i will use  express file upload 
although formidable   have 4 dependencies compare to express file upload have 1 dependency    but its weekly downloads are more  , and its size is too small when you  compare with express file upload and it also have 5 maintainer while express file upload have 3.
### express file-upload:
express-file Upload by default it uploads your file to  RAM , using useTempFiles option set to true you can actually  use temporary files - temporary files are rhos files which are created in the hard disk instead of RAM at the time of your softwares runs at RAM  in order too efficiently use Am and to avoid memory leakage 
problems 
if you will not provide temporary  files directory path then you your temp files will be stored at your cwd in folder tmp.For more
[click here](https://www.npmjs.com/package/express-fileupload)
 

Todo: 

1. Learn formidable
2. learn multer 

## SDK VS API :
### API:
 1. api are all about communication , commination between two services ,between two apps etc.
 2. api mean abstraction , you need noe to worry about ho you are receiving the response all you need to know is that how you make the request to that api 
 3. api are standardized - like in case of rest api there to request it you will use a HTTp method , and you will pass some parameters to it and an endpoint will also be needed that will be the url for that api 
 4. response that you will get will be in a json format
### SDK:
1. sdk means software development kit and they are used to call your api instead of calling you  api manually like with the help of HTTP methods sdk gave you some of their own methods through which you call these api     
2. every language will have their sdk to call their api 

## Cloudinary SaaS:
You can upload images to the  cloudinary from the direct browser , server side  and from mobile application also you can upload files to the cloudinary with the help of cloudinary rest api or using one of the sdk of cloudinary which actually wraps this upload api ans makes the things simple for you 
through cloudinary you can also do sign upload and un-sign upload also without authentication signature, generally we uses sdk to  for signed upload files  generally cloud_name, api_key and api_secret are generally configured globally but we can also specify with each upload call 
cloudinary.v2.uploader.upload(file, options).then(callback);
 
backend sdk applies a wrapper to upload api to use any kind of language you want to use 
 
so finally i was able to upload single files in cloudinary but when i upload the same file again i am able to upload them that i don't want fot that you can set your own public id like name  of the file and and then you have to also change the value of a prop called unique_filename to false so that it do not add anything random to your file name to make it unique 

 Now lets see how to upload multiple files to cloudinary-
 you have to do this 1 operation that you have done for single upload multiple time so you can use array 

## Learning from the errors:
### 1. when you can avoid file extension while importing and when you can't?
Webpack (used by Create React App and others tools) works with ES modules like so:
If the path has a file extension, then the file is bundled straightaway. Otherwise, the file extension is resolved using the resolve.extensions option, which tells the resolver which extensions are acceptable for resolution, e.g. .js, .jsx. More on the official doc.

If you are using ES modules with Node.js or in the browser without any compilation step:
A file extension must be provided when using the import keyword to resolve relative or absolute specifiers... This behavior matches how import behaves in browser environments... More on the official doc.

If you are using CommonJS modules with Node.js:
If the exact filename is not found, then Node.js will attempt to load the required filename with the added extensions: .js, .json, and finally .node. More on the official doc.

### 2. What does parsing mean ?
Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers

### 3. How postman can be deceiving sometime?
when you send data from get method then at that time no content type header  is send to the server   this is the reason that you don't need to any parsing middleware for that because parsing middleware looks for content type header but when you send get request  from the postman you specify the content type  header every time and that is the reason where postman can be deceiving for you and will always gave you data in req.body while it should gave you data in req.query .
Generally when we uses react and all sort of frontend frame work then you will always get your data in req.body when you send  data from front end in forms using get method . This is a big gotcha !!!! 
 post will work as it as it should work there will be no such case with post 

## How form html tag enctype attribute:
when you try to upload the photo in post form with content-type header value as application/x-www-form-urlencoded  then   app.use(express.urlencoded({extended:false})) will parse the body and actually if you see in body you got this {"firstname":"robin","lastname":"khilery","samplefile":"7Th Janurary.png"} note photo is not uploaded but name of the photo is uploaded, 
actually what happening is that i am not sending the file from the  frontend because the enctype is application/x-www-form-urlencoded  you have to do it   enctype="multipart/form-data"
 
 ## Resources Followed :
 1. [Express Documentations](https://expressjs.com/)
 2. [Ejs Documentations](https://ejs.co/)
 3. [Cloudinary Documentations ](https://cloudinary.com/documentation/how_to_integrate_cloudinary)
 4. [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
 5. [API vs SDK](https://www.ibm.com/cloud/blog/sdk-vs-api)

# ***Thanks for your precious time*** 😄💗  
