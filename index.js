const mongoose = require('mongoose');
const articleModel = require('./models/article');

mongoose.connect('mongodb://localhost:27017/aprendendoMongo');

const Article = mongoose.model('Article', articleModel);

const article = new Article({
    title: 'Teste título',
    author: 'Teste autor',
    body: 'Testando o corpo do artigo'
});

article.save().then(() => {
    console.log('Artigo salvo!');
}).catch((err) => {
    console.log(err);
});