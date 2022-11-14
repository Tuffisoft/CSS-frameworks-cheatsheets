import Navbar from '../components/Navbar.jsx'
import '../components/Navbar.css';
import "./bulma.css"



export default function Bulma() {

    return (
      <div>
        <Navbar />
        <div className="bulma-container">
                <h1 className="bulma-title">Bulma Cheat Sheet</h1>
                <table className="bulma-color-container">
                    <tr>
                        <th>Class</th>
                        <th>Color</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td>is-white</td>
                        <td>hsl(0, 0%, 100%)</td>
                        <td className="td-white">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-black</td>
                        <td>hsl(0, 0%, 4%)</td>
                        <td className="td-black">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-light</td>
                        <td>hsl(0, 0%, 96%)</td>
                        <td className="td-light">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-dark</td>
                        <td>hsl(0, 0%, 21%)</td>
                        <td className="td-dark">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-primary</td>
                        <td>hsl(171, 100%, 41%)</td>
                        <td className="td-primary">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-link</td>
                        <td>hsl(217, 71%, 53%)</td>
                        <td className="td-link">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-info</td>
                        <td>hsl(204, 86%, 53%)</td>
                        <td className="td-info">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-success</td>
                        <td>hsl(141, 71%, 48%)</td>
                        <td className="td-success">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-warning</td>
                        <td>hsl(48, 100%, 67%)</td>
                        <td className="td-warning">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-danger</td>
                        <td>hsl(348, 100%, 61%)</td>
                        <td className="td-danger">Yeah</td>
                    </tr>
                    <tr>
                        <td>is-bold</td>
                        <td>bold</td>
                        <td className="td-bold">Yeah</td>
                    </tr>  
                </table>
                </div>
        </div>
    )
  }