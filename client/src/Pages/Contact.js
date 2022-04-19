import React from 'react';
import Calendly from '../components/Calendly';

function Contact() {
	return (
		<section className="contact">
			<div className="container-form">
				<div className="container-sm mx-auto w-75 bg-secondary rounded-3">
					<div className="contact-header">
						<h2 className="card-title">Contact Us</h2>
					</div>
					<form className="contact-form" id="contact-form">
						<div className="form-group">
							<label className="form-label">Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-group">
							<label className="form-label">Email</label>
							<input type="email" className="form-control" />
						</div>
						<div className="form-group">
							<label className="form-label">Message</label>
							<textarea className="textarea" rows="5" />
						</div>
						<button type="submit" className="contact-submit-btn">
							Submit
						</button>
					</form>
				</div>
				<div>
					<Calendly />
				</div>
			</div>
		</section>
	);
}

export default Contact;