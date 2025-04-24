const url="https://api.github.com/users";

const searchinp=document.getElementById("searchinput");
const searchbtninp=document.getElementById("search-btn");
const profilecontainer=document.getElementById("profilecontainer");
const loadingid=document.getElementById("loading");

const genarateprofile = (profile) => {
    return `
    <div class="profile-box">
        <div class="topsection">
            <div class="left">
                <div class="avatar">
                    <img src="${profile.avatar_url}" alt="avatar">
                </div>
                <div class="self">
                    <h1>${profile.name || "No name provided"}</h1>
                    <h1>${profile.login}</h1>
                </div>
            </div>
            <a href="${profile.html_url}" target="_blank">
                <button class="primary-btn">CHECK PROFILE</button>
            </a>
        </div>
        <div class="about">
            <h1>ABOUT</h1>
            <p>${profile.bio || "No bio available."}</p>
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
    `;
};

const fetchprofile= async() => {

    const username=searchinp.value;
    

    loadingid.innerText="loading.........";
    loadingid.style.color="black";
    try {
        const respon= await fetch(`${url}/${username}`);
        const data=await respon.json();
        if(respon.ok){
            loadingid.innerText="";
            profilecontainer.innerHTML=genarateprofile(data);
        }
        else{
            loadingid.innerHTML=data.message;
            loadingid.style.color="red";
            profilecontainer.innerText="";
        }
        console.log("data", data);
    }
    catch(error){
        loadingid.innerText="";
        console.log({error});
    }
};

searchbtninp.addEventListener("click",fetchprofile)


