import packageJson from '../../package.json';

export function footer(){
    const version = packageJson.version

    return(
        <footer>
            <p>Verção {version}</p>
        </footer>
    )
}