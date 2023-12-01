const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', express.static(path.resolve(__dirname, "client" , "public")));

app.use('/*' , (req,res) => {
    res.sendFile(path.resolve(__dirname, "client" , "index.html"));
});

app.listen(PORT, ()=>{
    console.log(`Listing On http://localhost:${PORT}`);
});