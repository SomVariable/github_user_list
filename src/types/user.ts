export type LocalGithubUser = {
    login: string,
    id: number,
    avatarUrl: string,
    name: string,
    company: string,
    blog: string,
    twitter: string,
    repos: number,
    followers: number,
    following: number,
    created: string
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    twitter_username: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string
}

export type GithubError = {
    message: string,
    documentationUrl: string
}