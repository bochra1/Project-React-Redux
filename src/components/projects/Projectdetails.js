const Projectdetails = (props) => {
    const id = props.match.params.id;
    return (  
        <div className="container-section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem...</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Bochra</div>
                    <div>13 july, 2022</div>
                </div>
            </div>
        </div>
    );
}
 
export default Projectdetails;