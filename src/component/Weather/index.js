import React , {Component} from 'react';
import './style.css'
class Weather extends Component{
    render(){
        return(
            <div className="info">
                {
                    this.props.tempreature && 
                    <p className="info_key">Tempreature : 
                        <span className="info-value">{this.props.tempreature}</span>
                    </p>
                }
                {
                    this.props.city && 
                      <p className="info_key">City : 
                        <span className="info-value">{this.props.city}</span>
                      </p>
                }
                {
                    this.props.country && 
                      <p className="info_key">Country : 
                        <span className="info-value">{this.props.country}</span>
                      </p>
                }
                {
                    this.props.humidity && 
                      <p className="info_key">Humidity : 
                        <span className="info-value">{this.props.humidity}</span>
                      </p>
                }
                {
                    this.props.description && 
                      <p className="info_key">Description : 
                        <span className="info-value">{this.props.description}</span>
                      </p>
                }
                {
                    this.props.error && 
                      <p className="info_key">error : 
                        <span className="info-value">{this.props.error}</span>
                      </p>
                }
            </div>
        )
    }
}
export default Weather