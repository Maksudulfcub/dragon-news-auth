import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-5xl font-semibold text-center  mt-10">Please Register</h1>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;