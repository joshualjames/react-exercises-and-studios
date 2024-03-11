export default function HobbyLinks() {
    let hobbyLinks = ["https://www.planetrugby.com/", "https://dndbeyond.com/"];

    return (
        
        <div>
            <h3>My Hobbies</h3>
            <a href={hobbyLinks[0]}>Planet Rugby</a>
            <br></br>
            <a href={hobbyLinks[1]}>D&D Beyond</a>
        </div>
    
    );
}