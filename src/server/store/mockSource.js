const products = [
    {
        id: 1,
        name: 'JS 101',
        category: 'book'
    },
    {
        id: 2,
        name: 'Avancerad JS',
        category: 'book'
    }
];

const posts = [
    {
        id: 1,
        name: 'Koofie',
        comment: 'En kommentar'
    },
    {
        id: 2,
        name: 'Robert',
        comment: 'Ytterligare en kommentar, något längre'
    }
];

class mockSource {
    getProducts() {
        return Promise.resolve(products);
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            const found = products.find(product => product.id === +id);
            found ? resolve(found) : reject();
        });

    }

    addProduct({ category, name }) {
        const lastIndex = products.length - 1;
        const lastId    = products[lastIndex].id;
        const newProduct = {
            id: lastId + 1,
            category,
            name
        };
        products.push(newProduct);

        return Promise.resolve(newProduct);
    }



    getPosts() {
        return Promise.resolve(posts);
    }

    getPost(id) {
        return new Promise((resolve, reject) => {
            const found = posts.find(post => post.id === id);
            found ? resolve(found) : reject();
        });

    }

    addPost(postData) {
        const lastIndex = posts.length - 1;
        const lastId    = posts[lastIndex].id;
        const newPost = {
            id: lastId + 1,
            name: postData.name,
            comment: postData.comment
        };
        posts.push(newPost);

        return Promise.resolve(newPost);
    }

    deletePost(id){

        const obj = posts.find(function(obj){
            return obj.id === id;
        });

        posts.splice(obj.id - 1, 1);

        return Promise.resolve({obj});
    }
}

module.exports = mockSource;