
import React, { Component } from 'react';
import './Book.css';

class UVideo extends Component{
    render() {
        return (
            <div className="container-sm" id="form1">
            <p className="venky"> Please fill the details of video and upload</p>
            <form >
                <div className="form-group">
                <label for="branch" > For whom it is useful: </label>
                <input id="branch" className="form-control ml-1 p-1 mb-4" type="text"/>
                </div>
                <div className="form-group">
                <label for="Video"> Name of the Video: </label>
                <input id="Video" className="form-control ml-1 p-1 mb-4" type="text"/>
                </div>
                <div className="form-group">
                <label for="source" > Source:  </label>
                <input id="source" className="form-control ml-1 p-1 mb-4" type="text"/>
                </div>
                <div className="form-group">
                <label for="channel" > Name of the channel: </label>
                <input id="channel" className="form-control ml-1 p-1 mb-4" type="number"/>
                </div>
                <div className="form-group">
                <label for="des" > Description: </label>
                <input id="des" className="form-control ml-1 p-1 mb-4" type="text"/>
                </div>
                <div className="form-group">
                <input id="link" className="form-control ml-1 p-1 mb-4" type="url" placeholder="paste your link here" />
                </div>
                <div className="form-group" id="btn1">
                <button type="button" id="btn" className="btn btn-success" >Upload </button> </div>
            </form>
       </div>
        );
    }
}

export default UVideo;