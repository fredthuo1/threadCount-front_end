import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom"


const ForgotPassword = (props)=> {
		const history = useHistory()

		return (
			<>
				<div>
					<h4>
						Check your email
					</h4>
				</div>
				<div>
					<p>
						You'll recieve a link to reset your account password.
					</p>
				</div>
				<div>
					<Link to='/ForgotPassword'>
						Re-send Email
					</Link>
					<Link to='/'>
						Return to Home
					</Link>
				</div>
			</>
		)

}

export default ForgotPassword;