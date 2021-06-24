const express = require('express');

const app = express();

app.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.use(express.json());

app.get('/',(req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/index.html'));

app.get('/styles*', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/' + req.originalUrl));

app.get('/polyfills*', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/' + req.originalUrl));

app.get('/runtime*', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/' + req.originalUrl));

app.get('/main*', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/' + req.originalUrl));

app.get('/scripts*', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/' + req.originalUrl));

app.get('/vendor*', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/' + req.originalUrl));

app.get('/favicon.ico', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/favicon.ico'));

app.get('/manifest.webmanifest', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/manifest.webmanifest'));

app.get('/assets/*', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/' + req.originalUrl));

app.get('/*', (req: any, res: any) => res.sendFile(__dirname+'/dist/WeatherApp/index.html'));

const PORT = process.env.PORT || 4201
app.listen(PORT, function () {
    console.log('Server Listening on '+PORT);
});
