
import React, { Component } from 'react';

class App1 extends Component{
    state= {
        tags : ["tag1","tag2","tag3"],
    };

    renderTags(){
        if(this.state.tags.length===0) return <p>there are no tags</p>;
        return <ul> {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>;
    }

    render() {
        return (
             <div>
             {this.renderTags() }
             </div>
        );
    }
};
export default App1;