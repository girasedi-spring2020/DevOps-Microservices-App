import React from 'react';

class WeatherDetails extends React.Component {
    renderHtml() {
        return (
            <div className="temp-table">
                <h2>{this.props.city.toUpperCase()} : Temperature Details</h2>
                <table className="">
                    <thead>
                        <tr>
                            <th>Date(yyyy-mm-dd)</th>
                            <th>Day(°C)</th>
                            <th>Night(°C)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...this.props.details].map((data, i) => {
                            if (i != 0) {
                                return (
                                    <tr key={i}>
                                        <td>
                                            {data.date}
                                        </td>
                                        <td>
                                            {data.daily}
                                        </td>
                                        <td>
                                            {data.nightly}
                                        </td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
    render() {
        return this.renderHtml();
    }
}

export default WeatherDetails;