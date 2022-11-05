const posts=[
    {title:'Post one', body:'This is post one',createdAt: new Date().getTime()},
    {title:'Post two', body:'This is post two',createdAt: new Date().getTime()}
];

function getPosts(){
    setTimeout (()=>{
        let output='';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title} -
            last updated ${(new Date().getTime() - posts[i].createdAt) / 1000} seconds ago 
            </li>`;
        }
        document.body.innerHTML = output;
    }, 1000)
}


function createPost(post,callback){
    setTimeout(()=>{
         posts.push(post);
         callback();
    },2000)
}

function createPost4(post,callback){
    setTimeout(()=>{
         posts.push(post);
         callback();
    },2000)
}

createPost4({title:'Post four', body:'This is post four',createdAt: new Date().getTime()},getPosts);