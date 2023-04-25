import './Footer.css'
function Footer() {
    return (
        <div className="footer">
        <p className="author">
            Author: Laith Shatnawi
        </p>
        <div>
            <ul>
                <li className='list'><a className='links' href='https://www.facebook.com/' target='_blank' rel="noreferrer noopener">Facebook</a></li>
                <li className='list'><a className='links' href='https://www.linkedin.com/in/laith-shatnawi-556630146/' target='_blank' rel="noreferrer noopener">linkedIn</a></li>
            </ul>
        </div>
        </div>
    )
}

export default Footer;