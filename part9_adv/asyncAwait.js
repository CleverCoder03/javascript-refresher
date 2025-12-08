function fetchUserData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({name: "senpai", url: "https://vishalmishra.vercel.app"})
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching User Data...")
        let userData = await fetchUserData()
        console.log(userData)
    } catch (error) {
        console.log("Error fetching data: ", error)
    }
}

getUserData()