import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json())


const PORT = process.env.PORT || 3301

app.use('/',(req, res)=>{
    return res.send('Rota Funcionando');
});

if(process.env.NODE_ENV !== 'production'){
    app.listen(PORT, ()=>{
        console.log("servidor rodando ", PORT)
    
    });

}

export default app;