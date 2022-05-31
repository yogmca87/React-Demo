import React, { Component } from 'react'

class Research extends Component {

    constructor() {
        super()
        this.state = {
            name: 'Yogesh',
            count:0
        }
        this.changeMyName = this.changeMyName.bind(this)
    }
    changeMyName = () => {
        if (typeof EventSource !== "undefined") {
            // Server-sent events supported. Let's have some code here!
            console.log(EventSource)
          } else {
            // No server-sent events supported
            console.log('No server-sent events supported')
          }
         
    }

    render() {
        const { name,count } = this.state
        return (
            <div>
                <h1>{name}</h1>
                <h2>{count}</h2>
                <button styles={`height:200px;width:200px`} onClick={this.changeMyName}></button>
            </div>
        )
    }
}

export default Research