import React from 'react';

export default function Project({project}) {
    const {title, github, deployed, description, media} = project
    return (
        <div className="container p-2">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="card-title">{title}</h1>
                        <p className="card-text">{description}</p>
                        {media && (
                            <video className="mb-2" width="320" height="240" controls>
                            <source src={media} alt={`${title} - video`}/>
                            </video>
                        )}
                        
                        <div>
                            <a href={github} target="_blank" className="btn btn-primary">Github Link</a>
                            {deployed && (
                                <a href="" className="btn btn-secondary" target="_blank">Deployed Version</a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}