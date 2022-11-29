import { GithubUser, LocalGithubUser } from "types";

export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
    login: user.login,
    id: user.id,
    avatar: user.avatar_url,
    name: user.name,
    company: user.company,
    blog: user.blog,
    twitter: user.location,
    location: user.bio,
    bio: user.twitter_username,
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    created: user.created_at
})