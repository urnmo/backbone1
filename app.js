let newsModel = Backbone.Model.extend({
    defaults: {
        headline: 'News, bitches!',
        author: 'Biggles Bigglesworth',
        date: '09-13-2106'
    },
});

let newsLog = Backbone.Collection.extend({
    model: newsModel,
});

let newsView = Backbone.View.extend({
    initialize: function(){
        this.model.on('add', this.render, this);
    },
    events: {
        'click #update-news': 'addToNews',
    },
    // dothatThang: function(){
    //     this.model.set('headline', document.querySelector('#headline').value);
    //     this.model.set('author', document.querySelector('#author').value);
    //     this.model.set('date', new Date().toISOString());
    // },
    addToNews: function(){
        let newsItem = new newsModel();
        newsItem.set('headline', document.querySelector('#headline').value);
        newsItem.set('author', document.querySelector('#author').value);
        newsItem.set('date', new Date().toISOString());

        this.model.push(newsItem);
    },


    // render: function(){
    //     document.querySelector('#headLine').textContent = this.model.get('headline');
    //     document.querySelector('#newsAuthor').textContent = this.model.get('author');
    //     document.querySelector('#newsDate').textContent = this.model.get('date');
    // }

    render: function(){
        let parent = this.el.querySelector('#show-news');
        parent.innerHTML = '';

        for(let i=0; i < this.model.length; i++){
            let headlinez = this.model.at(i).get('headline');
            let authorz = this.model.at(i).get('author');
            let newsdatez = this.model.at(i).get('date');

            let container = document.createElement('li');
            container.innerHTML = '<p>' + headlinez + '</p><p>' + authorz + '</p></p>' + newsdatez + '</p><p>';
            parent.appendChild(container);
        }
    },
});

window.addEventListener('load', function (){
    // let actualModel = new newsModel();
    let newsyNews = new newsLog();

    let view = new newsView({
        el: document.querySelector('body'),
        model: newsyNews,
    });
});