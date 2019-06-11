import * as React from 'react'

@log
class Header extends React.Component {
    render() {
        return (
            <div>header is here</div>
        )
    }
}

function log(target: any) {
    console.log(target)
}

export default Header