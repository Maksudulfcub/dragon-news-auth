import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-5xl font-semibold text-center  mt-10">Login Now !</h1>
                <h4 className="text-lg text-gray-400 font-semibold text-center mt-4">Welcome to Dragon News.</h4>
                <form className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;