import PropTypes from 'prop-types'
import Button  from './button'

const Header = ({ title }) => {

    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick} />
     
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.prototype = {
    title: PropTypes.string.isRequired
}
//css in js
// const headingStyle = {
//     color: 'red'
// }

export default Header