import { Text, TextLeft, TextRight } from "@/components/typography";

export default function Page() {
    return <>
        <Text 
            title="Waystar"
            content="Waystar is a modern online book club - of sorts. In the modern era media is changing, and so is the way we talk about it. As an avid reader, I often found myself wanting to find other readers and engage
            with discussion online, however, the risk of spoilers is pervasive and can be a strong deterrent from visiting these spaces.
        
        "/>
        <TextLeft 
            title="Features"
            content="As of now, I've only implemented a MVP version (Minimum Viable Product), that includes features like searching Google's Book API, creating logs, writing posts, and viewing a personalised timeline. In the
            near future I have plans for improved social features like Liking posts and following other users."
            url=""
        />
        <TextRight 
            title="Architecture"
            content="Building the site itself, I really wanted to stretch myself as much as possible. As such, I have purposefully overengineered many parts of the site so that I could practice skills that - while not useful for
            this project - will surely help in future ones. To that end, the servers are all run as docker services on a kubernetes cluster. I'm using self-hosted (on K8s) postgres for my database, I wrote the API using express
            and node from scratch, and the NextJS app gets split into a CDN server and a live server, all of which is hosted on the K8s cluster. For repeatability, all of my infrastructure is terraformed. "
            url=""
        />
    </>;
}
