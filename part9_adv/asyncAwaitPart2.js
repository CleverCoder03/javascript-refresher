function fetchPostData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data fetched")
        }, 2000);
    })
}

function fetchCommentData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Comment data fetched")
        }, 2000);
    })
}

async function getBlogData () {
    try {
        console.log("fetching blog data");

        // const postData = await fetchPostData()
        // const CommentData = await fetchCommentData()

        // Another way of fetching data
        const [postData, CommentData] = await Promise.all([fetchPostData(), fetchCommentData()])
        console.log(`Data: {${postData}, ${CommentData}}`)
        console.log("Data fetched successfully")
        
    } catch (error) {
        console.log("Error fetching data", error)
    }
}

getBlogData()