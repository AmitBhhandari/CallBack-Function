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


function createPost(post){
        
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            
            const error=false;
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error::Something went wrong')
            }
       },2000)
       })  
}

function deletepost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
            
                resolve(posts.pop())
            } else {
                reject('Arrays is empty now');
            }
        }, 1000);

    });
}       
createPost({ title: 'Post three', body: 'this is post three' })
    .then(() => {
        getPosts()
            deletepost().then(() => {
                getPosts();
                deletepost().then(() => {
                    getPosts();
                    deletepost().then(() => {
                        getPosts();
                        deletepost().then(() => {
                        }).catch((err) => {
                            console.log('inside catch block',err)
                        })
                    })
                })
            })
        })

        const user = {
            name: 'Amit',
            lastactivity: '06 nov 2022'
        }
        
        function updateLastUserActivityTime(post) {
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    user.lastactivity = new Date().getTime();
                    resolve(user.lastactivity)
                },1000)
            })
        }
        
        
        function userupdatespost(){
            Promise.all([createPost, updateLastUserActivityTime])
            .then(([createPost, updateLastUserActivityTime])=>{
                console.log(updateLastUserActivityTime)
            })
            .catch(err=>console.log(err))
        }
        
                const promise1 = Promise.resolve('hello world');
                const promise2 = 10;
                const promise3 = new Promise((resolve , reject)=>
                setTimeout(resolve,2000,'Goodbye'));
                
                const promise4 = Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
        
        
        