import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, showAddTask, onAdd }) => {

    const onClick = (e) => {
        onAdd(!showAddTask)
    }

    const location = useLocation()


    return (
        <header className="header">
            <h1>{title}</h1>
            { location.pathname === '/' && <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} onClick={onClick} />}

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
