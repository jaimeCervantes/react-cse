import React from 'react';
import './PwResultItem.css';

class PwResultItem extends React.Component {
  render() {
    const data = this.props.data
    let thumbnail;
    
    if (data.pagemap && data.pagemap.cse_thumbnail && data.pagemap.cse_thumbnail[0]) {
      thumbnail = <img src={data.pagemap.cse_thumbnail[0].src}
                      width={data.pagemap.cse_thumbnail[0].width/2}
                      height={data.pagemap.cse_thumbnail[0].height/2}
                      alt={data.title} />
    }
   
    return (
      <div>
        <h3><a href={data.link}>{data.title}</a></h3>
        <div className="flex">
          {thumbnail}
          <p>{data.snippet}</p>
        </div>
      </div>
    );
  }
}

export default PwResultItem