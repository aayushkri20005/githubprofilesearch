const url="https://api.github.com/users";

const searchinp=document.getElementById("searchinput");
const searchbtninp=document.getElementById("search-btn");
const profilecontainerid=document.getElementById("profilecontainer");

const genarateprofile = (profile)=>{
return(
    `
    <div class="profile-box">
    <div class="topsection">
        <div class="left">
            <div class="avatar">
                <img  src="${profile.avatar_url}" alt="avatar">
            </div>
            <div class="self">
                <h1>${profile.name}/h1>
                <h1>${profile.login}</h1>
            </div>
        </div>
        <a href="${profile.repos_url}">
        <button class="primary-btn">CHECK PROFILE</button>
        </a>
    </div>
    <div class="about">
        <h1>ABOUT</h1>
        <p>${profile.bio}</p>
    </div>
    <div class="status">
        <div class="status-item">
            <h3>Followers</h3>
            <p>${profile.followers}</p>
        </div>
        <div class="status-item">
            <h3>Following</h3>
            <p>${profile.following}</p>
        </div>
        <div class="status-item">
            <h3>Repos</h3>
            <p>${profile.public_repos}</p>
        </div>
    </div>
</div>
`
);
}

const fetchprofile= async() => {

    const username=searchinp.value;

    try {
        
        const respon= await fetch(`${url}/${username}`);
        const da=await respon.json();
        if(da.bio){
            
        }
        console.log("data", da);
    }
    catch(error){
        console.log({error});

    }
};

searchbtninp.addEventListener("click",fetchprofile)
