import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Mari',
    description: 'Forms in React',
    link: 'https://www.youtube.com/watch?v=o4yKv3zFTcQ'
}

export function RepositoryList() {
    return (
        <section>
            <h1>Lista de repositorios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}   