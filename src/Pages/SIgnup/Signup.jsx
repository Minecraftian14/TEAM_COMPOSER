import React, {useState, useEffect} from "react";
import Image from "./sign.jpg"

function Signup() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const response = await fetch(`http://${window.location.hostname}:8000/csrf_token/`)
                .then(res => res.json())
            setPosts(response);
            setLoading(false);
        }
        loadPost();
    }, []);

    const action = `http://${window.location.hostname}:8000/api/create_user_service/`

    return (
        <div>
            <div className="divsign">
                <form className="form" method="POST"
                      action={action}>
                    {loading ? (
                        <h4>Loading...</h4>
                    ) : (
                        <>
                            <p className="login">SIGNUP</p>
                            <div class="form-group">
                                <label className="label" for="name">User's name</label>
                                <input type="text" class="form-control" id="name" name="name"
                                       aria-describedby="emailHelp"
                                       placeholder="Create an Awesome username"/>
                                <small id="nameHelp" class="form-text text-muted">
                                    This will be your unique identification!
                                </small>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label className="label" for="password">Create Password</label>
                                <input type="password" class="form-control" id="password" name="password"
                                       aria-describedby="emailHelp" placeholder="Create a strong password"/>
                            </div>
                            <br></br><br></br>
                            <div class="form-group">
                                <label className="label" for="confirm_password">Confirm Password</label>
                                <input type="password" class="form-control" id="confirm_password"
                                       placeholder="Password"/>
                            </div>
                            <br></br><br></br>
                            <div class="form-group">
                                <label className="label" for="email">Your Email Id : </label>
                                <input type="email" class="form-control" id="email" name="email"
                                       placeholder="Enter your email"/>
                            </div>
                            <input type="hidden" name="csrfmiddlewaretoken" value={posts.csrf_token}/>
                            <button type="submit" class="bn btn btn-primary">Signup</button>
                        </>
                    )}
                </form>
                <img className="log" src={Image}/>
            </div>
        </div>
    )
}

export default Signup