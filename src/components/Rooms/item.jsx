import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class RoomsItem extends PureComponent {
    static defaultProps = {
        roomProps: {},
        updateName: () => {}
    }

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.roomProps.name
        }
    }

    componentWillReceiveProps(nextProps) {
        if(JSON.stringify(this.props.roomProps) !== JSON.stringify(nextProps.roomProps)) {
            this.setState({
                name: nextProps.roomProps.name
            })
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleClickSaveName = () => {
        this.props.updateName(this.state.name);
    }

    render() {
        return (
            <div>
                <div>
                    <Link to='/'>Назад</Link>
                </div>
                Комната {this.props.roomProps.number}
                <div>
                    <input type='text' value={this.state.name} onChange={this.handleChangeName} />
                    <button type='button' onClick={this.handleClickSaveName}>Сохранить</button>
                </div>
            </div>
        )
    }
}

export default RoomsItem;
