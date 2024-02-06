import classes from '../classes/classes'

const Footer = () => {
  return (
    <footer className={classes("footer")}>
        <div className={classes("content-wrapper")}>
            <span className={classes("footer-text")}>&copy; {new Date().getFullYear()} DRM of Norway</span>
        </div>
    </footer>
  )
} 

export default Footer
