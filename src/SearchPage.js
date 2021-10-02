import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://static-cdn.jtvnw.net/jtv_user_pictures/7b761bb4-f269-4578-ae8b-31126addb646-profile_image-300x300.png"
                channel="Cybernoob"
                verified
                subs="2.3M"
                noOfVideos={380}
                description="Gaming day in day out"
            />
            <hr />
        </div>
    )
}

export default SearchPage
