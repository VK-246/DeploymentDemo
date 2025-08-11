require('dotenv').config() 
const express = require('express')
const app = express()
const port = 3000

const gitData = {
  "login": "VK-246",
  "id": 186924011,
  "node_id": "U_kgDOCyQ76w",
  "avatar_url": "https://avatars.githubusercontent.com/u/186924011?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/VK-246",
  "html_url": "https://github.com/VK-246",
  "followers_url": "https://api.github.com/users/VK-246/followers",
  "following_url": "https://api.github.com/users/VK-246/following{/other_user}",
  "gists_url": "https://api.github.com/users/VK-246/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/VK-246/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/VK-246/subscriptions",
  "organizations_url": "https://api.github.com/users/VK-246/orgs",
  "repos_url": "https://api.github.com/users/VK-246/repos",
  "events_url": "https://api.github.com/users/VK-246/events{/privacy}",
  "received_events_url": "https://api.github.com/users/VK-246/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vinayak",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-10-31T11:16:42Z",
  "updated_at": "2025-08-11T12:30:58Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('www.twitter.com')
})
app.get("/login",(req,res) => {res.send(' <a href="https://www.w3schools.com">W3Schools</a>   ');})

app.get("/github",(req,res) => { res.json(gitData); })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
