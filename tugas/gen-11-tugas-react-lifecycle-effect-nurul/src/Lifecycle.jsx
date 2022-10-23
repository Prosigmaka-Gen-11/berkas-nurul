import React, {Component} from "react";

class Lifecycle extends Component {

    constructor () {
        super()
        this.state = {
            album: '',
            grup : '',
            tahun: '',
            order: ''
        }
    }


    componentDidMount () {
        console.log('subscribe to db')
        this.setState ({
            album: 'Dark & Wild',
            grup : '방탄소년단',
            tahun: '2014'
        })
    }


    componentDidUpdate (propsPrev, statePrev) {
        console.log('data updated')
        // console.log(statePrev)
        console.log(this.state)

        if (statePrev.album !== this.state.album ||
            statePrev.grup !== this.state.grup||
            statePrev.tahun !== this.state.tahun) {
                
                this.setState ({
                    order : `Barang yang diorder adalah album ${this.state.album} tahun rilis ${this.state.tahun} dari grup ${this.state.grup} `
                })
            }
    }


    componentWillUnmount () {
        console.log('unsubscribe to db')
    }
    
    render() {
        return (
            <div>
                <h2>Data Penjualan Album</h2>
                <p>Info Barang</p>
                <ul>
                    <li> Nama album: {this.state.album}</li>
                    <li> Grup: {this.state.grup}</li>
                    <li> Tahun rilis: {this.state.tahun}</li>
                </ul>
                <p>{this.state.order}</p>
                <button onClick={()=> this.setState({album: 'Love Yourself:Tear'})}>Ubah Nama Album</button>
                <button onClick={()=> this.setState({grup: 'BTS'})}>Ubah Grup</button>
                <button onClick={()=> this.setState({tahun: '2018'})}>Ubah Tahun Rilis</button>
            </div>
        )
    }
}

export default Lifecycle;