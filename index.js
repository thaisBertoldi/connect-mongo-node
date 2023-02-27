const mongoose = require('mongoose');
const articleModel = require('./models/article');

mongoose.connect('mongodb://localhost:27017/aprendendoMongo');

const Article = mongoose.model('Article', articleModel);

Article.find({}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
});

//findOne encontra apenas um
Article.find({ '_id': '63fbd73ae547b506644b365b', 'body': 'Testando o corpo do artigo' }).then(article => {
    console.log('O artigo procurado é: ' + article);
}).catch(err => {
    console.log(err);
});

Article.findByIdAndDelete('63fbd8699fb5c2ec229f76ae').then(() => {
    console.log('Dado deletado!');
}).catch((err) => {
    console.log(err);
});

Article.findByIdAndUpdate('63fbd8af88b64e20c1c23d76', {
    title: 'Teste update',
    author: 'Update do autor'
}).then(() => {
    console.log('Atualizado com sucesso!')
}).catch(err => {
    console.log(err);
});

//cadastro de artigos
const article = new Article({
    title: 'Teste título 2',
    author: 'Teste autor',
    body: 'Testando o corpo do artigo', 
    special: true,
    resume: {
        author: 'Teste autor resumo',
        content: 'Teste conteúdo'
    }
});

article.save().then(() => {
    console.log('Artigo salvo!');
}).catch((err) => {
    console.log(err);
});