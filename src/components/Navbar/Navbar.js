import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const [showCollapsedNav, setShowCollapsedNav] = useState(false);
	const [activeNavLink, setActiveNavLink] = useState('');

	const location = useLocation();

	const handleNavButton = () => {
		setShowCollapsedNav((prevShowCollapsedNav) => !prevShowCollapsedNav);
	};

	const handleNavLink = (e) => {
		setShowCollapsedNav(false);
		setActiveNavLink(e.target.innerHTML);
	};

	useEffect(() => {
		const path = location.pathname;
		if (path === '/') setActiveNavLink('Home');
	}, [location]);

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/' onClick={handleNavLink}>
					Navbar
				</Link>
				<button
					className={
						showCollapsedNav
							? 'navbar-toggler collapsed'
							: 'navbar-toggler'
					}
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded={showCollapsedNav ? 'true' : 'false'}
					aria-label='Toggle navigation'
					onClick={handleNavButton}
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className={
						showCollapsedNav
							? 'collapse navbar-collapse show'
							: 'collapse navbar-collapse'
					}
					id='navbarNav'
				>
					<div className='navbar-nav'>
						<Link
							className={
								activeNavLink === 'Home'
									? 'nav-link active'
									: 'nav-link'
							}
							aria-current='page'
							to='/'
							onClick={handleNavLink}
						>
							Home
						</Link>
						<Link
							className={
								activeNavLink === 'Features'
									? 'nav-link active'
									: 'nav-link'
							}
							to='/features'
							onClick={handleNavLink}
						>
							Features
						</Link>
						<Link
							className={
								activeNavLink === 'Pricing'
									? 'nav-link active'
									: 'nav-link'
							}
							to='/pricing'
							onClick={handleNavLink}
						>
							Pricing
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
