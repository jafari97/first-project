import React  from 'react'
import Product from './components/Product'

class App extends React.Component {
    state = {
        Names: [
            { fname: "amirreza", lname: " jafari" },
            { fname: "karim", lname: " karimi" },
            { fname: "taher", lname: " taheri" },
        ]
    }
    changeNameHandler = (newTitle) => {
        this.setState({
            Names: [
                { fname: newTitle, lname: " reyhani" },
                { fname: "kambiz", lname: " olumi" },
                { fname: "tariman", lname: " kashani" },
            ]
        })
    }
    
    render() {
        return (
            <div>
                <h1>NAMES LIST</h1>
                <Product
                    fname={this.state.Names[0].fname}
                    lname={this.state.Names[0].lname}
                />

                <Product
                    fname={this.state.Names[1].fname}
                    lname={this.state.Names[1].lname}
                    click={()=>this.changeNameHandler('ask')}
                />
                <button onClick={(this.changeNameHandler)}>change name</button>

            </div>

        )

    }
}

export default App










// const App = (props) => {
//     const [namesState, setnamesState] = useState({
//         names: [
//             { fname: "amirreza", lname: " jafari" },
//             { fname: "karim", lname: " karimi" },
//             { fname: "taher", lname: " taheri" },
//         ]
//     })


//     const changeNameHandler = () => {
//         setnamesState({
//             names: [
//                 { fname: "nami", lname: " reyhani" },
//                 { fname: "kambiz", lname: " olumi" },
//                 { fname: "tariman", lname: " kashani" },
//             ]
//         })
//     }

//     return (
//         <div>
//             <h1>first-react</h1>
//             <Product
//                 fname={namesState.names[0].fname}
//                 lname={namesState.names[0].lname}
//             />

//             <Product
//                 fname={namesState.names[1].fname}
//                 lname={namesState.names[1].lname}
//             />
//             <button onClick={changeNameHandler}>change name</button>

//         </div>

//     )
// }