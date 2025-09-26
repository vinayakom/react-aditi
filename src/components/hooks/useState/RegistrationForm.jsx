import "../Hooks.css"

export const RegistrationForm = () => {

    return (
        <>
            <form>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        First Name:
                    </label>
                    <input type="text" name="firstName" placeholder="Enter First Name" required />


                    <label htmlFor="lastName">
                        Last Name:
                    </label>
                    <input type="text" name="lastName" placeholder="Enter Last Name" required />

                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="text" name="email" placeholder="Enter Email" required />

                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password" name="password" placeholder="Enter Password" required />

                    <label htmlFor="phone">
                        Phone Number:
                    </label>
                    <input type="number" name="phone" placeholder="Enter Phone" required />

                    <p>
                        By creating an account you agree to our 
                        <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="signupbtn">Register</button>
                    </div>
                </div>
            </form>

            <section
                className="summary"
                style={{ textAlign: "center", marginTop: "30px" }}
            >
                <p>
                    Hello, my name is <span> {/* {user.firstName} {user.lastName} */}</span>. My email address is <span>{/* {user.email} */}</span> and my phone number is <span>{/* {user.phoneNumber} */}</span>.
                </p>
            </section>
        </>
    );
}