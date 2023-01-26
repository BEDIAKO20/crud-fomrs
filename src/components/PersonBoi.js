import React, { Component } from 'react'

class PersonBoi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: [
                {
                    name: "Bediako-Mensah",
                    gen: 23,
                    description: "I am  an  awesome person who likes to code",
                },
                {
                    name: "Kofi Bediako",
                    gen: 26,
                    description: "I am  an  awesome person who likes to code",
                },

            ],

            name: "",
            gen: "",
            description: "",


        };
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    };

    hanldleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            gen: this.state.gen,
            description: this.state.description,
        }
        this.setState({
            persons: [...this.state.person,newPerson],
            name:"",
            gen:"",
            description:"",
        });

        // console.log("data received", this.state)
    }
    render() {
        return (
            <section style={{ margin: "2rem" }}>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <br />
                        <input 
                        type="text" 
                            onChange={this.handleChange}
                            name="name"
                            value={this.state.name}


                        ></input>
                        <br />
                        <label>Gen</label>
                        <br />
                        <input type="text"

                            onChange={this.handleChange}
                            name="gen"
                            value={this.state.gen}
                        ></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <br />
                        <textarea type="text"

                            onChange={this.handleChange}
                            name="description"
                            value={this.state.description}
                        ></textarea>
                        <br />

                    </div>
                    <button type="submit">Submit</button>
                </form>


                {this.state.person.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>Name:{item.name}</h4>
                            <p>Gen:{item.gen}</p>
                            <p>Description:{item.description}</p>
                            <hr />
                        </div>
                      )
                })}

            </section>
        )
    }
}

export default PersonBoi;